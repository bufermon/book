import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Link } from 'wouter';
import { ChevronRight } from 'lucide-react';
import { Card } from '@/components/ui/card';

export default function Sitemap() {
  const sitePages = [
    { href: '/', label: 'Home', description: 'Welcome to Casino Quest Book' },
    { href: '/about', label: 'About', description: 'Learn about Casino Quest Book and our mission' },
    { href: '/contact', label: 'Contact', description: 'Get in touch with our team' },
    { href: '/privacy-policy', label: 'Privacy Policy', description: 'How we protect your data' },
    { href: '/terms', label: 'Terms of Service', description: 'Terms and conditions for using our app' },
    { href: '/eula', label: 'EULA', description: 'End User License Agreement' },
    { href: '/sitemap', label: 'Sitemap', description: 'Navigate all pages on our site' },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl font-serif font-bold text-foreground mb-6 gold-accent-line inline-block" data-testid="heading-sitemap-title">
              Sitemap
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-8" data-testid="text-sitemap-subtitle">
              Navigate all pages on casinoquestbook.games
            </p>
          </div>

          <Card className="p-8 professional-card">
            <div className="space-y-4">
              {sitePages.map((page, index) => (
                <Link key={page.href} href={page.href}>
                  <div
                    className="flex items-start gap-4 p-6 rounded-lg bg-secondary/50 hover-elevate active-elevate-2 transition-all cursor-pointer group border border-transparent hover:border-accent/20"
                    data-testid={`sitemap-link-${page.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <ChevronRight className="h-6 w-6 text-accent mt-1 flex-shrink-0 group-hover:translate-x-1 transition-transform" />
                    <div className="flex-1">
                      <h3 className="text-xl font-serif font-bold text-foreground mb-2">
                        {page.label}
                      </h3>
                      <p className="text-muted-foreground text-sm leading-relaxed">
                        {page.description}
                      </p>
                      <p className="text-muted-foreground text-xs mt-2 font-mono opacity-60">
                        {page.href === '/' ? 'https://casinoquestbook.games/' : `https://casinoquestbook.games${page.href}`}
                      </p>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </Card>

          <div className="mt-12 text-center">
            <p className="text-sm text-muted-foreground mb-4">
              Looking for something specific?
            </p>
            <Link href="/contact">
              <span className="text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors cursor-pointer font-medium" data-testid="link-contact-from-sitemap">
                Contact us for assistance
              </span>
            </Link>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
