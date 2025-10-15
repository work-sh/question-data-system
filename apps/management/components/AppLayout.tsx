import { useQuestionActions, useQuestionLayout } from "@/hooks";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@workspace/ui/components/breadcrumb";
import { Separator } from "@workspace/ui/components/separator";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@workspace/ui/components/sidebar";
import { ReactNode } from "react";
import { AppSidebar } from "./AppSidebar";
import { QuestionEditSidebar } from "./QuestionEditSidebar";
import { QuestionToolbar } from "./QuestionToolbar";

interface AppLayoutProps {
  children: ReactNode;
}

export function AppLayout({ children }: AppLayoutProps) {
  const { isItemsPage, isQuestionSidebarCollapsed, toggleQuestionSidebar } =
    useQuestionLayout();
  const { handlePreview, handleShare } = useQuestionActions();

  return (
    <SidebarProvider className="bg-sidebar">
      <AppSidebar />
      <SidebarInset className="m-4 ml-0 rounded-xl shadow-sm">
        <header className="flex h-16 shrink-0 items-center gap-2 justify-between">
          <div className="flex items-center gap-2 px-4">
            <SidebarTrigger className="-ml-1" />
            <Separator
              orientation="vertical"
              className="mr-2 data-[orientation=vertical]:h-4"
            />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem className="hidden md:block">
                  <BreadcrumbLink href="#">
                    Building Your Application
                  </BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator className="hidden md:block" />
                <BreadcrumbItem>
                  <BreadcrumbPage>Data Fetching</BreadcrumbPage>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          {/* 문항 라이브러리 페이지에서만 노출 */}
          {isItemsPage && (
            <QuestionToolbar
              isQuestionSidebarCollapsed={isQuestionSidebarCollapsed}
              onToggleQuestionSidebar={toggleQuestionSidebar}
              onPreview={handlePreview}
              onShare={handleShare}
            />
          )}
        </header>
        <div className="flex flex-1 flex-col gap-4 p-4 pt-0">{children}</div>
      </SidebarInset>

      {/* 문항 라이브러리 페이지에서만 노출 */}
      {/* 우측 문항 편집 사이드바 */}
      {isItemsPage && (
        <QuestionEditSidebar isCollapsed={isQuestionSidebarCollapsed} />
      )}
    </SidebarProvider>
  );
}
