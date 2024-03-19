import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";

const FAQs = [
    {
      id: "item-1",
      title: "How does it work?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
    },
    {
      id: "item-2",
      title: "What are the benefits?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
    },
    {
      id: "item-3",
      title: "Is it customizable?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
    },
    {
      id: "item-4",
      title: "How can I get support?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
    },
    {
      id: "item-5",
      title: "Is there a free trial?",
      content:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
    },
];

const Faq = () => {
  return (
    <section className="flex flex-col items-center space-y-6 justify-between">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-bold max-md:text-3xl">
            Frquently Asked Questions
          </h1>
          <p className="font-medium text-neutral-500 max-md:text-sm">
            Find answers to common questions about our company and solutions.
          </p>
        </div>

        <Accordion collapsible type="single" className="space-y-6">
          {FAQs.map((faq) => (
            <AccordionItem
              className="transition-all space-y-5 relative w-[70vw] border-2 rounded-lg p-5 border-black"
              value={faq.id}
            >
              <AccordionTrigger className="text-xl font-semibold max-md:text-lg">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="font-medium transition-all text-slate-700">
                {faq.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
    </section>
  )
}

export default Faq