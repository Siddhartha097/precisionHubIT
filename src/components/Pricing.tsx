import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";
import Plan from "./Plan";


const Pricing = () => {
    return (
        <div className="flex items-center justify-center">
            <Tabs defaultValue="monthly" className=" w-full flex flex-col items-center gap-2">

                <TabsList className="bg-black h-12 text-white *:w-full w-full md:w-1/2 *:h-full *:text-lg max-md:*:text-base *:font-semibold rounded-none *:rounded-none">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>

                {/* Monthly */}
                <TabsContent className="w-full flex items-center justify-center gap-10 max-md:gap-5" value="monthly">
                    
                    {/* basic */}
                    <Plan 
                        title="Basic"
                        price={19}
                        time="mo"
                    />

                    {/* business */}
                    <Plan 
                        title="Business"
                        price={29}
                        time="mo"
                    />

                </TabsContent>

                {/* Yearly */}
                <TabsContent className="w-full flex items-center justify-center gap-10 max-md:gap-5"  value="yearly">

                    {/* basic */}
                    <Plan 
                        title="Basic"
                        price={190}
                        time="yr"
                    />

                    {/* business */}
                    <Plan 
                        title="Business"
                        price={286}
                        time="yr"
                    />

                </TabsContent>

            </Tabs>
        </div>
    )
}

export default Pricing