import { Link } from "react-router-dom"
import { Button } from "./ui/button"


const Navbar = () => {
    return (
        <nav className="flex items-center justify-between px-12 py-6 border-b-2 shadow-md border-black">
            <header className="text-2xl font-bold">
                <Link to={'/'}>Logo</Link>
            </header>

            <header className="flex items-center justify-between space-x-8">
                <ul className="flex items-center justify-between space-x-8 font-semibold ">
                    <Link className="hover:text-purple-500 transition-all" to={'#'}><li>Home</li></Link>
                    <Link className="hover:text-purple-500 transition-all" to={'#'}><li>Solutions</li></Link>
                    <Link className="hover:text-purple-500 transition-all" to={'#'}><li>Research</li></Link>
                    <Link className="hover:text-purple-500 transition-all" to={'#'}><li>Portfolio</li></Link>
                </ul>
                <div className="space-x-6">
                    <Button className="rounded-none border border-black" variant={'outline'}>Learn More</Button>
                    <Button className="rounded-none">Sign Up</Button>
                </div>
            </header>
        </nav>
    )
}

export default Navbar