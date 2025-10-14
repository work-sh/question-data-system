import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { SearchFilter } from "@/components/SearchFilter";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";
import { BookOpen, Edit, FilePlus, List } from "lucide-react";

export const Route = createFileRoute("/database/textbooks/")({
  component: TextbooksPage,
});

function TextbooksPage() {
  const textbooks = [
    {
      id: "tb001",
      title: "수학 1",
      description: "고등학교 1학년 수학 교과서",
      grade: "1학년",
      subject: "수학",
      status: "활성",
      created: "2024-01-15",
    },
  ];

  const filterFields = [
    {
      type: "select" as const,
      label: "과목",
      placeholder: "과목 선택",
      options: [
        { value: "all", label: "전체" },
        { value: "math", label: "수학" },
        { value: "science", label: "과학" },
        { value: "korean", label: "국어" },
        { value: "english", label: "영어" },
      ],
    },
    {
      type: "select" as const,
      label: "학년",
      placeholder: "학년 선택",
      options: [
        { value: "all", label: "전체" },
        { value: "1", label: "1학년" },
        { value: "2", label: "2학년" },
        { value: "3", label: "3학년" },
      ],
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="교과서 관리"
        description="교과서 정보를 관리합니다"
        actions={[
          {
            label: "목록",
            icon: List,
            variant: "outline",
          },
          {
            label: "등록",
            icon: FilePlus,
          },
        ]}
      />

      <SearchFilter
        title="검색 및 필터"
        description="교과서를 검색하고 필터링합니다"
        searchPlaceholder="교과서 검색..."
        filterFields={filterFields}
      />

      <div className="space-y-4">
        {textbooks.map(textbook => (
          <div key={textbook.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-blue-100 text-blue-800">
                  <BookOpen className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium">{textbook.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {textbook.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {textbook.grade}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {textbook.status}
                </span>
                <Button variant="outline" size="sm">
                  <Edit className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
