import { Tabs, TabsList, TabsTrigger, TabsContent } from "./ui/tabs";


const Pricing = () => {
    return (
        <div className="flex items-center justify-center">
            <Tabs defaultValue="monthly" className="flex w-1/2 flex-col items-center justify-center gap-16">

                <TabsList className=" bg-slate-600 text-white">
                    <TabsTrigger value="monthly">Monthly</TabsTrigger>
                    <TabsTrigger value="yearly">Yearly</TabsTrigger>
                </TabsList>

                {/* Monthly */}
                <TabsContent value="monthly">
                    Make changes to your account here.
                </TabsContent>

                {/* Yearly */}
                <TabsContent value="yearly">
                    Change your password here.
                </TabsContent>

            </Tabs>
        </div>
    )
}

export default Pricing