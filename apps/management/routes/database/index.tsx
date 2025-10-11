import { createFileRoute } from '@tanstack/react-router'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@workspace/ui/components/card"
import { Button } from "@workspace/ui/components/button"
import { BookOpen, Layers, Tag, Code, History, FileText, AlertTriangle, NotepadTextDashed } from "lucide-react"
import { Link } from '@tanstack/react-router'
import { PageHeader } from "@/components/PageHeader"
import { PageContainer } from "@/components/PageContainer"

export const Route = createFileRoute('/database/')({
  component: DatabasePage,
})

function DatabasePage() {
  const databaseItems = [
    {
      title: "교과서 관리",
      description: "교과서 정보를 관리합니다",
      icon: BookOpen,
      href: "/database/textbooks",
      color: "bg-blue-100 text-blue-800"
    },
    {
      title: "단원 관리",
      description: "단원 정보를 관리합니다",
      icon: Layers,
      href: "/database/chapters",
      color: "bg-green-100 text-green-800"
    },
    {
      title: "도메인 관리",
      description: "도메인 정보를 관리합니다",
      icon: Tag,
      href: "/database/domains",
      color: "bg-purple-100 text-purple-800"
    },
    {
      title: "코드 관리",
      description: "코드 정보를 관리합니다",
      icon: Code,
      href: "/database/codes",
      color: "bg-orange-100 text-orange-800"
    },
    {
      title: "출처 관리",
      description: "출처 정보를 관리합니다",
      icon: NotepadTextDashed,
      href: "/database/sources",
      color: "bg-pink-100 text-pink-800"
    },
    {
      title: "사용자 작업 내역",
      description: "사용자 작업 내역을 조회합니다",
      icon: History,
      href: "/database/user-activity",
      color: "bg-gray-100 text-gray-800"
    },
    {
      title: "작업 로그 조회",
      description: "시스템 작업 로그를 조회합니다",
      icon: FileText,
      href: "/database/activity-logs",
      color: "bg-indigo-100 text-indigo-800"
    },
    {
      title: "오류 로그 조회",
      description: "시스템 오류 로그를 조회합니다",
      icon: AlertTriangle,
      href: "/database/error-logs",
      color: "bg-red-100 text-red-800"
    }
  ]

  return (
    <PageContainer>
      <PageHeader
        title="데이터베이스 관리"
        description="시스템의 기본 데이터와 로그를 관리합니다"
      />

      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        {databaseItems.map((item) => (
          <Card key={item.title} className="hover:shadow-md transition-shadow">
            <CardHeader>
              <div className="flex items-center gap-3">
                <div className={`flex aspect-square size-10 items-center justify-center rounded-lg ${item.color}`}>
                  <item.icon className="size-5" />
                </div>
                <div>
                  <CardTitle className="text-lg">{item.title}</CardTitle>
                  <CardDescription className="text-sm">
                    {item.description}
                  </CardDescription>
                </div>
              </div>
            </CardHeader>
            <CardContent>
              <Button asChild className="w-full">
                <Link to={item.href}>
                  관리하기
                </Link>
              </Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </PageContainer>
  )
}