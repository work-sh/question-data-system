import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { useQuestions } from "@/hooks"
import { Plus, Search, Filter } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { PageContainer } from "@/components/PageContainer"
import { SearchFilter } from "@/components/SearchFilter"

export const Route = createFileRoute('/question/')({
  component: Questions,
})

function Questions() {
  const { data: questions, isLoading, error } = useQuestions()

  const filterFields = [
    {
      type: 'select' as const,
      label: '카테고리',
      placeholder: '카테고리 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'math', label: '수학' },
        { value: 'science', label: '과학' },
        { value: 'korean', label: '국어' }
      ]
    },
    {
      type: 'select' as const,
      label: '난이도',
      placeholder: '난이도 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'easy', label: '쉬움' },
        { value: 'medium', label: '보통' },
        { value: 'hard', label: '어려움' }
      ]
    }
  ]

  return (
    <PageContainer>
      <PageHeader
        title="문항 관리"
        description="문항을 관리하고 조회합니다"
        actions={[
          {
            label: "문항 추가",
            icon: Plus
          }
        ]}
      />

      <SearchFilter
        searchPlaceholder="문제 검색..."
        filterFields={filterFields}
      />

      <Card>
        <CardHeader>
          <CardTitle>모든 문항</CardTitle>
          <CardDescription>
            모든 문항을 조회합니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          {isLoading && <p>문항을 불러오는 중입니다...</p>}
          {error && <p className="text-red-500">문항을 불러오는 중 오류가 발생했습니다</p>}
          {questions && (
            <div className="space-y-4">
              {questions.map((question) => (
                <div key={question.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                  <div className="flex items-start justify-between">
                    <div className="space-y-1">
                      <h3 className="font-medium leading-none">{question.title}</h3>
                      <p className="text-sm text-muted-foreground">{question.content}</p>
                    </div>
                  </div>
                  <div className="flex gap-2 mt-3">
                    <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-primary text-primary-foreground hover:bg-primary/80">
                      {question.category}
                    </span>
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                      question.difficulty === 'easy' 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                        : question.difficulty === 'medium'
                        ? 'bg-yellow-100 text-yellow-800 hover:bg-yellow-200'
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}>
                      {question.difficulty}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          )}
        </CardContent>
      </Card>
    </PageContainer>
  )
}