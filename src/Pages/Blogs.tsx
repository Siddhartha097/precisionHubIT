import ImageBox from "@/components/ImageBox";
import MoreBtn from "@/components/MoreBtn";
import PercentBox from "@/components/PercentBox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Blogs = () => {
  return (
    <main className="flex flex-col w-full h-full gap-10 px-16 max-md:px-8 pb-10">
      <section>
        <ImageBox 
          imgSrc="https://images.unsplash.com/photo-1485988412941-77a35537dae4?q=80&w=1796&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgClassName="scale-90 rounded-lg shadow-md"
          alt="hero"
          className="w-full h-full flex items-center justify-center relative"
        />
      </section>
    
      <Separator className="my-5 md:my-10" />

      <section className="flex max-md:flex-col md:*:w-1/2  items-center justify-between max-md:text-center gap-10">
        <div>
          <h1 className="text-6xl font-bold max-md:text-4xl tracking-wide">
            Welcome to Our Blog : <br /> Discover New Perspectives
          </h1>
        </div>

        <div className="space-y-6 flex flex-col">
          <p className="text-lg font-medium tracking-wide max-md:text-base text-slate-600">
            Explore our collection of insightful articles and stay up to date
            with the latest trends in your industry.
          </p>

          <div className="flex items-center gap-6 max-md:justify-center">
            <MoreBtn label="Read More" variant="default" link="/InsightsLearn"/>
          </div>
        </div>
      </section>

      <Separator className="my-5 md:my-10" />

      <section className="flex max-md:flex-col items-center justify-center gap-6">
        <div className="flex flex-col max-md:items-center justify-between gap-6 max-md:text-center tracking-wide lg:w-1/3">
          <div className="flex items-center gap-6 text-sm">
            <Label className="bg-slate-200 p-3" htmlFor="text">
              Technology
            </Label>
            <Label className="text-sm font-normal" htmlFor="text">
              Read time: 7 mins
            </Label>
          </div>

          <div>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight">
              The Ultimate Guide to Technology Trends
            </h1>
          </div>

          <div className="text-sm">
            <p>Published on Jan 2023</p>
          </div>
        </div>

        <div className="w-2/3 scale-90">
          <img
            className="rounded-lg shadow-md"
            src="https://images.unsplash.com/photo-1518770660439-4636190af475?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="tech"
          />
        </div>
      </section>

      <Separator className="my-5 md:my-10" />

      <section className="flex justify-between max-md:flex-col max-md:text-center gap-12 max-md:gap-0 *:md:w-1/2">
        <div className="flex flex-col max-md:items-center gap-6 ">
          <Label htmlFor="text">Discover</Label>
          <h1 className="text-5xl font-bold max-md:text-4xl">
            Stay Informed with Our Latest Blog Posts
          </h1>
        </div>

        <Separator className="my-7 md:hidden" />

        <div className="flex flex-col gap-8">
          <h4 className="max-md: font-medium text-slate-600">
            Get the latest insights, tips, and trends from our blog. Stay ahead
            of the curve and enhance your knowledge.
          </h4>
          <div className="flex items-center gap-10 justify-between">
            <PercentBox
              text="Increase your productivity with our expert advice."
              textStyle="text-sm font-medium"
            />
            <Separator orientation="vertical" />
            <PercentBox
              text="Unlock your full potential with our actionable tips."
              textStyle="text-sm font-medium"
            />
          </div>
          <MoreBtn link="/learn" />
        </div>
      </section>

      <Separator className="my-5 md:my-10" />

      <section></section>
    </main>
  );
};

export default Blogs;
