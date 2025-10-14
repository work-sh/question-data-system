import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { SearchFilter } from "@/components/SearchFilter";
import { createFileRoute } from "@tanstack/react-router";
import { Button } from "@workspace/ui/components/button";
import { Edit, Plus, Users } from "lucide-react";

export const Route = createFileRoute("/user-management/")({
  component: UsersPage,
});

function UsersPage() {
  const users = [
    {
      id: "u001",
      name: "관리자",
      email: "admin@example.com",
      role: "관리자",
      status: "활성",
      created: "2024-01-15",
    },
    {
      id: "u002",
      name: "김선생",
      email: "kim@example.com",
      role: "교사",
      status: "활성",
      created: "2024-01-14",
    },
  ];

  const filterFields = [
    {
      type: "select" as const,
      label: "역할",
      placeholder: "역할 선택",
      options: [
        { value: "all", label: "전체" },
        { value: "admin", label: "관리자" },
        { value: "teacher", label: "교사" },
        { value: "student", label: "학생" },
      ],
    },
  ];

  return (
    <PageContainer>
      <PageHeader
        title="사용자 관리"
        description="시스템 사용자들을 관리하고 권한을 설정합니다"
        actions={[
          {
            label: "사용자 추가",
            icon: Plus,
          },
        ]}
      />

      <SearchFilter
        title="검색 및 필터"
        description="사용자를 검색하고 필터링합니다"
        searchPlaceholder="사용자 검색..."
        filterFields={filterFields}
      />

      <div className="space-y-4">
        {users.map(user => (
          <div key={user.id} className="border rounded-lg p-4">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="flex aspect-square size-10 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <Users className="size-5" />
                </div>
                <div>
                  <h3 className="font-medium">{user.name}</h3>
                  <p className="text-sm text-muted-foreground">{user.email}</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <span className="px-2 py-1 bg-blue-100 text-blue-800 text-xs rounded-full">
                  {user.role}
                </span>
                <span className="px-2 py-1 bg-green-100 text-green-800 text-xs rounded-full">
                  {user.status}
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
