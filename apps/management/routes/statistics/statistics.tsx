import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { BarChart3, TrendingUp, Users, FileText, Download, Calendar } from "lucide-react"
import { PageHeader } from '@/components/PageHeader'
import { PageContainer } from '@/components/PageContainer'
import { SearchFilter } from '@/components/SearchFilter'

export const Route = createFileRoute('/statistics/statistics')({
  component: StatisticsPage,
})

function StatisticsPage() {
  const filterFields = [
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
        title="통계 관리"
        description="시스템 사용 통계와 분석 데이터를 확인합니다"
        actions={[
          {
            label: "기간 설정",
            icon: Calendar,
            variant: "outline"
          },
          {
            label: "리포트 다운로드",
            icon: Download
          }
        ]}
      />

      <SearchFilter
        searchPlaceholder="데이터 검색..."
        filterFields={filterFields}
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 사용자</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">1,234</div>
            <p className="text-xs text-muted-foreground">
              +12% 지난 달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">생성된 문제</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">5,678</div>
            <p className="text-xs text-muted-foreground">
              +8% 지난 달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">평가세트</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">234</div>
            <p className="text-xs text-muted-foreground">
              +15% 지난 달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">출제자료</CardTitle>
            <TrendingUp className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">456</div>
            <p className="text-xs text-muted-foreground">
              +5% 지난 달 대비
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>사용자 활동 통계</CardTitle>
            <CardDescription>
              최근 30일간의 사용자 활동 현황
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">일일 활성 사용자</span>
                <span className="font-medium">156명</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">주간 활성 사용자</span>
                <span className="font-medium">892명</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">월간 활성 사용자</span>
                <span className="font-medium">1,234명</span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>콘텐츠 생성 통계</CardTitle>
            <CardDescription>
              최근 30일간의 콘텐츠 생성 현황
            </CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <span className="text-sm">새로운 문제</span>
                <span className="font-medium">234개</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">평가세트 생성</span>
                <span className="font-medium">45개</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm">출제자료 생성</span>
                <span className="font-medium">78개</span>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}