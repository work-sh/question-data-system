import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Label } from "@workspace/ui/components/label"
import {
  Plus, 
  Edit, 
  Trash2,
  Eye,
  Copy,
  Settings,
} from "lucide-react"
import { PageHeader } from '@/components/PageHeader'
import { PageContainer } from '@/components/PageContainer'
import { SearchFilter } from '@/components/SearchFilter'

export const Route = createFileRoute('/templates/question-types')({
  component: QuestionTypesPage,
})

function QuestionTypesPage() {
  // 임시 데이터
  const questionTypes = [
    {
      id: 1,
      name: "객관식 (4지선다)",
      description: "4개의 선택지 중 하나를 선택하는 문항 유형",
      fields: ["문제", "선택지1", "선택지2", "선택지3", "선택지4", "정답"],
      createdAt: "2024-01-15",
      updatedAt: "2024-01-15"
    },
    {
      id: 2,
      name: "객관식 (5지선다)",
      description: "5개의 선택지 중 하나를 선택하는 문항 유형",
      fields: ["문제", "선택지1", "선택지2", "선택지3", "선택지4", "선택지5", "정답"],
      createdAt: "2024-01-14",
      updatedAt: "2024-01-14"
    },
    {
      id: 3,
      name: "서술형",
      description: "직접 답을 작성하는 문항 유형",
      fields: ["문제", "답안", "채점기준"],
      createdAt: "2024-01-13",
      updatedAt: "2024-01-13"
    },
    {
      id: 4,
      name: "단답형",
      description: "짧은 답을 입력하는 문항 유형",
      fields: ["문제", "정답"],
      createdAt: "2024-01-12",
      updatedAt: "2024-01-12"
    }
  ]

  const filterFields = [
    {
      type: 'select' as const,
      label: '문항 유형',
      placeholder: '문항 유형 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'multiple', label: '객관식' },
        { value: 'subjective', label: '서술형' },
        { value: 'short', label: '단답형' }
      ]
    }
  ]

  return (
    <PageContainer>
      <PageHeader
        title="문항유형 관리"
        description="문항 템플릿 유형을 관리하고 설정합니다"
        actions={[
          {
            label: "새 문항유형",
            icon: Plus
          }
        ]}
      />

      <SearchFilter
        searchPlaceholder="문항유형 검색..."
        filterFields={filterFields}
      />

      {/* 문항유형 목록 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {questionTypes.map((type) => (
          <Card key={type.id} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-start justify-between">
                <div>
                  <CardTitle className="text-lg">{type.name}</CardTitle>
                  <CardDescription className="mt-1">
                    {type.description}
                  </CardDescription>
                </div>
                <div className="flex gap-1">
                  <Button variant="ghost" size="sm">
                    <Eye className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Edit className="h-3 w-3" />
                  </Button>
                  <Button variant="ghost" size="sm">
                    <Trash2 className="h-3 w-3" />
                  </Button>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <div className="space-y-3">
                <div>
                  <Label className="text-sm font-medium">포함 필드</Label>
                  <div className="flex flex-wrap gap-1 mt-1">
                    {type.fields.map((field, index) => (
                      <span
                        key={index}
                        className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10"
                      >
                        {field}
                      </span>
                    ))}
                  </div>
                </div>
                <div className="flex items-center justify-between text-xs text-muted-foreground">
                  <span>생성: {type.createdAt}</span>
                  <span>수정: {type.updatedAt}</span>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" size="sm" className="flex-1">
                    <Copy className="h-3 w-3 mr-1" />
                    복사
                  </Button>
                  <Button variant="outline" size="sm" className="flex-1">
                    <Settings className="h-3 w-3 mr-1" />
                    설정
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* 통계 */}
      <Card>
        <CardHeader>
          <CardTitle>문항유형 통계</CardTitle>
          <CardDescription>
            현재 등록된 문항유형 현황
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-4">
            <div className="space-y-1">
              <p className="text-sm font-medium">총 문항유형</p>
              <p className="text-2xl font-bold">{questionTypes.length}</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">객관식 유형</p>
              <p className="text-2xl font-bold">2</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">서술형 유형</p>
              <p className="text-2xl font-bold">1</p>
            </div>
            <div className="space-y-1">
              <p className="text-sm font-medium">단답형 유형</p>
              <p className="text-2xl font-bold">1</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
