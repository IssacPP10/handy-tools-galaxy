import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const Temperature = () => {
  return (
    <div className="container max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            Temperature Converter
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Coming soon! This tool will help you convert between different temperature units.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default Temperature;