import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";
import { Unit, units, convert, getUnitShortName, getUnitFullName } from "@/lib/converters/size";
import { useI18n } from "@/lib/i18n/useTranslation";

interface SizeConverterFormProps {
  className?: string;
}

export function SizeConverterForm({ className }: SizeConverterFormProps) {
  const { t } = useI18n();
  const [value, setValue] = useState<string>("0");
  const [fromUnit, setFromUnit] = useState<Unit>("m");
  const [toUnit, setToUnit] = useState<Unit>("cm");
  const [options, setOptions] = useState({
    accuracy: false,
    lowercase: true,
    stringify: true,
    shortcut: false,
  });

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const getResult = (): string => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "0";
    
    const result = convert(numValue, fromUnit, toUnit);
    const formattedNumber = options.accuracy ? result.toFixed(6) : result.toFixed(2);
    
    const unitName = options.shortcut 
      ? getUnitShortName(toUnit)
      : options.stringify 
        ? getUnitFullName(toUnit)
        : toUnit;
        
    const finalUnitName = options.lowercase ? unitName.toLowerCase() : unitName;
    
    return `${formattedNumber} ${finalUnitName}`;
  };

  return (
    <div className={className}>
      <div className="space-y-4">
        <div className="space-y-2">
          <Label>{t("tools.sizeConverter.convertFrom")}</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <Input
              type="number"
              value={value}
              onChange={(e) => handleValueChange(e.target.value)}
              placeholder="Enter value"
              className="bg-background"
            />
            <Select value={fromUnit} onValueChange={(v) => setFromUnit(v as Unit)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(units).map(([key, label]) => (
                  <SelectItem key={key} value={key}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>{t("tools.sizeConverter.convertTo")}</Label>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-2 bg-background rounded-md border">
              {getResult()}
            </div>
            <Select value={toUnit} onValueChange={(v) => setToUnit(v as Unit)}>
              <SelectTrigger className="bg-background">
                <SelectValue placeholder="Select unit" />
              </SelectTrigger>
              <SelectContent>
                {Object.entries(units).map(([key, label]) => (
                  <SelectItem key={key} value={key}>
                    {label}
                  </SelectItem>
                ))}
              </SelectContent>
            </Select>
          </div>
        </div>

        <div className="space-y-2">
          <Label>{t("tools.sizeConverter.options")}</Label>
          <div className="grid grid-cols-2 gap-4">
            <div className="flex items-center space-x-2">
              <Checkbox
                id="accuracy"
                checked={options.accuracy}
                onCheckedChange={(checked) =>
                  setOptions((prev) => ({ ...prev, accuracy: checked as boolean }))
                }
              />
              <label
                htmlFor="accuracy"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("tools.sizeConverter.accuracy")}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="stringify"
                checked={options.stringify}
                onCheckedChange={(checked) =>
                  setOptions((prev) => ({ ...prev, stringify: checked as boolean }))
                }
              />
              <label
                htmlFor="stringify"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("tools.sizeConverter.stringify")}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="lowercase"
                checked={options.lowercase}
                onCheckedChange={(checked) =>
                  setOptions((prev) => ({ ...prev, lowercase: checked as boolean }))
                }
              />
              <label
                htmlFor="lowercase"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("tools.sizeConverter.lowercase")}
              </label>
            </div>
            <div className="flex items-center space-x-2">
              <Checkbox
                id="shortcut"
                checked={options.shortcut}
                onCheckedChange={(checked) =>
                  setOptions((prev) => ({ ...prev, shortcut: checked as boolean }))
                }
              />
              <label
                htmlFor="shortcut"
                className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
              >
                {t("tools.sizeConverter.shortcut")}
              </label>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}