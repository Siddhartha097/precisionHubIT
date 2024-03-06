import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

export interface PlanProps {
    title: string ;
    price?: number;
    time?: 'mo'| 'yr';
}


const BasicPlans = [
    {
        content: 'Powerful features for your business'
    },
    {
        content: 'Secure data storage and backup'
    },
    {
        content: '24/7 customer support is available'
    },
];
const BusinessPlans = [
    {
        content: 'Advanced features for your business'
    },
    {
        content: 'Increased storage capacity'
    },
    {
        content: 'Priority customer support'
    },
    {
        content: 'Customizable branding options'
    },
    {
        content: 'Integration with third-party apps'
    },
];

const Plan : React.FC<PlanProps> = ({
    title,
    price,
    time,
}) => {

    const plans : React.FC<PlanProps> = ({title} ) => {
        if ( title === 'Basic') {
            return(
                <ul className="list-disc space-y-5 max-md:space-y-2 ">
                    {BasicPlans.map(plans => (
                        <li className="max-md:text-xs text-slate-600 font-medium">{plans.content}</li>
                    ))}
                </ul>
                
            )
        }

        if ( title === 'Business') {
            return(
                <ul className="list-disc space-y-5 max-md:space-y-2">
                    {BusinessPlans.map(plans => (
                        <li className="max-md:text-xs font-medium text-slate-600">{plans.content}</li>
                    ))}
                </ul>
                
            )
        }
    };

    return (

        
        <Card className="w-1/3 max-md:w-1/2  border-2 rounded-none border-black flex flex-col items-center justify-between h-[75vh] max-md:h-[60vh]">
             <CardHeader className="text-center space-y-5">
                <CardTitle className="max-md:text-base">{title} Plan</CardTitle>
                <br />
                <CardDescription className="text-5xl font-bold mb-6 max-md:text-3xl text-black">${price}/{time}</CardDescription>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-between gap-6">
                {plans({title})}
            </CardContent>
            <CardFooter className="w-full flex items-center justify-center">
                <Button className="rounded-none hover:bg-green-600 transition-all w-full">Get Started</Button>
            </CardFooter>
        </Card>
    )
}

export default Plan