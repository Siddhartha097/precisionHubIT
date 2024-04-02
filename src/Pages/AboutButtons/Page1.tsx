import AboutPara from "@/components/AboutPara";
import { Input } from "@/components/ui/input";
const Page1 = () => {
  return (
    <>
    <div>
       <div className="p-10">
         <section className="flex ">
           <div className="w-1/2 ">
             
             <h1 className="text-5xl pb-5">

               Streamline and enhance your 
               business processes using our 
               software.

             </h1>
             <p className="pb-10">
               Our software features are designed to streamline your processes and increase 
               efficiency. With intuitive interfaces and powerful automation tools, you can 
               save time and focus on what matters most.
             </p>
             <AboutPara name="Streamline your processes with our software" desc="Our software helps you simplify and automate your business processes, saving 
     you time and effort."></AboutPara>
             <AboutPara name="Increase efficiency with our powerful features" desc="Our software offers a range of powerful features designed to streamline your 
     processes and boost productivity."></AboutPara>
             <AboutPara name="Optimize your workflow with our intuitive interface" desc="Our software's intuitive interface makes it easy for you to manage and streamline 
     your workflow."></AboutPara>
           </div>
           <div className="w-1/2 p-20">
             
             <img src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className=" rounded-2xl" alt="" />
           </div>
         </section>

         {/* part 2 */}

         {/* <div className="w-1/2 py-20">
           <h1 className="text-5xl font-bold pb-10">Streamline your Company's Processes with our latest software</h1>
             <li className="text-red-600 text-2xl font-bold">Increase Efficiency</li>
             <p className="pl-6 border-l-2 font-semibold h-40">Our software provides a step-by-step guide to help you streamline your 
               company's processes.
             </p>
             <li className="text-red-600 text-2xl font-bold"> Save Time</li>
             <p className="pl-6 border-l-2 font-semibold h-40">With our software, you can automate repetitive tasks, saving you valuable time</p>
             <li className="text-red-600 text-2xl font-bold"> Improve Accuracy</li>
             <p className="pl-6 border-l-2 font-semibold h-40"> Eliminate human errors and ensure accuracy in your company's processes</p>
             <li className="text-red-600 text-2xl font-bold"> Enhance Collaboration</li>
             <p className="pl-6 border-l-2 font-semibold h-20"> Our software promotes seamless collaboration among team members, improving productivity.</p>
         </div> */}

         {/* part 3 */}
         {/* <div>

            <form action="">
             <div>
            <label htmlFor="">
                Name:
                <input type="text" name="name" />
            </label>
            <label htmlFor=""></label>
                <input type="email" name="email" value={'EMAIL'}/>
             </div>
             <div>
               <input type="number" name="" value={'PHONENUMBER'} className="text-black" />
               <input type="number" name="number" value={'BUDGET'}/>
             </div>
             <div>
               INP
             </div>
             <div></div>
             <div></div>

           </form>
         </div> */}
       

    {/*  */}
        {/* part 2
        //{" "}
        <div className="w-1/2 py-20">
          //{" "}
          <h1 className="text-5xl font-bold pb-10">
            Streamline your Company's Processes with our latest software
          </h1>
          //{" "}
          <h3 className="text-red-600 text-2xl font-bold">
            Increase Efficiency
          </h3>
          //{" "}
          <p className="pl-6 border-l-2 font-semibold h-40">
            Our software provides a step-by-step guide to help you streamline
            your // company's processes. //{" "}
          </p>
          // <h3 className="text-red-600 text-2xl font-bold"> Save Time</h3>
          //{" "}
          <p className="pl-6 border-l-2 font-semibold h-40">
            With our software, you can automate repetitive tasks, saving you
            valuable time
          </p>
          //{" "}
          <h3 className="text-red-600 text-2xl font-bold"> Improve Accuracy</h3>
          //{" "}
          <p className="pl-6 border-l-2 font-semibold h-40">
            {" "}
            Eliminate human errors and ensure accuracy in your company's
            processes
          </p>
          //{" "}
          <h3 className="text-red-600 text-2xl font-bold">
            {" "}
            Enhance Collaboration
          </h3>
          //{" "}
          <p className="pl-6 border-l-2 font-semibold h-20">
            {" "}
            Our software promotes seamless collaboration among team members,
            improving productivity.
          </p>
          //{" "}
        </div> */}
        {/* <div className="w-1/2 py-20">
          <h1 className="text-5xl font-bold pb-10">
            Streamline your Company's Processes with our latest software
          </h1>
          <li className="text-red-600 text-2xl font-bold">
            Increase Efficiency
          </li>
          <p className="pl-6 border-l-2 font-semibold h-40">
            Our software provides a step-by-step guide to help you streamline
            your company's processes.
          </p>
          <li className="text-red-600 text-2xl font-bold"> Save Time</li>
          <p className="pl-6 border-l-2 font-semibold h-40">
            With our software, you can automate repetitive tasks, saving you
            valuable time
          </p>
          <li className="text-red-600 text-2xl font-bold"> Improve Accuracy</li>
          <p className="pl-6 border-l-2 font-semibold h-40">
            {" "}
            Eliminate human errors and ensure accuracy in your company's
            processes
          </p>
          <li className="text-red-600 text-2xl font-bold">
            {" "}
            Enhance Collaboration
          </li>
          <p className="pl-6 border-l-2 font-semibold h-20">
            {" "}
            Our software promotes seamless collaboration among team members,
            improving productivity.
          </p>
        </div> */}
        {/* part 3 */}
        <div>
          <form action="">
            <div>
              <Input type="text" name="name" value={"NAME"} />
              <Input type="email" name="email" value={"EMAIL"} />
            </div>
            <div>
              <Input
                type="number"
                name=""
                value={"PHONENUMBER"}
                className="text-black"
              />
              <Input type="number" name="number" value={"BUDGET"} />
            </div>
            <div>INP</div>
            <div></div>
            <div></div>
            
          </form>
        </div>
      </div>
    </div>
    </>
  );
};

export default Page1;
