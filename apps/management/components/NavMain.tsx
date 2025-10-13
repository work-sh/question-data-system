"use client"

import { ChevronRight, type LucideIcon } from "lucide-react"

import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from "@workspace/ui/components/collapsible"
import {
  SidebarGroup,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
  SidebarMenuSub,
  SidebarMenuSubButton,
  SidebarMenuSubItem,
  useSidebar,
} from "@workspace/ui/components/sidebar"
import { cn } from "@workspace/ui/lib/utils"
import { Link } from "@tanstack/react-router"

export function NavMain({
  items,
}: {
  items: {
    title: string
    url: string
    icon?: LucideIcon
    isActive?: boolean
    items?: {
      title: string
      url: string
    }[]
  }[]
}) {
const { state } = useSidebar();

  const handleCollapsibleClick = (e: React.MouseEvent) => {
    if (state === "collapsed") {
      e.preventDefault()
    }
  }
  return (
    <SidebarGroup>
    {/* <SidebarGroupLabel>Platform</SidebarGroupLabel> */}
        <SidebarMenu>
            {items.map((item) => (
                <Collapsible
                    key={item.title}
                    asChild
                    defaultOpen={item.isActive}
                    className="group/collapsible"
                >
                    <SidebarMenuItem>
                    {item.items && item.items?.length > 0 ? (
                        <>
                        <CollapsibleTrigger asChild>
                        <SidebarMenuButton tooltip={item.title}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                            <ChevronRight className="ml-auto transition-transform duration-200 group-data-[state=open]/collapsible:rotate-90" />
                        </SidebarMenuButton>
                        </CollapsibleTrigger>
                        <CollapsibleContent>
                        <SidebarMenuSub>
                            {item.items?.map((subItem) => (
                            <SidebarMenuSubItem key={subItem.title}>
                                <SidebarMenuSubButton asChild>
                                <Link to={subItem.url}>
                                    <span>{subItem.title}</span>
                                </Link>
                                </SidebarMenuSubButton>
                            </SidebarMenuSubItem>
                            ))}
                        </SidebarMenuSub>
                        </CollapsibleContent>
                        </>)
                        : (
                        <SidebarMenuButton tooltip={item.title} asChild>
                            <Link to={item.url} onClick={handleCollapsibleClick} className={cn(state === "collapsed" && "cursor-default")}>
                            {item.icon && <item.icon />}
                            <span>{item.title}</span>
                            </Link>
                        </SidebarMenuButton>
                    )}
                    </SidebarMenuItem>
                </Collapsible>
            ))}
        </SidebarMenu>
    </SidebarGroup>
  )
}
