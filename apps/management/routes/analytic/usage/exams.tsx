import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { SearchFilter } from "@/components/SearchFilter";
import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import {
  Activity,
  ArrowUpRight,
  BarChart3,
  Calendar,
  Clock,
  Download,
  Eye,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/analytic/usage/exams")({
  component: UsageStatsPage,
});

function UsageStatsPage() {
  // 임시 데이터
  const usageStats = {
    totalUsers: 245,
    activeUsers: 189,
    totalSessions: 3420,
    avgSessionDuration: 24.5,
    totalDownloads: 1560,
    totalViews: 8930,
  };

  const dailyUsage = [
    {
      date: "2024-01-15",
      activeUsers: 45,
      sessions: 67,
      downloads: 23,
      views: 156,
    },
    {
      date: "2024-01-14",
      activeUsers: 42,
      sessions: 61,
      downloads: 19,
      views: 142,
    },
    {
      date: "2024-01-13",
      activeUsers: 38,
      sessions: 54,
      downloads: 31,
      views: 178,
    },
    {
      date: "2024-01-12",
      activeUsers: 41,
      sessions: 58,
      downloads: 27,
      views: 165,
    },
    {
      date: "2024-01-11",
      activeUsers: 39,
      sessions: 52,
      downloads: 22,
      views: 148,
    },
    {
      date: "2024-01-10",
      activeUsers: 35,
      sessions: 48,
      downloads: 18,
      views: 134,
    },
    {
      date: "2024-01-09",
      activeUsers: 43,
      sessions: 63,
      downloads: 25,
      views: 172,
    },
  ];

  const featureUsage = [
    {
      feature: "문항 관리",
      usage: 89.2,
      users: 218,
      change: 12.5,
    },
    {
      feature: "평가세트 관리",
      usage: 76.8,
      users: 188,
      change: 8.3,
    },
    {
      feature: "통계 조회",
      usage: 65.4,
      users: 160,
      change: 15.7,
    },
    {
      feature: "템플릿 관리",
      usage: 54.2,
      users: 133,
      change: -2.1,
    },
    {
      feature: "데이터베이스 관리",
      usage: 42.8,
      users: 105,
      change: 5.9,
    },
  ];

  const userActivity = [
    {
      timeSlot: "00:00-04:00",
      users: 12,
      percentage: 6.4,
    },
    {
      timeSlot: "04:00-08:00",
      users: 23,
      percentage: 12.2,
    },
    {
      timeSlot: "08:00-12:00",
      users: 67,
      percentage: 35.4,
    },
    {
      timeSlot: "12:00-16:00",
      users: 45,
      percentage: 23.8,
    },
    {
      timeSlot: "16:00-20:00",
      users: 32,
      percentage: 16.9,
    },
    {
      timeSlot: "20:00-24:00",
      users: 10,
      percentage: 5.3,
    },
  ];

  const filterFields = [
    {
      type: "select" as const,
      label: "사용자 유형",
      placeholder: "사용자 유형 선택",
      options: [
        { value: "all", label: "전체" },
        { value: "active", label: "활성 사용자" },
        { value: "inactive", label: "비활성 사용자" },
        { value: "new", label: "신규 사용자" },
      ],
    },
    {
      type: "select" as const,
      label: "기간",
      placeholder: "기간 선택",
      options: [
        { value: "today", label: "오늘" },
        { value: "week", label: "이번 주" },
        { value: "month", label: "이번 달" },
        { value: "custom", label: "사용자 정의" },
      ],
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="사용 통계"
        description="시스템 사용 현황과 사용자 활동 통계를 확인합니다"
        actions={[
          {
            label: "기간 설정",
            icon: Calendar,
            variant: "outline",
          },
          {
            label: "리포트 다운로드",
            icon: Download,
          },
        ]}
      />

      <SearchFilter
        searchPlaceholder="사용자 검색..."
        filterFields={filterFields}
      />

      {/* 주요 지표 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">활성 사용자</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{usageStats.activeUsers}</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
              +12% 지난 주 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 세션</CardTitle>
            <Activity className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {usageStats.totalSessions.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
              +8% 지난 주 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">
              평균 세션 시간
            </CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {usageStats.avgSessionDuration}분
            </div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
              +3.2% 지난 주 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 다운로드</CardTitle>
            <Download className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {usageStats.totalDownloads.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
              +15% 지난 주 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 조회수</CardTitle>
            <Eye className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {usageStats.totalViews.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
              +22% 지난 주 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">사용률</CardTitle>
            <BarChart3 className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">77.1%</div>
            <p className="text-xs text-muted-foreground flex items-center">
              <ArrowUpRight className="h-3 w-3 mr-1 text-green-600" />
              +5.2% 지난 주 대비
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 일별 사용 현황 */}
      <Card>
        <CardHeader>
          <CardTitle>최근 7일 사용 현황</CardTitle>
          <CardDescription>
            일별 사용자 활동 및 시스템 사용 통계
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {dailyUsage.map((day, index) => (
              <div key={index} className="border rounded-lg p-4">
                <div className="flex items-center justify-between mb-3">
                  <h3 className="font-medium">{day.date}</h3>
                  <div className="flex items-center gap-4 text-sm text-muted-foreground">
                    <span>조회: {day.views}</span>
                    <span>다운로드: {day.downloads}</span>
                  </div>
                </div>
                <div className="grid gap-4 md:grid-cols-2">
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Users className="h-4 w-4 text-muted-foreground" />
                      <span>활성 사용자</span>
                    </div>
                    <span className="font-medium">{day.activeUsers}명</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-2">
                      <Activity className="h-4 w-4 text-muted-foreground" />
                      <span>세션 수</span>
                    </div>
                    <span className="font-medium">{day.sessions}회</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 기능별 사용 현황 */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>기능별 사용 현황</CardTitle>
            <CardDescription>각 기능의 사용률과 사용자 수</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {featureUsage.map((feature, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{feature.feature}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {feature.users}명
                      </span>
                      <span
                        className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                          feature.change > 0
                            ? "bg-green-100 text-green-800 hover:bg-green-200"
                            : "bg-red-100 text-red-800 hover:bg-red-200"
                        }`}
                      >
                        {feature.change > 0 ? "+" : ""}
                        {feature.change}%
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${feature.usage}%` }}
                    ></div>
                  </div>
                  <div className="text-sm text-muted-foreground">
                    사용률: {feature.usage}%
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>시간대별 사용 현황</CardTitle>
            <CardDescription>하루 중 시간대별 사용자 활동 분포</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {userActivity.map((activity, index) => (
                <div key={index} className="space-y-2">
                  <div className="flex items-center justify-between">
                    <span className="font-medium">{activity.timeSlot}</span>
                    <div className="flex items-center gap-2">
                      <span className="text-sm text-muted-foreground">
                        {activity.users}명
                      </span>
                      <span className="text-sm text-muted-foreground">
                        ({activity.percentage}%)
                      </span>
                    </div>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-green-600 h-2 rounded-full transition-all duration-300"
                      style={{ width: `${activity.percentage}%` }}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 사용자 행동 분석 */}
      <Card>
        <CardHeader>
          <CardTitle>사용자 행동 분석</CardTitle>
          <CardDescription>사용자의 주요 활동 패턴과 선호도</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-blue-600">42%</div>
              <p className="text-sm text-muted-foreground">모바일 사용률</p>
              <p className="text-xs text-muted-foreground">데스크톱 대비</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-green-600">3.2회</div>
              <p className="text-sm text-muted-foreground">평균 일일 방문</p>
              <p className="text-xs text-muted-foreground">활성 사용자 기준</p>
            </div>
            <div className="text-center space-y-2">
              <div className="text-3xl font-bold text-purple-600">67%</div>
              <p className="text-sm text-muted-foreground">재방문율</p>
              <p className="text-xs text-muted-foreground">30일 기준</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
