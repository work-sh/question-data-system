import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { SearchFilter } from "@/components/SearchFilter";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";
import { Edit, FilePlus, Layers, List } from "lucide-react";

export const Route = createFileRoute("/database/chapters/")({
  component: ChaptersPage,
});

function ChaptersPage() {
  const chapters = [
    {
      id: "ch001",
      title: "1. 다항식의 연산",
      description: "수학 1 - 1단원",
      subject: "수학",
      grade: "1학년",
      status: "활성",
      created: "2024-01-15",
    },
    {
      id: "ch002",
      title: "2. 방정식과 부등식",
      description: "수학 1 - 2단원",
      subject: "수학",
      grade: "1학년",
      status: "활성",
      created: "2024-01-14",
    },
  ];

  const columns = [
    { key: "title", label: "단원명" },
    { key: "description", label: "설명" },
    { key: "subject", label: "과목" },
    { key: "grade", label: "학년" },
    { key: "status", label: "상태" },
    { key: "created", label: "생성일" },
    { key: "actions", label: "액션", className: "text-right" },
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

  const renderCell = (column: any, row: any) => {
    if (column.key === "status") {
      const statusClass =
        row.status === "활성"
          ? "bg-green-100 text-green-800 hover:bg-green-200"
          : "bg-gray-100 text-gray-800 hover:bg-gray-200";
      return (
        <span
          className={`inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent ${statusClass}`}
        >
          {row.status}
        </span>
      );
    }

    if (column.key === "actions") {
      return (
        <div className="flex justify-end gap-1">
          <Button variant="ghost" size="sm">
            <Edit className="h-4 w-4" />
          </Button>
        </div>
      );
    }

    return row[column.key] || "-";
  };

  return (
    <PageContainer>
      <PageHeader
        title="단원 관리"
        description="단원 정보를 관리합니다"
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
        description="단원을 검색하고 필터링합니다"
        searchPlaceholder="단원 검색..."
        filterFields={filterFields}
      />

      <div className="space-y-4">
        {chapters.map(chapter => (
          <div key={chapter.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-green-100 text-green-800">
                  <Layers className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium">{chapter.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {chapter.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {chapter.status}
                </span>
                <Button variant="outline" size="sm">
                  편집
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </PageContainer>
  );
}
