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
import { Checkbox } from "@/components/ui/checkbox";

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
  const [options, setOptions] = useState({
    accuracy: false,
    lowercase: true,
    stringify: true,
    shortcut: false,
  });

  const convert = (value: string, from: Unit, to: Unit): string => {
    const numValue = parseFloat(value);
    if (isNaN(numValue)) return "0";
    const result = numValue * conversionRates[from][to];
    return result.toFixed(options.accuracy ? 6 : 2);
  };

  const handleValueChange = (newValue: string) => {
    setValue(newValue);
  };

  const result = convert(value, fromUnit, toUnit);

  return (
    <div className="container max-w-4xl mx-auto space-y-8 p-4">
      <Card className="bg-card border-none shadow-lg">
        <CardHeader>
          <CardTitle className="text-3xl font-bold text-primary">
            Length Converter
          </CardTitle>
          <p className="text-muted-foreground">
            Length Converter is a free online unit converter to instantly convert units of
            length in or between metric and imperial units like feet to meter.
          </p>
        </CardHeader>
        <CardContent className="space-y-8">
          <Card className="border-none bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl">Easy Tool</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div className="space-y-2">
                  <Label>Convert From</Label>
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
                  <Label>Convert to</Label>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-2 bg-background rounded-md border">
                      {result} {units[toUnit].toLowerCase()}
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
                  <Label>Options</Label>
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
                        Accuracy
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
                        Stringify
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
                        Lowercase
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
                        Shortcut
                      </label>
                    </div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          <Card className="border-none bg-muted/50">
            <CardHeader>
              <CardTitle className="text-xl">Questions</CardTitle>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold mb-2">What is unit of length?</h3>
                  <p className="text-muted-foreground">
                    A <em>unit of length</em> refers to any arbitrarily chosen and accepted reference standard for{" "}
                    <em>measurement of length</em>. The most common units in modern use are the{" "}
                    <em>metric units</em>, used in every country globally. In the United States
                    the U.S. customary units are also in use. British <em>Imperial units</em>{" "}
                    are still used for some purposes in the United Kingdom and some other
                    countries. The metric system is sub-divided into SI and non-SI units. Our{" "}
                    <em>length converter</em> tool provides to convert units between or in
                    those unit systems.
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