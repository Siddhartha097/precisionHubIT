import Box from "@/components/Box"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


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

                <div className=" space-y-6 text-center md:text-left">
                    <p className="text-sm md:text-base font-medium text-slate-600">
                        Founded in September 2023, PrecisionHub IT Industries Private Limited embarked on a transformative journey with a mission to redefine B2B IT solutions. From our humble beginnings, we have been dedicated to harnessing the power of cutting-edge technologies to drive innovation and efficiency for businesses across diverse industries. We are a leading software company that specializes in developing cutting-edge solutions to help businesses thrive in the digital age.
                    </p>
                    <Button className="rounded-none border border-black hover:bg-green-600 hover:border-green-600 hover:text-white">
                        Learn More
                    </Button>
                </div>
            </section>

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

        </main>
    )
}

export default About