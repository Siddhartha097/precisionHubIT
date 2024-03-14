import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormMessage } from "./ui/form";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

const FormSchema = z.object({
  email: z.string(),
});

const Newsletter = () => {
  const newsletter = useForm<z.infer<typeof FormSchema>>({
    resolver: zodResolver(FormSchema),
    defaultValues: {
      email: "",
    },
  });

  const onSubmit = (values: z.infer<typeof FormSchema>) => {
    console.log(values);
  };

  return (
    <div className="space-y-6 text-center">
      <h1 className="text-5xl font-bold max-md:text-3xl">
        Stay Informed with Our Newsletter
      </h1>
      <p className="font-medium text-neutral-600 max-md:text-sm">
        Subscribe to recieve updates, insights and industry news.
      </p>
      <Form {...newsletter}>
        <form
          onSubmit={newsletter.handleSubmit(onSubmit)}
          className="space-y-4"
        >
          <FormField
            control={newsletter.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormControl>
                  <Input
                    className="rounded-none p-6 max-md:p-4 max-md:text-sm"
                    placeholder="Your email address"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button
            className="rounded-none p-5 bg-gradient hover:opacity-85"
            type="submit"
          >
            Subscribe
          </Button>
        </form>
      </Form>
    </div>
  );
};

export default Newsletter;
