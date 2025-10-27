import { Navigation } from '@/components/Navigation';
import { Footer } from '@/components/Footer';
import { FeatureCard } from '@/components/FeatureCard';
import { ImageCarousel } from '@/components/ImageCarousel';
import { FAQ } from '@/components/FAQ';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { Download, Trophy, Users, Star, Sparkles, Zap, Shield, Gift, Target, ChevronRight } from 'lucide-react';
import { Link } from 'wouter';

export default function Home() {
  const carouselImages = [
    '/images/onboarding-1.png',
    '/images/onboarding-2.png',
    '/images/onboarding-3.png',
  ];

  const features = [
    {
      image: '/images/spin-15.png',
      title: 'Spin & Win',
      description: 'Classic casino games reimagined with adventure themes and progressive rewards.',
      icon: Zap,
    },
    {
      image: '/images/quiz-13.png',
      title: 'Trivia Challenges',
      description: 'Test your knowledge across multiple categories while earning valuable XP.',
      icon: Target,
    },
    {
      image: '/images/profile-1.png',
      title: 'Character Progression',
      description: 'Level up your character, unlock abilities, and customize your adventure.',
      icon: Trophy,
    },
    {
      image: '/images/quiz-11.png',
      title: 'Quest Stories',
      description: 'Immersive narratives that unfold as you progress through challenges.',
      icon: Sparkles,
    },
    {
      image: '/images/shop-1.png',
      title: 'Exclusive Rewards',
      description: 'Collect coins, power-ups, and special items to enhance your journey.',
      icon: Gift,
    },
    {
      image: '/images/account-1.png',
      title: 'Secure & Fair',
      description: 'Trusted gameplay with transparent mechanics and verified outcomes.',
      icon: Shield,
    },
  ];

  const howItWorks = [
    {
      step: '1',
      title: 'Download & Create',
      description: 'Get the app and create your adventure character in seconds',
      icon: Download,
    },
    {
      step: '2',
      title: 'Play & Progress',
      description: 'Complete quests, answer trivia, and spin the wheel to earn XP',
      icon: Zap,
    },
    {
      step: '3',
      title: 'Unlock & Achieve',
      description: 'Rise through levels, unlock stories, and collect exclusive rewards',
      icon: Trophy,
    },
  ];

  const stats = [
    { value: '100K+', label: 'Active Players', icon: Users },
    { value: '4.8', label: 'App Store Rating', icon: Star },
    { value: '500K+', label: 'Quests Completed', icon: Trophy },
    { value: '50+', label: 'Unique Stories', icon: Sparkles },
  ];

  const testimonials = [
    {
      text: "Best casino app I've ever tried! The trivia element makes it so much more engaging than just spinning wheels.",
      author: 'Sarah M.',
      rating: 5,
    },
    {
      text: 'Love the adventure storylines! It feels like playing an RPG with casino elements. Highly addictive in the best way.',
      author: 'James R.',
      rating: 5,
    },
    {
      text: 'The XP system keeps me coming back. Every game feels rewarding, not just about winning coins.',
      author: 'Emily T.',
      rating: 5,
    },
  ];

  const valueProps = [
    {
      title: 'Unique Blend',
      description: 'The only app combining casino games with trivia and story-driven progression',
      icon: Sparkles,
    },
    {
      title: 'Fair Play Guarantee',
      description: 'Transparent algorithms and verified random number generation',
      icon: Shield,
    },
    {
      title: 'Regular Updates',
      description: 'New quests, stories, and game modes added every month',
      icon: Gift,
    },
    {
      title: 'Active Community',
      description: 'Join thousands of players on their casino adventure journey',
      icon: Users,
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />

      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden pt-20">
        <div className="absolute inset-0">
          <img
            src="/images/splash.png"
            alt="Casino Quest Book Hero"
            className="w-full h-full object-cover opacity-20"
            data-testid="img-hero-background"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-background/80 via-background/60 to-background" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 sm:px-8 lg:px-12 py-24 text-center">
          <div className="space-y-8 fade-in-up">
            <div className="inline-block px-4 py-2 bg-secondary border border-accent/20 rounded-full mb-4">
              <span className="text-sm font-semibold text-foreground flex items-center gap-2">
                <Star className="w-4 h-4 text-accent" />
                Rated 4.8 Stars by 100K+ Players
              </span>
            </div>

            <h1 className="text-5xl sm:text-6xl lg:text-7xl font-serif font-bold text-foreground leading-tight" data-testid="heading-hero-title">
              Your Casino Adventure
              <br />
              <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
                Starts Here
              </span>
            </h1>

            <p className="text-xl sm:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed" data-testid="text-hero-subtitle">
              Spin the wheel, test your knowledge, and embark on epic quests in the most engaging casino adventure app ever created.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
              <a
                href="https://example.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-download-hero"
              >
                <Button size="lg" className="text-lg px-10 py-6 shadow-lg hover:shadow-xl transition-all">
                  <Download className="mr-2 h-5 w-5" />
                  Download Free
                </Button>
              </a>
              <Link href="/about">
                <Button size="lg" variant="outline" className="text-lg px-10 py-6" data-testid="button-learn-more">
                  <Sparkles className="mr-2 h-5 w-5" />
                  Learn More
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-secondary/30 border-y border-accent/10" data-testid="section-stats">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center" data-testid={`stat-${index}`}>
                <stat.icon className="w-8 h-8 text-accent mx-auto mb-3" />
                <div className="text-4xl font-serif font-bold text-foreground mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground uppercase tracking-wider">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section className="py-24 bg-background" data-testid="section-how-it-works">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 gold-accent-line inline-block" data-testid="heading-how-it-works">
              How It Works
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
              Get started in three simple steps and begin your adventure today
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {howItWorks.map((item, index) => (
              <div key={index} className="text-center" data-testid={`how-it-works-${index}`}>
                <div className="relative inline-block mb-6">
                  <div className="w-20 h-20 rounded-full bg-accent/10 border-2 border-accent flex items-center justify-center">
                    <item.icon className="w-10 h-10 text-accent" />
                  </div>
                  <div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-accent text-white text-sm font-bold flex items-center justify-center">
                    {item.step}
                  </div>
                </div>
                <h3 className="text-2xl font-serif font-bold text-foreground mb-3">{item.title}</h3>
                <p className="text-muted-foreground leading-relaxed">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Game Features - Expanded */}
      <section className="py-24 bg-secondary/20" data-testid="section-features">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 gold-accent-line inline-block" data-testid="heading-features">
              Amazing Features
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
              Everything you need for an unforgettable casino adventure experience
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <FeatureCard
                key={index}
                image={feature.image}
                title={feature.title}
                description={feature.description}
                delay={index * 50}
              />
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-24 bg-background" data-testid="section-testimonials">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 gold-accent-line inline-block" data-testid="heading-testimonials">
              What Players Say
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
              Join thousands of satisfied players on their adventure
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {testimonials.map((testimonial, index) => (
              <Card key={index} className="p-8 professional-card" data-testid={`testimonial-${index}`}>
                <div className="flex gap-1 mb-4">
                  {[...Array(testimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
                <p className="text-foreground mb-6 leading-relaxed italic">"{testimonial.text}"</p>
                <div className="font-semibold text-foreground">— {testimonial.author}</div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gameplay Showcase */}
      <section className="py-24 bg-secondary/20" data-testid="section-gameplay">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 gold-accent-line inline-block" data-testid="heading-gameplay">
              See It In Action
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
              Swipe through and explore the beautiful game interface
            </p>
          </div>

          <ImageCarousel images={carouselImages} />
        </div>
      </section>

      {/* What Makes Us Different */}
      <section className="py-24 bg-background" data-testid="section-value-props">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 gold-accent-line inline-block" data-testid="heading-value-props">
              Why Choose Us
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
              Experience the difference that sets us apart
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {valueProps.map((prop, index) => (
              <Card key={index} className="p-8 professional-card" data-testid={`value-prop-${index}`}>
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <prop.icon className="w-6 h-6 text-accent" />
                  </div>
                  <div>
                    <h3 className="text-xl font-serif font-bold text-foreground mb-2">{prop.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{prop.description}</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Download CTA Section */}
      <section className="py-24 bg-accent/5 border-y border-accent/10" data-testid="section-download-cta">
        <div className="max-w-5xl mx-auto px-6 sm:px-8 lg:px-12 text-center">
          <div className="space-y-8">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground" data-testid="heading-download-cta">
              Ready to Start Your Adventure?
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Download Casino Quest Book today and join thousands of players on an unforgettable journey
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
              <a
                href="https://example.com/"
                target="_blank"
                rel="noopener noreferrer"
                data-testid="button-download-cta"
              >
                <Button size="lg" className="text-lg px-12 py-6 shadow-lg hover:shadow-xl transition-all">
                  <Download className="mr-2 h-6 w-6" />
                  Download Now - It's Free
                </Button>
              </a>
            </div>
            <p className="text-sm text-muted-foreground">
              Available on iOS and Android • No credit card required
            </p>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="py-24 bg-background" data-testid="section-faq">
        <div className="max-w-7xl mx-auto px-6 sm:px-8 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl font-serif font-bold text-foreground mb-4 gold-accent-line inline-block" data-testid="heading-faq">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto mt-8">
              Everything you need to know about Casino Quest Book
            </p>
          </div>

          <FAQ />

          <div className="text-center mt-12">
            <p className="text-muted-foreground mb-6">Still have questions?</p>
            <Link href="/contact">
              <Button size="lg" variant="outline" data-testid="button-contact-us">
                Contact Us
              </Button>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}
