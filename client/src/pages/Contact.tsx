import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Mail, MessageSquare, Send } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';

export default function Contact() {
  const handleContactClick = () => {
    window.location.href = 'mailto:leonadrum2@hotmail.com?subject=Casino Quest Book Inquiry';
  };

  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24">
        <div className="max-w-4xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6 gold-accent-line inline-block" data-testid="heading-contact-title">
              Get in Touch
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed mt-8" data-testid="text-contact-subtitle">
              Have questions or feedback? We'd love to hear from you!
            </p>
          </div>

          <Card className="p-8 sm:p-12 professional-card mb-12">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="relative">
                <div className="absolute inset-0 bg-accent/20 rounded-full blur-2xl" />
                <Mail className="relative h-20 w-20 text-accent" data-testid="icon-mail" />
              </div>

              <div className="space-y-4">
                <h2 className="text-3xl font-serif font-bold text-foreground" data-testid="heading-contact-email">
                  Email Us Directly
                </h2>
                <p className="text-lg text-muted-foreground max-w-2xl" data-testid="text-contact-description">
                  For support, feedback, or general inquiries, send us an email and we'll get back to you as soon as possible.
                </p>
              </div>

              <div className="bg-secondary rounded-lg p-6 w-full max-w-md border border-accent/10">
                <p className="text-sm text-muted-foreground mb-2">Contact Email</p>
                <a
                  href="mailto:leonadrum2@hotmail.com"
                  className="text-xl font-semibold text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors break-all"
                  data-testid="link-email"
                >
                  leonadrum2@hotmail.com
                </a>
              </div>

              <Button
                size="lg"
                className="text-lg px-8 py-6"
                onClick={handleContactClick}
                data-testid="button-send-email"
              >
                <Send className="mr-2 h-5 w-5" />
                Send Email
              </Button>
            </div>
          </Card>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="p-8 professional-card" data-testid="card-support">
              <MessageSquare className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3" data-testid="heading-support">
                Customer Support
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-support-description">
                Need help with the app? Have technical issues? Our support team is ready to assist you with any questions or concerns.
              </p>
            </Card>

            <Card className="p-8 professional-card" data-testid="card-feedback">
              <Mail className="h-10 w-10 text-accent mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3" data-testid="heading-feedback">
                Feedback & Suggestions
              </h3>
              <p className="text-muted-foreground leading-relaxed" data-testid="text-feedback-description">
                We value your input! Share your ideas, suggestions, or feedback to help us make Casino Quest Book even better.
              </p>
            </Card>
          </div>

          <div className="mt-16 text-center">
            <Card className="inline-block p-8 professional-card">
              <p className="text-sm text-muted-foreground mb-2">Developer</p>
              <p className="text-2xl font-serif font-bold text-foreground" data-testid="text-developer-name">
                Leona Drummond
              </p>
            </Card>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
