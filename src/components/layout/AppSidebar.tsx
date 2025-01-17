import { Home, Calculator, Ruler, Type, Thermometer } from "lucide-react";
import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarMenu,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import { Link } from "react-router-dom";

const tools = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Calculators", icon: Calculator, path: "/calculators" },
  { title: "Converters", icon: Ruler, path: "/converters" },
  { title: "Text Tools", icon: Type, path: "/text-tools" },
  { title: "Measurement", icon: Thermometer, path: "/measurement" },
];

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tools.map((tool) => (
                <SidebarMenuItem key={tool.title}>
                  <SidebarMenuButton asChild>
                    <Link to={tool.path}>
                      <tool.icon className="h-4 w-4" />
                      <span>{tool.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}