interface ChartSectionProps {
  label: string;
  content?: string;
  img?: string;
  number?: number;
  color?: string;
  reverse?: boolean;
  align?: "right" | "left";
}

const textAlign = (align: string | undefined) => {
  if (align === "left") {
    return "max-md:text-left";
  } else if (align === "right") {
    return "max-md:text-right";
  }
};

const ChartSection: React.FC<ChartSectionProps> = ({
  label,
  content,
  img,
  number,
  color,
  reverse,
  align,
}) => {
  return (
    <div
      className={`flex max-md:flex-row items-center justify-between gap-10 max-md:gap-5 w-[35vw] max-md:w-full tracking-tighter ${
        !reverse ? "flex-row-reverse" : "flex-row max-md:flex-row-reverse"
      }`}
    >
      <div
        className={`flex flex-col md:items-center justify-center gap-8 text-center ${textAlign(
          align
        )} w-2/3 max-md:gap-5`}
      >
        <h1 className="font-bold text-3xl uppercase max-md:text-xl">{label}</h1>
        <p className="text-slate-600 font-medium max-md:text-xs tracking-wide">
          {content}
        </p>
      </div>

      {/* <Separator orientation="vertical" className="my-6 md:hidden" /> */}

      <div className="rounded-full w-1/3 bg-slate-200 flex flex-col items-center justify-center gap-2 border border-slate-300 py-10 max-md:py shadow-inner">
        <img
          className={`${!img ? "hidden" : ""} rounded-full`}
          src={img}
          alt="charts"
        />
        <h2 className="text-2xl font-semibold max-md:text-lg">Step</h2>
        <h1 className={`text-6xl font-semibold ${color} max-md:text-2xl`}>
          0{number}
        </h1>
      </div>
    </div>
  );
};

export default ChartSection;
