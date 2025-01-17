import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { SizeConverterForm } from "@/components/converters/SizeConverterForm";
import { useI18n } from "@/lib/i18n/useTranslation";

const SizeConverter = () => {
  const { t } = useI18n();

  return (
    <div className="container max-w-4xl mx-auto space-y-8 p-4">
      <Card className="bg-card border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            {t("tools.sizeConverter.title")}
          </CardTitle>
          <p className="text-muted-foreground">
            {t("tools.sizeConverter.description")}
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          <Card className="border-none bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl">Easy Tool</CardTitle>
            </CardHeader>
            <CardContent>
              <SizeConverterForm />
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl">{t("tools.sizeConverter.questions.title")}</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">{t("tools.sizeConverter.questions.whatIs")}</h3>
                  <p className="text-muted-foreground">
                    {t("tools.sizeConverter.questions.answer")}
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
        </CardContent>
      </Card>
    </div>
  );
};

export default SizeConverter;