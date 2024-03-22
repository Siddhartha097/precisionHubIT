import { FAQs } from "@/Data";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";



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