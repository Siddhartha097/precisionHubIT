import Box from "@/components/Box"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"


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
                    <Link to={'/learn'}>
                        <Button className="rounded-none border mt-5 border-black hover:bg-green-600 hover:border-green-600 hover:text-white">
                            Learn More
                        </Button>
                    </Link>
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

                <Link to={'/learn'}>
                    <Button className="rounded-none border hover:shadow-md border-black hover:bg-green-600 hover:border-green-600 hover:text-white">
                        Learn More
                    </Button>
                </Link>
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
                    <Button className="rounded-none border border-black hover:bg-green-600 hover:border-green-600 hover:text-white" >
                        View More
                    </Button>
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

        </main>
    )
}

export default About