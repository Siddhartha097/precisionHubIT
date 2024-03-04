import  Box  from '@/components/Box';
import { Button } from '@/components/ui/button';

const Learn = () => {
return (
    // Container
    <main className='LearnMore-container'>
        {/* First Page */}
        <div className='flex justify-center h-30'>
            {/* left */}
            <div className="flex pt-56 justify-center h-30 bg-white px-20 w-3/5">
                <h1 className="text-6xl font-bold text-gray-800 mb-8">
                    Powerful Software Solutions for Your Business
                </h1>
            </div>
            {/* right */}
            <div className=' pt-56 pr-20'>
                <p className="text-xl text-gray-700 mb-8 ">
                    Transform your business with our innovative software solutions. Increase efficiency, streamline processes, and drive growth.
                </p>
                <div>
                <Button className="rounded-none border border-black hover:bg-white text-white hover:text-black bg-black " variant={'outline'}>Learn More</Button>
                <Button className="rounded-none border border-black hover:bg-green-600 hover:border-green-600 hover:text-white ml-5" variant={'outline'}>Sign Up</Button>
                </div>
            </div>
        </div>
        <section className=''>
            <img src="https://media.istockphoto.com/id/865215930/vector/abstract-colorful-geometric-square-border-pattern-on-white-background.jpg?s=2048x2048&w=is&k=20&c=8s7O24vxGlHlzwROjyrmIdAfwjne-Sbs6zUcCh8Czc4=" alt="" />
        </section>
        {/* Second page */}
        <div className='learn-page2 pb-20'>
                    {/* description and right image */}
                    <p className='pl-20 font-semibold'>Innovative</p>
                    <div className=' grid grid-cols-2'>

                        <div className='px-20'>
                            <h1 className='text-6xl font-bold py-10'>Revolutionize WorkFlow With Our Software</h1>
                            <div className='py-10 font-semibold text-gray-500'>Our software is debugged to streamtape your process, increase efficiency, and save you time. With its advanced features and user friendly interface, you will be able to tackle task with ease.</div>
                            <div className='flex'>
                                <Box label='Powerful Solutions' desc='Ecperience the benefits of our software and take your productivity to new levels.' className='*:h-16 pr-5'></Box>
                                <Box label='Seamless Integrations' desc='Our software seamlessly integrates with your working tools and system, emulating a smooth transition.' className='*:h-16'></Box>
                            </div>
                        </div>

                        <div><img src="https://media.istockphoto.com/id/865215930/vector/abstract-colorful-geometric-square-border-pattern-on-white-background.jpg?s=2048x2048&w=is&k=20&c=8s7O24vxGlHlzwROjyrmIdAfwjne-Sbs6zUcCh8Czc4=" alt="" className=' px-20 h-full'/></div>
                        <div className='flex px-20'>
                        <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            
                        </div>
                    </div>

                    {/* three box */}
                    <div className='grid grid-cols-3 px-20 py-40 '>
                        <section>
                            <Box label='Increase Productivity and Collaboration' desc='Our software provides innovative solutions to somplex problems helping you achieve your goals faster and with greater precision' className='*:h-28 pr-20' titleSize='text-5xl'></Box>
                            <div className='flex'>
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            
                        </div>
                        </section>


                        <section>
                            <Box label='Powerful Solutions for Your Business' desc='Our software affers a wide range of features and benefits to help your business succeed.' className='*:h-28' titleSize='text-5xl'></Box>
                            <ul className='flex'>
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            
                        </ul>
                        </section>


                        <section>
                            <Box label='Streamline Your Workflow with Ease' desc='Our software simplifies complex tasks and improves efficiency.' className='*:h-28' titleSize='text-5xl'></Box>
                            <ul className='flex'>
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-green-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            
                        </ul>
                        </section>
                    </div>

                    {/* decription */}
                    <div className='flex px-20 py-20'>
                        <section className='text-6xl w-2/4 font-bold'>
                            Discover the power of Our Software
                        </section>


                        <section className='w-2/4 text-xl'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magni eum natus quas corrupti quae soluta cupiditate adipisci, quod sint repellat tempore id hic et voluptate! Odio magnam tenetur quas.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus asperiores dolorum nemo enim, in, iure sequi est eligendi minima id placeat repellat. Ipsa, iusto iste non cum commodi enim!
                        </section>
                    </div>
                    {/* Three boxes */}

                    <div className='grid grid-cols-3 px-20 py-40 '>
                        <section className='pr-10'>
                            <Box label='Efficient and Effective Solutions' desc='' className='*:h-40' titleSize='text-5xl'></Box>
                            <div className='flex'>
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            
                        </div>
                        </section>


                        <section className='pr-10'>
                            <Box label='Powerful Solutions for Your Business' desc='Our software affers a wide range of features and benefits to help your business succeed.' className='*:h-40' titleSize='text-5xl'></Box>
                            <ul className='flex'>
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            
                        </ul>
                        </section>


                        <section>
                            <Box label='Streamline Your Workflow with Ease' desc='Our software simplifies complex tasks and improves efficiency.' className='*:h-40' titleSize='text-5xl'></Box>
                            <ul className='flex'>
                            
                            
                        </ul>
                        </section>
                    </div>

                    {/* Three para */}
                    <section className='flex justify-center'>
                    <section className='pt-20 w-3/6 text-center'>
                        <p className='font-bold text-center'>Innovate</p>
                        <h1 className='text-6xl font-bold text-center py-9'>Unlock potential Through Custom Development and</h1>
                        <p className='font-bold '>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit, odit tempore harum voluptatem, exercitationem nam expedita dignissimos unde nesciunt vero, qui voluptatum distinctio quas velit pariatur ea neque molestias.</p>
                    </section>
                    </section>

                    {/* Three boxes */}
                    <div className='grid grid-cols-3 px-20 py-20 '>
                        <section className='pr-10 '>
                            <Box label='Efficient and effective Solutions' desc='' className='*:h-40 flex flex-col justify-center items-center text-center' titleSize='text-5xl'></Box>
                            <div className='flex'>
                            
                            
                        </div>
                        </section>


                        <section className='pr-10'>
                            <Box label='Powerful Solutions for Your Business' desc='Our software affers a wide range of features and benefits to help your business succeed.' className='*:h-40 flex flex-col justify-center items-center text-center ' titleSize='text-5xl'></Box>
                            <ul className='flex justify-center'>
                            
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            <Button className='rounded-none border-0' variant={'outline'}>Sign up {'>'} </Button>
                            
                        </ul>
                        </section>


                        <section>
                            <Box label='Streamline Your Workflow with Ease' desc='Our software simplifies complex tasks and improves efficiency.' className='*:h-40 flex flex-col justify-center items-center text-center ' titleSize='text-5xl'></Box>
                            <ul className='flex'>
                            
                            
                        </ul>
                        </section>

                    </div>
        </div>
        Third
        <div></div>
        <div className='flex justify-center gap-20 '>
            <section className='w-2/4'>
                <h1 className='text-5xl font-bold'>Discover the Power of Our Reliable and Successful Software</h1>
            </section>
            <section className='w-2/4'>
                <p>Our software has been proven to deliver exceptional results, providing reliable solutions for the business of all sizes.</p>
                <div className=''>
                    <div>
                        <h1>50%</h1>
                        <p></p>
                    </div>
                    <div>
                        <h1>50%</h1>
                        <p>Improve Effeciency and drive growth with our innovative software solutions.</p>
                    </div>
                </div>
            </section>
            
        </div>
    </main>
)
}

export default Learn