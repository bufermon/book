import { Switch, Route } from "wouter";
import { queryClient } from "./lib/queryClient";
import { QueryClientProvider } from "@tanstack/react-query";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import { useEffect } from "react";
import Home from "@/pages/Home";
import About from "@/pages/About";
import Contact from "@/pages/Contact";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Terms from "@/pages/Terms";
import EULA from "@/pages/EULA";
import Sitemap from "@/pages/Sitemap";
import Analytics from "@/pages/Analytics";
import NotFound from "@/pages/not-found";

function Router() {
  return (
    <Switch>
      <Route path="/" component={Home} />
      <Route path="/about" component={About} />
      <Route path="/contact" component={Contact} />
      <Route path="/privacy-policy" component={PrivacyPolicy} />
      <Route path="/terms" component={Terms} />
      <Route path="/eula" component={EULA} />
      <Route path="/sitemap" component={Sitemap} />
      <Route path="/analytics.php" component={Analytics} />
      <Route component={NotFound} />
    </Switch>
  );
}

function TorchlightCursor() {
  useEffect(() => {
    if (window.innerWidth < 768) return;

    const cursor = document.createElement('div');
    cursor.className = 'fixed pointer-events-none z-50 hidden md:block';
    cursor.style.width = '400px';
    cursor.style.height = '400px';
    cursor.style.background = 'radial-gradient(circle, rgba(255, 214, 107, 0.15) 0%, rgba(255, 214, 107, 0.05) 30%, transparent 70%)';
    cursor.style.transform = 'translate(-50%, -50%)';
    cursor.style.transition = 'opacity 0.3s';
    cursor.style.opacity = '0';
    document.body.appendChild(cursor);

    const moveCursor = (e: MouseEvent) => {
      cursor.style.left = e.clientX + 'px';
      cursor.style.top = e.clientY + 'px';
      cursor.style.opacity = '1';
    };

    const hideCursor = () => {
      cursor.style.opacity = '0';
    };

    document.addEventListener('mousemove', moveCursor);
    document.addEventListener('mouseleave', hideCursor);

    return () => {
      document.removeEventListener('mousemove', moveCursor);
      document.removeEventListener('mouseleave', hideCursor);
      cursor.remove();
    };
  }, []);

  return null;
}

function App() {
  return (
    <QueryClientProvider client={queryClient}>
      <TooltipProvider>
        <TorchlightCursor />
        <Toaster />
        <Router />
      </TooltipProvider>
    </QueryClientProvider>
  );
}

export default App;
