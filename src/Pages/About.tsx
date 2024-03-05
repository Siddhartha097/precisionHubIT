import Box from "@/components/Box";
import MoreBtn from "@/components/MoreBtn";
import PercentBox from "@/components/PercentBox";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

import { techVid } from "@/images";

import { BsBoxFill } from "react-icons/bs";


const WorkFlow = [
    {
        label: "Efficiency Boost",
        content: "Our software seamlessly integrates into your existing systems, optimizing your operations.",
    },
    {
        label: "Cost Savings",
        content: "Reduce expenses and maximize your budget with our software's cost-effective features.",
    },
    {
        label: "User-Friendly",
        content: "Experience a smooth learning curve with our intuitive software interface and comprehensive support.",
    },
    {
        label: "Customizable Solutions",
        content: "Tailor our software to meet your specific needs and achieve your business goals.",
    },
];

const Services = [
    {
        label: "Comprehensive Support and Training",
        content: "Our software comes with a range of support and training options to ensure your success.",
    },
    {
        label: "24/7 Customer Support",
        content: "Our dedicated team is available around the clock to assist you with any questions or issues.",
    },
    {
        label: "Personalized Training Programs",
        content: "We offer customized training programs tailored to your specific needs and goals.",
    },
];

const About = () => {
    return (
        <main className="py-14 px-8 space-y-12 md:p-16 w-full h-full relative">

            <section className="flex gap-6 md:*:w-1/2 md:flex-row flex-col justify-center items-center md:justify-center">
                <div className="flex items-center justify-center text-center md:text-left">
                    <h1 className="font-bold text-3xl md:text-5xl">
                        Our Journey: <br /> PrecisionHub IT Industries Private Limited 
                    </h1>
                </div>
                
                <Separator className=" md:hidden" />

                <div className=" text-center md:text-right">
                    <p className="text-sm md:text-base font-medium text-slate-600">
                        Founded in September 2023, PrecisionHub IT Industries Private Limited embarked on a transformative journey with a mission to redefine B2B IT solutions. From our humble beginnings, we have been dedicated to harnessing the power of cutting-edge technologies to drive innovation and efficiency for businesses across diverse industries. We are a leading software company that specializes in developing cutting-edge solutions to help businesses thrive in the digital age.
                    </p>
                    <MoreBtn className="mt-6" link="/learn" />
                </div>
            </section>

            <Separator className="my-10" />

            <section className="flex items-center justify-center md:p-14">
                <img className="rounded-lg shadow-md " src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
            </section>

            <Separator className="my-10" />

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
                <div className="p-5">
                    <img className="rounded-md shadow-md" src="https://images.unsplash.com/photo-1504805572947-34fad45aed93?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
            </section>

            <Separator className="my-10" />

            <section className="flex flex-col gap-10 items-center justify-center p-5">
                <div className="flex flex-col items-center justify-center text-center">
                    <div className="space-y-5 w-1/2 max-md:w-full">
                        <Label htmlFor="text">Efficient</Label>
                        <h1 className="text-3xl md:text-5xl font-bold tracking-wide">Streamline Your Workflow with Our Company</h1>
                        <p className="text-sm md:text-base font-medium text-slate-500">
                            PrecisionHub IT offers three key benefits: increased productivity, improved efficiency, and enhanced collaboration. Our intuitive interface and powerful features allow you to easily manage your tasks, automate repetitive processes, and collaborate seamlessly with your team.
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

                <MoreBtn link="/learn" />
            </section>

            <Separator className="my-10" />

            <section className="relative h-[60vh] rounded-md flex flex-col justify-center space-y-6 bg-cover bg-[url('https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                
                <div className=" h-screen rounded-md space-y-6 text-white bg-slate-600/50 relative flex flex-col max-md:text-center justify-center items-center">
                    <Label>Tagline</Label>
                    <h1 className="text-5xl max-md:text-3xl font-bold">
                        Our Department
                    </h1>
                    <p className="font-medium w-1/2 text-center max-md:text-sm">
                       Lorem ipsum dolor sit amet consectetur adipisicing elit. Corrupti iure cupiditate nisi, porro consequuntur expedita delectus laborum ipsam aut deserunt?
                    </p>
                    <MoreBtn label="View More" variant="default" />
                </div>
            </section>

            <Separator className="my-10" />

            <section className="flex pt-6 max-md:flex-col-reverse max-md:space-x-0 max-md:space-y-7 items-center justify-between space-x-8">

                {/* non-image */}
                <div className="space-y-10 md:w-1/2 w-full">

                    {/* title and description */}
                    <h1 className="text-5xl max-md:text-3xl font-bold tracking-wide max-md:text-center ">
                        Discover the Power of Our Revolutionary Software Solution
                    </h1>
                    <p className=" font-medium text-slate-600 max-md:text-sm max-md:text-center">
                        Experience a seamless workflow and increased productivity with our cutting-edge software. Say goodbye to manual processes and hello to efficiency.
                    </p>

                    {/* boxes */}
                    <div className="flex items-center justify-between space-x-5">
                        <Box 
                            className="space-y-4 max-md:flex max-md:text-center flex-col items-center justify-center"
                            descSize="text-base"
                            titleSize="text-2xl"
                            label="Efficiency"
                            desc="Streamline your operations and save time with our intuitive and user-friendly software."
                        />
                        <Box 
                            className="space-y-4 max-md:flex max-md:text-center flex-col items-center justify-center"
                            descSize="text-base"
                            titleSize="text-2xl"
                            label="Productivity"
                            desc="Boost your team's productivity and achieve more with our powerful software solution."
                        />
                    </div>

                </div>

                {/* image */}
                <div className="w-1/2 max-md:w-full">
                    <img className="rounded-md shadow-md scale-90 hover:scale-95 transition-all " src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />
                </div>

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
                        {WorkFlow.map(work => (
                            <div className="space-y-5">
                                <h1 className="text-2xl font-bold max-md:text-xl">{work.label}</h1>
                                <p className="max-md:text-sm text-slate-600 font-medium">{work.content}</p>
                            </div>
                        ))}
                    </div>

                </div>

            </section>
           
            <Separator className="my-10" />

            <section className="flex p-6 max-md:flex-col items-center justify-between gap-10">
                {Services.map(service => (
                    <Box 
                        label={service.label}
                        desc={service.content}
                        className="space-y-6 w-1/3 max-md:w-full tracking-wide flex flex-col items-center justify-center text-center"
                        iconSize={35}
                        titleSize="text-3xl max-md:text-2xl"
                        descSize="text-base"
                        isBtn
                    />
                ))}
            </section>

            <Separator className="my-10" />

            <section className="flex max-md:flex-col items-center gap-8 justify-evenly">

                {/* image */}
                <div className="md:w-2/3">
                    <img className="rounded-lg shadow-md scale-90 hover:scale-95 transition-all" src="https://images.unsplash.com/photo-1598520106830-8c45c2035460?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="room" />
                </div>

                {/* non-image */}
                <div className=" space-y-5 md:w-1/2">
                    <h1 className="text-4xl font-bold max-md:text-3xl">
                        Welcome to our company, where innovation meets excellence.
                    </h1>
                    <p className="text-slate-500 font-medium max-md:text-sm max-md:text-right">
                    At our company, we are dedicated to providing cutting-edge solutions that empower businesses to thrive in the digital age.
                    </p>
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
                        Our company has achieved remarkable growth and success, backed by compelling statistics that demonstrate our impact in the industry. We are proud to be at the forefront of innovation, delivering cutting-edge solutions to our clients.
                    </p>
                    <div className="flex *:w-1/2 items-center justify-between space-x-7 *:space-y-5">
                        <PercentBox 
                            text="Increase in Revenue Year Over Year"
                        />
                        <PercentBox 
                            text="Reduction in Customer Churn Rate"
                        />
                    </div>

                    <MoreBtn className="mt-5" link="/learn" />
                </div>

                <div className="">
                    <video loop muted autoPlay className="rounded-md scale-100">
                        <source src={techVid} type="video/mp4" />
                    </video>
                </div>

                

            </section>  

            <Separator className="my-10" />

        </main>
    )
}

export default About