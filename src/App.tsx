import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Layout } from "./components/layout/Layout";
import Index from "./pages/Index";
import SizeConverter from "./pages/converters/Size";
import Temperature from "./pages/converters/Temperature";
import AcidTest from "./pages/calculators/AcidTest";
import Counter from "./pages/text-tools/Counter";
import AntilogCalculator from "./pages/calculators/Antilog";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Layout>
          <Routes>
            <Route path="/" element={<Index />} />
            <Route path="/converters/size" element={<SizeConverter />} />
            <Route path="/converters/temperature" element={<Temperature />} />
            <Route path="/calculators/antilog" element={<AntilogCalculator />} />
            <Route path="/calculators/acid-test" element={<AcidTest />} />
            <Route path="/text-tools/counter" element={<Counter />} />
          </Routes>
        </Layout>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;