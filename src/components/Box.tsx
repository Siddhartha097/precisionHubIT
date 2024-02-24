// import { IconType } from "react-icons";
import { BsBoxFill } from "react-icons/bs";

interface BoxProps {
    label: string;
    className?: string;
    // icon?: IconType;
    desc?: string;
}

const Box : React.FC<BoxProps>= ({
    label, desc, className,
}) => {
    return (
        <main className={className}>
            <BsBoxFill size={30} />
            <h1 className="font-bold text-xl">{label}</h1>
            <p className="text-sm font-medium">{desc}</p>
        </main>
    )
}

export default Box