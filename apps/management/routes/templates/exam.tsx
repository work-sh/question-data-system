import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { 
  FileText, 
  Plus, 
  Edit, 
  Trash2,
  Eye,
  Copy,
  Download,
  Calendar,
  Clock,
  Users,
} from "lucide-react"
import { PageHeader } from '@/components/PageHeader'
import { PageContainer } from '@/components/PageContainer'
import { SearchFilter } from '@/components/SearchFilter'

export const Route = createFileRoute('/templates/exam')({
  component: TestPapersPage,
})

function TestPapersPage() {
  // 임시 데이터
  const testPapers = [
    {
      id: 1,
      title: "2024년 1학기 중간고사",
      subject: "수학",
      grade: "고등학교 1학년",
      totalQuestions: 20,
      totalTime: 90,
      totalScore: 100,
      status: "활성",
      createdAt: "2024-01-15",
      updatedAt: "2024-01-15"
    },
    {
      id: 2,
      title: "2024년 1학기 기말고사",
      subject: "국어",
      grade: "고등학교 2학년",
      totalQuestions: 25,
      totalTime: 100,
      totalScore: 100,
      status: "활성",
      createdAt: "2024-01-14",
      updatedAt: "2024-01-14"
    },
    {
      id: 3,
      title: "2023년 2학기 기말고사",
      subject: "영어",
      grade: "고등학교 3학년",
      totalQuestions: 30,
      totalTime: 120,
      totalScore: 100,
      status: "비활성",
      createdAt: "2024-01-13",
      updatedAt: "2024-01-13"
    }
  ]

  const filterFields = [
    {
      type: 'select' as const,
      label: '과목',
      placeholder: '과목 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: 'math', label: '수학' },
        { value: 'korean', label: '국어' },
        { value: 'english', label: '영어' },
        { value: 'science', label: '과학' }
      ]
    },
    {
      type: 'select' as const,
      label: '학년',
      placeholder: '학년 선택',
      options: [
        { value: 'all', label: '전체' },
        { value: '1', label: '1학년' },
        { value: '2', label: '2학년' },
        { value: '3', label: '3학년' }
      ]
    },
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
        title="시험지 관리"
        description="시험지 템플릿을 관리하고 설정합니다"
        actions={[
          {
            label: "내보내기",
            icon: Download,
            variant: "outline"
          },
          {
            label: "새 시험지",
            icon: Plus
          }
        ]}
      />

      <SearchFilter
        searchPlaceholder="시험지 제목 검색..."
        filterFields={filterFields}
      />

      {/* 시험지 목록 */}
      <Card>
        <CardHeader>
          <CardTitle className="flex items-center gap-2">
            <FileText className="h-5 w-5" />
            시험지 목록
          </CardTitle>
          <CardDescription>
            총 {testPapers.length}개의 시험지가 있습니다
          </CardDescription>
        </CardHeader>
        <CardContent>
          <div className="space-y-4">
            {testPapers.map((paper) => (
              <div key={paper.id} className="border rounded-lg p-4 hover:bg-muted/50 transition-colors">
                <div className="flex items-start justify-between">
                  <div className="space-y-2 flex-1">
                    <div className="flex items-center gap-2">
                      <h3 className="font-medium text-lg">{paper.title}</h3>
                      <span className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${
                        paper.status === '활성' 
                          ? 'bg-green-100 text-green-800 hover:bg-green-200' 
                          : 'bg-gray-100 text-gray-800 hover:bg-gray-200'
                      }`}>
                        {paper.status}
                      </span>
                    </div>
                    <div className="flex items-center gap-4 text-sm text-muted-foreground">
                      <div className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        <span>{paper.subject}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Users className="h-3 w-3" />
                        <span>{paper.grade}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-6 text-sm">
                      <div className="flex items-center gap-1">
                        <FileText className="h-3 w-3" />
                        <span>문제 {paper.totalQuestions}개</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Clock className="h-3 w-3" />
                        <span>{paper.totalTime}분</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-3 w-3" />
                        <span>{paper.totalScore}점</span>
                      </div>
                    </div>
                    <div className="text-xs text-muted-foreground">
                      생성: {paper.createdAt} | 수정: {paper.updatedAt}
                    </div>
                  </div>
                  <div className="flex gap-2">
                    <Button variant="outline" size="sm">
                      <Eye className="h-3 w-3 mr-1" />
                      보기
                    </Button>
                    <Button variant="outline" size="sm">
                      <Edit className="h-3 w-3 mr-1" />
                      편집
                    </Button>
                    <Button variant="outline" size="sm">
                      <Copy className="h-3 w-3 mr-1" />
                      복사
                    </Button>
                    <Button variant="outline" size="sm">
                      <Trash2 className="h-3 w-3 mr-1" />
                      삭제
                    </Button>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* 페이지네이션 */}
          <div className="flex items-center justify-between mt-6">
            <div className="text-sm text-muted-foreground">
              페이지 1 / 3 (총 15개 항목)
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

      {/* 통계 */}
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 시험지</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{testPapers.length}</div>
            <p className="text-xs text-muted-foreground">
              등록된 시험지 수
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">활성 시험지</CardTitle>
            <Calendar className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">2</div>
            <p className="text-xs text-muted-foreground">
              현재 사용 가능한 시험지
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">총 문제 수</CardTitle>
            <FileText className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">75</div>
            <p className="text-xs text-muted-foreground">
              모든 시험지의 총 문제 수
            </p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">평균 시험 시간</CardTitle>
            <Clock className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">103</div>
            <p className="text-xs text-muted-foreground">
              분
            </p>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}
