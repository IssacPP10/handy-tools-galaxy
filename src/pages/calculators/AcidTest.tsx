import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const AcidTest = () => {
  return (
    <div className="container max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            Acid Test Ratio Calculator
          </CardTitle>
        </CardHeader>
        <CardContent>
          <p className="text-muted-foreground">
            Coming soon! This tool will help you calculate the acid test ratio for financial analysis.
          </p>
        </CardContent>
      </Card>
    </div>
  );
};

export default AcidTest;