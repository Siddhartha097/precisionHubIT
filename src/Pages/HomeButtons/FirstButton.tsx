import { FBtnContent } from "@/Data";
import ImageBox from "@/components/ImageBox";
import { Separator } from "@/components/ui/separator";
import { fbtn, softsols } from "@/images";

const FirstButton = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center p-16 gap-20 max-md:gap-10 max-md:p-8">
      <section className="flex max-md:flex-col-reverse justify-between gap-12 max-md:gap-8">
        <div className="flex flex-col gap-10 max-md:gap-7 md:w-1/2">
          <h1 className="font-bold text-5xl leading-tight tracking-tight max-md:text-3xl">
            Revolutionizing companies with cutting-edge software solutions
          </h1>
          <p className="max-md:text-sm font-medium tracking-wide">
            Discover how our cutting-edge software solutions can revolutionize
            your business.
          </p>
          <ul className="text-left flex flex-col gap-3 px-4">
            {FBtnContent.map((list) => (
              <li className="list-disc max-md:text-sm tracking-wide text-neutral-700 font-medium">
                {list.label}
              </li>
            ))}
          </ul>
        </div>
        <ImageBox
          imgSrc={fbtn}
          imgClassName="object-contain shadow-md rounded-lg"
          className="md:w-1/2 flex items-center justify-center"
          alt="hero"
        />
      </section>

      <Separator className="my-8" />

      <section className="flex max-md:flex-col-reverse gap-16 max-md:gap-10">
        <div className="flex flex-col gap-8 md:w-1/2">
          <h1 className="font-bold text-5xl leading-normal tracking-tighter max-md:text-3xl">
            Maximize your business potential with our cutting-edge and impactful
            software solutions
          </h1>
          <p className=" tracking-wide leading-normal max-md:text-sm">
            Our software services offer the resources and knowledge necessary to
            facilitate business transformation. Through our creative solutions,
            you can simplify operations, enhance productivity, and maintain a
            competitive edge.
          </p>
        </div>
        <ImageBox
          imgSrc={softsols}
          className="md:w-1/2 flex items-center justify-center"
          imgClassName="object-contain shadow-md rounded-lg"
        />
      </section>
    </main>
  );
};

export default FirstButton;
