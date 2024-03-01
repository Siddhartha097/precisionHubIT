import Box from "@/components/Box"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom";
import { FaStar } from "react-icons/fa6";
import { Swiper, SwiperSlide } from 'swiper/react';
import "swiper/css";
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Pagination } from 'swiper/modules';
import { Navigation } from 'swiper/modules';

const Sols = [
  {
    title: "Streamline Your Processes with Our Innovative Solutions",
    content: "Our solutions are designed to meet your specific needs, ensuring seamless implementation and maximum efficiency.",
    button: "Learn More",
    link: "#",
    imgSrc: "https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Optimize Your Operations with Our Tailored Solutions",
    content: "We work closely with you to understand your challenges and provide customized solutions that drive results.",
    button: "Contact Us",
    link: "#",
    imgSrc: "https://images.unsplash.com/photo-1453928582365-b6ad33cbcf64?q=80&w=2073&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
  {
    title: "Transform Your Business with Our Cutting-Edge Solutions",
    content: "Our team of experts will guide you through the implementation process, ensuring a smooth transition and optimal performance.",
    button: "Get Started",
    link: "#",
    imgSrc: "https://images.unsplash.com/photo-1527689368864-3a821dbccc34?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  },
];



const Solutions = () => {
  return (
    <main className="relative p-20 w-full h-full space-y-14">   

      <section className="relative w-[90vw] h-[90vh] max-md:h-[50vh] max-md:w-full rounded-md flex flex-col justify-center p-10 max-md:p-6 space-y-6 bg-cover bg-[url('https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
         <div className="space-y-5 bg-slate-600/20 relative text-white p-10 max-md:p-0">
          <h1 className="text-5xl max-md:text-3xl font-bold">
              Transforming Businesses with Innovative Solutions
            </h1>
            <p className="font-medium max-md:text-sm">
              Discover how our cutting-edge solutions can revolutionize your business and drive growth.
            </p>
            <Button className="rounded-none border border-black hover:bg-green-600 hover:border-green-600 hover:text-white" >Learn More</Button>
         </div>
      </section>

      <Separator className="my-20" />
    
      <section className="flex items-center justify-between w-full h-full py-6 max-md:flex-col max-md:space-y-6">

        <div className="w-1/2 max-md:w-full max-md:text-center">
          <h1 className="text-4xl max-md:text-3xl font-bold">Discover the Power of Our Innovatve Solution</h1>
        </div>

        <Separator className="mx-6 " orientation="vertical" />

        <div className="w-1/2 max-md:w-full flex flex-col justify-between gap-20 items-center">

          <h3 className="text-2xl max-md:text-xl max-md:text-center font-medium">
            Our solution revolutionizes the way you work, providing unmatched efficiency and productivity.
          </h3>

          <div className="flex items-center justify-between space-x-6">

            <Box 
              label="Efficiency"
              desc="Streamline your process and save time with our cutting-edge solution."
              className="space-y-5 w-1/2"
            />

            <Separator orientation="vertical" className="mx-6" />

            <Box 
              label="Productivity"
              desc="Boost your team's output and achieve more with our innovative solution."
              className="space-y-5 w-1/2"
            />

          </div>

        </div>
      </section>

      <Separator className="my-20" />

      <section className="flex items-center justify-center">
        <img className="rounded-lg shadow-md scale-90 transition-all" src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />
      </section>

      <Separator className="my-20" />

      <section className="flex flex-col space-y-10 items-center justify-between">
        <div className="flex items-center justify-between">
          <div className="w-1/2">
            <h1 className="text-4xl font-bold">
              Experience the Power of Our Second Solution for Maximum Efficiency
            </h1>
          </div>
          <Separator orientation="vertical" className="mx-8" />
          <div className="w-1/2">
            <h3 className="font-medium ">
              Our second solution is designed to streamline your workflow, saving you time and resources. With its advanced features and user-friendly interface, you can easily manage and optimize your tasks, ensuring maximum efficiency.
            </h3>
          </div>
        </div>

        <div className="flex items-center justify-center pt-6">
          <img className="rounded-lg scale-90 shadow-md" src="https://images.unsplash.com/photo-1627634777217-c864268db30c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sols" />
        </div>
      </section>

      <Separator className="my-20" />

      <section className="flex items-center justify-between space-x-8 ">
        <div className="w-1/2 space-y-8">

          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Discover the Cost-Effective Solution For Your Business</h1>
            <p className="font-medium text-neutral-500">
              Our third solution offers a cost-effective way to meet your business needs. With its innovative features and competitive pricing. you can save both time and money.
            </p>
          </div>

          <div className="flex items-center justify-between space-x-7">
            <Box 
              label="1. Benefits:"
              iconDisabled
              className="w-1/2 space-y-5"
              desc="Streamline operations and reduced overhead costs with our efficient solution"
            />
            <Separator orientation="vertical" />
            <Box 
              label="2. Features:"
              iconDisabled
              className="w-1/2 space-y-5"
              desc="Advanced analytics to track and make data-driven decisions."
            />
          </div>

        </div>

        <Separator className="my-10" orientation="vertical" />

        <div className="w-1/2">
          <img className="rounded-lg shadow-md scale-90 hover:scale-95 transition-all" src="https://images.unsplash.com/photo-1474631245212-32dc3c8310c6?q=80&w=1924&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sol" />
        </div>

      </section>

      <Separator className="my-20" />

      <section className="flex items-center justify-between space-x-8 ">
        <div className="w-1/2 space-y-8">

          <div className="space-y-6">
            <h1 className="text-4xl font-bold">Discover the Advantages of Our Solutions</h1>
            <p className="font-medium text-neutral-500">
            Our solutions offer a range of benefits that set us apart from the competition. With our innovative features and exceptional customer service, you can trust us to meet your needs.
            </p>
          </div>

          <div className="flex items-center justify-between space-x-7">
            <Box 
              label="Reliable Performance"
              className="w-1/2 space-y-5"
              desc="Experience consistent and reliable performance with our cutting-edge solutions."
            />
            <Separator orientation="vertical" />
            <Box 
              label="Cost-Effective"
              className="w-1/2 space-y-5"
              desc="Save money without compromising on quality with our affordable solutions."
            />
          </div>

        </div>

        <Separator className="my-10" orientation="vertical" />

        <div className="w-1/2">
          <img className="rounded-lg shadow-md scale-90 hover:scale-95 transition-all" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="sol" />
        </div>

      </section>

      <Separator className="my-20" />

      <section className="flex pt-10 flex-col items-center justify-center">
        <div className="w-[60vw]">
          <h1 className="text-3xl md:text-5xl text-center font-bold">
            Discover Our Effective Solutions for Your Business
          </h1>
        </div>
        
        <div className="flex items-center justify-between space-x-6 mt-20">
          {Sols.map(sol => (
            <div className="flex flex-col justify-center items-center w-1/3 space-y-5 text-center">
              <img className="rounded-md shadow-sm scale-95" src={sol.imgSrc} alt="sols" />
              <h1 className="text-2xl font-bold">
                {sol.title}
              </h1>
              <p className=" text-neutral-500 font-medium text-[15px]">
                {sol.content}
              </p>
              <Link className="text-lg hover:text-green-600 transition-all font-semibold underline" to={sol.link}>
                {sol.button}
              </Link>

            </div>
          ))}
        </div>
      </section>

      <Separator className="my-20" />

      <section>
        <Swiper   pagination={{
          dynamicBullets: true,
        }}
        spaceBetween={40}
        slidesPerView={1}
        navigation={true} 
        modules={[Pagination, Navigation]}
        className="mySwiper h-[50vh] *:text-center">
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
                  <h1 className="text-3xl font-bold text-center mb-6">
                    Our Experience with the Company
                  </h1>
                  <div className="text-gray-700">
                    <p className="mb-4 font-medium text-neutral-500">
                      Our experience with the company has been nothing short of exceptional.
                      Their solutions have helped us streamline our processes and increase
                      productivity.
                      Their solutions have been instrumental in helping us achieve our
                      business goals and improve our bottom line.
                      We highly recommend their services to any organization looking to
                      streamline their processes and increase productivity.
                    </p>
                    <Separator className="my-6" />
                    <div className="text-center flex items-center justify-center space-x-8">
                      <p className="text-gray-700"> <b>Rick Dawson, CEO,</b><br /> XYZ Corp</p>
                      <p className="text-3xl font-bold">|</p>
                      <p className="font-bold">WorkFlow</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
            <SwiperSlide className="">
              <div className="min-h-[60vh] flex items-center justify-center ">
                <div className="w-full max-w-2xl p-6 bg-white rounded-lg">
                  <div className="flex space-x-2 mb-5 items-center justify-center">
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                    <FaStar />
                  </div>
                  <h1 className="text-3xl font-bold text-center mb-6">
                    Our Experience with the Company
                  </h1>
                  <div className="text-gray-700">
                    <p className="mb-4 font-medium text-neutral-500">
                      Our experience with the company has been nothing short of exceptional.
                      Their solutions have helped us streamline our processes and increase
                      productivity.
                      Their solutions have been instrumental in helping us achieve our
                      business goals and improve our bottom line.
                      We highly recommend their services to any organization looking to
                      streamline their processes and increase productivity.
                    </p>
                    <Separator className="my-6" />
                    <div className="text-center flex items-center justify-center space-x-8">
                      <p className="text-gray-700"> <b>John Doe, CEO,</b><br /> ABC Corp</p>
                      <p className="text-3xl font-bold">|</p>
                      <p className="font-bold">WorkFlow</p>
                    </div>
                  </div>
                </div>
              </div>
            </SwiperSlide>
        </Swiper>
      </section>

    </main>
  )
}

export default Solutions