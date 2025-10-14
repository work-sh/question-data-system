import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { SearchFilter } from "@/components/SearchFilter";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";
import { Edit, FilePlus, List, NotepadTextDashed } from "lucide-react";

export const Route = createFileRoute("/database/sources/")({
  component: SourcesPage,
});

function SourcesPage() {
  const sources = [
    {
      id: "src001",
      title: "교육부",
      description: "교육부 공식 출처",
      type: "공식",
      status: "활성",
      created: "2024-01-15",
    },
  ];

  const filterFields = [
    {
      type: "select" as const,
      label: "유형",
      placeholder: "유형 선택",
      options: [
        { value: "all", label: "전체" },
        { value: "official", label: "공식" },
        { value: "private", label: "사설" },
        { value: "other", label: "기타" },
      ],
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="출처 관리"
        description="출처 정보를 관리합니다"
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
        description="출처를 검색하고 필터링합니다"
        searchPlaceholder="출처 검색..."
        filterFields={filterFields}
      />

      <div className="space-y-4">
        {sources.map(source => (
          <div key={source.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex aspect-square size-10 items-center justify-center rounded-lg bg-pink-100 text-pink-800">
                  <NotepadTextDashed className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium">{source.title}</h3>
                  <p className="text-sm text-muted-foreground">
                    {source.description}
                  </p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {source.type}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {source.status}
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
