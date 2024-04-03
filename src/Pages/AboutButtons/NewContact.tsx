import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";
import MoreBtn from "@/components/MoreBtn";

const FormSchema = z.object({
  name: z.string(),
  email: z.string(),
  message: z.string(),
  number: z.number(),
});


  
const NewContact = () => {const contactForm = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
      name: "",
      message: "",
      number: 0,
    },
  });
  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };
  return (
    <main className="w-full h-full p-16 max-md:px-8 text-center">
    <div>
        <h1 className="text-6xl max-md:text-4xl font-bold">GOOD TALKS MAKE A GOOD PROJECT</h1>
        <h2 className="text-6xl max-md:text-4xl py-10">Talk to us In Person</h2>
        <div><MoreBtn label="PRESISION HUB IT" className="bg-blue-600 border-none text-white"></MoreBtn> <MoreBtn className="" label="Drop an email"></MoreBtn></div>
    </div>

    <div className=" space-y-10 flex-col flex">
      <div className="space-y-4">
        <Label className="max-md:text-sm" htmlFor="text">
          Get Started
        </Label>
        <h1 className="text-6xl max-md:text-4xl font-bold">Or <br />Get in Touch <br />By Simply Filling up the Form</h1>
        <p className="max-md:text-sm font-medium text-slate-500">
          Schedule a consultation and discover our services.
        </p>
      </div>
      <Separator className="my-10" />
      <div className="flex max-md:flex-col-reverse justify-between w-full h-full gap-10">
        <div className="md:w-1/2 text-left">
          <Form {...contactForm}>
            <form
              onSubmit={contactForm.handleSubmit(onSubmit)}
              className="space-y-7"
            >
              {/* Name */}
              <FormField
                control={contactForm.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <Label className="font-normal" htmlFor="text">
                      Name
                    </Label>
                    <FormControl>
                      <Input
                        className="rounded-none p-4 font-medium max-md:text-sm border-2 focus-within:border-none transition-all border-black"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={contactForm.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <Label className="font-normal" htmlFor="text">
                      Email Address
                    </Label>
                    <FormControl>
                      <Input
                        className="rounded-none  p-4 max-md:text-sm font-medium border-2 focus-within:border-none transition-all border-black"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Message */}
              <FormField
                control={contactForm.control}
                name="message"
                render={({ field }) => (
                  <FormItem>
                    <Label className="font-normal" htmlFor="text">
                      Message
                    </Label>
                    <FormControl>
                      <Textarea
                        className="rounded-none p-4 max-md:text-sm font-medium border-2 focus-within:border-none transition-all border-black"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
               {/* number */}
               <FormField
                control={contactForm.control}
                name="number"
                render={({ field }) => (
                  <FormItem>
                    <Label className="font-normal" htmlFor="text">
                      PhoneNumber
                    </Label>
                    <FormControl>
                      <Input
                        className="rounded-none p-4 max-md:text-sm font-medium border-2 focus-within:border-none transition-all border-black"
                        placeholder=""
                        {...field}
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="flex items-center space-x-2">
                <Checkbox id="terms" />
                <label
                  htmlFor="terms"
                  className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                >
                  Accept terms and conditions
                </label>
              </div>

              <Button
                className="rounded-none px-8 py-6 underline hover:bg-green-600"
                type="submit"
              
              >
                Submit
              </Button>
            </form>
          </Form>
        </div>

        <div className="md:w-1/2">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14736.293639699978!2d88.433983!3d22.57635755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a0275b020703c0d%3A0xece6f8e0fc2e1613!2sSector%20V%2C%20Bidhannagar%2C%20Kolkata%2C%20West%20Bengal!5e0!3m2!1sen!2sin!4v1709892199517!5m2!1sen!2sin"
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full h-full rounded-md "
          ></iframe>
        </div>
      </div>
    </div>
  </main>
  )
}

export default NewContact