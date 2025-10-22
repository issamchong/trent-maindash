import { SidebarProvider, SidebarInset } from "@/components/ui/sidebar";
import { SidebarNav } from "@/components/dashboard/sidebar-nav";
import { Dashboard } from "@/components/dashboard/dashboard";

export default function Home() {
  return (
    <SidebarProvider>
      <SidebarNav />
      <SidebarInset>
        <Dashboard />
      </SidebarInset>
    </SidebarProvider>
  );
}
