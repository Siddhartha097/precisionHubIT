// import { IconType } from "react-icons";
import { BsBoxFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import MoreBtn from "./MoreBtn";
import { IconType } from "react-icons";

interface BoxProps {
  label: string;
  className?: string;
  icon?: IconType;
  desc?: string;
  titleSize?: string;
  isBtn?: boolean;
  iconSize?: number;
  descSize?: string;
  iconDisabled?: boolean;
}

const Box: React.FC<BoxProps> = ({
  label,
  desc,
  className,
  isBtn,
  titleSize = "",
  descSize = "",
  iconSize,
  iconDisabled,
  icon: Icon = BsBoxFill,
}) => {
  return (
    <main className={className}>
      <Icon
        className={`${!iconDisabled ? "" : "hidden"}`}
        size={!iconSize ? 30 : iconSize}
      />
      <h1
        className={`font-bold ${
          titleSize ? titleSize : "text-xl"
        } max-md:text-lg`}
      >
        {label}
      </h1>
      <p
        className={`${
          descSize ? descSize : "text-sm"
        } text-neutral-500 font-medium max-md:text-xs`}
      >
        {desc}
      </p>
      {isBtn && (
        <div className="flex items-center justify-center gap-7">
          <MoreBtn variant="default" label="Get Started" />
          <Link
            className="font-semibold hover:text-[#c31432] underline"
            to={"#"}
          >
            Learn More
          </Link>
        </div>
      )}
    </main>
  );
};

export default Box;
