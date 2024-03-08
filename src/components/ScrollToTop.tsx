import { useState, useEffect } from "react";
import { Button } from "./ui/button";
import { IoMdArrowDropup } from "react-icons/io";

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 200) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    window.addEventListener("scroll", toggleVisibility);
    return () => {
      window.removeEventListener("scroll", toggleVisibility);
    };
  }, []);

  return (
    <Button
      className={`fixed bottom-10 right-5 bg-black w-fit h-fit rounded-full text-white z-10 px-4 py-2 ${
        isVisible ? "opacity-100" : "opacity-0"
      }`}
      onClick={scrollToTop}
    >
      <IoMdArrowDropup size={40} />
    </Button>
  );
};

export default ScrollToTopButton;
