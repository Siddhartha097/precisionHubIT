import Box from "./components/Box"
import { Button } from "./components/ui/button"


const App = () => {
  return (
    <main className="p-14 space-y-10">
      
        {/* 1st */}
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-7xl font-bold text-center">Transforming businesses <div className="p-2" /> with innovative software <div className="p-2" /> solutions</h1>
          <p className="text-center">Welcome to our company, where we create cutting-edge software solutions to help businesses <div className="p-1" /> thrive in the digital age.</p>
          <div className="space-x-6">
            <Button className="rounded-none border border-black" variant={'outline'}>Learn More</Button>
            <Button className="rounded-none">Sign Up</Button>
          </div>
        </div>

        {/* 2nd */}
        <div className="w-full px-16 py-10 flex items-center justify-center">
          <img className="object-contain shadow-md rounded-lg" src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />
        </div>

        {/* 3rd */}
        <div className="flex items-center justify-between space-x-8">

          {/* non-image */}
          <div className="space-y-8 w-1/2">

            {/* title and description */}
            <h1 className="text-4xl font-bold tracking-wide">Transforming Ideas into Powerful Solutions</h1>
            <p className="text-sm tracking-wide font-medium">
              We provide cutting-edge software solutions that drive innovation and empower businesses to succeed. Our team of experts combines creativity and technical expertise to deliver exceptional results.
            </p>

            {/* boxes */}
            <div className="flex items-center justify-between space-x-7">
              <Box 
                className="space-y-5"
                label="Experience"
                desc="Over 10 years of industry experience delivering top-notch software solutions."
              />
              <Box 
                className="space-y-5"
                label="Quality"
                desc="We are committed to delivering high-quality software solutions that exceed client expectations."
              />
            </div>

            {/* buttons */}
            <div className="space-x-5">
              <Button className="bg-transparent text-black font-bold border-2 border-black rounded-none p-6 hover:bg-neutral-200">Learn More</Button>
              <Button className="p-6 rounded-none border-transparent font-bold" variant={'outline'}>Contact Us</Button>
            </div>

          </div>

          {/* image */}
          <div className="w-1/2">
            <img className="rounded-md shadow-md" src="https://images.unsplash.com/photo-1708614896043-9ff9d03d641d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />
          </div>

        </div>
        {/* 4th */}

    </main>
  )
}

export default App