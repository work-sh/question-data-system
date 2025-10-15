import { PageContainer } from "@/components/PageContainer";
import { PageHeader } from "@/components/PageHeader";
import { createFileRoute } from "@tanstack/react-router";
import { ArrowLeft, Save } from "lucide-react";

export const Route = createFileRoute("/items/create")({
  component: CreateQuestionPage,
});

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
            href: "/items",
          },
          {
            label: "저장",
            icon: Save,
          },
        ]}
      />
    </PageContainer>
  );
}
