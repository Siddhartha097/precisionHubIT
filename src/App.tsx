import { Link } from "react-router-dom";

import Box from "./components/Box";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "./components/ui/carousel";
import MoreBtn from "./components/MoreBtn";
import PercentBox from "./components/PercentBox";
import Newsletter from "./components/Newsletter";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./components/ui/accordion";
import { city } from "./images";
import ImageBox from "./components/ImageBox";

const Locations = [
  {
    label: "Sydney",
    imgSrc:
      "https://images.unsplash.com/photo-1558329228-bebb840e134f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "123 sample st, Sydney NSW 2000 AU",
  },
  {
    label: "New York",
    imgSrc:
      "https://images.unsplash.com/photo-1599374172782-2abc889e78ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "123 sample st, New York NY 10000 USA",
  },
  {
    label: "Kolkata",
    imgSrc:
      "https://images.unsplash.com/photo-1667208210604-3a4c452317bc?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "123 sample st, Kolkata WB 70000 IN",
  },
  {
    label: "Bengaluru",
    imgSrc:
      "https://images.unsplash.com/photo-1651991372794-b1fcaaf4d634?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    address: "123 sample st, Bengaluru KN 80000 IN",
  },
];

const FAQs = [
  {
    id: "item-1",
    title: "How does it work?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
  },
  {
    id: "item-2",
    title: "What are the benefits?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
  },
  {
    id: "item-3",
    title: "Is it customizable?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
  },
  {
    id: "item-4",
    title: "How can I get support?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
  },
  {
    id: "item-5",
    title: "Is there a free trial?",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.",
  },
];

const Features = [
  {
    label: "Powerful Software Solutions",
    para: "Our software provides advanced features and benefits to help you streamline your workflow and achieve your goals.",
  },
  {
    label: "User-Friendly Interface",
    para: "Our software is designed with a user-friendly interface, making it easy for anyone to navigate and use.",
  },
  {
    label: "Seamless Integration",
    para: "Our software seamlessly integrates with other tools and systems, allowing you to work efficiently and effectively.",
  },
];

const Supports = [
  {
    label: "Customization, Support, Training",
    desc: "We offer additional services such as customization, support, and training to meet your specific needs. Our team of experts is here to assist you every step of the way.",
  },
  {
    label: "Customization Options",
    desc: "We provide a wide range of customization options to tailor our software solutions to your unique requirements. Our team will work closely with you to ensure that the final product meets your expectations.",
  },
  {
    label: "24/7 Support",
    desc: "Our dedicated support team is available 24/7 to assist you with any technical issues or questions you may have. We are committed to providing prompt and reliable support to ensure your satisfaction.",
  },
];

const App = () => {
  return (
    <main className="p-14 max-md:px-8 space-y-16 max-md:space-y-10 flex flex-col gap-10 max-md:gap-6">
      {/* 1st */}
      <section className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-7xl max-md:text-4xl font-bold text-center">
          Transforming businesses with innovative software solutions
        </h1>
        <p className="text-center text-lg max-md:text-base">
          Welcome to our company, where we create cutting-edge software
          solutions to help businesses <div className="p-1" /> thrive in the
          digital age.
        </p>
        <MoreBtn variant="default" link="/learn" />
      </section>

      {/* 2nd */}
      <section>
        <ImageBox
          imgSrc={city}
          imgClassName="object-contain shadow-md rounded-lg"
          className="w-full flex items-center justify-center"
          alt="hero"
        />

        {/* https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D */}
      </section>

      <Separator className="my-10 max-md:my-6" />

      {/* 3rd */}
      <section className="flex max-md:flex-col-reverse max-md:space-x-0 max-md:space-y-7 items-center justify-between space-x-8">
        {/* non-image */}
        <div className="space-y-10 max-md:space-y-6 md:w-1/2 w-full">
          {/* title and description */}
          <Label className="hidden md:block" htmlFor="text">
            Innovative
          </Label>
          <h1 className="text-5xl max-md:text-3xl font-bold tracking-wide max-md:text-center">
            Transforming Ideas into Powerful Solutions
          </h1>
          <p className="text- font-medium text-neutral-500 tracking-wide max-md:text-sm max-md:text-center">
            We provide cutting-edge software solutions that drive innovation and
            empower businesses to succeed. Our team of experts combines
            creativity and technical expertise to deliver exceptional results.
          </p>

          {/* boxes */}
          <div className="flex items-center justify-between space-x-5">
            <Box
              className="space-y-4 max-md:flex max-md:text-center flex-col items-center justify-center"
              label="Experience"
              desc="Over 10 years of industry experience delivering top-notch software solutions."
            />
            <Box
              className="space-y-4 max-md:flex max-md:text-center flex-col items-center justify-center"
              label="Quality"
              desc="We are committed to delivering high-quality software solutions that exceed client expectations."
            />
          </div>

          {/* buttons */}
          <div className="space-x-4 flex items-center max-md:justify-center ">
            <MoreBtn variant="default" link="/learn" />
            <Link
              to={"contact"}
              className="p-6 rounded-none border-transparent hover:text-[#c31432] font-semibold"
            >
              Contact Us{" "}
            </Link>
          </div>
        </div>

        {/* image */}
        <div className="w-1/2 max-md:w-full">
          <img
            className="rounded-md shadow-md transition-all "
            src="https://images.unsplash.com/photo-1708614896043-9ff9d03d641d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero"
          />
        </div>
      </section>

      {/* 4th */}
      <section className="flex max-md:flex-col items-center justify-between gap-10">
        {/* Image */}
        <div className=" md:w-1/2">
          <img
            className="rounded-md shadow-md scale-90 transition-all hover:scale-95"
            src="https://images.unsplash.com/photo-1708556863286-16a9ada29871?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="feature"
          />
        </div>

        {/* Features */}
        <div className="md:w-1/2 space-y-10">
          {Features.map((feature) => (
            <div className="space-y-5 max-md:text-center" key={feature.label}>
              <h1 className="text-3xl max-md:text-xl font-bold">
                {feature.label}
              </h1>
              <p className="max-md:text-sm">{feature.para}</p>
            </div>
          ))}
        </div>
      </section>

      {/* 6th */}
      <section className="flex max-md:flex-col items-center justify-between gap-10">
        <Box
          label="Streamline your workflow
            with our software"
          desc="Our software provides a step-by-step guide on how to integrate it into your workflow, easy to implement and use."
          className="flex flex-col items-center justify-center space-y-5 text-center basis-1/3"
          titleSize="text-3xl"
          iconSize={40}
          descSize="text-base"
          isBtn
          bgColor="meridian"
          border="border-meridian"
        />
        <Separator orientation="vertical" />
        <Box
          label="Increase productivity with our intuitive software"
          desc="Our software is designed to simplify complex tasks, allowing you to focus on what matters most."
          className="flex flex-col items-center justify-center space-y-5 text-center basis-1/3"
          titleSize="text-3xl"
          iconSize={40}
          descSize="text-base"
          isBtn
          bgColor="unknown"
          border="border-unknown"
        />
        <Separator orientation="vertical" />
        <Box
          label="Optimize your workflow with our powerful software"
          desc="Our software offers advanced features and tools to streamline your processes and boost efficiency."
          className="flex flex-col items-center justify-center space-y-5 text-center basis-1/3"
          titleSize="text-3xl"
          iconSize={40}
          descSize="text-base"
          isBtn
        />
      </section>

      <Separator className="my-10 max-md:my-6" />

      <section className="flex max-md:flex-col-reverse items-center md:*:w-1/2 justify-between gap-20 max-md:gap-7">
        <div className="flex flex-col gap-8 max-md:text-center">
          <h1 className="text-5xl tracking-wide font-bold max-md:text-3xl">
            Crafting Beautiful Websites to tell Your Unique Story
          </h1>
          <hr />
          <p className="text-neutral-600 max-md:text-sm font-medium tracking-tight">
            At our company, we believe that every business has a unique story to
            tell. We specialize in creating stunning website designs that
            capture the essence of your brand and effectively communicate your
            message to your target audience. Our team of talented designers and
            developers work closely with you to understand your vision and bring
            it to life. Whether you need a simple and elegant website or a
            complex and interactive web application, we have the expertise to
            deliver exceptional results. Contact us today to discuss your
            project and let us help you make a lasting impression online.
          </p>
        </div>

        <div className="">
          <img
            className="rounded-lg shadow-md transition-all"
            src="https://images.unsplash.com/photo-1507238691740-187a5b1d37b8?q=80&w=1955&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="room"
          />
        </div>
      </section>

      <Separator className="my-10 max-md:my-6" />

      {/* 7th */}
      <section className="flex max-md:flex-col max-md:*:w-full items-center justify-between gap-14 max-md:gap-8">
        {/* image */}
        <div className="w-1/2">
          <img
            className="rounded-lg shadow-md border transition-all"
            src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="support"
          />
        </div>

        {/* non-image */}
        <div className="space-y-8 md:w-2/3 max-md:text-center">
          {Supports.map((support) => (
            <div className="space-y-5">
              <h1 className="text-3xl font-bold max-md:text-2xl">
                {support.label}
              </h1>
              <hr />
              <p className="text-sm font-medium text-neutral-500 max-md:text-xs">
                {support.desc}
              </p>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-10 max-md:my-6" />

      {/* 8th */}
      <section className="flex items-center max-md:*:w-full justify-between space-x-7 max-md:space-x-0 max-md:space-y-6 max-md:flex-col">
        {/* left */}
        <div className="w-1/2 space-y-4 max-md:text-center">
          <Label htmlFor="text">Innovative</Label>
          <h1 className="text-5xl max-md:text-3xl font-bold">
            Transforming the way businesses operate with cutting-edge solutions
          </h1>
        </div>

        {/* right */}
        <div className="w-1/2 space-y-8 max-md:text-center">
          <h3 className="font-medium max-md:text-sm text-neutral-600">
            With over a decade of experience, we have successfully delivered
            exceptional software solutions to clients worldwide. Our team of
            experts is dedicated to providing innovative and reliable products
            that meet the unique needs of each business.
          </h3>

          <div className="flex justify-between items-center max-md:space-x-5">
            <PercentBox text="Increase in productivity for our clients" />

            <Separator orientation="vertical" className="max-md:hidden" />

            <PercentBox text="Reduction in operational costs for our clients" />
          </div>

          <div className="font-medium space-x-5 flex items-center max-md:justify-evenly">
            <MoreBtn variant="default" link="/learn" />
            <Link className="hover:text-[#c31432]" to={"contact"}>
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      <Separator className="my-10 max-md:my-6" />

      {/* 9th */}
      <section>
        <img
          className="rounded-lg scale-90 shadow-md transition-all"
          src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>

      <Separator className="my-10 max-md:my-6" />

      {/* 10th  */}
      <section className="space-y-8">
        <div className="space-y-5 text-center">
          <Label htmlFor="text">Innovative</Label>
          <h1 className="text-5xl font-bold max-md:text-4xl">Locations</h1>
          <p className="font-medium text-neutral-500 max-md:text-sm">
            We have offices worldwide to serve you better.
          </p>
        </div>

        <div className="p-10 max-md:p-6">
          <Carousel
            opts={{ loop: true }}
            className="flex items-center justify-center"
          >
            <CarouselNext className="md:hidden" />
            <CarouselContent>
              {Locations.map((location) => (
                <CarouselItem
                  key={location.label}
                  className="basis-1/4 max-md:basis-full pl-4 space-y-6 text-center"
                >
                  <img
                    className="rounded-lg shadow-md"
                    src={location.imgSrc}
                    alt={location.label}
                  />
                  <h1 className="text-4xl font-bold">{location.label}</h1>
                  <p className="font-medium text-neutral-500">
                    {location.address}
                  </p>
                  <Link
                    className="font-medium hover:text-purple-600 transition-all underline"
                    to={"#"}
                  >
                    Get directions
                  </Link>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="md:hidden" />
          </Carousel>
        </div>
      </section>

      {/* 11th */}
      <section className="flex flex-col items-center space-y-6 justify-between">
        <div className="space-y-6 text-center">
          <h1 className="text-5xl font-bold max-md:text-3xl">
            Frquently Asked Questions
          </h1>
          <p className="font-medium text-neutral-500 max-md:text-sm">
            Find answers to common questions about our company and solutions.
          </p>
        </div>

        <Accordion collapsible type="single" className="space-y-6">
          {FAQs.map((faq) => (
            <AccordionItem
              className="transition-all space-y-5 relative w-[60vw] border-2 p-5 border-black"
              value={faq.id}
            >
              <AccordionTrigger className="text-xl font-semibold max-md:text-lg">
                {faq.title}
              </AccordionTrigger>
              <AccordionContent className="font-medium transition-all text-neutral-500 max-md:text-sm">
                {faq.content}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </section>

      <Separator className="my-10 bg-neutral-300" />

      <section className="flex max-md:flex-col items-center justify-between">
        <div className="flex flex-col gap-10">
          <h1>
            Stay Updated with the Latest News and Updates from Our Software
            Company
          </h1>
          <p>
            Discover the latest developments, product releases, and industry
            insights in the world of software.
          </p>
          <div>
            <Box
              label="Product Launch"
              desc="Introducing our new software solution that streamlines your workflow and boosts productivity."
              iconDisabled
              titleSize=""
              descSize=""
              className=""
            />
          </div>
        </div>
        <div>
          <ImageBox imgSrc="https://images.unsplash.com/photo-1532522750741-628fde798c73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="" />
        </div>
      </section>

      {/* 12th */}
      <section className="space-y-8 flex flex-col h-[80vh] items-center justify-between text-center">
        <div className="space-y-6">
          <h1 className="text-5xl font-bold max-md:text-3xl">
            Take Your Business Further
          </h1>
          <p className=" font-medium max-md:text-sm">
            Discover our innovative solutions and boost your productivity today.
          </p>
          <div className="flex items-center justify-center space-x-4">
            <MoreBtn variant="default" link="contact" label="Contact Sales" />
          </div>
        </div>

        <Newsletter />
      </section>
    </main>
  );
};

export default App;
