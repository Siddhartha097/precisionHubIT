import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface MoreBtnProps {
  label?: string;
  link?: string;
  className?: string;
  bgColor?: string;
  border?: string;
  variant?: "outline" | "secondary" | "destructive" | "ghost" | "default";
}

const MoreBtn = ({
  label = "Learn More",
  bgColor = "celestial",
  border = "border-celestial",
  link = "#",
  className,
  variant = "outline",
}: MoreBtnProps) => {
  return (
    <Link to={link}>
      <Button
        className={`${className} rounded-none border-2 ${
          variant === "default"
            ? `${bgColor} ${border} hover:opacity-80`
            : "border-black hover:celestial hover:border-celestial hover:text-white"
        } transition-all text-sm`}
        variant={variant}
      >
        {label}
      </Button>
    </Link>
  );
};

export default MoreBtn;
