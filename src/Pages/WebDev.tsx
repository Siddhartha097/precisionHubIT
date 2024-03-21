import { WorkingStyle } from "@/Data";
import { Separator } from "@/components/ui/separator";
import { chart1, webdev } from "@/images";


const WebDev = () => {
  return (
    <main className="flex flex-col items-center justify-between gap-16 max-md:gap-8 p-16 max-md:px-8">
      <section className="flex max-md:flex-col-reverse items-center justify-evenly gap-8">
        <div className="flex items-center justify-center tracking-tight text-sm md:w-1/3 md:text-lg max-md:text-center">
          <p>
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
        <div className="text-6xl max-md:text-4xl  font-bold">
          <h1>OUR WORKING STYLE</h1>
        </div>
        <div className="font-medium w-[70vw] md:text-lg max-md:text-sm text-neutral-600 gap-8 flex flex-col">
          {WorkingStyle.map((work) => (
            <p key={work.key}>{work.content}</p>
          ))}
        </div>
      </section>

      <Separator className="my-10 max-md:my-6" />

      <section>
        <img src={chart1} alt="" />
      </section>
    </main>
  );
};
export default WebDev;
