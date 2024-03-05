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
    iconDisabled?: boolean;
}

const Box : React.FC<BoxProps>= ({
    label, desc, className, isBtn, titleSize = '',descSize = "", iconSize, iconDisabled
}) => {
    return (
        <main className={className}>
            <BsBoxFill className={`${!iconDisabled ? "" : "hidden"}`} size={ !iconSize ? 30 : iconSize } />
            <h1 className={`font-bold ${titleSize ? titleSize : 'text-xl'} max-md:text-lg`}>{label}</h1>
            <p className={`${descSize ? descSize : 'text-sm'} text-neutral-500 font-medium max-md:text-xs`}>{desc}</p>
            {isBtn && (
                <div className="flex items-center justify-center gap-7">
                    <Button className="rounded-none border-2 font-semibold border-black hover:bg-green-600 hover:border-green-600 hover:text-white" variant={'outline'}>Get started</Button>
                    <Link className="font-semibold hover:text-green-600 underline" to={'#'}>Learn More</Link>
                </div>
            )}
        </main>
    )
}

export default Box