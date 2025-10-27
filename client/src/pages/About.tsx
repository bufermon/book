import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Trophy, Users, Zap } from 'lucide-react';

export default function About() {
  return (
    <div className="min-h-screen">
      <Navigation />

      <div className="pt-32 pb-24">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h1 className="text-5xl sm:text-6xl font-serif font-bold text-foreground mb-6 gold-accent-line inline-block" data-testid="heading-about-title">
              About Casino Quest Book
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed mt-8" data-testid="text-about-subtitle">
              Where casino excitement meets quest-based adventure
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-24">
            <div className="space-y-6">
              <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground gold-accent-line inline-block" data-testid="heading-mission">
                Our Mission
              </h2>
              <div className="space-y-4 text-lg text-muted-foreground leading-relaxed mt-8">
                <p data-testid="text-mission-1">
                  Casino Quest Book was created to bring together the best elements of casino gaming, trivia challenges, and immersive storytelling. We believe that gaming should be both entertaining and intellectually engaging.
                </p>
                <p data-testid="text-mission-2">
                  Our mission is to provide players with a unique experience where every spin, every answer, and every decision contributes to an unfolding adventure. Whether you're here for the thrill of the casino, the challenge of trivia, or the excitement of unlocking new stories, Casino Quest Book offers something special.
                </p>
                <p data-testid="text-mission-3">
                  Developed by Leona Drummond, Casino Quest Book represents a passion for creating meaningful gaming experiences that combine entertainment, education, and engagement in one beautifully crafted package.
                </p>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-br from-accent/20 to-primary/20 rounded-2xl blur-3xl" />
              <img
                src="/images/home.png"
                alt="Casino Quest Book App"
                className="relative w-full max-w-md mx-auto rounded-2xl shadow-xl"
                data-testid="img-about-app"
              />
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">
            <Card className="p-8 professional-card text-center" data-testid="card-stat-games">
              <Trophy className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Diverse Games</h3>
              <p className="text-muted-foreground">From slots to trivia, experience a variety of engaging challenges</p>
            </Card>
            <Card className="p-8 professional-card text-center" data-testid="card-stat-stories">
              <Zap className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Rich Stories</h3>
              <p className="text-muted-foreground">Unlock captivating narratives as you progress through your quest</p>
            </Card>
            <Card className="p-8 professional-card text-center" data-testid="card-stat-community">
              <Users className="h-12 w-12 text-accent mx-auto mb-4" />
              <h3 className="text-2xl font-serif font-bold text-foreground mb-2">Global Community</h3>
              <p className="text-muted-foreground">Join players worldwide in this unique gaming adventure</p>
            </Card>
          </div>

          <Card className="p-12 professional-card text-center mb-24">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-6 gold-accent-line inline-block" data-testid="heading-developer">
              Meet the Developer
            </h2>
            <div className="max-w-3xl mx-auto space-y-4 text-lg text-muted-foreground leading-relaxed mt-8">
              <p data-testid="text-developer-intro">
                <strong className="text-foreground">Leona Drummond</strong> is a passionate game developer dedicated to creating innovative and engaging gaming experiences. With a background in both casino gaming and educational technology, Leona brings a unique perspective to game design.
              </p>
              <p data-testid="text-developer-vision">
                Casino Quest Book represents Leona's vision of combining entertainment with intellectual challenge, creating a game that's both fun and rewarding for players of all backgrounds.
              </p>
            </div>
          </Card>

          <div className="text-center">
            <h2 className="text-3xl sm:text-4xl font-serif font-bold text-foreground mb-8 gold-accent-line inline-block" data-testid="heading-cta">
              Ready to Begin Your Quest?
            </h2>
            <a
              href="https://example.com/"
              target="_blank"
              rel="noopener noreferrer"
              data-testid="button-download-about"
              className="mt-8 inline-block"
            >
              <Button size="lg" className="text-lg px-8 py-6">
                <Download className="mr-2 h-5 w-5" />
                Download Casino Quest Book
              </Button>
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
