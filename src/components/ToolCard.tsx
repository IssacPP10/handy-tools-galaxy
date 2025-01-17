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
      <Card className="hover:bg-muted transition-colors">
        <CardHeader>
          <CardTitle className="text-lg">{title}</CardTitle>
          <CardDescription>{description}</CardDescription>
        </CardHeader>
      </Card>
    </Link>
  );
}