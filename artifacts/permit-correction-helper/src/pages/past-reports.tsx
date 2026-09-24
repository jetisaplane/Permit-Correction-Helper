import { Link } from "wouter";
import { format } from "date-fns";
import { ChevronRight, FileText } from "lucide-react";
import { useListReports } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TopNav } from "./home";

export default function PastReports() {
  const { data: reports, isLoading, isError, refetch } = useListReports();

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="w-full max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-2">Your archive</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold text-foreground">Past Reports</h1>
          <p className="text-muted-foreground mt-2">Every analyzed letter, saved in order of most recent first.</p>
        </div>

        {isLoading ? (
          <div className="space-y-3" aria-label="Loading past reports">
            {[1, 2, 3].map((number) => <Skeleton key={number} className="h-24 w-full" />)}
          </div>
        ) : isError ? (
          <Card>
            <CardContent className="p-8 text-center space-y-4">
              <p>We couldn&apos;t load your reports right now.</p>
              <Button variant="outline" onClick={() => void refetch()}>Try Again</Button>
            </CardContent>
          </Card>
        ) : !reports?.length ? (
          <Card>
            <CardContent className="p-10 text-center space-y-4">
              <FileText className="w-10 h-10 text-primary mx-auto" />
              <h2 className="font-serif text-xl font-semibold">No reports yet</h2>
              <p className="text-muted-foreground">Analyze a letter or try a sample to save your first report.</p>
              <Button asChild><Link href="/">Analyze a Letter</Link></Button>
            </CardContent>
          </Card>
        ) : (
          <div className="space-y-3">
            {reports.map((report) => (
              <Link
                key={report.id}
                href={`/reports/${report.id}`}
                className="flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 rounded-xl border border-border bg-card px-5 py-4 hover:border-primary/50 hover:shadow-sm focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary transition-all"
                aria-label={`Open ${report.label || report.address} report`}
              >
                <div className="flex-1 min-w-0">
                  <h2 className="font-serif font-semibold text-lg text-foreground truncate">
                    {report.label || "Untitled report"}
                  </h2>
                  <p className="text-sm text-muted-foreground mt-1">{report.address}</p>
                </div>
                <div className="flex items-center justify-between sm:justify-end gap-4 sm:gap-6">
                  <span className={`text-xs font-medium px-2.5 py-1 rounded-full ${
                    report.status === "All met" ? "bg-green-100 text-green-800" : "bg-amber-100 text-amber-900"
                  }`}>{report.status}</span>
                  <time className="text-sm text-muted-foreground whitespace-nowrap" dateTime={report.createdAt}>
                    {format(new Date(report.createdAt), "MMM d, yyyy · h:mm a")}
                  </time>
                  <ChevronRight className="w-4 h-4 text-muted-foreground shrink-0" />
                </div>
              </Link>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}