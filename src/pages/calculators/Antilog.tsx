import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { useI18n } from "@/lib/i18n/useTranslation";

export default function AntilogCalculator() {
  const { t } = useI18n();
  const [number, setNumber] = useState<string>("2");
  const [base, setBase] = useState<string>("8");
  const [result, setResult] = useState<number | null>(null);
  const { toast } = useToast();

  const calculateAntilog = () => {
    const num = parseFloat(number);
    const baseNum = parseFloat(base);

    if (isNaN(num) || isNaN(baseNum)) {
      toast({
        title: "Error",
        description: "Please enter valid numbers",
        variant: "destructive",
      });
      return;
    }

    const antilog = Math.pow(baseNum, num);
    setResult(antilog);

    toast({
      title: "Success",
      description: "Antilogarithm calculated successfully!",
    });
  };

  return (
    <div className="container max-w-4xl mx-auto space-y-8 p-4">
      <Card className="bg-card border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
          {t("tools.antilogarithmCalculator.title")}
          </CardTitle>
          <p className="text-muted-foreground">
            {t("tools.antilogarithmCalculator.description")}
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          <Card className="border-none bg-muted/50 w-full">
            <CardHeader>
              <CardTitle className="text-xl">Easy Tool</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid gap-6">
                <div className="space-y-2">
                  <label htmlFor="number" className="text-sm font-medium">
                  {t("tools.antilogarithmCalculator.number")}
                  </label>
                  <Input
                    id="number"
                    type="number"
                    value={number}
                    onChange={(e) => setNumber(e.target.value)}
                    placeholder="Enter a number"
                    className="w-full"
                  />
                </div>

                <div className="space-y-2">
                  <label htmlFor="base" className="text-sm font-medium">
                  {t("tools.antilogarithmCalculator.base")}
                  </label>
                  <Input
                    id="base"
                    type="number"
                    value={base}
                    onChange={(e) => setBase(e.target.value)}
                    placeholder="Enter the base (default: 10)"
                    className="w-full"
                  />
                </div>

                <Button onClick={calculateAntilog} className="w-full">
                {t("tools.antilogarithmCalculator.calculate")}
                </Button>

                {result !== null && (
                  <div className="p-4 bg-muted rounded-lg">
                    <p className="text-sm font-medium">{t("tools.antilogarithmCalculator.result")}</p>
                    <p className="text-2xl font-bold text-primary">{result}</p>
                  </div>
                )}
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl">{t("tools.antilogarithmCalculator.titleQ")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-8">                
                <div>
                  <h3 className="font-semibold mb-2 text-xl">
                    {t("tools.antilogarithmCalculator.question")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("tools.antilogarithmCalculator.answer")}
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-xl">{t("tools.antilogarithmCalculator.explain")}</h3>
                  <ul className="list-disc pl-6 space-y-2 text-muted-foreground">
                    <li>
                      {t("tools.antilogarithmCalculator.p1")}
                    </li>
                    <li>
                      {t("tools.antilogarithmCalculator.p2")}
                    </li>
                    <li>
                      {t("tools.antilogarithmCalculator.p3")}
                    </li>
                    <li>
                      {t("tools.antilogarithmCalculator.p4")}
                    </li>
                  </ul>
                </div>
                
                <div className="p-4 bg-muted/50 border-l-4 border-primary rounded-lg">
                  <p>
                    <code>{t("tools.antilogarithmCalculator.example")}</code>.
                  </p>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-xl">
                    {t("tools.antilogarithmCalculator.howToUse")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("tools.antilogarithmCalculator.desc")}
                  </p>
                  <ol className="list-decimal pl-6 space-y-2 text-muted-foreground">
                    <li>{t("tools.antilogarithmCalculator.s1")}</li>
                    <li>{t("tools.antilogarithmCalculator.s2")}</li>
                    <li>{t("tools.antilogarithmCalculator.s3")}</li>
                  </ol>
                </div>
                
                <div>
                  <h3 className="font-semibold mb-2 text-xl">
                    {t("tools.antilogarithmCalculator.question2")}
                  </h3>
                  <p className="text-muted-foreground">
                    {t("tools.antilogarithmCalculator.exRW")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
}
