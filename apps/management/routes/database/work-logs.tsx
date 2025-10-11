import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { 
  History, 
  Search, 
  Filter, 
  Download, 
  Calendar,
  User,
  Clock,
  FileText,
  Settings,
  Database
} from "lucide-react"
import { PageHeader } from '@/components/PageHeader'
import { PageContainer } from '@/components/PageContainer'

export const Route = createFileRoute('/database/work-logs')({
  component: WorkLogsPage,
})

function WorkLogsPage() {
  // 임시 데이터
  const workLogs = [
    {
      id: 1,
      userId: "user001",
      userName: "김철수",
      action: "문항 생성",
      target: "수학 문항 #1234",
      timestamp: "2024-01-15 14:30:25",
      details: "새로운 수학 문제를 생성했습니다.",
      status: "완료"
    },
    {
      id: 2,
      userId: "user002", 
      userName: "이영희",
      action: "평가세트 수정",
      target: "중간고사 평가세트",
      timestamp: "2024-01-15 13:45:12",
      details: "평가세트의 문제 순서를 변경했습니다.",
      status: "완료"
    },
    {
      id: 3,
      userId: "user001",
      userName: "김철수",
      action: "데이터베이스 백업",
      target: "전체 데이터베이스",
      timestamp: "2024-01-15 12:00:00",
      details: "일일 자동 백업이 실행되었습니다.",
      status: "완료"
    },
    {
      id: 4,
      userId: "user003",
      userName: "박민수",
      action: "사용자 권한 변경",
      target: "user004",
      timestamp: "2024-01-15 11:20:45",
      details: "사용자 권한을 관리자로 변경했습니다.",
      status: "완료"
    },
    {
      id: 5,
      userId: "user002",
      userName: "이영희",
      action: "템플릿 삭제",
      target: "구 템플릿 #567",
      timestamp: "2024-01-15 10:15:30",
      details: "사용하지 않는 템플릿을 삭제했습니다.",
      status: "완료"
    }
  ]

  return (
    <PageContainer>
      <PageHeader
        title="작업 로그 조회"
        description="시스템 내 모든 사용자의 작업 내역을 확인하고 관리합니다"
      />

      {/* 검색 및 필터 섹션 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <Search className="h-5 w-5" />
            검색 및 필터
          </CardTitle>
          <CardDescription>
            특정 조건으로 작업 로그를 검색하세요
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <div className="space-y-2">
              <Label htmlFor="user-search">사용자 검색</Label>
              <Input
                id="user-search"
                placeholder="사용자명 또는 ID 입력"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="action-search">작업 유형</Label>
              <Input
                id="action-search"
                placeholder="작업 유형 입력"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-from">시작 날짜</Label>
              <Input
                id="date-from"
                type="date"
                className="w-full"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="date-to">종료 날짜</Label>
              <Input
                id="date-to"
                type="date"
                className="w-full"
              />
            </div>
          </div>
          <div className="flex justify-end mt-4">
            <Button>
              <Search className="mr-2 h-4 w-4" />
              검색
            </Button>
          </div>
        </CardContent>
      </Card>

      {/* 작업 로그 목록 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <History className="h-5 w-5" />
            작업 로그 목록
          </CardTitle>
          <CardDescription>
            총 {workLogs.length}개의 작업 로그가 있습니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {workLogs.map((log) => (
              <div key={log.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="font-medium text-lg">{log.action}</span>
                      <span className="inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-green-100 text-green-800 hover:bg-green-200">
                        {log.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <User className="h-3 w-3" />
                        <span>{log.userName} ({log.userId})</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{log.timestamp}</span>
                      </div>
                    </div>
                    <div className="text-sm">
                      <span className="font-medium">대상: </span>
                      <span>{log.target}</span>
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {log.details}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <FileText className="h-3 w-3 mr-1" />
                      상세보기
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              페이지 1 / 10 (총 100개 항목)
            </div>
            <div className="flex gap-2">
              <Button variant="outline" size="sm" disabled>
                이전
              </Button>
              <Button variant="outline" size="sm">
                1
              </Button>
              <Button variant="outline" size="sm">
                2
              </Button>
              <Button variant="outline" size="sm">
                3
              </Button>
              <Button variant="outline" size="sm">
                다음
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      {/* 통계 카드 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">오늘 작업 수</CardTitle>
            <History className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">45</div>
            <p className="text-xs text-muted-foreground">
              +12% 어제 대비
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">활성 사용자</CardTitle>
            <User className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">8</div>
            <p className="text-xs text-muted-foreground">
              오늘 활동한 사용자
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">문항 생성</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">23</div>
            <p className="text-xs text-muted-foreground">
              오늘 생성된 문항
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">평가세트 수정</CardTitle>
            <Settings className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">12</div>
            <p className="text-xs text-muted-foreground">
              오늘 수정된 평가세트
            </p>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
