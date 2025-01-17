import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { useI18n } from "@/lib/i18n/useTranslation";

const Counter = () => {
  const { t } = useI18n();
  const [text, setText] = useState("");

  const getStats = () => {
    const characters = text.length;
    const words = text.trim() === "" ? 0 : text.trim().split(/\s+/).length;
    const lines = text.trim() === "" ? 0 : text.trim().split(/\n/).length;

    return { characters, words, lines };
  };

  const stats = getStats();

  return (
    <div className="container max-w-2xl mx-auto space-y-6 p-4">
      <Card className="bg-card border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            {t("tools.textCounter.title")}
          </CardTitle>
          <p className="text-muted-foreground">
            {t("tools.textCounter.description")}
          </p>
        </CardHeader>
        <CardContent className="space-y-6">
          <Textarea
            placeholder={t("tools.textCounter.placeholder")}
            className="min-h-[200px] bg-background"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
          <div className="grid grid-cols-3 gap-4">
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold">{stats.characters}</p>
              <p className="text-sm text-muted-foreground">{t("tools.textCounter.characters")}</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold">{stats.words}</p>
              <p className="text-sm text-muted-foreground">{t("tools.textCounter.words")}</p>
            </Card>
            <Card className="p-4 text-center">
              <p className="text-2xl font-bold">{stats.lines}</p>
              <p className="text-sm text-muted-foreground">{t("tools.textCounter.lines")}</p>
            </Card>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default Counter;