import { IconType } from "react-icons";
import { MdDoubleArrow } from "react-icons/md";

interface ListBoxProps {
  label: string;
  content?: string;
  seeIcon?: boolean;
  icon?: IconType;
  className?: string;
  size?: number;
}

const ListBox: React.FC<ListBoxProps> = ({
  label,
  content,
  seeIcon,
  icon: Icon = MdDoubleArrow,
  className,
  size = 40,
}) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <Icon className={`${seeIcon && "hidden"}`} size={size} />
      <div className="flex flex-col gap-4">
        <h1 className="text-2xl font-semibold tracking-tight max-md:text-lg">
          {label}
        </h1>
        <p className="max-md:text-sm">{content}</p>
      </div>
    </div>
  );
};

export default ListBox;
