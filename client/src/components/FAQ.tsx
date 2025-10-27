import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from '@/components/ui/accordion';

const faqs = [
  {
    question: 'What is Casino Quest Book?',
    answer: 'Casino Quest Book is an immersive casino adventure game that combines trivia, storytelling, and classic casino games. Test your knowledge, unlock exciting stories, and collect rewards as you progress through your quest.',
  },
  {
    question: 'Is Casino Quest Book free to download?',
    answer: 'Yes! Casino Quest Book is free to download and play. The game offers optional in-app purchases for additional content and features, but the core experience is completely free.',
  },
  {
    question: 'What devices are supported?',
    answer: 'Casino Quest Book is available for both iOS and Android devices. Simply download from your device\'s app store and start your adventure.',
  },
  {
    question: 'How do I earn XP and rewards?',
    answer: 'You can earn XP by completing quizzes, playing casino games, unlocking stories, and achieving daily goals. Rewards include in-game currency, special items, and exclusive content.',
  },
  {
    question: 'Can I play offline?',
    answer: 'Some features of Casino Quest Book can be enjoyed offline, but an internet connection is required for certain game modes, leaderboards, and multiplayer features.',
  },
  {
    question: 'How do I contact support?',
    answer: 'For any questions or issues, please visit our Contact page or email us directly at leonadrum2@hotmail.com. Our support team is here to help!',
  },
];

export function FAQ() {
  return (
    <div className="w-full max-w-3xl mx-auto">
      <Accordion type="single" collapsible className="space-y-4" data-testid="accordion-faq">
        {faqs.map((faq, index) => (
          <AccordionItem
            key={index}
            value={`item-${index}`}
            className="professional-card overflow-hidden"
            data-testid={`accordion-item-${index}`}
          >
            <AccordionTrigger className="text-left text-foreground hover:underline decoration-accent decoration-2 underline-offset-4 transition-colors px-6 py-5 text-lg font-semibold" data-testid={`accordion-trigger-${index}`}>
              {faq.question}
            </AccordionTrigger>
            <AccordionContent className="text-muted-foreground px-6 pb-5 leading-relaxed" data-testid={`accordion-content-${index}`}>
              {faq.answer}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
  );
}
