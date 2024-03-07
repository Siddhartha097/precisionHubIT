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
            <h1 className="font-bold text-4xl max-md:text-2xl">
                {label}
            </h1>
            <p className="max-md:text-sm text-slate-700">
                {desc}
            </p>
            <Link className="underline max-md:text-sm" to={href}>
                {link}
            </Link>
        </div>
    )
}

export default ContactBox