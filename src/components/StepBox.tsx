// import { Separator } from "./ui/separator";

interface StepBoxProps {
  title: string;
  step: number;
  content?: string;
  imgSrc?: string;
  bgColor?: string;
  textColor?: string;
}

const StepBox = ({
  title,
  step = 0,
  content,
  bgColor = "bg-orange-300",
  textColor = "text-orange-600",
  imgSrc = "https://images.unsplash.com/photo-1711181138064-43c2e2239a45?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
}: StepBoxProps) => {
  return (
    <main className="flex flex-col items-center justify-center gap-7 max-lg:shadow-md max-lg:p-5">
      <div className="w-2/3 flex items-center justify-center">
        <img className="rounded-lg w-full" src={imgSrc} alt="steps" />
      </div>
      <div className="flex flex-col items-center justify-between space-y-4">
        <h1
          className={`p-3 shadow-inner border-2 ${textColor} rounded-full font-bold ${bgColor}`}
        >
          0{step}
        </h1>
        <h3 className="font-bold lg:text-lg tracking-tighter">{title}</h3>
        {/* <Separator className="w-1/3" /> */}
        <p className="max-w-[15vw] text-sm max-lg:max-w-full font-medium text-neutral-600 text-center tracking-tight max-lg:text-xs">
          {content}
        </p>
      </div>
    </main>
  );
};

export default StepBox;
