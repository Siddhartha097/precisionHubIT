import { Link } from "react-router-dom";
import { Button } from "./ui/button";


interface MoreBtnProps {
    label?: string;
    link?: string;
    className?: string;
    variant?: 'outline' | 'secondary' | 'destructive' | 'ghost' | 'default' ;
}

const MoreBtn = ({ 
    label = 'Learn More', 
    link = '#', 
    className, 
    variant = 'outline' 
} : MoreBtnProps) => {
    return (
        <Link to={link}>
            <Button className={`${className} rounded-none border-2  border-black hover:bg-green-600 hover:border-green-600 hover:text-white text-sm`} variant={variant}>
                {label}
            </Button>
        </Link>
    )
}

export default MoreBtn