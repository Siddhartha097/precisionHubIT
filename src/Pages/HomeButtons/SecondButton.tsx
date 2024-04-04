import { SecBtnContent } from "@/Data";
import ContentBox from "@/components/ContentBox";
import ImageBox from "@/components/ImageBox";
import { Separator } from "@/components/ui/separator";
import { secBtn, secBtn1 } from "@/images";
import { FaSquareCheck } from "react-icons/fa6";


const SecondButton = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center p-16 gap-20 max-md:gap-10 max-md:p-8">
      <ContentBox
        label="Transforming Creative Ideas into
            Innovative Software Solutions
            through Thoughtful
            Development and Strategic
            Implementation"
        content="We are a software company that specializes in turning your ideas into cuttingedge software solutions. Our team of experts is dedicated to delivering highquality products that meet your unique needs and exceed your expectations."
        img={secBtn}
      />

      <Separator className="my-8" />

      <ContentBox
        label="Turning creative concepts into
            cutting-edge software solutions
            that push the boundaries of
            innovation"
        content="At our company, we have a unique and innovative approach to
        transforming ideas into high-quality software. We combine cuttingedge technology with creative thinking to bring your vision to life."
        img={secBtn1}
        reverse
      />

      <Separator className="my-8" />

      <section className="flex flex-col items-center justify-between gap-20 max-md:gap-12">
        <h1 className="text-5xl text-center leading-snug max-md:text-3xl font-bold tracking-tighter">
          Turning your innovative concepts into robust and effective software
          solutions that meet your unique needs and exceed your expectations.
        </h1>
        <div className="flex items-center justify-between gap-20 max-md:gap-10 max-md:flex-col-reverse">
          <ul className="md:w-1/2 flex flex-col justify-between gap-8">
            {SecBtnContent.map((list) => (
              <li className="flex gap-4">
                <FaSquareCheck size={35} />
                <div className="flex flex-col gap-4">
                  <h1 className="text-2xl font-semibold tracking-tight max-md:text-lg">
                    {list.label}
                  </h1>
                  <p className="max-md:text-sm">{list.content}</p>
                </div>
              </li>
            ))}
          </ul>
          <ImageBox
            className="md:w-1/2 flex items-center justify-center"
            imgClassName="rounded-lg shadow-md border"
            imgSrc={secBtn1}
          />
        </div>
      </section>
    </main>
  );
};

export default SecondButton;
