import { Link } from 'wouter';

export function Footer() {
  const footerLinks = [
    { href: '/about', label: 'About' },
    { href: '/contact', label: 'Contact' },
    { href: '/privacy-policy', label: 'Privacy Policy' },
    { href: '/terms', label: 'Terms of Service' },
    { href: '/eula', label: 'EULA' },
    { href: '/sitemap', label: 'Sitemap' },
  ];

  return (
    <footer className="bg-secondary/30 border-t border-accent/10 mt-24">
      <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-3 mb-4">
              <img
                src="/images/icon.png"
                alt="Casino Quest Book"
                className="h-12 w-12"
                data-testid="img-footer-logo"
              />
              <span className="font-serif text-2xl font-bold text-foreground">
                Casino Quest Book
              </span>
            </div>
            <p className="text-muted-foreground max-w-md mb-6">
              Embark on an unforgettable casino adventure. Play games, answer trivia, and unlock epic stories in the most engaging casino app ever created.
            </p>
            <div className="text-sm text-muted-foreground">
              Developed by Leona Drummond
            </div>
          </div>

          {/* Quick Links */}
          <div className="col-span-1">
            <h3 className="font-serif font-bold text-foreground mb-4">Quick Links</h3>
            <nav className="flex flex-col gap-3">
              {footerLinks.map((link) => (
                <Link key={link.href} href={link.href}>
                  <span
                    className="text-sm text-muted-foreground hover:text-foreground transition-colors cursor-pointer inline-block"
                    data-testid={`footer-link-${link.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    {link.label}
                  </span>
                </Link>
              ))}
            </nav>
          </div>
        </div>

        <div className="h-px w-full bg-gradient-to-r from-transparent via-accent/20 to-transparent mt-12 mb-8" />

        <div className="text-center">
          <p className="text-sm text-muted-foreground" data-testid="text-copyright">
            © {new Date().getFullYear()} Leona Drummond. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
