import { ToolCard } from "@/components/ToolCard";

const tools = [
  {
    title: "Antilogarithm Calculator",
    description: "Calculate antilogarithms with precision",
    path: "/calculators/antilog",
  },
  {
    title: "Acid Test Ratio Calculator",
    description: "Calculate the acid test ratio for financial analysis",
    path: "/calculators/acid-test",
  },
  {
    title: "Character Counter",
    description: "Count characters in text",
    path: "/text-tools/counter",
  },
  {
    title: "Size Converter",
    description: "Convert between different size units",
    path: "/converters/size",
  },
  {
    title: "Temperature Converter",
    description: "Convert between different temperature units",
    path: "/converters/temperature",
  },
];

const Index = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-3xl font-bold tracking-tight">Dashboard</h1>
        <p className="text-muted-foreground">
          Select a tool from the collection below to get started.
        </p>
      </div>
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {tools.map((tool) => (
          <ToolCard key={tool.path} {...tool} />
        ))}
      </div>
    </div>
  );
};

export default Index;