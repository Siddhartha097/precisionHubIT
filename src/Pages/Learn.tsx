import  Box  from '@/components/Box'

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
        <div className='learn-page2 grid grid-cols-2 px-20'>
            <div className='px-20'>
                <h1 className='text-6xl font-bold'>Revolutionize WorkFlow With Our Software</h1>
                <div className='py-10 font-semibold text-gray-500'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Omnis accusamus eaque nulla alias fugit tempora voluptas quae maxime, error velit eos minima dolores voluptatibus aliquam odio, tempore consequatur, ullam eum?</div>
                <div className='flex'>
                    <Box label='Powerful Solutions' desc='lorem dak ajdiw hsjda hasdhaw hawduud hadwuhd hwah h u uwhadu' className='*:h-16'></Box>
                    <Box label='Powerful Solutions' desc='lorem dak ajdiw hsjda hasdhaw hawduud hadwuhd hwah h u uwhadu' className='*:h-16'></Box>
                </div>
            </div>
            <div><img src="https://media.istockphoto.com/id/865215930/vector/abstract-colorful-geometric-square-border-pattern-on-white-background.jpg?s=2048x2048&w=is&k=20&c=8s7O24vxGlHlzwROjyrmIdAfwjne-Sbs6zUcCh8Czc4=" alt="" className=' px-20'/></div>
            <ul className='flex px-20'>
                <button className='border-2 p-3 mr-2'>Learn More</button>
                <button>Sign Up </button>
            </ul>
        </div>
    </main>
  )
}

export default Learn