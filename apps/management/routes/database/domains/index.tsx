import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Tag, Search, Filter, List, FilePlus } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { PageContainer } from "@/components/PageContainer"
import { SearchFilter } from "@/components/SearchFilter"

export const Route = createFileRoute('/database/domains/')({
  component: DomainsPage,
})

function DomainsPage() {
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
        title="도메인 관리"
        description="도메인 정보를 관리합니다"
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
        title="검색 및 필터"
        description="도메인을 검색하고 필터링합니다"
        searchPlaceholder="도메인 검색..."
        filterFields={filterFields}
      />  

      <div className="flex items-center justify-end">
        <div className="flex items-center gap-2">
          <Button variant="outline">
            <List className="mr-2 h-4 w-4" />
            목록
          </Button>
          <Button>
            <FilePlus className="mr-2 h-4 w-4" />
            등록
          </Button>
        </div>
        <div className="flex gap-2">
          <Button variant="outline">
            <List className="mr-2 h-4 w-4" />
            목록
          </Button>
          <Button>
            <FilePlus className="mr-2 h-4 w-4" />
            등록
          </Button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex-1">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-muted-foreground" />
            <input
              type="text"
              placeholder="도메인 검색..."
              className="w-full pl-10 pr-4 py-2 border rounded-md"
            />
          </div>
        </div>
        <Button variant="outline">
          <Filter className="mr-2 h-4 w-4" />
          필터
        </Button>
      </div>

      <Card>
        <CardHeader>
          <CardTitle>도메인 목록</CardTitle>
          <CardDescription>
            등록된 모든 도메인 목록입니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-purple-100 text-purple-800">
                    <Tag className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">수학</h3>
                    <p className="text-sm text-muted-foreground">수학 관련 도메인</p>
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
