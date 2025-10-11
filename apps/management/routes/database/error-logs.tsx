import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { AlertTriangle, Search, Filter, Download, Calendar, RefreshCw } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { PageContainer } from "@/components/PageContainer"
import { SearchFilter } from "@/components/SearchFilter"

export const Route = createFileRoute('/database/error-logs')({
  component: ErrorLogsPage,
})

function ErrorLogsPage() {
  const filterFields = [
    {
      type: 'select' as const,
      label: '오류 레벨',
      placeholder: '오류 레벨 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'error', label: 'ERROR' },
        { value: 'warning', label: 'WARNING' },
        { value: 'info', label: 'INFO' }
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
        title="오류 로그 조회"
        description="시스템 오류 로그를 조회합니다"
        actions={[
          {
            label: "기간 설정",
            icon: Calendar,
            variant: "outline"
          },
          {
            label: "새로고침",
            icon: RefreshCw,
            variant: "outline"
          },
          {
            label: "로그 다운로드",
            icon: Download
          }
        ]}
      />

      <SearchFilter
        searchPlaceholder="오류 검색..."
        filterFields={filterFields}
      />

      <Card>
        <CardHeader>
          <CardTitle>오류 로그</CardTitle>
          <CardDescription>
            시스템에서 발생한 오류 로그 목록입니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            <div className="border rounded-lg p-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-red-100 text-red-800">
                    <AlertTriangle className="size-5" />
                  </div>
                  <div>
                    <h3 className="font-medium">Database Connection Error</h3>
                    <p className="text-sm text-muted-foreground">2024-01-15 14:30:25 - 데이터베이스 연결 실패</p>
                  </div>
                </div>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-1 bg-red-100 text-red-800 text-xs rounded-full">
                    ERROR
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
