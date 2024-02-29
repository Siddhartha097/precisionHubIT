import Box from "@/components/Box"
import { Button } from "@/components/ui/button"
import { Separator } from "@/components/ui/separator"

const Solutions = () => {
  return (
    <main className="relative p-14 w-full h-full space-y-14">   

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

      <Separator className="my-12" />
    
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

      <Separator className="my-12" />

      <section className="flex items-center justify-center">
        <img className="rounded-lg shadow-md w-4/5" src="https://images.unsplash.com/photo-1583321500900-82807e458f3c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />
      </section>

      <Separator className="my-12" />

      <section>
        <div>

          <div>
            <h1 className="text-5xl">Discover the Cost-Effective Solution For Your Business</h1>
            <p>
              Our third solution offers a cost-effective way to meet your business needs. With its innovative features and competitive pricing. you can save both time and money.
            </p>
          </div>

          <div>
            <Box 
              label="Benefits:"
              iconDisabled
            />
            <Box 
              label="Features:"
              iconDisabled
            />
          </div>

        </div>

        <div>
          <img src="" alt="" />
        </div>

      </section>

    </main>
  )
}

export default Solutions