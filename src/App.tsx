import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { HashRouter, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Blog from "./pages/Blog";
import Contact from "./pages/Contact";
import AccountRegistration from "./pages/AccountRegistration";
import CostAccountingPage from "./pages/cost-accounting";
import TaxIncomePage from "./pages/tax-income";
import VATPage from "./pages/vat";
import WithholdingTax from "./pages/withholding-tax";
import ZakaT from "./pages/zakat";
import BudgeTs from "./pages/budgets";
import StarTupdev from "./pages/startupdev";
import NotFound from "./pages/NotFound";
import AboutNewDesign from "./pages/About-new-design";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <HashRouter>
        <div className="min-h-screen flex flex-col">
          <Navbar />
          <main className="flex-grow">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/about" element={<About />} />
              <Route path="/services" element={<Services />} />
              <Route path="/service/cost-accounting" element={<CostAccountingPage />} />
              <Route path="/service/tax-income" element={<TaxIncomePage />} />
              <Route path="/service/vat" element={<VATPage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/account-registration" element={<AccountRegistration />} />
              <Route path="/service/withholding-tax" element={<WithholdingTax />} />
              <Route path="/service/zakat" element={<ZakaT />} />
              <Route path="/service/budgets" element={<BudgeTs />} />
              <Route path="/service/startupdev" element={<StarTupdev />} />
              <Route path="/About-new-design" element={<AboutNewDesign />} />
              <Route path="*" element={<NotFound />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </HashRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
