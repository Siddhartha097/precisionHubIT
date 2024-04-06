import ContentBox from "@/components/ContentBox";
import { Separator } from "@/components/ui/separator";
import { efficiency } from "@/images";

const Elevate = () => {
  return (
    <div className="w-full h-full flex flex-col items-center justify-center p-16 gap-20 max-md:gap-10 max-md:p-8">
      <ContentBox
        label="Empowering businesses with
          efficient software solutions"
        content="At Elevate Efficiency, we believe in harnessing the power of technology to
        streamline operations and maximize productivity. Our innovative software
        solutions are designed to elevate your business efficiency and drive success."
        isChildren
        img={efficiency}
      >
        <div className="space-y-6 mt-14 max-md:mt-8">
          <h1 className="tracking-tight font-semibold md:text-lg">
            Gain valuable insights with our software s real-time analytics
            capabilities. Make data-driven decisions faster and more
            effectively.
          </h1>
          <ol className="space-y-4 *:list-decimal pl-4 *:tracking-wide">
            <li>Track performance metrics in real-time</li>
            <li>Visualize data with interactive charts and graphs</li>
            <li>Work together in real-time, from anywhere.</li>
          </ol>
        </div>
      </ContentBox>

      <Separator className="my-8" />
    </div>
  );
};

export default Elevate;
