import { TransformingList, TransformingList2 } from "@/Data";
import ContentBox from "@/components/ContentBox";
import ListBox from "@/components/ListBox";
import { Separator } from "@/components/ui/separator";
import { Transforming } from "@/images";

const TransFormingBusiness = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center p-16 gap-20 max-md:gap-10 max-md:p-8">
      <ContentBox
        label="Transform Your Business with
            Our Unique Software"
        content="Our software solution is designed to revolutionize your business by
            streamlining processes and increasing efficiency. With its unique features,
            you'll experience a transformation like never before."
        img={Transforming}
        isChildren
      >
        <div className="flex flex-col gap-6 items-center justify-center mt-10 max-md:mt-5">
          {TransformingList.map((list) => (
            <div className="space-y-2">
              <h1 className="text-purple-700 font-medium tracking-tight">
                {list.title}
              </h1>
              <h3 className="pl-4 text-sm tracking-wide">{list.subtitle}</h3>
            </div>
          ))}
        </div>
      </ContentBox>

      <Separator className="my-8" />

      <section className="flex flex-col items-center justify-center gap-20 max-md:gap-10 mb-10 ">
        <h1 className="text-5xl max-md:text-3xl font-bold tracking-tight leading-normal text-center">
          Implementing the Transforming Software Solution in Your Business
          Workflow
        </h1>
        <p className="font-medium text-lg tracking-tight max-md:text-base mb-10 text-center">
          We are dedicated to providing cutting-edge software solutions that
          drive transformation and growth. Our mission is to empower businesses
          with the tools they need to succeed in the digital age.
        </p>
        <div className="flex items-center justify-between w-full max-md:flex-col gap-16 max-md:gap-10 text-center">
          {TransformingList2.map((list) => (
            <ListBox
              label={list.label}
              content={list.content}
              className="md:basis-1/3"
              titleClass="font-bold text-pink-600 tracking-tighter"
              contentClass="text-purple-600 font-medium tracking-tight"
              seeIcon
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default TransFormingBusiness;
