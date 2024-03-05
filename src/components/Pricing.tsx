import BasicPlan from "./BasicPlan";
import BusinessPlan from "./BusinessPlan";
import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";


const Pricing = () => {
    return (
        <div className="flex items-center justify-center">
            <Tabs defaultValue="monthly" className=" w-full  gap-6 flex flex-col items-center">

                <TabsList className=" bg-slate-600 text-white">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>

                {/* Monthly */}
                <TabsContent className="w-full flex items-center justify-center gap-10" value="monthly">
                    
                    {/* basic */}
                    <BasicPlan 
                        price={19}
                        time="mo"
                    />

                    {/* business */}
                    <BusinessPlan 
                        price={29}
                        time="mo"
                    />

                </TabsContent>

                {/* Yearly */}
                <TabsContent className="w-full flex items-center justify-center gap-10"  value="yearly">

                    {/* basic */}
                    <BasicPlan 
                        price={190}
                        time="yr"
                    />

                    {/* business */}
                    <BusinessPlan 
                        price={286}
                        time="yr"
                    />

                </TabsContent>

            </Tabs>
        </div>
    )
}

export default Pricing