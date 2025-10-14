import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { useQuestions } from "@/hooks";
import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";

export const Route = createFileRoute("/dashboard/")({
  component: Index,
});

function Index() {
  const { data: questions, isLoading, error } = useQuestions();

  return (
    <PageContainer>
      <PageHeader
        title="대시보드"
        description="Question Data System 대시보드입니다. 문항을 관리하고 진행 상태를 추적합니다."
      />

      <div className="grid gap-6">
        <Card>
          <CardHeader>
            <CardTitle>최근 문항</CardTitle>
            <CardDescription>최근 문항과 진행 상태</CardDescription>
          </CardHeader>
          <CardContent>
            {isLoading && <p>문항을 불러오는 중입니다...</p>}
            {error && (
              <p className="text-red-500">
                문항을 불러오는 중 오류가 발생했습니다
              </p>
            )}
            {questions && (
              <div className="space-y-4">
                {questions.map(question => (
                  <div
                    key={question.id}
                    className="border rounded-lg p-4 hover:bg-muted/50 transition-colors"
                  >
                    <div className="flex items-start justify-between">
                      <div className="space-y-1">
                        <h3 className="font-medium leading-none">
                          {question.title}
                        </h3>
                        <p className="text-sm text-muted-foreground">
                          {question.content}
                        </p>
                      </div>
                    </div>
                    <div className="flex gap-2 mt-3">
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                        {question.category}
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                          question.difficulty === "easy"
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : question.difficulty === "medium"
                              ? "bg-yellow-100 text-yellow-800 hover:bg-yellow-200"
                              : "bg-red-100 text-red-800 hover:bg-red-200"
                        }`}
                      >
                        {question.difficulty}
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  );
}
