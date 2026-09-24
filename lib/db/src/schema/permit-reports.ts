import { pgTable, serial, text, timestamp } from "drizzle-orm/pg-core";
import { createInsertSchema } from "drizzle-zod";
import { z } from "zod/v4";

export const permitReportsTable = pgTable("permit_reports", {
  id: serial("id").primaryKey(),
  label: text("label").notNull().default(""),
  input: text("input").notNull(),
  aiOutput: text("ai_output").notNull(),
  status: text("status").notNull(),
  address: text("address").notNull(),
  createdAt: timestamp("created_at", { withTimezone: true }).notNull().defaultNow(),
});

export const insertPermitReportSchema = createInsertSchema(permitReportsTable).omit({
  id: true,
  createdAt: true,
});

export type InsertPermitReport = z.infer<typeof insertPermitReportSchema>;
export type PermitReportRow = typeof permitReportsTable.$inferSelect;