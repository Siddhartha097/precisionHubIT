// import { IconType } from "react-icons";
import { Linkedin } from "lucide-react";
import { BsTwitter } from "react-icons/bs";
import { BsInstagram } from "react-icons/bs";
interface MemberProps {
    name?: string;
    className?: string;
    // icon?: IconType;
    desc?: string;
    designation?: string;
    titleSize?: string;
    isBtn?: boolean;
    iconSize?: number;
    descSize?: string;
    designationSize?: string;
    iconDisabled?: boolean;
    src?: string;
}

const Member : React.FC<MemberProps>= ({
    name, desc, designation, className, titleSize = '',descSize = "",src
}) => {
    return (
        <main className={className}>
            <img src={src} alt="" />
            <h1 className={`font-bold ${titleSize ? titleSize : 'text-xl'} max-md:text-lg pb-2`}>{name}</h1>
            <h1 className={`font-semibold ${titleSize? titleSize: 'text-xl'} max-md:text-lg text-gray-500`}> {designation}</h1>
            <p className={`${descSize ? descSize : 'text-sm'} text-neutral-500 font-medium max-md:text-xs pt-6`}>{desc}</p>
            <div className="flex pt-6 gap-2">
                <Linkedin size={15}></Linkedin>
                <BsTwitter/>
                <BsInstagram/>
            </div>
        </main>
    )
}

export default Member