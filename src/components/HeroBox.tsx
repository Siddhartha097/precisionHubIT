import MoreBtn from "./MoreBtn";
import { Label } from "./ui/label";

interface HeroBoxProps {
  title: string;
  subTitle?: string;
  btnName?: string;
  link?: string;
  isLabel?: boolean;
  label?: string;
  white?: boolean;
  headingClass?: string;
}

const HeroBox: React.FC<HeroBoxProps> = ({
  title,
  subTitle,
  btnName = "",
  link = "/learn",
  isLabel,
  label,
  white,
  headingClass,
}) => {
  return (
    <div
      className={` h-screen rounded-md bg-neutral-400/30 p-6 ${
        !white ? "" : "text-white"
      }  w-full relative text-center flex flex-col justify-center items-center`}
    >
      <Label htmlFor="text" className={`${!isLabel ? "hidden" : "block"}`}>
        {label}
      </Label>
      <h1 className={`text-6xl max-md:text-4xl font-bold ${headingClass}`}>
        {title}
      </h1>
      <p className="font-semibold max-md:text-sm text-xl p-7">{subTitle}</p>
      <MoreBtn link={link} variant="default" label={btnName} className="p-5" />
    </div>
  );
};

export default HeroBox;
