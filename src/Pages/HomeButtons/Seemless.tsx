import { SeemlessList } from "@/Data";
import ContentBox from "@/components/ContentBox";
import ListBox from "@/components/ListBox";
import { Separator } from "@/components/ui/separator";
import { seemless } from "@/images";

const Seemless = () => {
  return (
    <main className="w-full h-full flex flex-col items-center justify-center p-16 gap-20 max-md:gap-10 max-md:p-8">
      <ContentBox
        label="Easily integrate our solution to
        seamlessly meet the specific
        requirements of your software
        system."
        content="Our seamless integration feature allows you to connect your software
        applications seamlessly, saving you time and effort. With just a few clicks, you
        can integrate multiple systems and streamline your workflow."
        img={seemless}
      />

      <Separator className="my-8" />

      <section className="flex flex-col items-center justify-center gap-10 max-md:gap-8 mb-10 text-center">
        <h1 className="text-5xl border-b-2 max-md:text-3xl font-bold tracking-tight leading-normal ">
          Easily integrate our solutions to simplify and improve your workflow
        </h1>
        <p className="font-medium text-lg tracking-tight max-md:text-base mb-10">
          Experience the power of seamless integration with our software.
          Connect all your tools and systems to streamline your workflow and
          boost productivity. Say goodbye to manual data transfer and hello to
          automated efficiency.
        </p>
        <div className="flex items-center justify-between max-md:flex-col gap-16 max-md:gap-10">
          {SeemlessList.map((list) => (
            <ListBox
              label={list.label}
              content={list.content}
              className="md:w-1/3"
              seeIcon
              titleClass="text-rose-500 font-bold tracking-tighter leading-normal"
              contentClass="text-purple-600 font-medium tracking-wide"
            />
          ))}
        </div>
      </section>
    </main>
  );
};

export default Seemless;
