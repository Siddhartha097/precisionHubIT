import MoreBtn from "./MoreBtn";
import { Label } from "./ui/label";

interface HeroBoxProps {
    title: string;
    subTitle?: string;
    btnName?: string;
    link?: string;
    isLabel?: boolean;
    label?: string;
    white?: boolean;
}

const HeroBox: React.FC<HeroBoxProps> = ({
    title,
    subTitle,
    btnName = '',
    link = '/learn',
    isLabel,
    label,
    white
}) => {
    return (
        <div className={` h-screen rounded-md bg-slate-600/40 p-6 ${!white ? '' : 'text-white'}  w-full relative text-center flex flex-col justify-center items-center`}>
            <Label htmlFor="text" className={`${!isLabel ? 'hidden' : 'block'}`}>
                {label}
            </Label>
            <h1 className="text-5xl max-md:text-3xl font-bold">
                {title}
            </h1>
            <p className="font-medium md:w-1/2 max-md:text-sm p-7">
                {subTitle}
            </p>
            <MoreBtn link={link} variant="default" label={btnName} className="p-5" />
        </div>
    )
}

export default HeroBox