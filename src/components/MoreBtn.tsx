import { Link } from "react-router-dom";
import { Button } from "./ui/button";

interface MoreBtnProps {
  label?: string;
  link?: string;
  className?: string;
  variant?: "outline" | "secondary" | "destructive" | "ghost" | "default";
}

const MoreBtn = ({
  label = "Learn More",
  link = "#",
  className,
  variant = "outline",
}: MoreBtnProps) => {
  return (
    <Link to={link}>
      <Button
        className={`${className} rounded-none border-2 ${
          variant === "default"
            ? "bg-gradient border-gradient hover:opacity-80"
            : "border-black hover:bg-gradient hover:border-gradient hover:text-white"
        } transition-all text-sm`}
        variant={variant}
      >
        {label}
      </Button>
    </Link>
  );
};

export default MoreBtn;
