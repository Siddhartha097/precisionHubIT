import  Box  from '@/components/Box';

const Learn = () => {
  return (
    <main className='LearnMore-container'>
        <div className='flex justify-center h-screen'>

            <div className="flex pt-56 justify-center h-screen bg-white px-20 w-3/5">
                <h1 className="text-6xl font-bold text-gray-800 mb-8">
                    Powerful Software Solutions for Your Business
                </h1>
            </div>
            <div className=' pt-56 pr-20'>
                <p className="text-xl text-gray-700 mb-8 ">
                    Transform your business with our innovative software solutions. Increase efficiency, streamline processes, and drive growth.
                </p>
                <div>
                    <button className="bg-black hover:bg-blue-700 text-white font-bold py-2 px-4 ">
                    Learn More
                    </button>
                    <button className="bg-white hover:bg-blue-700 text-black font-bold border-2 py-2 px-4 ml-4">
                    Sign Up
                    </button>
                </div>
            </div>
        </div>
        <div className='learn-page2'>
                    <div className=' grid grid-cols-2'>
                        <div className='px-20'>
                            <h1 className='text-6xl font-bold'>Revolutionize WorkFlow With Our Software</h1>
                            <div className='py-10 font-semibold text-gray-500'>Our software is debugged to streamtape your process, increase efficiency, and save you time. With its advanced features and user friendly interface, you will be able to tackle task with ease.</div>
                            <div className='flex'>
                                <Box label='Powerful Solutions' desc='Ecperience the benefits of our software and take your productivity to new levels.' className='*:h-16'></Box>
                                <Box label='Seamless Integrations' desc='Our software seamlessly integrates with your working tools and system, emulating a smooth transition.' className='*:h-16'></Box>
                            </div>
                        </div>
                        <div><img src="https://media.istockphoto.com/id/865215930/vector/abstract-colorful-geometric-square-border-pattern-on-white-background.jpg?s=2048x2048&w=is&k=20&c=8s7O24vxGlHlzwROjyrmIdAfwjne-Sbs6zUcCh8Czc4=" alt="" className=' px-20 h-full'/></div>
                        <div className='flex px-20'>
                            <button className='border-2 p-3 mr-2'>Learn More</button>
                            <button>Sign Up </button>
                        </div>
                    </div>


                    <div className='grid grid-cols-3 px-20 py-40'>
                        <section>
                            <Box label='Powerful Solutions for your Business' desc='' className='*:h-16' titleSize='text-5xl'></Box>
                            <div className='flex'>
                            <button className='border-2 p-3 mr-2 '>Learn More</button>
                            <button>Sign Up </button>
                        </div>
                        </section>
                        <section>
                            <Box label='Powerful Solutions for Your Business' desc='Our software affers a wide range of features and benefits to help your business succeed.' className='*:h-16' titleSize='text-5xl'></Box>
                            <ul className='flex'>
                            <button className='border-2 p-3 mr-2'>Learn More</button>
                            <button>Sign Up </button>
                        </ul>
                        </section>
                        <section>
                            <Box label='Streamline Your Workflow with Ease' desc='Our software simplifies complex tasks and improves efficiency.' className='*:h-16' titleSize='text-5xl'></Box>
                            <ul className='flex'>
                            <button className='border-2 p-3 mr-2'>Learn More</button>
                            <button>Sign Up </button>
                        </ul>
                        </section>
                    </div>


                    <div className='flex px-20'>
                        <section className='text-6xl w-2/4 font-bold'>
                            Discover the power of Our Software
                        </section>
                        <section className='w-2/4 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magni eum natus quas corrupti quae soluta cupiditate adipisci, quod sint repellat tempore id hic et voluptate! Odio magnam tenetur quas.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus asperiores dolorum nemo enim, in, iure sequi est eligendi minima id placeat repellat. Ipsa, iusto iste non cum commodi enim!
                        </section>
                    </div>
        </div>

    </main>
  )
}

export default Learn