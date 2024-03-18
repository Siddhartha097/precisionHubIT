import { FaFacebook, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Separator } from "./ui/separator";
import { Link } from "react-router-dom";
import { Logo } from "@/images";

const Services = [
  {
    label: "About Us",
    link: "/about",
  },
  {
    label: "Services",
    link: "#",
  },
  {
    label: "Contact",
    link: "/contact",
  },
  {
    label: "FAQ",
    link: "#",
  },
  {
    label: "Insights",
    link: "/insights",
  },
];

const Socials = [
  {
    label: "Facebook",
    icon: <FaFacebook className="text-[#302b63]" />,
    link: "#",
  },
  {
    label: "Twitter",
    icon: <FaXTwitter color="#302b63" />,
    link: "#",
  },
  // {
  //   label: "Instagram",
  //   icon: <FaInstagram />,
  //   link: "#",
  // },
  {
    label: "LinkedIn",
    icon: <FaLinkedin color="#302b63" />,
    link: "#",
  },
  // {
  //   label: "Youtube",
  //   icon: <FaYoutube />,
  //   link: "#",
  // },
];

const Footer = () => {
  return (
    <footer className="p-14 flex flex-col w-full h-full relative bg-neutral-50 shadow-md border-t max-md:p-7">
      {/* Upper part */}
      <section className="flex items-center justify-between max-md:space-y-10 max-md:flex-col">
        {/* Logo */}
        <div className="">
          <Link to={"/"} className="flex items-center justify-center">
            <img src={Logo} className="w-14" alt="Logo" />
            <div className="space-y-1">
              <h1 className="font-bold text-3xl">PreciSync</h1>
              <p className="text-xs tracking-widest font-semibold">
                Precision Hub Pvt. Ltd.
              </p>
            </div>
          </Link>
        </div>

        {/* Services */}
        <div>
          <ul className="flex items-center justify-between space-x-8 max-md:space-x-4 font-semibold max-md:text-sm text-lg">
            {Services.map((service) => (
              <Link to={service.link}>{service.label}</Link>
            ))}
          </ul>
        </div>

        {/* Socials */}
        <div>
          <ul className="flex items-center justify-between space-x-6 max-md:space-x-10 text-3xl max-md:text-2xl">
            {Socials.map((social) => (
              <Link key={social.label} to={social.link}>
                {social.icon}
              </Link>
            ))}
          </ul>
        </div>
      </section>

      {/* seperation */}
      <Separator className="my-8 bg-black" />

      {/* Lower part */}
      <section className="flex items-center justify-center text-sm font-semibold gap-10 max-md:gap-6 max-md:flex-col">
        ©2023 PrecisionHub IT. All rights reserved.
        <div className="flex items-center justify-between space-x-6 max-md:space-x-4 underline">
          <Link to={"#"}>Privacy Policy</Link>
          <Link to={"#"}>Terms & Conditions</Link>
          <Link to={"#"}>Cookie Policy</Link>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
