import { PlanProps } from "./BasicPlan";
import { Button } from "./ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "./ui/card";

const BusinessPlan : React.FC<PlanProps> = ({
    price,
    time,
}) => {
    return (
        <Card className="w-1/3 flex flex-col items-center justify-center">
             <CardHeader>
                <CardTitle>Business Plan</CardTitle>
                <CardDescription>Card Description</CardDescription>
            </CardHeader>
            <CardContent>
                <p>${price}/{time}</p>
            </CardContent>
            <CardFooter>
                <Button className="rounded-lg hover:bg-green-600 transition-all">Get Started</Button>
            </CardFooter>
        </Card>
    )
}

export default BusinessPlan