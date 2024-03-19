import { avatar } from "@/images";
import MoreBtn from "./MoreBtn";

interface BranchesProps {
  title: string;
  btnName?: string;
  imgSrc?: string;
  className?: string;
  link?: string;
}

const Branches: React.FC<BranchesProps> = ({
  title,
  btnName = "Get Started",
  imgSrc = avatar,
  className,
  link = "#",
}) => {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-7 ${className}`}
    >
      <div className="flex items-center justify-center w-1/2">
        <img className="rounded-full" src={imgSrc} alt="avatar" />
      </div>
      <div className="flex flex-col items-center justify-center gap-5">
        <h1 className="md:text-xl font-semibold text-slate-600">{title}</h1>
        <MoreBtn label={btnName} link={link} />
      </div>
    </div>
  );
};

export default Branches;
