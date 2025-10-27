import { Card } from '@/components/ui/card';

interface FeatureCardProps {
  image: string;
  title: string;
  description: string;
  delay?: number;
}

export function FeatureCard({ image, title, description, delay = 0 }: FeatureCardProps) {
  return (
    <Card
      className="professional-card overflow-hidden"
      style={{ animationDelay: `${delay}ms` }}
      data-testid={`card-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
    >
      <div className="p-8">
        <div className="flex flex-col items-center text-center gap-6">
          <div className="relative">
            <div className="absolute inset-0 bg-accent/10 rounded-full blur-xl transition-all duration-300" />
            <img
              src={image}
              alt={title}
              className="relative h-24 w-24 object-contain transition-transform duration-300 hover:scale-105"
              data-testid={`img-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}
            />
          </div>

          <div className="space-y-3">
            <h3 className="text-2xl font-serif font-bold text-foreground" data-testid={`heading-feature-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {title}
            </h3>
            <p className="text-base text-muted-foreground leading-relaxed" data-testid={`text-feature-description-${title.toLowerCase().replace(/\s+/g, '-')}`}>
              {description}
            </p>
          </div>
        </div>
      </div>

      <div className="h-1 w-full bg-gradient-to-r from-transparent via-accent/30 to-transparent" />
    </Card>
  );
}
