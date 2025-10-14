"use client";

import {
  BarChart3,
  BookOpen,
  Database,
  FileText,
  Home,
  Settings,
  Users,
} from "lucide-react";
import * as React from "react";

import { NavUser } from "@/components/NavUser";
import { TeamSwitcher } from "@/components/TeamSwitcher";
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
} from "@workspace/ui/components/sidebar";
import { NavMain } from "./NavMain";

const data = {
  user: {
    name: "Question Data System",
    email: "admin@example.com",
    avatar: "/avatars/admin.jpg",
  },
  teams: [
    {
      name: "Question Data System",
      logo: BookOpen,
      plan: "Enterprise",
    },
  ],
  navMain: [
    {
      title: "대시보드",
      url: "/dashboard",
      icon: Home,
      isActive: false,
    },
    {
      title: "사용자 관리",
      url: "/user-management",
      icon: Users,
      isActive: false,
    },
    {
      title: "문항 관리",
      url: "/items",
      icon: BookOpen,
      isActive: false,
    },
    {
      title: "평가세트 관리",
      url: "/assessments",
      icon: FileText,
      isActive: false,
    },
    {
      title: "데이터베이스 관리",
      url: "/",
      icon: Database,
      isActive: false,
      items: [
        {
          title: "교과서 관리",
          url: "/database/textbooks",
        },
        {
          title: "단원 관리",
          url: "/database/chapters",
        },
        {
          title: "도메인 관리",
          url: "/database/domains",
        },
        {
          title: "코드 관리",
          url: "/database/codes",
        },
        {
          title: "출처 관리",
          url: "/database/sources",
        },
        {
          title: "사용자 작업 내역",
          url: "/database/user-activity",
        },
        {
          title: "작업 로그 조회",
          url: "/database/work-logs",
        },
        {
          title: "오류 로그 조회",
          url: "/database/error-logs",
        },
      ],
    },
    {
      title: "템플릿 관리",
      url: "#",
      icon: Settings,
      items: [
        {
          title: "문항유형",
          url: "/templates/question-types",
        },
        {
          title: "시험지",
          url: "/templates/exam",
        },
      ],
    },
    {
      title: "통계 관리",
      url: "#",
      icon: BarChart3,
      items: [
        {
          title: "변환통계",
          url: "/analytic/conversion",
        },
        {
          title: "보유통계",
          url: "/analytic/possession",
        },
        {
          title: "사용통계",
          url: "/analytic/usage",
        },
      ],
    },
  ],
};

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="border-none">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        <NavMain items={data.navMain} />
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  );
}
