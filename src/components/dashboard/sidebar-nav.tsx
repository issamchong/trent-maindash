"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  BarChart3,
  LayoutDashboard,
  Settings,
  Users,
  Briefcase,
  TrendingUp,
  Megaphone,
  Box,
  Truck,
  FileText,
  Cog,
} from "lucide-react";

import {
  Sidebar,
  SidebarHeader,
  SidebarContent,
  SidebarFooter,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
  useSidebar,
} from "@/components/ui/sidebar";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Separator } from "@/components/ui/separator";

export function SidebarNav() {
  const pathname = usePathname();
  const { state } = useSidebar();

  const menuItems = [
    {
      href: "#",
      label: "Vendor Management",
      icon: Truck,
    },
    {
      href: "#",
      label: "Financial Performance",
      icon: TrendingUp,
    },
    {
      href: "#",
      label: "Sales & Growth",
      icon: BarChart3,
    },
    {
      href: "#",
      label: "Marketing & Campaigns",
      icon: Megaphone,
    },
    {
      href: "#",
      label: "Inventory & Logistics",
      icon: Box,
    },
    {
      href: "#",
      label: "Process Automation",
      icon: Cog,
    },
    {
      href: "/",
      label: "Executive Reports",
      icon: FileText,
    },
  ];

  return (
    <Sidebar>
      <SidebarHeader className="p-4">
        <div className="flex items-center gap-3">
          <Briefcase className="h-8 w-8 text-sidebar-accent" />
          {state === 'expanded' && <h1 className="text-xl font-bold text-white">Executive Overview</h1>}
        </div>
      </SidebarHeader>
      <SidebarContent>
        <SidebarMenu>
          {menuItems.map((item) => (
            <SidebarMenuItem key={item.label}>
              <Link href={item.href} passHref>
                <SidebarMenuButton
                  isActive={pathname === item.href && item.href === '/'}
                  tooltip={item.label}
                >
                  <item.icon />
                  <span>{item.label}</span>
                </SidebarMenuButton>
              </Link>
            </SidebarMenuItem>
          ))}
        </SidebarMenu>
      </SidebarContent>
      <Separator className="my-2 bg-sidebar-border" />
      <SidebarFooter>
        <div className="flex items-center gap-3 px-2 py-4">
          <Avatar className="h-10 w-10">
            <AvatarImage src="https://picsum.photos/seed/user-avatar/40/40" alt="User Avatar" data-ai-hint="person portrait" />
            <AvatarFallback>JD</AvatarFallback>
          </Avatar>
          {state === 'expanded' && (
            <div className="flex flex-col text-sm">
              <span className="font-semibold text-sidebar-foreground">
                Jane Doe
              </span>
              <span className="text-xs text-sidebar-foreground/70">
                CEO
              </span>
            </div>
          )}
        </div>
      </SidebarFooter>
    </Sidebar>
  );
}
