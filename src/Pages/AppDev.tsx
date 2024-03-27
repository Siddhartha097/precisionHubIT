import { AppDevChartsDown, AppDevChartsUp } from "@/Data";
import StepBox from "@/components/StepBox";
import { Separator } from "@/components/ui/separator";
// import { ArrowBigDown, ArrowBigRight } from "lucide-react";

const AppDev = () => {
  return (
    <main className="w-full h-full p-16 flex flex-col gap-20 max-md:px-8">
      <section className="flex flex-col gap-10 max-md:text-center">
        <h1 className="text-7xl font-bold tracking-tight max-md:text-5xl">
          Intact With Our Android & iOS Mobile Apps
        </h1>
        <div className="flex justify-between gap-16 max-lg:gap-8 items- max-md:flex-col-reverse">
          <div className="md:w-1/2 tracking-wide leading-relaxed font-medium text-slate-600 max-md:text-base">
            <p>
              Today, globally the trends for Android & iOS Smartphone
              application development are changing at a fast pace where to bring
              out the best user-experience stands as priority. One should not
              surmise without adequate sources at hand. The sure way to flourish
              is through, Mobile Apps. The market is cram-full and one needs the
              taste of that fresh snow! We are a stellar Android & iOS Mobile
              App Development Company where mobile application development
              services stay unmatched.
            </p>
          </div>
          <div className="md:w-1/2">
            <img
              className="rounded-lg shadow-md"
              src="https://images.unsplash.com/photo-1480694313141-fce5e697ee25?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              alt="app"
            />
          </div>
        </div>
      </section>

      <section className="flex flex-col items-center justify-center gap-14">
        <h1 className="text-6xl max-md:text-4xl font-bold tracking-tight">
          What Makes Us Different?
        </h1>
        <Separator className="w-1/2 my-4" />
        <div className="flex flex-col justify-center gap-20 max-lg:gap-10">
          <div className="flex justify-between max-lg:flex-col gap-10 md:gap-0">
            {AppDevChartsUp.map((chart) => (
              <div className="flex  items-center justify-center">
                <StepBox
                  title={chart.label}
                  step={chart.step}
                  content={chart.content}
                  bgColor={chart.bgColor}
                  textColor={chart.textColor}
                  key={chart.step}
                />
              </div>
            ))}
          </div>
          <div className="flex flex-row-reverse max-md:flex-col gap-10 md:gap-0">
            {AppDevChartsDown.map((chart) => (
              <StepBox
                title={chart.label}
                step={chart.step}
                content={chart.content}
                bgColor={chart.bgColor}
                textColor={chart.textColor}
                key={chart.step}
              />
            ))}
            a
          </div>
        </div>
      </section>
    </main>
  );
};

export default AppDev;
