import { Router, type IRouter } from "express";
import { desc, eq } from "drizzle-orm";
import { db, permitReportsTable } from "@workspace/db";
import {
  AnalyzeLetterBody,
  AnalyzeLetterResponse,
  GetReportParams,
  GetReportResponse,
  ListNotificationsResponse,
  ListReportsResponse,
  ListSamplesResponse,
  UpdateReportItemBody,
  UpdateReportItemParams,
  UpdateReportItemResponse,
} from "@workspace/api-zod";

type Item = {
  id: number;
  comment: string;
  status: "met" | "needs_fix";
  howToFix: string;
  department: string;
  category: string;
  unclear: boolean;
  completed: boolean;
};

type Report = {
  id: number;
  address: string;
  summary: string;
  createdAt: string;
  items: Item[];
};

const router: IRouter = Router();

const samples = [
  {
    id: "mostly-met",
    title: "Mostly met",
    description: "A residential addition with most requested revisions addressed.",
  },
  {
    id: "needs-fixes",
    title: "Needs several fixes",
    description: "A second-story project with FAR, size, and stamp corrections outstanding.",
  },
];

function buildReport(needsFixes: boolean, id: number, createdAt: string): Report {
  const items: Item[] = [
    {
      id: id * 100 + 1,
      comment: "Provide a dimensioned site plan showing property lines and all required setbacks.",
      status: "met",
      howToFix: "No action needed. The revised plan includes the requested dimensions.",
      department: "Planning",
      category: "Missing site plan details",
      unclear: false,
      completed: false,
    },
    {
      id: id * 100 + 2,
      comment: needsFixes
        ? "Revise the floor area calculation. The submitted FAR of 0.49 exceeds the 0.45 limit."
        : "Provide a floor area calculation confirming compliance with the 0.45 FAR limit.",
      status: needsFixes ? "needs_fix" : "met",
      howToFix: needsFixes
        ? "Reduce counted floor area or revise the calculation to exclude only qualifying garages, basements, accessory structures, and ADUs. Show the math on the plans."
        : "No action needed. The revised calculation shows an FAR of 0.42.",
      department: "Planning",
      category: "Floor area ratio (FAR)",
      unclear: false,
      completed: false,
    },
    {
      id: id * 100 + 3,
      comment: needsFixes
        ? "The proposed second story appears larger than allowed for administrative review."
        : "Demonstrate that the second story is no more than 60% of the first-floor area.",
      status: needsFixes ? "needs_fix" : "met",
      howToFix: needsFixes
        ? "Reduce the second-story floor area to 60% or less of the first floor, including the attached garage, and show the additional 10-foot front setback."
        : "No action needed. The area diagram and setback dimension satisfy the request.",
      department: "Planning",
      category: "Second-story addition",
      unclear: false,
      completed: false,
    },
    {
      id: id * 100 + 4,
      comment: "Plans must bear the signature and stamp of the responsible design professional.",
      status: needsFixes ? "needs_fix" : "met",
      howToFix: needsFixes
        ? "Have the responsible architect or engineer sign and stamp every required plan sheet before resubmittal."
        : "No action needed. All required sheets are signed and stamped.",
      department: "Building",
      category: "Missing signature or stamp",
      unclear: false,
      completed: false,
    },
    {
      id: id * 100 + 5,
      comment: "Confirm fire apparatus access remains compliant throughout construction.",
      status: needsFixes ? "needs_fix" : "met",
      howToFix: needsFixes
        ? "Ask the Fire reviewer which access width, turning radius, and construction-phasing details are required before revising the plan."
        : "No action needed. The access plan is included.",
      department: "Fire",
      category: "Fire access requirement",
      unclear: needsFixes,
      completed: false,
    },
  ];

  return {
    id,
    address: needsFixes ? "1487 Alder Creek Drive" : "326 Juniper Avenue",
    summary: needsFixes
      ? "The resubmittal addresses the site plan request, but planning and building corrections remain. Focus on FAR, second-story size, professional stamps, and fire access clarification."
      : "The revised package appears to address the City’s principal planning, building, and fire comments. Keep the supporting calculations with the resubmittal.",
    createdAt,
    items,
  };
}

function savedReport(output: string): Report {
  const parsed = GetReportResponse.parse(JSON.parse(output));
  return { ...parsed, createdAt: parsed.createdAt.toISOString() };
}

router.get("/samples", (_req, res): void => {
  res.json(ListSamplesResponse.parse(samples));
});

router.post("/analyze", async (req, res): Promise<void> => {
  const input = AnalyzeLetterBody.safeParse(req.body);
  if (!input.success) {
    res.status(400).json({ error: "Please choose a supported letter or sample." });
    return;
  }
  if (!input.data.sampleId && !input.data.fileData) {
    res.status(400).json({ error: "Please select a PDF, PNG, or JPG file." });
    return;
  }
  const sample = samples.find((candidate) => candidate.id === input.data.sampleId);
  if (input.data.sampleId && !sample) {
    res.status(400).json({ error: "Unknown sample letter." });
    return;
  }
  if (!sample && (!input.data.fileName || !input.data.fileData)) {
    res.status(400).json({ error: "Please select a letter file." });
    return;
  }

  const needsFixes =
    input.data.sampleId === "needs-fixes" ||
    (input.data.fileName?.toLowerCase().includes("fix") ?? false);
  const report = await db.transaction(async (tx) => {
    const [row] = await tx.insert(permitReportsTable).values({
      label: input.data.label?.trim() ?? "",
      input: sample
        ? `Sample: ${sample.title}. ${sample.description}`
        : input.data.fileName!,
      aiOutput: "{}",
      address: "",
      status: "Needs fixes",
    }).returning();
    const result = buildReport(needsFixes, row.id, row.createdAt.toISOString());
    const status = result.items.every((item) => item.status === "met") ? "All met" : "Needs fixes";
    await tx.update(permitReportsTable).set({
      aiOutput: JSON.stringify(result),
      status,
      address: result.address,
    }).where(eq(permitReportsTable.id, row.id));
    return result;
  });
  res.status(201).json(AnalyzeLetterResponse.parse(report));
});

router.get("/reports", async (_req, res): Promise<void> => {
  const rows = await db
    .select({
      id: permitReportsTable.id,
      label: permitReportsTable.label,
      address: permitReportsTable.address,
      status: permitReportsTable.status,
      createdAt: permitReportsTable.createdAt,
    })
    .from(permitReportsTable)
    .orderBy(desc(permitReportsTable.createdAt), desc(permitReportsTable.id));
  res.json(ListReportsResponse.parse(rows.map((row) => ({
    ...row,
    createdAt: row.createdAt.toISOString(),
  }))));
});

router.get("/reports/:id", async (req, res): Promise<void> => {
  const params = GetReportParams.safeParse(req.params);
  if (!params.success) {
    res.status(400).json({ error: "Invalid report." });
    return;
  }
  const [row] = await db.select().from(permitReportsTable).where(eq(permitReportsTable.id, params.data.id));
  if (!row) {
    res.status(404).json({ error: "Report not found." });
    return;
  }
  res.json(savedReport(row.aiOutput));
});

router.patch("/reports/:reportId/items/:itemId", async (req, res): Promise<void> => {
  const params = UpdateReportItemParams.safeParse(req.params);
  const body = UpdateReportItemBody.safeParse(req.body);
  if (!params.success || !body.success) {
    res.status(400).json({ error: "Invalid progress update." });
    return;
  }
  const item = await db.transaction(async (tx) => {
    const [row] = await tx.select().from(permitReportsTable)
      .where(eq(permitReportsTable.id, params.data.reportId)).for("update");
    if (!row) return null;
    const report = savedReport(row.aiOutput);
    const item = report.items.find((candidate) => candidate.id === params.data.itemId);
    if (!item) return null;
    item.completed = body.data.completed;
    await tx.update(permitReportsTable)
      .set({ aiOutput: JSON.stringify(report) })
      .where(eq(permitReportsTable.id, row.id));
    return item;
  });
  if (!item) {
    res.status(404).json({ error: "Checklist item not found." });
    return;
  }
  res.json(UpdateReportItemResponse.parse(item));
});

router.get("/notifications", async (_req, res): Promise<void> => {
  const rows = await db
    .select({
      id: permitReportsTable.id,
      status: permitReportsTable.status,
      createdAt: permitReportsTable.createdAt,
    })
    .from(permitReportsTable)
    .orderBy(desc(permitReportsTable.createdAt), desc(permitReportsTable.id))
    .limit(50);
  res.json(ListNotificationsResponse.parse(rows.map((row) => ({
    id: row.id,
    message: row.status === "All met"
      ? "Good news! Your submission appears complete."
      : "Your submission needs changes. See the items below.",
    createdAt: row.createdAt.toISOString(),
  }))));
});

export default router;