import { IconType } from "react-icons";
import { Link } from "react-router-dom";

interface ContactBoxProps {
    label: string;
    desc?: string;
    icon: IconType;
    link?: string;
    href?: string;
    center?: boolean;
}

const ContactBox : React.FC<ContactBoxProps> = ({
    label,
    icon : Icon,
    link,
    desc,
    href = '#',
    center,
}) => {
    return (
        <div className={`flex flex-col space-y-5 ${!center ? '' : 'max-md:text-center max-md:items-center max-md:justify-center'}`}>
            <Icon className="text-5xl max-md:text-3xl" />
            <h1 className="font-bold text-3xl max-md:text-xl">
                {label}
            </h1>
            <p className="max-md:text-xs text-slate-700 text-sm">
                {desc}
            </p>
            <Link className="underline text-sm max-md:text-xs" to={href}>
                {link}
            </Link>
        </div>
    )
}

export default ContactBox