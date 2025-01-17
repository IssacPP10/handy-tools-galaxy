import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const units = {
  px: "Pixels",
  cm: "Centimeters",
  mm: "Millimeters",
  in: "Inches",
  pt: "Points",
};

type Unit = keyof typeof units;

const conversionRates: Record<Unit, Record<Unit, number>> = {
  px: { px: 1, cm: 0.026458, mm: 0.264583, in: 0.010417, pt: 0.75 },
  cm: { px: 37.795276, cm: 1, mm: 10, in: 0.393701, pt: 28.346457 },
  mm: { px: 3.779528, cm: 0.1, mm: 1, in: 0.039370, pt: 2.834646 },
  in: { px: 96, cm: 2.54, mm: 25.4, in: 1, pt: 72 },
  pt: { px: 1.333333, cm: 0.035278, mm: 0.352778, in: 0.013889, pt: 1 },
};

const SizeConverter = () => {
  const [value, setValue] = useState<string>("0");
  const [fromUnit, setFromUnit] = useState<Unit>("px");
  const [toUnit, setToUnit] = useState<Unit>("cm");

  const convert = (value: string, from: Unit, to: Unit): string => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "0";
    const result = numValue * conversionRates[from][to];
    return result.toFixed(6);
  };

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const result = convert(value, fromUnit, toUnit);

  return (
    <div className="container max-w-2xl mx-auto space-y-6">
      <Card>
        <CardHeader>
          <CardTitle className="text-2xl font-bold text-primary">
            Size Converter
          </CardTitle>
        </CardHeader>
        <CardContent className="space-y-6">
          <div className="grid gap-4">
            <div className="space-y-2">
              <Label htmlFor="value">Value</Label>
              <Input
                id="value"
                type="number"
                value={value}
                onChange={(e) => handleValueChange(e.target.value)}
                placeholder="Enter value"
              />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label>From</Label>
                <Select
                  value={fromUnit}
                  onValueChange={(value) => setFromUnit(value as Unit)}
                >
                  <SelectTrigger>
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
              <div className="space-y-2">
                <Label>To</Label>
                <Select
                  value={toUnit}
                  onValueChange={(value) => setToUnit(value as Unit)}
                >
                  <SelectTrigger>
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
            <div className="pt-4">
              <div className="text-2xl font-bold text-primary">
                {result} {units[toUnit]}
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SizeConverter;