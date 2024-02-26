// import { IconType } from "react-icons";
import { BsBoxFill } from "react-icons/bs";
import { Button } from "./ui/button";
import { Link } from "react-router-dom";

interface BoxProps {
    label: string;
    className?: string;
    // icon?: IconType;
    desc?: string;
    titleSize?: string;
    isBtn?: boolean;
    iconSize?: number;
    descSize?: string;
}

const Box : React.FC<BoxProps>= ({
    label, desc, className, isBtn, titleSize = '',descSize = "", iconSize
}) => {
    return (
        <main className={className}>
            <BsBoxFill size={ iconSize ? iconSize: 30 } />
            <h1 className={`font-bold ${titleSize ? titleSize : 'text-xl'}`}>{label}</h1>
            <p className={`${descSize ? descSize : 'text-sm'} text-neutral-500 font-medium`}>{desc}</p>
            {isBtn && (
                <div className="flex items-center justify-center gap-7">
                    <Button className="rounded-none border-2 font-semibold border-black hover:bg-black hover:text-white" variant={'outline'}>Get started</Button>
                    <Link className="font-semibold hover:text-purple-500" to={'#'}>Learn More</Link>
                </div>
            )}
        </main>
    )
}

export default Box