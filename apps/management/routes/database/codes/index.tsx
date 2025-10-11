import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Code, Search, Filter, List, FilePlus } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { PageContainer } from "@/components/PageContainer"
import { SearchFilter } from "@/components/SearchFilter"

export const Route = createFileRoute('/database/codes/')({
  component: CodesPage,
})

function CodesPage() {
  const filterFields = [
    {
      type: 'select' as const,
      label: '상태',
      placeholder: '상태 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'active', label: '활성' },
        { value: 'inactive', label: '비활성' }
      ]
    }
  ]

  return (
    <PageContainer>
      <PageHeader
        title="코드 관리"
        description="코드 정보를 관리합니다"
        actions={[
          {
            label: "목록",
            icon: List,
            variant: "outline"
          },
          {
            label: "등록",
            icon: FilePlus
          }
        ]}
      />

      <SearchFilter
        searchPlaceholder="코드 검색..."
        filterFields={filterFields}
      />

      <Card>
        <CardHeader>
          <CardTitle>코드 목록</CardTitle>
          <CardDescription>
            등록된 모든 코드 목록입니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-orange-100 text-orange-800">
                    <Code className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">MATH001</h3>
                    <p className="text-sm text-muted-foreground">수학 기본 코드</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                    활성
                  </span>
                  <Button variant="outline" size="sm">편집</Button>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
