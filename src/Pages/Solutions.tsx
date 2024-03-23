import Box from "@/components/Box";
import { Separator } from "@/components/ui/separator";
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Pagination } from "swiper/modules";
import { Navigation } from "swiper/modules";
import HeroBox from "@/components/HeroBox";

import { Sols } from "@/Data";
import Faq from "@/components/Faq";

const Solutions = () => {
  return (
    <main className="relative p-20 max-md:px-8 w-full h-full space-y-14">
      <section className="relative h-[77vh] w-full max-md:h-[65vh] flex flex-col justify-center space-y-8 bg-cover bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
        {/* <div className=" h-screen rounded-md space-y-6 text-white bg-slate-600/40  w-full relative flex flex-col max-md:text-center justify-center items-center">
            <h1 className="text-5xl max-md:text-3xl font-bold">
              Transforming Businesses with Innovative Solutions
            </h1>
            <p className="font-medium max-md:text-sm">
              Discover how our cutting-edge solutions can revolutionize your business and drive growth.
            </p>
            <Button className="rounded-none border border-black hover:bg-green-600 hover:border-green-600 hover:text-white" >Learn More</Button>
         </div> */}
        <HeroBox
          title="Transforming Businesses with Innovative Solutions"
          subTitle="Discover how our cutting-edge solutions can revolutionize your business and drive growth."
          btnName="Learn More"
          headingClass="bg-gradient-to-l from-[#c33765] to-[#1d2678] text-transparent bg-clip-text"
        />
      </section>

      <Separator className="my-20 " />

      {/* Discover the Power of Our Innovatve Solution */}
      <section className="flex items-center justify-between w-full h-full py-6 max-md:flex-col-reverse max-md:space-y-6 gap-16">
        <div className="flex flex-col items-center max-md:text-center gap-12 md:w-1/2">
          <h1 className="text-5xl max-md:text-4xl font-bold tracking-tighter leading-snug">
            Discover the Power of Our Innovatve Solution
          </h1>

          <h3 className="md:text-lg max-md:text-center font-medium tracking-tight">
            Our solution revolutionizes the way you work, providing unmatched
            efficiency and productivity.
          </h3>

          <div className="flex items-center justify-between space-x-6">
            <Box
              label="Efficiency"
              desc="Streamline your process and save time with our cutting-edge solution."
              className="space-y-5 w-1/2 flex flex-col max-md:items-center justify-center tracking-wide"
            />

            <Separator orientation="vertical" className="mx-6" />

            <Box
              label="Productivity"
              desc="Boost your team's output and achieve more with our innovative solution."
              className="space-y-5 w-1/2 flex flex-col max-md:items-center justify-center tracking-wide"
            />
          </div>
        </div>

        <div className="w-2/3 max-md:w-full flex items-center justify-center">
          <img
            className="rounded-lg shadow-md scale-90 max-md:scale-100 transition-all"
            src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="hero"
          />
        </div>
      </section>

      {/* Experience the Power of Our Second Solution for Maximum Efficiency */}
      <section className="flex flex-col space-y-10 max-md:space-y-6 items-center justify-between">
        <div className="flex max-md:flex-col max-md:space-y-6 items-center justify-between">
          <div className="w-1/2 max-md:w-full">
            <h1 className="text-4xl max-md:text-3xl tracking-tight leading-snug max-md:text-center font-bold">
              Experience the Power of Our Second Solution for Maximum Efficiency
            </h1>
          </div>
          <Separator orientation="vertical" className="mx-8 max-md:hidden" />
          <div className="w-1/2 max-md:w-full max-md:text-center">
            <h3 className="font-medium max-md:text-sm tracking-wide leading-relaxed">
              Our second solution is designed to streamline your workflow,
              saving you time and resources. With its advanced features and
              user-friendly interface, you can easily manage and optimize your
              tasks, ensuring maximum efficiency.
            </h3>
          </div>
        </div>

        <div className="flex w-full items-center justify-center h-[75vh] max-md:h-[50vh] rounded-md shadow-md relative pt-6 bg-cover bg-[url('https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
          {/* <img
            className="rounded-lg scale-90 max-md:scale-100 shadow-md"
            src="https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sols"
          /> */}
        </div>
      </section>

      {/* Discover the Cost-Effective Solution For Your Business */}
      <section className="flex items-center justify-between gap-12 max-md:flex-col max-md:*:w-full">
        <div className="w-1/2 space-y-8 max-md:space-y-5 tracking-wide">
          <div className="space-y-6  max-md:text-center">
            <h1 className="text-5xl max-md:text-4xl font-bold tracking-tight leading-snug">
              Discover the Cost-Effective Solution For Your Business
            </h1>
            <p className="font-medium text-neutral-500 max-md:text-sm ">
              Our third solution offers a cost-effective way to meet your
              business needs. With its innovative features and competitive
              pricing. you can save both time and money.
            </p>
          </div>

          <div className="flex items-center justify-between space-x-6">
            <Box
              label="1. Efficiency:"
              iconDisabled
              className="w-1/2 space-y-4"
              desc="Streamline operations and reduced overhead costs with our efficient solution."
            />
            <Separator className="" orientation="vertical" />
            <Box
              label="2. Features:"
              iconDisabled
              className="w-1/2 space-y-5"
              desc="Advanced analytics to track and make data-driven decisions."
            />
          </div>
        </div>

        <div className="w-1/2">
          <img
            className="rounded-lg shadow-md scale-90 hover:scale-95 transition-all"
            src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sol"
          />
        </div>
      </section>

      {/* Discover the Advantages of Our Solutions */}
      <section className="flex items-center justify-between gap-12 max-md:flex-col max-md:*:w-full">
        <div className="w-1/2 flex flex-col gap-12 tracking-wide">
          <div className="space-y-6 max-md:text-center">
            <h1 className="text-5xl max-md:text-4xl leading-snug font-bold tracking-tight">
              Discover the Advantages of Our Solutions
            </h1>
            <p className="font-medium text-neutral-500 max-md:text-sm">
              Our solutions offer a range of benefits that set us apart from the
              competition. With our innovative features and exceptional customer
              service, you can trust us to meet your needs.
            </p>
          </div>

          <div className="flex justify-between gap-6 max-md:text-center *:flex *:flex-col *:max-md:items-center">
            <Box
              label="Reliable Performance"
              className="w-1/2 gap-3"
              desc="Experience consistent and reliable performance with our cutting-edge solutions."
            />
            <Separator orientation="vertical" />
            <Box
              label="Cost-Effective"
              className="w-1/2 md:gap-3 gap-6"
              desc="Save money without compromising on quality with our affordable solutions."
            />
          </div>
        </div>

        <Separator className="my-10 max-md:hidden" orientation="vertical" />

        <div className="w-1/2">
          <img
            className="rounded-lg shadow-md scale-95 hover:scale-100 transition-all"
            src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="sol"
          />
        </div>
      </section>

      <Separator className="my-20" />

      {/* Discover Our Effective Solutions for Your Business */}
      <section className="flex flex-col gap-2 items-center justify-center">
        <div className="">
          <h1 className="text-3xl md:text-5xl tracking-tight text-center font-bold">
            Discover Our Effective Solutions for Your Business
          </h1>
        </div>
        <div className="flex max-md:flex-col items-center justify-between space-x-6 max-md:space-x-0 max-md:space-y-8 mt-20 max-md:mt-10">
          {Sols.map((sol) => (
            <div className="flex flex-col justify-center items-center w-1/3 max-md:w-full space-y-5 text-center">
              <img
                className="rounded-md shadow-sm scale-100 max-md:scale-90"
                src={sol.imgSrc}
                alt="sols"
              />
              <h1 className="text-2xl tracking-tighter font-bold">
                {sol.title}
              </h1>
              <p className=" text-neutral-500 tracking-tight font-medium text-[15px]">
                {sol.content}
              </p>
              <Link
                className="text-lg hover:text-green-600 transition-all font-semibold underline"
                to={sol.link}
              >
                {sol.button}
              </Link>
            </div>
          ))}
        </div>
      </section>

      <Separator className="my-20" />

      {/* swiper */}
      <section className="py-8">
        <Swiper
          pagination={{
            dynamicBullets: true,
          }}
          spaceBetween={40}
          slidesPerView={1}
          navigation={true}
          modules={[Pagination, Navigation]}
          className="mySwiper h-[50vh] *:text-center"
        >
          <SwiperSlide className="">
            <div className="min-h-[50vh] flex items-center justify-center ">
              <div className="w-full max-w-2xl p-6 bg-white rounded-lg">
                <div className="flex space-x-2 mb-5 items-center justify-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h1 className="text-3xl max-md:text-xl font-bold text-center mb-6">
                  The Data Science department's work
                </h1>
                <div className="text-gray-700">
                  <p className="mb-4 font-medium max-md:text-xs text-neutral-500">
                    The data science department's work has been truly
                    transformative. Their insights and analysis have helped us
                    make data-driven decisions that have significantly improved
                    our business outcomes.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>

          <SwiperSlide className="">
            <div className="min-h-[50vh] flex items-center justify-center ">
              <div className="w-full max-w-2xl p-6 bg-white rounded-lg">
                <div className="flex space-x-2 mb-5 items-center justify-center">
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                  <FaStar />
                </div>
                <h1 className="text-3xl  max-md:text-xl font-bold text-center mb-6">
                  Our Experience with the Company
                </h1>
                <div className="text-gray-700">
                  <p className="mb-4 max-md:text-xs font-medium text-neutral-500">
                    Our experience with the company has been nothing short of
                    exceptional. Their solutions have helped us streamline our
                    processes and increase productivity. Their solutions have
                    been instrumental in helping us achieve our business goals
                    and improve our bottom line. We highly recommend their
                    services to any organization looking to streamline their
                    processes and increase productivity.
                  </p>
                </div>
              </div>
            </div>
          </SwiperSlide>
        </Swiper>
      </section>

      <Separator className="my-20" />

      <section className="flex items-center justify-center p-8">
        <Faq />
      </section>
    </main>
  );
};

export default Solutions;
