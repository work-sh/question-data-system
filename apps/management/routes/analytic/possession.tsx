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
  Archive,
  BookOpen,
  Calendar,
  Code,
  Download,
  FileText,
  Layers,
  Tag,
  TrendingUp,
  Users,
} from "lucide-react";

export const Route = createFileRoute("/analytic/possession")({
  component: PossessionStatsPage,
});

function PossessionStatsPage() {
  // 임시 데이터
  const possessionStats = {
    totalQuestions: 15420,
    totalUsers: 245,
    totalTextbooks: 89,
    totalChapters: 342,
    totalDomains: 156,
    totalCodes: 2341,
    totalSources: 567,
    totalAssessments: 123,
    totalTemplates: 45,
  };

  const categoryBreakdown = [
    {
      category: "수학",
      count: 5420,
      percentage: 35.2,
      change: 12.5,
    },
    {
      category: "국어",
      count: 3890,
      percentage: 25.2,
      change: 8.3,
    },
    {
      category: "영어",
      count: 3210,
      percentage: 20.8,
      change: 15.7,
    },
    {
      category: "과학",
      count: 1890,
      percentage: 12.3,
      change: -2.1,
    },
    {
      category: "사회",
      count: 1010,
      percentage: 6.5,
      change: 5.9,
    },
  ];

  const recentAdditions = [
    {
      type: "문항",
      count: 156,
      period: "최근 7일",
    },
    {
      type: "사용자",
      count: 12,
      period: "최근 7일",
    },
    {
      type: "교과서",
      count: 3,
      period: "최근 7일",
    },
    {
      type: "평가세트",
      count: 8,
      period: "최근 7일",
    },
  ];

  const filterFields = [
    {
      type: "select" as const,
      label: "카테고리",
      placeholder: "카테고리 선택",
      options: [
        { value: "all", label: "전체" },
        { value: "math", label: "수학" },
        { value: "korean", label: "국어" },
        { value: "english", label: "영어" },
        { value: "science", label: "과학" },
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
        title="보유 통계"
        description="시스템에 보유된 데이터의 현황과 통계를 확인합니다"
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
        searchPlaceholder="데이터 검색..."
        filterFields={filterFields}
      />

      {/* 주요 지표 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 문항 수</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {possessionStats.totalQuestions.toLocaleString()}
            </div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +156 최근 7일
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">등록 사용자</CardTitle>
            <Users className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {possessionStats.totalUsers}
            </div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +12 최근 7일
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">교과서 수</CardTitle>
            <BookOpen className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {possessionStats.totalTextbooks}
            </div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +3 최근 7일
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">평가세트 수</CardTitle>
            <Archive className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {possessionStats.totalAssessments}
            </div>
            <p className="text-xs text-muted-foreground flex items-center">
              <TrendingUp className="h-3 w-3 mr-1 text-green-600" />
              +8 최근 7일
            </p>
          </CardContent>
        </Card>
      </div>

      {/* 상세 보유 현황 */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>데이터베이스 구성</CardTitle>
            <CardDescription>시스템 내 주요 데이터 구성 현황</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Layers className="h-4 w-4 text-muted-foreground" />
                  <span>단원</span>
                </div>
                <span className="font-medium">
                  {possessionStats.totalChapters}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Tag className="h-4 w-4 text-muted-foreground" />
                  <span>도메인</span>
                </div>
                <span className="font-medium">
                  {possessionStats.totalDomains}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code className="h-4 w-4 text-muted-foreground" />
                  <span>코드</span>
                </div>
                <span className="font-medium">
                  {possessionStats.totalCodes}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <FileText className="h-4 w-4 text-muted-foreground" />
                  <span>출처</span>
                </div>
                <span className="font-medium">
                  {possessionStats.totalSources}
                </span>
              </div>
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Archive className="h-4 w-4 text-muted-foreground" />
                  <span>템플릿</span>
                </div>
                <span className="font-medium">
                  {possessionStats.totalTemplates}
                </span>
              </div>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>최근 추가 현황</CardTitle>
            <CardDescription>최근 7일간 새로 추가된 데이터</CardDescription>
          </CardHeader>
          <CardContent>
            <div className="space-y-4">
              {recentAdditions.map((addition, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div>
                    <p className="font-medium">{addition.type}</p>
                    <p className="text-sm text-muted-foreground">
                      {addition.period}
                    </p>
                  </div>
                  <span className="text-2xl font-bold text-green-600">
                    +{addition.count}
                  </span>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* 과목별 문항 분포 */}
      <Card>
        <CardHeader>
          <CardTitle>과목별 문항 분포</CardTitle>
          <CardDescription>과목별로 등록된 문항의 분포 현황</CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {categoryBreakdown.map((category, index) => (
              <div key={index} className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="font-medium">{category.category}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-muted-foreground">
                      {category.count.toLocaleString()}개
                    </span>
                    <span className="text-sm text-muted-foreground">
                      ({category.percentage}%)
                    </span>
                    <span
                      className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                        category.change > 0
                          ? "bg-green-100 text-green-800 hover:bg-green-200"
                          : "bg-red-100 text-red-800 hover:bg-red-200"
                      }`}
                    >
                      {category.change > 0 ? "+" : ""}
                      {category.change}%
                    </span>
                  </div>
                </div>
                <div className="w-full bg-gray-200 rounded-full h-2">
                  <div
                    className="bg-blue-600 h-2 rounded-full transition-all duration-300"
                    style={{ width: `${category.percentage}%` }}
                  ></div>
                </div>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      {/* 데이터 품질 지표 */}
      <Card>
        <CardHeader>
          <CardTitle>데이터 품질 지표</CardTitle>
          <CardDescription>
            시스템 내 데이터의 품질 및 완성도 현황
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-6 md:grid-cols-3">
            <div className="text-center">
              <div className="text-3xl font-bold text-green-600">98.5%</div>
              <p className="text-sm text-muted-foreground">완성된 문항</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-blue-600">94.2%</div>
              <p className="text-sm text-muted-foreground">검증된 문항</p>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-purple-600">89.7%</div>
              <p className="text-sm text-muted-foreground">메타데이터 완성도</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
