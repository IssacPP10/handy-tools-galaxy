import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Counter = () => {
  return (
    <div className="container max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            Pixel & Character Counter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Coming soon! This tool will help you count pixels and characters in text or images.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Counter;