import { WebDevChartsLeft, WebDevChartsRight, WorkingStyle } from "@/Data";
import ChartSection from "@/components/ChartSection";
import { Separator } from "@/components/ui/separator";
import { man, webdev } from "@/images";

const WebDev = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-16 max-md:gap-8 p-16 max-md:px-8">
      <section className="flex max-md:flex-col-reverse items-center justify-evenly gap-8">
        <div className="flex items-center justify-center tracking-tight text-sm md:w-1/3 md:text-lg max-md:text-center">
          <p className="leading-relaxed">
            A website is the first impression of the Brand that one is trying to
            promote. It is a gateway to the online world and your Virtual
            Office. Today, people before visiting your physical space would
            first visit your virtual office to get a glimpse of what the Company
            or Brand is all about and the services it offers. If you are not
            online then maybe considering your Brand as an option may entirely
            be ruled out. PRECISIONHUB IT, Web Application Development Company
            works with the latest technologies in the market that makes Web and
            App Development easy breezy!
          </p>
        </div>
        <div className="flex items-center justify-center md:w-1/2">
          <img
            className="rounded-lg shadow-md border"
            src={webdev}
            alt="webdev"
          />
        </div>
      </section>

      <Separator className="my-10 max-md:my-6" />

      <section className="flex flex-col items-center justify-center gap-14 max-md:gap-10 text-center tracking-tight">
        <div className="text-6xl max-md:text-4xl tracking-tighter font-bold">
          <h1>OUR WORKING STYLE</h1>
        </div>
        <div className="font-medium w-[67vw] max-md:w-full md:text-lg tracking-wide max-md:text-base text-neutral-600 gap-8 flex flex-col">
          {WorkingStyle.map((work) => (
            <p
              className="leading-relaxed border cursor-pointer p-5 rounded-2xl transition-all hover:shadow-neutral-300 hover:shadow-lg"
              key={work.key}
            >
              {work.content}
            </p>
          ))}
        </div>
      </section>

      <Separator className="my-10 max-md:my-6" />

      <section className="flex items-center justify-center gap-16 max-md:gap-10 max-md:flex-col p-10 max-md:p-0">
        {/* <img src={chart1} alt="" /> */}
        <div className="flex flex-col md:w-1/3 items-center justify-center gap-20 max-md:gap-8">
          {WebDevChartsLeft.map((charts) => (
            <div>
              <ChartSection
                label={charts.label}
                content={charts.content}
                color={charts.color}
                number={charts.number}
                key={charts.number}
                align="left"
                reverse
              />
            </div>
          ))}
        </div>

        <div className="flex items-center justify-center w-full">
          <img
            className=" rounded-full shadow-sm border"
            src={man}
            alt="circle"
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-20 max-md:gap-8 md:w-1/3">
          {WebDevChartsRight.map((charts) => (
            <div>
              <ChartSection
                label={charts.label}
                content={charts.content}
                color={charts.color}
                number={charts.number}
                key={charts.number}
                align="right"
              />
            </div>
          ))}
        </div>
      </section>

      <section className="flex mt-10 items-center justify-center">
        <h1 className="text-lg font-medium text-neutral-600 max-md:text-sm text-center tracking-tight max-md:tracking-wide">
          Our Working Process is a step by step traversing from one point to
          another following a trail of thoughts and implementation tools where
          our services stand out from the rest in the world of website
          application development. When you sign up with PrecisionHub IT it is
          not just a Business Deal that we make but, an affair we form that will
          adhere to benefits aiming at creating perdurable relationships.
        </h1>
      </section>
    </main>
  );
};
export default WebDev;
