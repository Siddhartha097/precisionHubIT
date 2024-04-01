import { Features, Supports } from "@/Data";

import Box from "@/components/Box";
import Faq from "@/components/Faq";
import ImageBox from "@/components/ImageBox";
import MoreBtn from "@/components/MoreBtn";
import Newsletter from "@/components/Newsletter";
import Transforming from "@/components/Transforming";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { city } from "@/images";

import { MdAddModerator, MdAppSettingsAlt, MdAutoMode } from "react-icons/md";
import { RxBackpack, RxSketchLogo } from "react-icons/rx";

import { Link } from "react-router-dom";

const DataScience = () => {
  return (
    <main className="p-14 max-md:px-8 space-y-16 max-md:space-y-10 flex flex-col gap-10 max-md:gap-6">
      {/* 1st */}
      <section className="flex flex-col items-center justify-center space-y-6">
        <h1 className="text-7xl max-md:text-4xl font-bold text-center">
          Unleash the power of data science
        </h1>
        <p className="text-center text-lg max-md:text-base">
          Discover actionable insights and drive data-informed decisions.
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
              icon={RxBackpack}
            />
            <Box
              className="space-y-4 max-md:flex max-md:text-center flex-col items-center justify-center"
              label="Quality"
              desc="We are committed to delivering high-quality software solutions that exceed client expectations."
              icon={RxSketchLogo}
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
          label="Seamless Integration"
          desc="Our Software Comes with a Hassle-Free, Step-by-Step Integration Guide!"
          className="flex flex-col items-center justify-center space-y-5 text-center basis-1/3"
          titleSize="text-3xl"
          iconSize={40}
          descSize="text-base"
          isBtn
          icon={MdAddModerator}
          bgColor="meridian"
          border="border-meridian"
        />
        <Separator orientation="vertical" />
        <Box
          label="Simplify to Amplify"
          desc="Let Our Software Handle Complexity, While You Focus on Success!"
          className="flex flex-col items-center justify-center space-y-5 text-center basis-1/3"
          titleSize="text-3xl"
          iconSize={40}
          descSize="text-base"
          isBtn
          bgColor="unknown"
          border="border-unknown"
          icon={MdAppSettingsAlt}
        />
        <Separator orientation="vertical" />
        <Box
          label="Elevate Efficiency"
          desc="Unleash the Power of Our Advanced Software Tools for Streamlined Processes!"
          className="flex flex-col items-center justify-center space-y-5 text-center basis-1/3"
          titleSize="text-3xl"
          iconSize={40}
          icon={MdAutoMode}
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
            Hey there! At our company, we're all about helping businesses like
            yours shine online. We believe that every business has a unique
            story to tell, and we're here to help you tell it. Our team
            specializes in creating stunning website designs that capture the
            essence of your brand and effectively communicate your message to
            your target audience.
            <br />
            <br />
            Whether you're looking for a simple and elegant website or a complex
            and interactive web application, we've got you covered. Our talented
            designers and developers work closely with you to understand your
            vision and bring it to life. We're all about making sure you make a
            lasting impression online.
            <br />
            <br />
            So, what are you waiting for? Get in touch with us today to discuss
            your project and let's create something amazing together!
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

      <section className="flex flex-col justify-between gap-20">
        <section className="flex max-md:flex-col items-center justify-between gap-16">
          <div className="flex flex-col gap-14 max-md:gap-8 max-md:text-center">
            <h1 className="font-semibold text-3xl md:text-5xl">
              Stay Updated with the Latest News and Updates from Our Software
              Company
            </h1>
            <hr />
            <p className="font-medium max-md:text-sm text-slate-600">
              Discover the latest developments, product releases, and industry
              insights in the world of software.
            </p>
            <div className="flex md:*:w-1/2 gap-10">
              <Box
                label="Product Launch"
                desc="Introducing our new software solution that streamlines your workflow and boosts productivity."
                iconDisabled
                className="flex flex-col max-md:text-center gap-6"
              />
              <Box
                label="Industry"
                desc="Explore the latest trends and innovations shaping the software industry."
                iconDisabled
                className="flex flex-col max-md:text-center gap-6"
              />
            </div>
          </div>
          <div>
            <ImageBox
              imgSrc="https://images.unsplash.com/photo-1532522750741-628fde798c73?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              className=""
              imgClassName="rounded-lg shadow-md"
            />
          </div>
        </section>

        {/* 12th */}
        <section className="space-y-8 flex flex-col h-[80vh] max-md:h-[70vh] items-center justify-between text-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold max-md:text-3xl">
              Take Your Business Further
            </h1>
            <p className=" font-medium max-md:text-sm">
              Discover our innovative solutions and boost your productivity
              today.
            </p>
            <div className="flex items-center justify-center space-x-4">
              <MoreBtn variant="default" link="contact" label="Contact Sales" />
            </div>
          </div>

          <Newsletter />
        </section>
      </section>

      <Separator className="my-10 max-md:my-6" />

      <Transforming />

      <Separator className="my-10" />

      <Faq />
    </main>
  );
};

export default DataScience;
