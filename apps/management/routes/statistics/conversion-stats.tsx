import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { 
  TrendingUp, 
  TrendingDown,
  FileText,
  Download,
  Calendar,
  ArrowUpRight,
  ArrowDownRight,
  Target,
  CheckCircle,
} from "lucide-react"
import { PageHeader } from '@/components/PageHeader'
import { SearchFilter } from '@/components/SearchFilter'
import { PageContainer } from '@/components/PageContainer'

export const Route = createFileRoute('/statistics/conversion-stats')({
  component: ConversionStatsPage,
})

function ConversionStatsPage() {
  // 임시 데이터
  const conversionStats = [
    {
      period: "이번 달",
      totalConversions: 1250,
      successfulConversions: 1180,
      failedConversions: 70,
      successRate: 94.4,
      change: 12.5
    },
    {
      period: "지난 달",
      totalConversions: 1110,
      successfulConversions: 1020,
      failedConversions: 90,
      successRate: 91.9,
      change: -5.2
    },
    {
      period: "3개월 전",
      totalConversions: 1170,
      successfulConversions: 1080,
      failedConversions: 90,
      successRate: 92.3,
      change: 8.1
    }
  ]

  const conversionTypes = [
    {
      type: "PDF to XML",
      count: 450,
      successRate: 96.2,
      change: 15.3
    },
    {
      type: "Word to XML",
      count: 380,
      successRate: 94.7,
      change: 8.9
    },
    {
      type: "Excel to XML",
      count: 220,
      successRate: 92.1,
      change: -2.1
    },
    {
      type: "Image to Text",
      count: 200,
      successRate: 89.5,
      change: 22.4
    }
  ]

  const filterFields = [
    {
      type: 'select' as const,
      label: '변환 유형',
      placeholder: '변환 유형 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'word', label: 'Word to XML' },
        { value: 'excel', label: 'Excel to XML' },
        { value: 'image', label: 'Image to Text' }
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
        title="변환 통계"
        description="문서 변환 작업의 성능과 통계를 확인합니다"
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
        searchPlaceholder="변환 작업 검색..."
        filterFields={filterFields}
      />

      {/* 주요 지표 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 변환 수</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">3,530</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
              +12.5% 지난 달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">성공률</CardTitle>
            <CheckCircle className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">93.2%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
              +2.5% 지난 달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">평균 처리 시간</CardTitle>
            <Target className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2.3초</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1 text-green-600" />
              -15% 지난 달 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">실패율</CardTitle>
            <TrendingDown className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">6.8%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowDownRight className="h-3 w-3 mr-1 text-green-600" />
              -2.5% 지난 달 대비
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 기간별 변환 통계 */}
      <Card>
        <CardHeader>
          <CardTitle>기간별 변환 통계</CardTitle>
          <CardDescription>
            최근 3개월간의 변환 작업 현황
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversionStats.map((stat, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium text-lg">{stat.period}</h3>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                      stat.change > 0 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}>
                      {stat.change > 0 ? '+' : ''}{stat.change}%
                    </span>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-4">
                  <div>
                    <p className="text-sm text-muted-foreground">총 변환</p>
                    <p className="text-2xl font-bold">{stat.totalConversions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">성공</p>
                    <p className="text-2xl font-bold text-green-600">{stat.successfulConversions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">실패</p>
                    <p className="text-2xl font-bold text-red-600">{stat.failedConversions.toLocaleString()}</p>
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">성공률</p>
                    <p className="text-2xl font-bold">{stat.successRate}%</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 변환 유형별 통계 */}
      <Card>
        <CardHeader>
          <CardTitle>변환 유형별 통계</CardTitle>
          <CardDescription>
            파일 형식별 변환 성능 현황
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {conversionTypes.map((type, index) => (
              <div key={index} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-center justify-between">
                  <div className="space-y-1">
                    <h3 className="font-medium">{type.type}</h3>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <span>변환 수: {type.count}</span>
                      <span>성공률: {type.successRate}%</span>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                      type.change > 0 
                        ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                        : 'bg-red-100 text-red-800 hover:bg-red-200'
                    }`}>
                      {type.change > 0 ? '+' : ''}{type.change}%
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 성능 트렌드 차트 영역 */}
      <Card>
        <CardHeader>
          <CardTitle>변환 성능 트렌드</CardTitle>
          <CardDescription>
            최근 30일간의 변환 성능 변화 추이
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="h-64 flex items-center justify-center border-2 border-dashed border-muted-foreground/25 rounded-lg">
            <div className="text-center">
              <TrendingUp className="h-12 w-12 mx-auto text-muted-foreground mb-2" />
              <p className="text-muted-foreground">차트 영역</p>
              <p className="text-sm text-muted-foreground">실제 구현 시 Chart.js 또는 Recharts 등을 사용</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  )
}
