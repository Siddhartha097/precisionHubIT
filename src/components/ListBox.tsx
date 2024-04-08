import { IconType } from "react-icons";
import { MdDoubleArrow } from "react-icons/md";

interface ListBoxProps {
  label: string;
  content?: string;
  seeIcon?: boolean;
  icon?: IconType;
  className?: string;
  size?: number;
  titleClass?: string;
  contentClass?: string;
}

const ListBox: React.FC<ListBoxProps> = ({
  label,
  content,
  seeIcon,
  icon: Icon = MdDoubleArrow,
  className,
  size = 40,
  titleClass,
  contentClass,
}) => {
  return (
    <div className={`flex gap-4 ${className}`}>
      <Icon className={`${seeIcon && "hidden"}`} size={size} />
      <div className="flex flex-col gap-4">
        <h1 className={`text-xl tracking-tight max-md:text-lg ${titleClass}`}>
          {label}
        </h1>
        <p className={`max-md:text-sm ${contentClass}`}>{content}</p>
      </div>
    </div>
  );
};

export default ListBox;
