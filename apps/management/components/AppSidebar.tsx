"use client"

import * as React from "react"
import { Link } from '@tanstack/react-router'
import {
  Home,
  Users,
  BookOpen,
  FileText,
  NotepadTextDashed,
  Layers,
  Tag,
  Code,
  History,
  AlertTriangle,
  ChevronRight,
  Database,
  BarChart3,
  Settings,
} from "lucide-react"

import { NavUser } from "@/components/NavUser"
import { TeamSwitcher } from "@/components/TeamSwitcher"
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarHeader,
  SidebarRail,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
} from "@workspace/ui/components/sidebar"
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"

const sidebarMenuItems = [
  {
    group: "대시보드",
    items: [
      { to: "/", icon: Home, label: "대시보드" }
    ]
  },
  {
    group: "사용자 관리",
    items: [
      { to: "/users", icon: Users, label: "사용자 관리" } 
    ]
  },
  {
    group: "문항 관리",
    items: [
      { to: "/question", icon: BookOpen, label: "문항 관리" },
    ]
  },
  {
    group: "평가세트 관리",
    items: [
      { to: "/assessment-sets", icon: FileText, label: "평가세트 관리" },
    ]
  },
  {
    group: "출제자료 관리",
    items: [
      { to: "/sources", icon: NotepadTextDashed, label: "출제자료 관리" }
    ]
  },
  {
    group: "데이터베이스 관리",
    icon: Database,
    items: [
      { to: "/database/textbooks", icon: BookOpen, label: "교과서 관리" },
      { to: "/database/chapters", icon: Layers, label: "단원 관리" },
      { to: "/database/domains", icon: Tag, label: "도메인 관리" },
      { to: "/database/codes", icon: Code, label: "코드 관리" },
      { to: "/database/sources", icon: NotepadTextDashed, label: "출처 관리" },
      { to: "/database/user-activity", icon: History, label: "사용자 작업 내역" },
      { to: "/database/work-logs", icon: History, label: "작업 로그 조회" },
      { to: "/database/error-logs", icon: AlertTriangle, label: "오류 로그 조회" }
    ]
  },
  {
    group: "템플릿 관리",
    icon: Settings,
    items: [
      { to: "/templates/question-types", icon: FileText, label: "문항유형" },
      { to: "/templates/test-papers", icon: FileText, label: "시험지" },
    ]
  },
  {
    group: "통계 관리",
    icon: BarChart3,
    items: [
      { to: "/statistics/conversion-stats", icon: FileText, label: "변환통계" },
      { to: "/statistics/possession-stats", icon: FileText, label: "보유통계" },
      { to: "/statistics/usage-stats", icon: FileText, label: "사용통계" },
    ]
  }
]

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
}

export function AppSidebar({ ...props }: React.ComponentProps<typeof Sidebar>) {
  return (
    <Sidebar collapsible="icon" {...props} className="border-none">
      <SidebarHeader>
        <TeamSwitcher teams={data.teams} />
      </SidebarHeader>
      <SidebarContent>
        {sidebarMenuItems.map((menuGroup, groupIndex) => (
          <SidebarGroup key={groupIndex}>
            <SidebarGroupLabel>{menuGroup.group}</SidebarGroupLabel>
            <SidebarGroupContent>
              <SidebarMenu>
                {menuGroup.items.length > 1 && menuGroup.icon ? (
                  // Collapsible for groups with multiple items
                  <Collapsible
                    key={menuGroup.group}
                    asChild
                    defaultOpen={true}
                    className="group/collapsible"
                  >
                    <SidebarMenuItem>
                      <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={menuGroup.group}>
                          <menuGroup.icon className="h-4 w-4" />
                          <span>{menuGroup.group}</span>
                          <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                      </CollapsibleTrigger>
                      <CollapsibleContent>
                        <SidebarMenuSub>
                          {menuGroup.items.map((item, itemIndex) => {
                            const IconComponent = item.icon
                            return (
                              <SidebarMenuSubItem key={itemIndex}>
                                <SidebarMenuSubButton asChild>
                                  <Link to={item.to}>
                                    <IconComponent className="h-4 w-4" />
                                    <span>{item.label}</span>
                                  </Link>
                                </SidebarMenuSubButton>
                              </SidebarMenuSubItem>
                            )
                          })}
                        </SidebarMenuSub>
                      </CollapsibleContent>
                    </SidebarMenuItem>
                  </Collapsible>
                ) : (
                  // Regular items for groups with single items
                  menuGroup.items.map((item, itemIndex) => {
                    const IconComponent = item.icon
                    return (
                      <SidebarMenuItem key={itemIndex}>
                        <SidebarMenuButton asChild>
                          <Link to={item.to}>
                            <IconComponent className="h-4 w-4" />
                            <span>{item.label}</span>
                          </Link>
                        </SidebarMenuButton>
                      </SidebarMenuItem>
                    )
                  })
                )}
              </SidebarMenu>
            </SidebarGroupContent>
          </SidebarGroup>
        ))}
      </SidebarContent>
      <SidebarFooter>
        <NavUser user={data.user} />
      </SidebarFooter>
      <SidebarRail />
    </Sidebar>
  )
}
