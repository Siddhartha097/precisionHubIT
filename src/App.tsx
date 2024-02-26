import { Link } from "react-router-dom";

import Box from "./components/Box";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";


const Features = [
  {
    label: "Powerful Software Solutions",
    para: "Our software provides advanced features and benefits to help you streamline your workflow and achieve your goals.",
  },
  {
    label: "User-Friendly Interface",
    para: "Our software is designed with a user-friendly interface, making it easy for anyone to navigate and use.",
  },
  {
    label: "Seamless Integration",
    para: "Our software seamlessly integrates with other tools and systems, allowing you to work efficiently and effectively.",
  },
];

const Supports = [
  {
    label: "Customization, Support, Training",
    desc: "We offer additional services such as customization, support, and training to meet your specific needs. Our team of experts is here to assist you every step of the way."
  },
  {
    label: "Customization Options",
    desc: "We provide a wide range of customization options to tailor our software solutions to your unique requirements. Our team will work closely with you to ensure that the final product meets your expectations."
  },
  {
    label: "24/7 Support",
    desc: "Our dedicated support team is available 24/7 to assist you with any technical issues or questions you may have. We are committed to providing prompt and reliable support to ensure your satisfaction."
  },
]

const App = () => {
  return (
    <main className="p-14 space-y-10">

        {/* 1st */}
        <section className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-7xl font-bold text-center">Transforming businesses <div className="p-2" /> with innovative software <div className="p-2" /> solutions</h1>
          <p className="text-center">Welcome to our company, where we create cutting-edge software solutions to help businesses <div className="p-1" /> thrive in the digital age.</p>
          <div className="space-x-6">
            <Button className="rounded-none border border-black hover:bg-black hover:text-white" variant={'outline'}>Learn More</Button>
            <Button className="rounded-none hover:bg-black/70">Sign Up</Button>
          </div>
        </section>

        {/* 2nd */}
        <section className="w-full px-16 py-10 flex items-center justify-center">
          <img className="object-contain shadow-md rounded-lg" src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />
        </section>

        {/* 3rd */}
        <section className="flex items-center justify-between space-x-8">

          {/* non-image */}
          <div className="space-y-8 w-1/2">

            {/* title and description */}
            <Label htmlFor="text">Innovative</Label>
            <h1 className="text-4xl font-bold tracking-wide">Transforming Ideas into Powerful Solutions</h1>
            <p className="text-sm font-medium text-neutral-500 tracking-wide">
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
            <div className="space-x-4">
              <Button className="bg-transparent text-black font-semibold border-2 hover:bg-black hover:text-white border-black rounded-none p-5">Learn More</Button>
              <Link to={'#'} className="p-6 rounded-none border-transparent font-semibold">Contact Us </Link>
            </div>

          </div>

          {/* image */}
          <div className="w-1/2">
            <img className="rounded-md shadow-md scale-95 hover:scale-100 transition-all " src="https://images.unsplash.com/photo-1708614896043-9ff9d03d641d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />
          </div>

        </section>

        {/* 4th */}
        <section className="flex items-center justify-between gap-20">

          {/* Image */}
          <div className="w-1/2">
            <img className="rounded-md shadow-md scale-95 transition-all hover:scale-100" src="https://images.unsplash.com/photo-1708556863286-16a9ada29871?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="feature" />
          </div>

          {/* Features */}
          <div className="w-1/2 space-y-10">
            {Features.map(feature =>(
              <div className="space-y-5" key={feature.label}>
                <h1 className="text-3xl font-bold">{feature.label}</h1>
                <p className="">{feature.para}</p>
              </div>
            ))}
          </div>

        </section>

        {/* 5th */}
        <section className="flex items-center justify-around gap-16">

          {/* non-image */}
          <div className="w-1/3 space-y-5">
            <h1 className="text-3xl font-bold">
              Unlock the full potential of your business with our powerful software solutions.
            </h1>
            <p className="text-neutral-500 font-medium">
              Our software solutions are designed to streamline your operations, increase efficiency, and drive growth. Experience the difference today.
            </p>
          </div>

          {/* image */}
          <div className="w-1/2">
            <img className="rounded-lg shadow-md scale-95 hover:scale-100 transition-all" src="https://images.unsplash.com/photo-1708704974484-3ca56db9384f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="room" />
          </div>

        </section>

        {/* 6th */}
        <section className="flex items-center justify-between gap-10">
          <Box 
            label="Streamline your workflow
            with our software"
            desc="Our software provides a step-by-step guide on how to integrate it into your workflow, easy to implement and use."
            className="flex flex-col items-center justify-center space-y-5 text-center w-1/3"
            titleSize="text-3xl"
            iconSize={40}
            descSize="text-base"
            isBtn
          />
          <Box 
            label="Increase productivity with our intuitive software"
            desc="Our software is designed to simplify complex tasks, allowing you to focus on what matters most."
            className="flex flex-col items-center justify-center space-y-5 text-center w-1/3"
            titleSize="text-3xl"
            iconSize={40}
            descSize="text-base"
            isBtn
          />
          <Box 
            label="Optimize your workflow with our powerful software"
            desc="Our software offers advanced features and tools to streamline your processes and boost efficiency."
            className="flex flex-col items-center justify-center space-y-5 text-center w-1/3"
            titleSize="text-3xl"
            iconSize={40}
            descSize="text-base"
            isBtn
          />
        </section>

        {/* 7th */}
        <section className="flex items-center justify-between space-x-8">

          {/* image */}
          <div className="w-1/2">
            <img className="rounded-lg scale-95 hover:scale-100 transition-all" src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="support" />
          </div>

          {/* non-image */}
          <div className="space-y-8">
            {Supports.map(support => (
              <div className="space-y-6">
                <h1 className="text-3xl font-bold">{support.label}</h1>
                <p className="text-sm font-medium text-neutral-500">{support.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8th */}
        <section className="flex items-center justify-between space-x-7">

          {/* left */}
          <div className="w-1/2 space-y-4">
            <Label htmlFor="text">Innovative</Label>
            <h1 className="text-5xl font-bold">
              Transforming the way businesses operate with cutting-edge solutions
            </h1>
          </div>

          {/* right */}
          <div className="w-1/2 space-y-8">
            <h3 className="font-medium">
              With over a decade of experience, we have successfully delivered exceptional software solutions to clients worldwide. Our team of experts is dedicated to providing innovative and reliable products that meet the unique needs of each business.
            </h3>

            <div className="flex justify-between items-center">

              <div className="space-y-2">
                <h1 className="text-5xl font-bold">50%</h1>
                <p className="text-neutral-600 font-medium">
                  Increase in productivity for our clients
                </p>
              </div>

              <div className="space-y-2">
                <h1 className="text-5xl font-bold">50%</h1>
                <p className="text-neutral-600 font-medium">
                  Reduction in operational costs for our clients
                </p>
              </div>

            </div>

            <div className="font-medium space-x-5">
              <Button className="border-2 border-black rounded-none p-5 hover:bg-black hover:text-neutral-200 transition-all" variant={'outline'}>Learn More</Button>
              <Link className="hover:text-purple-500" to={'#'}>Contact Us</Link>
            </div>
          </div>

        </section>

        {/* 9th */}
        <section>
          <img src="" alt="" />
        </section>

        {/* 10th */}
        <section></section>

    </main>
  )
}

export default App