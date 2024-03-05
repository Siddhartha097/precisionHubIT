import HeroBox from "@/components/HeroBox"
import PercentBox from "@/components/PercentBox"
import { Separator } from "@/components/ui/separator"


const Researches = () => {
    return (
        <main className="p-16 max-md:px-8 space-y-14 w-full h-full">
           <section className="relative h-[90vh] max-md:h-[60vh] rounded-md flex flex-col justify-center items-center space-y-6 bg-cover bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                {/* <div className=" h-screen rounded-md bg-gray-400/30 p-6  w-full relative text-center max-md: flex flex-col justify-center items-center">
                    <h1 className="text-5xl max-md:text-2xl font-bold">
                        Empowering Researchers with Innovative Software Solutions
                    </h1>
                    <p className="font-medium max-md:text-sm p-7 ">
                        Our software provides researchers with advanced tools and insights to drive groundbreaking discoveries in their fields.
                    </p>
                    <MoreBtn link="/learn" variant="default" className="p-5" />
                </div> */}
                <HeroBox 
                    title="Empowering Researchers with Innovative Software Solutions"
                    subTitle="Our software provides researchers with advanced tools and insights to drive groundbreaking discoveries in their fields."
                    btnName="Learn More"
                />
            </section>

            <Separator className="my-14 " />

            <section className="flex items-center max-md:flex-col-reverse justify-center space-x-8 *:w-1/2 max-md:*:w-full max-md:space-x-0 max-md:gap-10">

                <div className="space-y-8 max-md:space-y-6 max-md:text-center">
                    <h1 className="font-bold text-4xl max-md:text-2xl">Simplify Your Research Process with Our Long Heading Feature</h1>
                    <p className="font-medium text-neutral-600 max-md:text-sm">Our software is designed to streamline the research process, making it easier and more efficient for researchers.</p>
                    <div className="flex *:w-1/2 items-center justify-between space-x-7 *:space-y-5">
                        <PercentBox 
                            text="Save time and effort with our powerful research tools."
                        />
                        <PercentBox 
                            text="Access valuable insights and make informed decisions."
                        />
                    </div>
                </div>

                <div className="">
                    <img className="rounded-md scale-100 transition-all" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>

            </section>  

            {/* <Separator className="my-14 " /> */}

        </main>
    )
}

export default Researches