import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { Input } from "@workspace/ui/components/input"
import { Label } from "@workspace/ui/components/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@workspace/ui/components/select"
import { ArrowLeft, Save } from "lucide-react"
import { PageHeader } from "@/components/PageHeader"
import { PageContainer } from "@/components/PageContainer"
import { Link } from '@tanstack/react-router'

export const Route = createFileRoute('/items/create')({
  component: CreateQuestionPage,
})

function CreateQuestionPage() {
  return (
    <PageContainer>
      <PageHeader
        title="새 문항 생성"
        description="새로운 문항을 생성합니다"
        actions={[
          {
            label: "목록으로",
            icon: ArrowLeft,
            variant: "outline",
            href: "/questions"
          },
          {
            label: "저장",
            icon: Save
          }
        ]}
      />

      <div className="grid gap-6 md:grid-cols-2">
        <Card>
          <CardHeader>
            <CardTitle>기본 정보</CardTitle>
            <CardDescription>
              문항의 카테고리, 난이도 등을 설정합니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="title">문항 제목</Label>
              <Input id="title" placeholder="문항 제목을 입력하세요" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="category">카테고리</Label>
              <Select>
                <SelectTrigger id="category">
                  <SelectValue placeholder="카테고리 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="math">수학</SelectItem>
                  <SelectItem value="english">영어</SelectItem>
                  <SelectItem value="korean">국어</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <Label htmlFor="difficulty">난이도</Label>
              <Select>
                <SelectTrigger id="difficulty">
                  <SelectValue placeholder="난이도 선택" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="easy">하</SelectItem>
                  <SelectItem value="medium">중</SelectItem>
                  <SelectItem value="hard">상</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </CardContent>
        </Card>

        <Card>
          <CardHeader>
            <CardTitle>문항 내용</CardTitle>
            <CardDescription>
              문항의 내용과 정답을 입력합니다
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="content">문제 내용</Label>
              <Input
                id="content"
                placeholder="문제 내용을 입력하세요"
              />
            </div>

            <div className="space-y-2">
              <Label htmlFor="options">보기 (객관식인 경우)</Label>
              <div className="space-y-2">
                <Input placeholder="보기 1" />
                <Input placeholder="보기 2" />
                <Input placeholder="보기 3" />
                <Input placeholder="보기 4" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="answer">정답</Label>
              <Input id="answer" placeholder="정답을 입력하세요" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="explanation">해설</Label>
              <Input
                id="explanation"
                placeholder="해설을 입력하세요"
              />
            </div>
          </CardContent>
        </Card>
      </div>
    </PageContainer>
  )
}