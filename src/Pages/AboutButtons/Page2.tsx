import AboutPara from "@/components/AboutPara"
const Page2 = () => {
  return (
    <div>
      <section className="md:flex md:p-20 p-5">
        <section className="md:w-1/2">
          <h1 className="text-5xl pb-5 font-bold">
            Transform Your Business with
            Our Unique Software
          </h1>
          <p className="pb-10 ">
            Our software solution is designed to revolutionize your business by
            streamlining processes and increasing efficiency. With its unique features,
            you'll experience a transformation like never before.
          </p>
          <div className="">
            <h1 className="text-purple-500 text-2xl p-10">Transformative Features Highlighted</h1>
            <p> Discover the top three transformative features of our software that will
                revolutionize your workflow.
            </p>
            <h1 className="text-purple-500 text-2xl p-10"> Streamline Your Processes</h1>
            <p>Our software simplifies complex tasks, automates repetitive processes, and
              improves overall efficiency
            </p>
            <h1 className="text-purple-500 text-2xl p-10"> Enhance Collaboration</h1>
            <p>
            Collaborate seamlessly with your team, share files, and communicate in real
            time for increased productivity.
            </p>
          </div>
        </section>
        <section className="md:w-1/2 p-10">
          <img src="https://images.unsplash.com/photo-1712246404769-132b7d49d235?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </section>
      </section>
      <section className="text-center pt-20">
        <h1 className="text-4xl font-bold p-10"> Implementing the Transforming Software Solution in Your Business 
Workflow</h1>
        <p className="p-10"> We are dedicated to providing cutting-edge software solutions that drive transformation and growth. Our mission is to 
empower businesses with the tools they need to succeed in the digital age.</p>
        <div>
          <AboutPara name=" Streamline Your Workflow with
the Transforming Software
Solution" desc=" The transforming software solution
simplifies and automates your business
processes, saving you time and effort."></AboutPara>
          <AboutPara name=" Optimize Your Operations with
the Transforming Software
Solution" desc=" With the transforming software
solution, you can easily manage and
track your business activities."></AboutPara>
          <AboutPara name=" Increase Efficiency with the
Transforming Software Solution" desc=" The transforming software solution
empowers your team to work smarter
and achieve better results."></AboutPara>
        </div>
      </section>
    </div>
  )
}

export default Page2