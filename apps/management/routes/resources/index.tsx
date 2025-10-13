import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@workspace/ui/components/button"
import { FileText, Trash2, Wand2, Edit } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { PageContainer } from "@/components/PageContainer"
import { SearchFilter } from "@/components/SearchFilter"

export const Route = createFileRoute('/resources/')({
  component: ItemBankPage,
})

function ItemBankPage() {
  const sources = [
    {
      id: 's001',
      title: '수학 중간고사 문제지',
      description: '2024년 1학기 중간고사',
      type: '시험지',
      subject: '수학',
      status: '완료',
      created: '2024-01-15'
    }
  ]

  const filterFields = [
    {
      type: 'select' as const,
      label: '유형',
      placeholder: '유형 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'test', label: '시험지' },
        { value: 'quiz', label: '퀴즈' },
        { value: 'worksheet', label: '워크시트' }
      ]
    },
    {
      type: 'select' as const,
      label: '과목',
      placeholder: '과목 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'math', label: '수학' },
        { value: 'science', label: '과학' },
        { value: 'korean', label: '국어' },
        { value: 'english', label: '영어' }
      ]
    }
  ]

  return (
    <PageContainer>
      <PageHeader
        title="출제자료 관리"
        description="출제자료를 생성하고 관리합니다"
        actions={[
          {
            label: "삭제된 출제자료",
            icon: Trash2,
            variant: "outline"
          },
          {
            label: "출제마법사",
            icon: Wand2
          }
        ]}
      />

      <SearchFilter
        title="검색 및 필터"
        description="출제자료를 검색하고 필터링합니다"
        searchPlaceholder="출제자료 검색..."
        filterFields={filterFields}
      />

      <div className="space-y-4">
        {sources.map((source) => (
          <div key={source.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-green-100 text-green-800">
                  <FileText className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium">{source.title}</h3>
                  <p className="text-sm text-muted-foreground">{source.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {source.type}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {source.status}
                </span>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}
