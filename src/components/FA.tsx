import { FAQ2s } from "@/Data";

import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "./ui/accordion";



const Faq2 = () => {
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
          {FAQ2s.map((Faq2) => (
            <AccordionItem
              className="transition-all space-y-5 relative w-[70vw] border-2 rounded-lg p-5 border-black bg-neutral-300 drop-shadow-lg"
              value={Faq2.id}
            >
              <AccordionTrigger className="text-xl font-semibold max-md:text-lg">
                {Faq2.title}
              </AccordionTrigger>
              <AccordionContent className="font-medium transition-all text-slate-700">
                {Faq2.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
    </section>
  )
}

export default Faq2