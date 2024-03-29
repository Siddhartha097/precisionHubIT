import { Link } from "react-router-dom";
import { Sheet, SheetClose, SheetContent, SheetTrigger } from "./ui/sheet";
import { Separator } from "./ui/separator";
import { MenuIcon } from "lucide-react";
import Logo from "../images/PreciSync_LogoIcon_V6.svg";
import MoreBtn from "./MoreBtn";

// fixed z-10 w-full bg-white
const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-12 max-md:px-8 py-6 border-b-2 shadow-md border-black">
      <header className="">
        <Link to={"/"} className="flex items-center justify-center">
          <img className="w-12 md:w-16" src={Logo} alt="" />
          <div className="space-y-1">
            <h1 className="font-bold text-3xl max-md:text-2xl tracking-tight">
              PreciSync
            </h1>
            {/* <p className="text-xs tracking-widest font-semibold">Precision Hub Pvt. Ltd.</p> */}
          </div>
        </Link>
      </header>

      <header className="flex items-center justify-between space-x-8 max-md:hidden">
        <ul className="flex text-lg items-center justify-between space-x-8 font-semibold ">
          <Link className="hover:text-[#c31432] transition-all" to={"/"}>
            <li>Home</li>
          </Link>
          <Link
            className="hover:text-[#c31432] transition-all"
            to={"/solutions"}
          >
            <li>Solutions</li>
          </Link>
          <Link
            className="hover:text-[#c31432] transition-all"
            to={"/research"}
          >
            <li>Research</li>
          </Link>
          <Link
            className="hover:text-[#c31432] transition-all"
            to={"/insights"}
          >
            <li>Insights</li>
          </Link>
          <Link className="hover:text-[#c31432] transition-all" to={"/about"}>
            <li>About Us</li>
          </Link>
        </ul>
        <MoreBtn link="/learn" />
      </header>
      <Sheet>
        <SheetTrigger className="md:hidden">
          <MenuIcon />
        </SheetTrigger>
        <SheetContent className="bg-neutral-300 p-12">
          {/* <SheetHeader>
                        <SheetTitle >Menu</SheetTitle>
                        <SheetDescription>What you want to see?</SheetDescription>
                    </SheetHeader> */}
          <Separator className="my-6" />
          <header className="flex flex-col items-center justify-between space-y-10">
            <ul className="flex items-center justify-between space-y-8 font-semibold flex-col text-xl">
              <SheetClose asChild>
                <Link className="hover:text-green-600 transition-all" to={"/"}>
                  <li>Home</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="hover:text-green-600 transition-all"
                  to={"/solutions"}
                >
                  <li>Solutions</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="hover:text-green-600 transition-all"
                  to={"/research"}
                >
                  <li>Research</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="hover:text-green-600 transition-all"
                  to={"/insights"}
                >
                  <li>Insights</li>
                </Link>
              </SheetClose>
              <SheetClose asChild>
                <Link
                  className="hover:text-green-600 transition-all"
                  to={"/about"}
                >
                  <li>About Us</li>
                </Link>
              </SheetClose>
            </ul>
            <SheetClose asChild>
              <MoreBtn link="/learn" />
            </SheetClose>
          </header>
        </SheetContent>
      </Sheet>
    </nav>
  );
};

export default Navbar;
