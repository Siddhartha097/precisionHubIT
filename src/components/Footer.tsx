import { FaFacebook, FaInstagram, FaLinkedin, FaYoutube, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";

const Services = [
    {
        label: 'About Us',
        link: '#',
    },
    {
        label: 'Services',
        link: '#',
    },
    {
        label: 'Contact',
        link: '#',
    },
    {
        label: 'FAQ',
        link: '#',
    },
    {
        label: 'Blog',
        link: '#',
    },
];

const Socials = [
    {
        label: 'Facebook',
        icon: <FaFacebook />,
        link: '#',
    },
    {
        label: 'Twitter',
        icon: <FaXTwitter />,
        link: '#',
    },
    {
        label: 'Instagram',
        icon: <FaInstagram />,
        link: '#',
    },
    {
        label: 'LinkedIn',
        icon: <FaLinkedin />,
        link: '#',
    },
    {
        label: 'Youtube',
        icon: <FaYoutube />,
        link: '#',
    },
]

const Footer = () => {
    return (
        <footer className="p-12 flex flex-col w-full h-full relative shadow-md border-t ">
            {/* Upper part */}
            <section className="flex items-center justify-between">

                {/* Logo */}
                <div className="text-3xl font-bold">
                    Logo
                </div>

                {/* Services */}
                <div>
                    <ul className="flex items-center justify-between space-x-8 font-semibold text-sm">
                        {Services.map(service => (
                            <Link to={service.link}>
                                {service.label}
                            </Link>
                        ))}
                    </ul>
                </div>

                {/* Socials */}
                <div>
                    <ul className="flex items-center justify-between space-x-5 text-xl">
                        {Socials.map(social => (
                            <Link key={social.label} to={social.link}>
                                {social.icon}
                            </Link>
                        ))}
                    </ul>
                </div>

            </section>

            {/* seperaction */}
            <Separator className="my-8 bg-black" />

            {/* Lower part */}
            <section className="flex items-center justify-center text-sm font-semibold gap-10">
                ©2023 PrecisionHub IT. All rights reserved.
                <div className="flex items-center justify-between space-x-6 underline">
                    <Link to={'#'}>Privacy Policy</Link>
                    <Link to={'#'}>Terms & Conditions</Link>
                    <Link to={'#'}>Cookie Policy</Link>
                </div>
            </section>
        </footer>
    )
}

export default Footer