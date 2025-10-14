import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { useAuthStore } from "@/stores";
import { createFileRoute } from "@tanstack/react-router";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@workspace/ui/components/card";
import { Contact, SquareAsterisk } from "lucide-react";

export const Route = createFileRoute("/my-account/profile")({
  component: Profile,
});

function Profile() {
  const { user } = useAuthStore();

  return (
    <PageContainer>
      <PageHeader
        title="내 정보"
        description="내 계정 정보를 관리합니다"
        actions={[
          {
            label: "개인정보 수정",
            icon: Contact,
            variant: "outline",
          },
          {
            label: "비밀번호 변경",
            icon: SquareAsterisk,
          },
        ]}
      />

      <Card>
        <CardHeader>
          <CardTitle>계정 정보</CardTitle>
          <CardDescription>내 계정 정보를 관리합니다</CardDescription>
        </CardHeader>
        <CardContent className="space-y-4">
          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                이름
              </label>
              <p className="text-sm">{user?.name || "Not set"}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                이메일
              </label>
              <p className="text-sm">{user?.email}</p>
            </div>
            <div>
              <label className="text-sm font-medium text-muted-foreground">
                사용자 ID
              </label>
              <p className="text-sm">{user?.id}</p>
            </div>
          </div>
        </CardContent>
      </Card>
    </PageContainer>
  );
}
