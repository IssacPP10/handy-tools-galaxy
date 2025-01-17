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
  { title: "Acid Test Calculator", icon: Calculator, path: "/calculators/acid-test" },
  { title: "Size Converter", icon: Ruler, path: "/converters/size" },
  { title: "Text Counter", icon: Type, path: "/text-tools/counter" },
  { title: "Temperature Converter", icon: Thermometer, path: "/converters/temperature" },
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
                    <Link to={tool.path} className="hover:text-primary transition-colors">
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