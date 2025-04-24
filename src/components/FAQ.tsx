
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQ = () => {
  const faqs = [
    {
      question: "How do I access live match scores?",
      answer: "Live match scores are available on our homepage and match center. Simply click on any ongoing match to view detailed live updates.",
    },
    {
      question: "Can I follow specific teams or players?",
      answer: "Yes! Create an account and you can follow your favorite teams and players to get personalized updates and notifications.",
    },
    {
      question: "How often are rankings updated?",
      answer: "Team and player rankings are updated after every international match or tournament, ensuring you always have access to the latest standings.",
    },
    {
      question: "Do you cover domestic cricket?",
      answer: "Yes, we cover major domestic cricket tournaments from around the world, including detailed statistics and live updates.",
    },
  ];

  return (
    <section className="py-16">
      <div className="container max-w-3xl">
        <h2 className="text-3xl font-bold text-center mb-12">Frequently Asked Questions</h2>
        <Accordion type="single" collapsible className="w-full">
          {faqs.map((faq, index) => (
            <AccordionItem key={index} value={`item-${index}`}>
              <AccordionTrigger>{faq.question}</AccordionTrigger>
              <AccordionContent>{faq.answer}</AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
    </section>
  );
};

export default FAQ;
