import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useToast } from "@/components/ui/use-toast";

export default function AntilogCalculator() {
  const [number, setNumber] = useState<string>("");
  const [base, setBase] = useState<string>("10");
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
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight text-primary">Antilogarithm Calculator</h1>
        <p className="text-muted-foreground">Calculate antilogarithm with any base</p>
      </div>

      <div className="grid gap-4 max-w-xl">
        <div className="space-y-2">
          <label htmlFor="number" className="text-sm font-medium">Number</label>
          <Input
            id="number"
            type="number"
            value={number}
            onChange={(e) => setNumber(e.target.value)}
            placeholder="Enter a number"
          />
        </div>

        <div className="space-y-2">
          <label htmlFor="base" className="text-sm font-medium">Base</label>
          <Input
            id="base"
            type="number"
            value={base}
            onChange={(e) => setBase(e.target.value)}
            placeholder="Enter the base (default: 10)"
          />
        </div>

        <Button onClick={calculateAntilog} className="w-full">Calculate</Button>

        {result !== null && (
          <div className="p-4 bg-muted rounded-lg">
            <p className="text-sm font-medium">Result:</p>
            <p className="text-2xl font-bold text-primary">{result}</p>
          </div>
        )}
      </div>
    </div>
  );
}