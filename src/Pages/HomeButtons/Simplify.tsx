import { SimplifyList, SimplifyList2 } from "@/Data";
import ContentBox from "@/components/ContentBox";
import ImageBox from "@/components/ImageBox";
import { Separator } from "@/components/ui/separator";
import { simplApli, simplify } from "@/images";
import { BsBoxFill } from "react-icons/bs";
import { FaGripLinesVertical } from "react-icons/fa6";

const Simplify = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-16 gap-20 max-md:gap-10 max-md:p-8">
      <ContentBox
        label="Boost productivity with our
          powerful software"
        content="Our software offers a range of additional features designed to simplify your
        workflow and amplify your productivity. With intuitive tools and seamless
        integration, you can streamline your processes and focus on what matters
        most."
        img={simplify}
        isChildren
      >
        <div className="flex flex-col space-y-7 mt-7">
          {SimplifyList.map((list) => (
            <div className="flex flex-col space-y-4">
              <h1 className="text-xl font-bold text-rose-500">{list.label}</h1>
              <p className="text-purple-600 font-medium">{list.content}</p>
            </div>
          ))}
        </div>
      </ContentBox>

      <Separator className="my-7" />

      <section className="flex flex-col items-center justify-center gap-20 max-md:gap-12">
        <h1 className="text-5xl font-bold max-md:text-3xl text-center">
          Streamline Your Workflow with Simplify to Amplify
          <Separator className="my-10" />
        </h1>
        <div className="flex gap-16 flex-row-reverse max-md:flex-col max-md:gap-8 items-center justify-between">
          <ImageBox
            imgSrc={simplApli}
            imgClassName="object-contain rounded-lg"
            className="w-full flex items-center justify-center overflow-hidden"
          />
          <div className="flex gap-8">
            <div className="space-y-10">
              {SimplifyList2.map((work) => (
                <div className="flex items-center justify-between gap-14">
                  <div className="flex flex-col items-center space-y-8">
                    <BsBoxFill size={30} />
                    <FaGripLinesVertical
                      className={`${work.id === 4 ? "opacity-0" : ""}`}
                      size={35}
                    />
                  </div>
                  <div className="flex items-start flex-col gap-5">
                    <h1 className="text-2xl tracking-tight font-bold max-md:text-xl text-rose-600">
                      {work.label}
                    </h1>
                    <p className="max-md:text-sm tracking-wide text-slate-600 font-medium">
                      {work.content}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Simplify;
