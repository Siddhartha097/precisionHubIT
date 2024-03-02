import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"


const Researches = () => {
    return (
        <main className="p-16 space-y-14 w-full h-full">
           <section className="relative h-[90vh] max-md:h-[50vh] rounded-md flex flex-col justify-center items-center space-y-6 bg-cover bg-[url('https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')]">
                <div className=" h-screen rounded-md bg-slate-600/30  w-full relative text-center flex flex-col justify-center items-center">
                    <h1 className="text-5xl max-md:text-2xl font-bold w-4/5">
                        Empowering Researchers with Innovative Software Solutions
                    </h1>
                    <p className="font-medium max-md:text-sm p-7">
                        Our software provides researchers with advanced tools and insights to drive groundbreaking discoveries in their fields.
                    </p>
                    <Button className="rounded-none border border-black hover:bg-green-600 hover:border-green-600 hover:text-white" >Learn More</Button>
                </div>
            </section>

            <Separator className="my-14 " />

            <section className="flex items-center justify-center space-x-8 *:w-1/2">

                <div className="w-1/2 space-y-8 ">
                    <h1 className="font-bold text-4xl">Simplify Your Research Process with Our Long Heading Feature</h1>
                    <p className="font-medium text-neutral-600 max-md:text-sm">Our software is designed to streamline the research process, making it easier and more efficient for researchers.</p>
                    <div className="flex *:w-1/2 items-center justify-between space-x-7 *:space-y-5">
                        <div>
                            <h1 className="text-4xl font-bold">
                                50%
                            </h1>
                            <p className="font-medium text-neutral-500 text-sm">Save time and effort with our powerful research tools.</p>
                        </div>
                        <div>
                            <h1 className="text-4xl font-bold">
                                50%
                            </h1>
                            <p className="font-medium text-neutral-500 text-sm">Access valuable insights and make informed decisions.</p>
                        </div>
                    </div>
                </div>

                <div className="w-1/2">
                    <img className="rounded-md scale-90 hover:scale-95 transition-all" src="https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>

            </section>  

            {/* <Separator className="my-14 " /> */}

        </main>
    )
}

export default Researches