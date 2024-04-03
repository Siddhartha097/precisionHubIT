import { GoDotFill } from "react-icons/go";

const Solutions2 = () => {
  return (
    <div className="md:p-20 text-center p-5">
        <section className="md:flex pb-40">
            <div className="md:w-1/2 pb-10">
                <h1 className="text-5xl font-bold pb-10">
                    Revolutionizing companies with 
                    cutting-edge software 
                    solutions.
                </h1>
                <p className="pb-10 text-xl"> Discover how our cutting-edge software solutions can revolutionize your 
                    business.
                </p>
                <h2 className="text-2xl flex items-center font-semibold p-5"><GoDotFill />Streamline operations and increase efficiency without software.   </h2>
                <h2 className="text-2xl flex items-center font-semibold p-5"><GoDotFill />Unlock new opportunities and drive growth with our innovative solution .</h2>
                <h2 className="text-2xl flex items font-semibold p-5"><GoDotFill />Stay ahead of the competition with our industry leading software .</h2>
            </div>
             <img src="https://images.unsplash.com/photo-1555421689-491a97ff2040?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className="md:w-1/2 md:px-20" />
        </section>
        <section className="md:flex">
            <div className="md:w-1/2">
                <h1 className="text-5xl font-semibold pb-10">Maximize your business potential without cutting edge and impactful software solutions. </h1>
                <p className="text-xl">Our software services offer the reseource and knowledge necessary to facilate business transformations. </p>
            </div>
            <div className="md:w-1/2 pb-10">
                <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="md:px-20" alt="" />
            </div>
            {/* <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="w" alt="" /> */}
        </section>
    </div>
  )
}

export default Solutions2