import { createFileRoute } from '@tanstack/react-router'
import { Button } from "@workspace/ui/components/button"
import { FileText, Plus, Edit, Copy } from "lucide-react"
import { PageHeader } from '@/components/PageHeader'
import { PageContainer } from '@/components/PageContainer'
import { SearchFilter } from '@/components/SearchFilter'

export const Route = createFileRoute('/templates/templates')({
  component: TemplatesPage,
})

function TemplatesPage() {
  const templates = [
    {
      id: 't001',
      title: '기본 시험지 템플릿',
      description: '표준 시험지 형식',
      type: '시험지',
      status: '활성',
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
    }
  ]

  return (
    <PageContainer>
      <PageHeader
        title="템플릿 관리"
        description="문제지 템플릿을 생성하고 관리합니다"
        actions={[
          {
            label: "템플릿 생성",
            icon: Plus
          }
        ]}
      />

      <SearchFilter
        title="검색 및 필터"
        description="템플릿을 검색하고 필터링합니다"
        searchPlaceholder="템플릿 검색..."
        filterFields={filterFields}
      />

      <div className="space-y-4">
        {templates.map((template) => (
          <div key={template.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-purple-100 text-purple-800">
                  <FileText className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium">{template.title}</h3>
                  <p className="text-sm text-muted-foreground">{template.description}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {template.type}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {template.status}
                </span>
                <Button variant="outline" size="sm">
                  <Copy className="mr-1 h-3 w-3" />
                  복사
                </Button>
                <Button variant="outline" size="sm">
                  <Edit className="mr-1 h-3 w-3" />
                  편집
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  )
}
