import { Link } from "react-router-dom";

import Box from "./components/Box";
import { Button } from "./components/ui/button";
import { Label } from "./components/ui/label";
import { Separator } from "./components/ui/separator";
import { z } from 'zod';
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./components/ui/form";
import { Input } from "./components/ui/input";
import { Carousel, CarouselContent, CarouselItem} from "./components/ui/carousel";
import { Collapsible, CollapsibleContent, CollapsibleTrigger } from "./components/ui/collapsible";
import { useState } from "react";

const FormSchema = z.object({
  email: z.string(),
});

const Locations = [
  {
    label: "Sydney",
    imgSrc: 'https://images.unsplash.com/photo-1558329228-bebb840e134f?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: '123 sample st, Sydney NSW 2000 AU'
  },
  {
    label: "New York",
    imgSrc: 'https://images.unsplash.com/photo-1599374172782-2abc889e78ce?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: '123 sample st, New York NY 10000 USA'
  },
  {
    label: "Kolkata",
    imgSrc: 'https://images.unsplash.com/photo-1667208210604-3a4c452317bc?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: '123 sample st, Kolkata WB 70000 IN'
  },
  {
    label: "Bengaluru",
    imgSrc: 'https://images.unsplash.com/photo-1651991372794-b1fcaaf4d634?q=80&w=1935&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
    address: '123 sample st, Bengaluru KN 80000 IN'
  },
];

const FAQs = [
  {
    title: 'How does it work?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.',
    
  },
  {
    title: 'What are te benefits?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.',

  },
  {
    title: 'Is it customizable?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.',

  },
  {
    title: 'How can I get  support?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.',

  },
  {
    title: 'Is there a free trial?',
    content: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Voluptatibus, aspernatur animi sit dolores labore dolor odio ad iste qui vero.',

  },
];

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

  const newsletter = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    }
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
    
  };

  const [sign, setSign] = useState(false);

  const changeSign = () => {
    setSign(!sign);
  };

  return (

    <main className="p-14 space-y-16">

        {/* 1st */}
        <section className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-7xl font-bold text-center">Transforming businesses <div className="p-2" /> with innovative software <div className="p-2" /> solutions</h1>
          <p className="text-center">Welcome to our company, where we create cutting-edge software solutions to help businesses <div className="p-1" /> thrive in the digital age.</p>
          <div className="space-x-6">
            <Button className="rounded-none border border-black hover:bg-green-600 hover:border-green-600 hover:text-white" variant={'outline'}>Learn More</Button>
          </div>
        </section>

        <Separator className="my-10" />

        {/* 2nd */}
        <section className="w-full px-16 py-10 flex items-center justify-center">
          <img className="object-contain shadow-md rounded-lg" src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />
        </section>

        <Separator className="my-10" />

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
              <Button className="bg-transparent text-black font-semibold border-2 hover:bg-green-600 hover:border-green-600 hover:text-white border-black rounded-none p-5">Learn More</Button>
              <Link to={'#'} className="p-6 rounded-none border-transparent hover:text-green-600 font-semibold">Contact Us </Link>
            </div>

          </div>

          {/* image */}
          <div className="w-1/2">
            <img className="rounded-md shadow-md scale-95 hover:scale-100 transition-all " src="https://images.unsplash.com/photo-1708614896043-9ff9d03d641d?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="hero" />
          </div>

        </section>

        <Separator className="my-10" />

        {/* 4th */}
        <section className="flex items-center justify-between gap-20">

          {/* Image */}
          <div className="basis-1/2">
            <img className="rounded-md shadow-md scale-95 transition-all hover:scale-100" src="https://images.unsplash.com/photo-1708556863286-16a9ada29871?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="feature" />
          </div>

          {/* Features */}
          <div className="basis-1/2 space-y-10">
            {Features.map(feature =>(
              <div className="space-y-5" key={feature.label}>
                <h1 className="text-3xl font-bold">{feature.label}</h1>
                <p className="">{feature.para}</p>
              </div>
            ))}
          </div>

        </section>

        <Separator className="my-10" />

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

        <Separator className="my-10" />

        {/* 6th */}
        <section className="flex items-center justify-between gap-10">
          <Box 
            label="Streamline your workflow
            with our software"
            desc="Our software provides a step-by-step guide on how to integrate it into your workflow, easy to implement and use."
            className="flex flex-col items-center justify-center space-y-5 text-center basis-1/3"
            titleSize="text-3xl"
            iconSize={40}
            descSize="text-base"
            isBtn
          />
          <Separator orientation="vertical" />
          <Box 
            label="Increase productivity with our intuitive software"
            desc="Our software is designed to simplify complex tasks, allowing you to focus on what matters most."
            className="flex flex-col items-center justify-center space-y-5 text-center basis-1/3"
            titleSize="text-3xl"
            iconSize={40}
            descSize="text-base"
            isBtn
          />
          <Separator orientation="vertical" />
          <Box 
            label="Optimize your workflow with our powerful software"
            desc="Our software offers advanced features and tools to streamline your processes and boost efficiency."
            className="flex flex-col items-center justify-center space-y-5 text-center basis-1/3"
            titleSize="text-3xl"
            iconSize={40}
            descSize="text-base"
            isBtn
          />
        </section>

        <Separator className="my-10" />

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

        <Separator className="my-10" />

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
              <Separator orientation="vertical" />
              <div className="space-y-2">
                <h1 className="text-5xl font-bold">50%</h1>
                <p className="text-neutral-600 font-medium">
                  Reduction in operational costs for our clients
                </p>
              </div>

            </div>

            <div className="font-medium space-x-5">
              <Button className="border-2 border-black rounded-none p-5 hover:bg-green-600 hover:border-green-600 hover:text-neutral-200 transition-all" variant={'outline'}>Learn More</Button>
              <Link className="hover:text-green-600" to={'#'}>Contact Us</Link>
            </div>
          </div>

        </section>

        <Separator className="my-10" />

        {/* 9th */}
        <section>
          <img className="rounded-lg scale-90 shadow-md transition-all" src="https://images.unsplash.com/photo-1541746972996-4e0b0f43e02a?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </section> 

        <Separator className="my-10" />

        {/* 10th  */}
        <section className="space-y-8">

          <div className="space-y-5 text-center">
            <Label htmlFor="text">Innovative</Label>
            <h1 className="text-5xl font-bold">Locations</h1>
            <p className="font-medium text-neutral-500">We have offices worldwide to serve you better.</p>
          </div>

          <div className="p-10">
            <Carousel opts={{loop: true}} className="flex items-center justify-center">
              <CarouselContent>
                {Locations.map(location => (
                  <CarouselItem key={location.label} className="basis-1/4 pl-4 space-y-6 text-center">
                    <img className="rounded-lg shadow-md" src={location.imgSrc} alt={location.label} />
                    <h1 className="text-4xl font-bold">{location.label}</h1>
                    <p className="font-medium text-neutral-500">{location.address}</p>
                    <Link className="font-medium hover:text-purple-600 transition-all" to={'#'}>Get directions</Link>
                  </CarouselItem>
                ))}
              </CarouselContent>
            </Carousel>
          </div>

        </section>

        {/* 11th */}
        <section className="flex flex-col items-center space-y-6 justify-between">
          <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold">Frquently Asked Questions</h1>
            <p className="font-medium text-neutral-500">Find answers to common questions about our company and solutions.</p>
          </div>

          <div className="space-y-6 transition-all">
            {FAQs.map(faq => (
              <Collapsible className="transition-all space-y-5 relative w-[70vw] border-2 p-6 border-black">
                <div className="flex items-center justify-between relative ">
                  <h3 className="text-xl font-semibold">{faq.title}</h3>
                  <CollapsibleTrigger onClick={changeSign} className={`absolute right-0 transition-all text-3xl font-bold`}>+</CollapsibleTrigger>                 
                </div>
                <CollapsibleContent className="font-medium transition-all text-neutral-500">
                  {faq.content}
                </CollapsibleContent>
              </Collapsible>
            ))}
          </div>
        </section>

        <Separator className="my-10 bg-neutral-300" />

        {/* 12th */}
        <section className="space-y-8 flex flex-col h-[80vh] items-center justify-between text-center">
          <div className="space-y-6">
            <h1 className="text-5xl font-bold max-md:text-3xl">Take Your Business Further</h1>
            <p className=" font-medium max-md:text-sm">Discover our innovative solutions and boost your productivity today.</p>
            <div className="flex items-center justify-center space-x-4">
              <Button className="rounded-none text-base border p-6 max-md:p-3 max-md:text-sm border-black hover:bg-green-600 hover:border-green-600 hover:text-white" variant={'outline'}>Contact Sales</Button>
            </div>
          </div>

          <div className="space-y-6 text-center">
            <h1 className="text-5xl font-bold max-md:text-3xl">Stay Informed with Our Newsletter</h1>
            <p className="font-medium text-neutral-600 max-md:text-sm">Subscribe to recieve updates, insights and industry news.</p>
            <Form {...newsletter}>
              <form onSubmit={newsletter.handleSubmit(onSubmit)} className="space-y-4">
                <FormField 
                  control={newsletter.control}
                  name="email"
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input className="rounded-none p-6 max-md:p-4 max-md:text-sm" placeholder="Your email address" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <Button className="rounded-none p-5" type="submit">Subscribe</Button>
              </form>
            </Form>
          </div>
        </section>
    </main>
  )
}

export default App