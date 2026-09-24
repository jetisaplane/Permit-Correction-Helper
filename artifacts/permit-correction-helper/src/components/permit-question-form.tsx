import { useState, type FormEvent } from "react";
import { Link } from "wouter";
import { format } from "date-fns";
import { useQueryClient } from "@tanstack/react-query";
import {
  useAskPermitQuestion,
  getListQuestionsQueryKey,
  type PermitQuestion,
} from "@workspace/api-client-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";

export function PermitQuestionForm() {
  const [question, setQuestion] = useState("");
  const [result, setResult] = useState<PermitQuestion | null>(null);
  const queryClient = useQueryClient();
  const ask = useAskPermitQuestion();

  function submit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const submitted = question.trim();
    if (!submitted || ask.isPending) return;
    setResult(null);
    ask.mutate({ data: { question: submitted } }, {
      onSuccess: (saved) => {
        setResult(saved);
        setQuestion("");
        void queryClient.invalidateQueries({ queryKey: getListQuestionsQueryKey() });
      },
    });
  }

  return (
    <section id="ask-question" aria-labelledby="ask-question-title" className="space-y-4 scroll-mt-24">
      <Card>
        <CardContent className="p-5 md:p-7">
          <div className="mb-5">
            <p className="text-xs uppercase tracking-widest font-semibold text-primary mb-2">Permit assistance</p>
            <h2 id="ask-question-title" className="font-serif text-2xl md:text-3xl font-bold">Ask a permitting question</h2>
            <p className="text-sm text-muted-foreground mt-2">
              Describe what you&apos;re planning and include your city or county for more useful guidance.
            </p>
          </div>
          <form onSubmit={submit} className="space-y-4">
            <label htmlFor="permit-question" className="block text-sm font-semibold">Your question</label>
            <Textarea
              id="permit-question"
              value={question}
              onChange={(event) => setQuestion(event.target.value)}
              placeholder="What permits do I need to add a second-story bedroom in my city? [243]"
              maxLength={4000}
              rows={5}
              required
              className="resize-y"
            />
            <div className="flex flex-wrap items-center justify-between gap-3">
              <span className="text-xs text-muted-foreground">{question.length.toLocaleString()} / 4,000 characters</span>
              <Button type="submit" disabled={!question.trim() || ask.isPending}>
                {ask.isPending ? "Generating answer…" : "Get Answer"}
              </Button>
            </div>
            {ask.isError && (
              <p role="alert" className="text-sm text-destructive">
                Couldn&apos;t generate an answer. Check that the AI key is configured, then try again. Nothing was saved.
              </p>
            )}
          </form>
        </CardContent>
      </Card>
      {result && (
        <Card aria-live="polite">
          <CardContent className="p-5 md:p-7 space-y-4">
            <div className="flex flex-wrap justify-between items-center gap-2">
              <h3 className="font-serif text-2xl font-semibold">Answer</h3>
              <time className="text-sm text-muted-foreground" dateTime={result.createdAt}>
                {format(new Date(result.createdAt), "MMM d, yyyy · h:mm a")}
              </time>
            </div>
            <p className="font-medium whitespace-pre-wrap break-words">{result.question}</p>
            <div className="border-t pt-4 text-foreground whitespace-pre-wrap break-words leading-relaxed">{result.answer}</div>
            <Button variant="outline" asChild><Link href="/history">See History</Link></Button>
          </CardContent>
        </Card>
      )}
    </section>
  );
}