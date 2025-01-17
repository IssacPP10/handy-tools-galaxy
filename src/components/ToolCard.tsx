import { Card, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Link } from "react-router-dom";

interface ToolCardProps {
  title: string;
  description: string;
  path: string;
}

export function ToolCard({ title, description, path }: ToolCardProps) {
  return (
    <Link to={path}>
      <Card className="hover:bg-muted hover:scale-[1.02] hover:shadow-lg transition-all duration-200 border-border/50">
        <CardHeader>
          <CardTitle className="text-lg text-primary">{title}</CardTitle>
          <CardDescription className="text-muted-foreground">{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}