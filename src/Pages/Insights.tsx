import React from 'react'

function Insights() {
  return (
    <div className='md:p-10 p-2'>
         <div>
            <h1 className='font-bold text-5xl md:w-1/2'>Discover Our Cutting Edge Technology Solutions</h1>
            <p className=' text-xl md:w-1/2 mt-9 text-gray-500'>Our software solutions Is designed to revolutionize Your business buy Streamlining processes and increasing efficiency.
            With its unique features, you will see tronsformations like never before.  </p>
        </div>
        <div className='flex flex-col-reverse md:flex-row'>
            <div className='md:w-1/2 justify-end flex flex-col pt-20'>
                <h1 className='text-xl text-purple-700 font-bold '>Streamline your workflow with our intrutive tools. </h1>
                <p className='font-bold p-10'>Our sofware is designed to simplify complex tasks and increase productivity. </p>
                <h1 className='text-xl text-purple-700 font-bold '>Stay ahead in competition with our Advanced feature. </h1>
                <p className='font-bold p-10'>Unlock the full potential of your business with our compressive Software solution. </p>
                <h1 className='text-xl text-purple-700 font-bold '>Increase efficiency and reduce cost with our integrated solutions</h1>
                <p className='font-bold p-10'>Hour software seamlessly integrates with Existing system, saving you time and money</p>
            </div>
            <img src="https://images.unsplash.com/photo-1499028344343-cd173ffc68a9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
            className='border-black md:w-1/2 md:pl-20 pt-10' alt="" />

        </div>

        <div>
          <h1 className='text-5xl font-bold pt-20'> Discover the Power of Our Software</h1>
          <div className='md:flex  pt-10 pb-5'>
            <div className='md:w-1/3 p-10'>
              <h1 className='text-pink-700 text-3xl font-bold'>Streamline your Workflow with Ease</h1>
              <p className='text-purple-700 font-medium pt-10'> Our software simplifies complex 
                  processes and boosts productivity</p>
            </div>
            <div className='md:w-1/3 p-10'>
              <h1 className='text-pink-700 text-3xl font-bold'>Unlock Your Potential with Our Software</h1>
              <p className='text-purple-700 font-medium pt-10'>
                Experience the benefit of our intuitive software solutions. 
              </p>
            </div>
            <div className='md:w-1/3 p-10'>
              <h1 className='text-pink-700 text-3xl font-bold'>Take Control of Your Business with Our Software</h1>
              <p className='text-purple-700 font-medium pt-10'>
                Our software empowers you to make data driven decisions and achieve success. 
              </p>
            </div>
          </div>
        </div>
        
        <style>

        </style>
    </div>
  )
}

export default Insights