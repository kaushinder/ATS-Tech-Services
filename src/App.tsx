import { Switch, Route } from "wouter";
import { Analytics } from "@vercel/analytics/react"; // ✅ fixed
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import NotFound from "@/pages/not-found";
import HomePage from "@/pages/home";
import ServicesPage from "@/pages/services";
import AboutPage from "@/pages/about";
import PortfolioPage from "@/pages/portfolio";
import ContactPage from "@/pages/contact";
import TechnologiesPage from "@/pages/technologies";
import CareersPage from "@/pages/careers";

const queryClient = new QueryClient();

function Router() {
  return (
    <Switch>
      <Route path="/" component={HomePage} />
      <Route path="/services" component={ServicesPage} />
      <Route path="/about" component={AboutPage} />
      <Route path="/portfolio" component={PortfolioPage} />
      <Route path="/contact" component={ContactPage} />
      <Route path="/technologies" component={TechnologiesPage} />
      <Route path="/careers" component={CareersPage} />
      <Route component={NotFound} />
    </Switch>
  );
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <Router />
        <Toaster />
        <Analytics /> {/* ✅ correct placement */}
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;