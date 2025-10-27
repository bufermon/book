import { useState, useEffect } from 'react';
import { Link, useLocation } from 'wouter';
import { Menu, X, Coins } from 'lucide-react';
import { Button } from '@/components/ui/button';

export function Navigation() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [xpCount, setXpCount] = useState(0);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setXpCount(prev => (prev + 1) % 10000);
    }, 100);
    return () => clearInterval(interval);
  }, []);

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-card/98 backdrop-blur-md shadow-md border-b border-accent/10'
          : 'bg-card/80 backdrop-blur-sm'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
        <div className="flex items-center justify-between h-20">
          <Link href="/" data-testid="link-home">
            <div className="flex items-center gap-3 hover-elevate active-elevate-2 cursor-pointer rounded-md px-3 py-2 transition-all">
              <img
                src="/images/icon.png"
                alt="Casino Quest Book"
                className="h-10 w-10"
                data-testid="img-logo"
              />
              <span className="font-serif text-xl font-bold text-foreground hidden sm:inline-block">
                Casino Quest Book
              </span>
            </div>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <span
                  className={`text-sm font-semibold transition-colors hover:text-foreground cursor-pointer ${
                    location === link.href ? 'text-foreground underline decoration-accent decoration-2 underline-offset-4' : 'text-muted-foreground'
                  }`}
                  data-testid={`link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </span>
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-4">
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-lg bg-secondary border border-accent/20">
              <Coins className="h-5 w-5 text-accent gentle-float" data-testid="icon-xp-coin" />
              <span className="font-bold text-foreground text-sm" data-testid="text-xp-count">
                {xpCount.toString().padStart(4, '0')} XP
              </span>
            </div>

            <a
              href="https://example.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-download-header"
            >
              <Button className="hidden sm:inline-flex">
                Download
              </Button>
            </a>

            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              data-testid="button-mobile-menu-toggle"
            >
              {isMobileMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </Button>
          </div>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="md:hidden bg-card/98 backdrop-blur-lg border-t border-accent/10 shadow-lg">
          <div className="px-6 py-6 space-y-4">
            {navLinks.map((link) => (
              <Link key={link.href} href={link.href}>
                <div
                  className={`block px-4 py-3 rounded-md text-base font-medium transition-colors cursor-pointer hover-elevate ${
                    location === link.href
                      ? 'text-foreground bg-secondary border-l-4 border-accent'
                      : 'text-muted-foreground'
                  }`}
                  onClick={() => setIsMobileMenuOpen(false)}
                  data-testid={`mobile-link-${link.label.toLowerCase()}`}
                >
                  {link.label}
                </div>
              </Link>
            ))}
            <a
              href="https://example.com/"
              target="_blank"
              rel="noopener noreferrer"
              className="block"
              data-testid="button-download-mobile"
            >
              <Button className="w-full">Download Now</Button>
            </a>
          </div>
        </div>
      )}
    </nav>
  );
}
