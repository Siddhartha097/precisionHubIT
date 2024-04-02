import Box from "@/components/Box";
import ContactBox from "@/components/ContactBox";
import MoreBtn from "@/components/MoreBtn";
import Newsletter from "@/components/Newsletter";
import PercentBox from "@/components/PercentBox";
import ImageBox from "@/components/ImageBox";
import Transforming from "@/components/Transforming";
import Faq from "@/components/Faq";
import Branches from "@/components/Branches";

import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { techVid } from "@/images";

import { BsBoxFill } from "react-icons/bs";
import {
  MdOutlineMail,
  MdOutlineLocationOn,
  MdOutlinePhoneAndroid,
} from "react-icons/md";
import { FaStar } from "react-icons/fa";

import { Services, WorkFlow } from "@/Data";

const About = () => {
  return (
    <main className="py-14 px-8 space-y-12 md:p-16 w-full h-full relative tracking-tight">
      <section className="flex gap-6 md:*:w-1/2 md:flex-row flex-col justify-center items-center md:justify-center">
        <div className="flex items-center justify-center text-center md:text-left">
          <h1 className="font-bold text-4xl md:text-6xl tracking-tight">
            Our Journey: <br /> PrecisionHub IT Industries Private Limited
          </h1>
        </div>

        <Separator className=" md:hidden" />

        <div className=" text-center md:text-right">
          <p className="text-base tracking-tight font-medium text-slate-600">
            Founded in September 2023, PrecisionHub IT Industries Private
            Limited embarked on a transformative journey with a mission to
            redefine B2B IT solutions. From our humble beginnings, we have been
            dedicated to harnessing the power of cutting-edge technologies to
            drive innovation and efficiency for businesses across diverse
            industries. We are a leading software company that specializes in
            developing cutting-edge solutions to help businesses thrive in the
            digital age.
          </p>
          <MoreBtn className="mt-6" variant="default" link="/learn" />
        </div>
      </section>

      <section className="flex items-center justify-center md:p-14">
        <img
          className="rounded-lg shadow-md "
          src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt=""
        />
      </section>

      <section className="flex flex-col p-10 max-md:p-5 items-center justify-center md:flex-row gap-5 md:gap-12 md:*:w-1/2">
        <div>
          <Box
            label="Inception And Vision"
            desc="Our journey commenced with a vision to elevate the standards of IT solutions, recognizing the pivotal role they play in shaping the future of businesses. From the onset, our goal was to establish a company that seamlessly integrates expertise with creativity, delivering solutions that not only meet but exceed the evolving needs of our clients."
            className="space-y-5 flex flex-col max-md:items-center max-md:text-center justify-center"
            titleSize="text-4xl"
            descSize="text-base"
            iconSize={35}
          />
        </div>
        <ImageBox
          imgSrc="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          imgClassName="rounded-md shadow-md"
          className="flex flex-col items-center justify-center"
        />
      </section>

      <Separator className="my-10" />

      <section className="flex flex-col gap-10 items-center justify-center p-5">
        <div className="flex flex-col items-center justify-center text-center">
          <div className="space-y-5 w-1/2 max-md:w-full">
            <Label htmlFor="text">Efficient</Label>
            <h1 className="text-3xl md:text-5xl font-bold tracking-wide">
              Streamline Your Workflow with Our Company
            </h1>
            <p className="text-sm md:text-base font-medium text-slate-500">
              PrecisionHub IT offers three key benefits: increased productivity,
              improved efficiency, and enhanced collaboration. Our intuitive
              interface and powerful features allow you to easily manage your
              tasks, automate repetitive processes, and collaborate seamlessly
              with your team.
            </p>
          </div>
        </div>

        <div className="*:w-1/3 flex max-md:flex-col items-center justify-between gap-6 md:gap-10 max-md:*:w-full">
          <Box
            label="Increase Productivity and Efficiency"
            desc="Our company helps you boost productivity and efficiency by automating manual tasks and streamlining workflows."
            className="flex flex-col items-center justify-center gap-4 text-center"
            titleSize="text-3xl"
            descSize="text-base"
            iconSize={35}
          />
          <Box
            label="Improve Collaboration and Communication"
            desc="Collaborate seamlessly with your team and improve communication with our software's built-in collaboration tools."
            className="flex flex-col items-center justify-center gap-4 text-center"
            titleSize="text-3xl"
            descSize="text-base"
            iconSize={35}
          />
          <Box
            label="Enhance Data Security and Privacy"
            desc="Protect your sensitive data and ensure privacy with our software's advanced security features."
            className="flex flex-col items-center justify-center gap-4 text-center"
            titleSize="text-3xl"
            descSize="text-base"
            iconSize={35}
          />
        </div>

        <MoreBtn variant="default" link="/learn" />
      </section>

      <Separator className="my-10" />

      <section className="flex items-center p-6 justify-between gap-16 max-md:gap-10 flex-col md:flex-row">
        <div className="space-y-5">
          <Label htmlFor="text">Innovative</Label>
          <h1 className="text-5xl font-bold max-md:text-3xl">
            Streamline Your Workflow with Our Software Solution
          </h1>
          <MoreBtn className="mt-6" link="/learn" />
        </div>

        <div className="flex gap-8">
          <div className="gap-20 flex flex-col items-center">
            <div className="flex flex-col items-center space-y-8">
              <BsBoxFill size={30} />
              <div className="h-[2px] w-[50px] bg-black rotate-90" />
            </div>
            <div className="flex flex-col items-center space-y-8">
              <BsBoxFill size={30} />
              <div className="h-[2px] w-[50px] bg-black rotate-90" />
            </div>
            <div className="flex flex-col items-center space-y-8">
              <BsBoxFill size={30} />
              <div className="h-[2px] w-[50px] bg-black rotate-90" />
            </div>
            <div className="flex flex-col items-center space-y-8">
              <BsBoxFill size={30} />
              <div className="h-[2px] w-[50px] bg-black rotate-90" />
            </div>
          </div>
          <div className="space-y-10">
            {WorkFlow.map((work) => (
              <div className="space-y-5">
                <h1 className="text-2xl font-bold max-md:text-xl">
                  {work.label}
                </h1>
                <p className="max-md:text-sm text-slate-600 font-medium">
                  {work.content}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="flex p-6 max-md:flex-col items-center justify-between gap-10">
        {Services.map((service) => (
          <Box
            label={service.label}
            desc={service.content}
            className="space-y-6 w-1/3 max-md:w-full tracking-wide flex flex-col items-center justify-center text-center"
            iconSize={35}
            titleSize="text-3xl max-md:text-2xl"
            descSize="text-base"
          />
        ))}
      </section>

      <Separator className="my-10" />

      <section className="flex flex-col justify-between gap-14 max-md:gap-8">
        <div className="flex flex-col items-center justify-center text-center gap-10 px-10 max-md:px-5">
          <h1 className="text-6xl font-bold max-md:text-5xl tracking-tight">
            Our Stack Of Services
          </h1>
          <p className="font-medium tracking-tighter text-slate-600 max-md:text-sm">
            The motto is "Your Vision is our Mission" and we are confident that
            we will give you exactly what you need. Whether you are a start-up
            looking for the latest trends and professional developers to bring
            your fantastic idea to life, or a prominent entity in the world of
            business looking to expand, evolve and bring your A-game to the
            table, we are here with you and for you, with the finest ideas and
            apt solutions. Team PrecisionHub IT will undoubtedly make your tasks
            easier by providing the correct guidance, designs, and seamless user
            experience with the use of cutting-edge technology, perfect code,
            expert development, and the works! We will not leave you at just
            that. Our competent team members will go through an in-depth market
            analysis of your project, catering to it with the vast knowledge of
            the industry's best practices.
          </p>
        </div>

        <br />

        <div className="flex items-center max-md:flex-col justify-between gap-14">
          <Branches
            title="Full Stack Web Developement"
            className="basis-1/3"
            link="/web-developement"
          />
          <Branches
            title="Full Stack Data Science"
            className="basis-1/3"
            link="/data-science"
          />
          <Branches
            title="App Developement"
            className="basis-1/3"
            link="/app-developement"
            // /app-developement
          />
        </div>
      </section>

      <Separator className="my-10" />

      <section className="flex items-center max-md:flex-col-reverse justify-center space-x-8 *:w-1/2 max-md:*:w-full max-md:space-x-0 max-md:gap-10">
        <div className="space-y-8 max-md:text-center">
          <Label htmlFor="text">Innovative</Label>
          <h1 className="font-bold text-4xl max-md:text-3xl">
            Fueling Growth and Success with Cutting-Edge Solutions
          </h1>
          <p className="font-medium text-neutral-600 max-md:text-sm">
            Our company has achieved remarkable growth and success, backed by
            compelling statistics that demonstrate our impact in the industry.
            We are proud to be at the forefront of innovation, delivering
            cutting-edge solutions to our clients.
          </p>
          <div className="flex *:w-1/2 items-center justify-between space-x-7 *:space-y-5">
            <PercentBox text="Increase in Revenue Year Over Year" />
            <PercentBox text="Reduction in Customer Churn Rate" />
          </div>

        </div>

        <div className="">
          <video
            loop
            muted
            controlsList="nodownload"
            autoPlay
            className="rounded-md scale-100"
          >
            <source src={techVid} type="video/mp4" />
          </video>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="flex max-md:flex-col items-center justify-center gap-10">
        <div className="flex items-center justify-center md:w-2/3">
          <img
            src="https://images.unsplash.com/photo-1516321318423-f06f85e504b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            className="rounded-lg shadow-md scale-90 hover:scale-95 transition-all"
            alt=""
          />
        </div>

        <div className="flex flex-col items-center justify-center gap-5 md:w-1/2 space-y-4">
          <div className="flex space-x-2 mb-5 items-center justify-center">
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
            <FaStar />
          </div>

          <h1 className="font-semibold">
            Our experience with the software has been nothing short of amazing.
            It has greatly improved our productivity and efficiency.
          </h1>

          <div className="text-center flex items-center justify-center space-x-8">
            <p className="text-gray-700 max-md:text-sm">
              {" "}
              <b>Rick Dawson, CEO,</b>
              <br /> XYZ Corp
            </p>
            <p className="text-3xl  font-bold">|</p>
            <p className="font-bold">WorkFlow</p>
          </div>
        </div>
      </section>

      <Separator className="my-10" />

      <section className="flex items-center justify-center">
        <Newsletter />
      </section>

      <Separator className="my-10" />

      <section className="flex items-center justify-center *:w-1/3 max-md:*:w-full max-md:flex-wrap gap-12 p-10">
        <ContactBox
          label="Email"
          icon={MdOutlineMail}
          desc="Feel free to reach out to us with any questions or support needs."
          link="precisionhub@mail.com"
          center
        />
        <ContactBox
          label="Phone"
          icon={MdOutlinePhoneAndroid}
          desc="You can contact us at any time for assistance."
          link="+91-1234567890"
          center
        />
        <ContactBox
          label="Office"
          icon={MdOutlineLocationOn}
          desc="Visit our office during business hours."
          link="123 Sample St, Kolkata, WestBengal, India"
          center
        />
      </section>

      <Separator className="my-10" />

      <Transforming />

      <Separator className="my-10" />

      <Faq />
    </main>
  );
  //   return(
  //   <div>
  //     <section className="flex ">
  //       <div className="w-1/2 ">
  //         left
  //         <h1 className="text-5xl">

  //           Streamline and enhance your
  //           business processes using our
  //           software.

  //         </h1>
  //         <p className="pb-10">
  //           Our software features are designed to streamline your processes and increase
  //           efficiency. With intuitive interfaces and powerful automation tools, you can
  //           save time and focus on what matters most.
  //         </p>
  //         <AboutPara name="Streamline your processes with our software" desc="Our software helps you simplify and automate your business processes, saving
  // you time and effort."></AboutPara>
  //         <AboutPara name="Increase efficiency with our powerful features" desc="Our software offers a range of powerful features designed to streamline your
  // processes and boost productivity."></AboutPara>
  //         <AboutPara name="Optimize your workflow with our intuitive interface" desc="Our software's intuitive interface makes it easy for you to manage and streamline
  // your workflow."></AboutPara>
  //       </div>
  //       <div className="w-1/2">
  //         right
  //         <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="p-20" alt="" />
  //       </div>
  //     </section>

  //     {/* part 2 */}

  //     <div className="w-1/2 py-20">
  //       <h1 className="text-5xl font-bold pb-10">Streamline your Company's Processes with our latest software</h1>
  //         <li className="text-red-600 text-2xl font-bold">Increase Efficiency</li>
  //         <p className="pl-6 border-l-2 font-semibold h-40">Our software provides a step-by-step guide to help you streamline your
  //           company's processes.
  //         </p>
  //         <li className="text-red-600 text-2xl font-bold"> Save Time</li>
  //         <p className="pl-6 border-l-2 font-semibold h-40">With our software, you can automate repetitive tasks, saving you valuable time</p>
  //         <li className="text-red-600 text-2xl font-bold"> Improve Accuracy</li>
  //         <p className="pl-6 border-l-2 font-semibold h-40"> Eliminate human errors and ensure accuracy in your company's processes</p>
  //         <li className="text-red-600 text-2xl font-bold"> Enhance Collaboration</li>
  //         <p className="pl-6 border-l-2 font-semibold h-20"> Our software promotes seamless collaboration among team members,
  // improving productivity.</p>
  //     </div>

  //     {/* part 3 */}
  //     <div>

  //       <form action="">
  //         <div>
  //           <input type="text" name="name" value={'NAME'}/>
  //           <input type="email" name="email" value={'EMAIL'}/>
  //         </div>
  //         <div>
  //           <input type="number" name="" value={'PHONENUMBER'} className="text-black" />
  //           <input type="number" name="number" value={'BUDGET'}/>
  //         </div>
  //         <div>
  //           INP
  //         </div>
  //         <div></div>
  //         <div></div>

  //       </form>
  //     </div>
  //   </div>)
};

export default About;
