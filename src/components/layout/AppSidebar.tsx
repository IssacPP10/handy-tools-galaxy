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
import { Switch } from "@/components/ui/switch";
import { Link, useLocation } from "react-router-dom";
import { useI18n } from "@/lib/i18n/useTranslation";

const tools = [
  { title: "Dashboard", icon: Home, path: "/" },
  { title: "Acid Test Calculator", icon: Calculator, path: "/calculators/acid-test" },
  { title: "Size Converter", icon: Ruler, path: "/converters/size" },
  { title: "Text Counter", icon: Type, path: "/text-tools/counter" },
  { title: "Temperature Converter", icon: Thermometer, path: "/converters/temperature" },
];

export function AppSidebar() {
  const location = useLocation();
  const { language, setLanguage, t } = useI18n();

  const toggleLanguage = () => {
    setLanguage(language === "en" ? "es" : "en");
  };

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarGroup>
          <div className="flex items-center gap-2 px-4 py-2">
            <img src="/Logo.jpg" alt="Tools Galaxy Logo" className="h-8 w-8 rounded-md" />
            <span className="text-lg font-bold text-primary">Tools Galaxy</span>
          </div>
          <SidebarGroupLabel>Tools</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              {tools.map((tool) => (
                <SidebarMenuItem key={tool.title}>
                  <SidebarMenuButton
                    asChild
                    data-active={location.pathname === tool.path}
                  >
                    <Link
                      to={tool.path}
                      className="hover:text-primary transition-colors data-[active=true]:bg-primary/20 data-[active=true]:text-primary"
                    >
                      <tool.icon className="h-4 w-4" />
                      <span>{tool.title}</span>
                    </Link>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              ))}
            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
        
        <SidebarGroup className="mt-auto">
          <div className="flex items-center justify-between px-4 py-2">
            <span className="text-sm">{t("common.language")}</span>
            <div className="flex items-center gap-2">
              <span className="text-sm">EN</span>
              <Switch
                checked={language === "es"}
                onCheckedChange={toggleLanguage}
              />
              <span className="text-sm">ES</span>
            </div>
          </div>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}