import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { History, Search, Filter, Download, Calendar } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { PageContainer } from "@/components/PageContainer"
import { SearchFilter } from "@/components/SearchFilter"

export const Route = createFileRoute('/database/user-activity')({
  component: UserActivityPage,
})

function UserActivityPage() {
  const filterFields = [
    {
      type: 'select' as const,
      label: '작업 유형',
      placeholder: '작업 유형 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'create', label: '생성' },
        { value: 'update', label: '수정' },
        { value: 'delete', label: '삭제' }
      ]
    },
    {
      type: 'select' as const,
      label: '기간',
      placeholder: '기간 선택',
      options: [
        { value: 'today', label: '오늘' },
        { value: 'week', label: '이번 주' },
        { value: 'month', label: '이번 달' },
        { value: 'custom', label: '사용자 정의' }
      ]
    }
  ]

  return (
    <PageContainer>
      <PageHeader
        title="사용자 작업 내역"
        description="사용자의 작업 내역을 조회합니다"
        actions={[
          {
            label: "기간 설정",
            icon: Calendar,
            variant: "outline"
          },
          {
            label: "내역 다운로드",
            icon: Download
          }
        ]}
      />

      <SearchFilter
        searchPlaceholder="사용자 검색..."
        filterFields={filterFields}
      />

      <Card>
        <CardHeader>
          <CardTitle>작업 내역</CardTitle>
          <CardDescription>
            사용자별 작업 내역 목록입니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-gray-100 text-gray-800">
                    <History className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">관리자</h3>
                    <p className="text-sm text-muted-foreground">문항 생성 - 2024-01-15 14:30</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                    생성
                  </span>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
