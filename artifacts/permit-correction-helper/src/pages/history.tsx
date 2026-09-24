import { Link } from "wouter";
import { format } from "date-fns";
import { useListQuestions } from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import { TopNav } from "./home";

export default function History() {
  const { data: questions, isLoading, isError, refetch } = useListQuestions();

  return (
    <div className="min-h-screen bg-background">
      <TopNav />
      <main className="w-full max-w-5xl mx-auto px-4 py-8 md:px-8 md:py-12">
        <div className="mb-8">
          <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-2">Your questions</p>
          <h1 className="font-serif text-3xl md:text-4xl font-bold">History</h1>
          <p className="text-muted-foreground mt-2">Saved permitting questions and answers, newest first.</p>
        </div>
        {isLoading ? (
          <div className="space-y-3" aria-label="Loading history">
            {[1, 2, 3].map((number) => <Skeleton key={number} className="h-40 w-full" />)}
          </div>
        ) : isError ? (
          <Card><CardContent className="p-8 text-center space-y-4">
            <p>We couldn&apos;t load your history right now.</p>
            <Button variant="outline" onClick={() => void refetch()}>Try Again</Button>
          </CardContent></Card>
        ) : !questions?.length ? (
          <Card><CardContent className="p-10 text-center space-y-4">
            <h2 className="font-serif text-xl font-semibold">No questions yet</h2>
            <p className="text-muted-foreground">Ask a permitting question to save your first answer here.</p>
            <Button asChild><Link href="/ask">Ask a Question</Link></Button>
          </CardContent></Card>
        ) : (
          <div className="space-y-4">
            {questions.map((entry) => (
              <Card key={entry.id}>
                <CardContent className="p-5 md:p-7 space-y-4">
                  <time className="block text-sm text-muted-foreground" dateTime={entry.createdAt}>
                    {format(new Date(entry.createdAt), "MMM d, yyyy · h:mm a")}
                  </time>
                  <div>
                    <p className="text-xs uppercase tracking-wider font-semibold text-primary mb-1">Question</p>
                    <h2 className="font-serif text-lg font-semibold whitespace-pre-wrap break-words">{entry.question}</h2>
                  </div>
                  <div className="border-t pt-4">
                    <p className="text-xs uppercase tracking-wider font-semibold text-primary mb-2">AI answer</p>
                    <p className="whitespace-pre-wrap break-words leading-relaxed">{entry.answer}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        )}
      </main>
    </div>
  );
}