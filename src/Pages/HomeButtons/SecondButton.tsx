import { SecBtnContent, SecBtnList } from "@/Data";
import ContentBox from "@/components/ContentBox";
import ImageBox from "@/components/ImageBox";
import ListBox from "@/components/ListBox";
import { Separator } from "@/components/ui/separator";
import { secBtn, secBtn1 } from "@/images";
import { MdDoubleArrow } from "react-icons/md";
import { SiCircleci } from "react-icons/si";

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
        <h1 className="text-5xl text-center leading-snug max-md:text-3xl font-bold tracking-tighter max-md:leading-normal">
          Turning your innovative concepts into robust and effective software
          solutions that meet your unique needs and exceed your expectations.
        </h1>
        <div className="flex items-center justify-between gap-20 max-md:gap-10 max-md:flex-col-reverse">
          <ul className="md:w-1/2 flex flex-col justify-between gap-10">
            {SecBtnContent.map((list) => (
              // <li className="flex gap-4">
              //   <MdDoubleArrow size={40} />
              //   <div className="flex flex-col gap-4">
              //     <h1 className="text-2xl font-semibold tracking-tight max-md:text-lg">
              //       {list.label}
              //     </h1>
              //     <p className="max-md:text-sm">{list.content}</p>
              //   </div>
              // </li>
              <ListBox
                label={list.label}
                content={list.content}
                icon={MdDoubleArrow}
              />
            ))}
          </ul>
          <ImageBox
            className="md:w-1/2 flex items-center justify-center"
            imgClassName="rounded-lg shadow-md border"
            imgSrc={secBtn1}
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-20 max-md:gap-12">
          <div className="flex flex-col gap-5 items-center justify-center text-center">
            <h1 className="font-bold text-5xl max-md:text-3xl tracking-tight leading-tight">
              From Idea to Project Completion
            </h1>
            <h3 className="font-medium max-md:text-sm tracking-wide">
              Our process takes your idea and turns it into a fully developed
              software project. From start to finish, we guide you through every
              step, ensuring your vision becomes a reality.
            </h3>
          </div>

          <div className="flex max-md:flex-col items-center justify-between gap-14 max-md:gap-8">
            {SecBtnList.map((list) => (
              <ListBox
                className="gap-14 max-md:gap-8 md:w-1/3"
                label={list.label}
                content={list.content}
                size={35}
                icon={SiCircleci}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default SecondButton;
