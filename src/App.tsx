import { AspectRatio } from "./components/ui/aspect-ratio"
import { Button } from "./components/ui/button"


const App = () => {
  return (
    <main className="py-14">
        <div className="flex flex-col items-center justify-center space-y-6">
          <h1 className="text-7xl font-bold text-center">Transforming businesses <div className="p-2" /> with innovative software <div className="p-2" /> solutions</h1>
          <p className="text-center">Welcome to our company, where we create cutting-edge software solutions to help businesses <div className="p-1" /> thrive in the digital age.</p>
          <div className="space-x-6">
            <Button className="rounded-none border border-black" variant={'outline'}>Learn More</Button>
            <Button className="rounded-none">Sign Up</Button>
          </div>
        </div>
        <div className="max-w-screen-md">
          {/* <AspectRatio ratio={16/9}>
            <img className="object-contain" src="https://images.unsplash.com/photo-1707343844152-6d33a0bb32c3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
          </AspectRatio> */}
        </div>
    </main>
  )
}

export default App