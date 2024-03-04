import  Box  from '@/components/Box';
import { Button } from '@/components/ui/button';
import { Swiper,SwiperSlide } from 'swiper/react';
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { FaStar } from 'react-icons/fa';
import Member from '@/components/Member';

const Learn = () => {
return (
    // Container
    <main className='LearnMore-container '>
        {/* First Page */}
        <div className='md:flex justify-center md:h-30 py-20'>
            {/* left */}
            <div className="flex md:pt-56 justify-center h-30 bg-white md:px-20 md:w-3/5">
                <h1 className="text-6xl font-bold text-gray-800 mb-8">
                    Powerful Software Solutions for Your Business
                </h1>
            </div>
            {/* right */}
            <div className=' md:pt-56 md:pr-20 text-center md:text-left'>
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
            <img src="https://images.unsplash.com/photo-1638202947561-e372255007b3?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
        </section>
        {/* Second page */}
        <div className='learn-page2 pb-20 px-5'>
                    {/* description and right image */}
                    <p className='pl-20 font-semibold md:px-0'>Innovative</p>
                    <div className=' md:grid grid-cols-2'>

                        <div className='md:px-20'>
                            <h1 className='text-6xl font-bold py-10'>Revolutionize WorkFlow With Our Software</h1>
                            <div className='py-10 font-semibold text-gray-500'>Our software is debugged to streamtape your process, increase efficiency, and save you time. With its advanced features and user friendly interface, you will be able to tackle task with ease.</div>
                            <div className='flex'>
                                <Box label='Powerful Solutions' desc='Ecperience the benefits of our software and take your productivity to new levels.' className='*:h-16 w-2/4'></Box>
                                <Box label='Seamless Integrations' desc='Our software seamlessly integrates with your working tools and system, emulating a smooth transition.' className='*:h-16 w-2/4'></Box>
                            </div>
                        </div>

                        <div><img src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" className=' md:px-20 h-full'/></div>
                        <div className='flex px-20'>
                        <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            
                        </div>
                    </div>

                    {/* three box */}
                    <div className='md:grid grid-cols-3 md:px-20 py-40 '>
                        <section>
                            <Box label='Increase Productivity and Collaboration' desc='Our software provides innovative solutions to somplex problems helping you achieve your goals faster and with greater precision' className=' flex flex-col gap-7 md:pr-20 pr-2' titleSize='text-5xl'></Box>
                            <div className='flex'>
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white mt-5 mb-5" variant={'outline'}>Learn More</Button>
                            
                        </div>
                        </section>


                        <section>
                            <Box label='Powerful Solutions for Your Business' desc='Our software affers a wide range of features and benefits to help your business succeed.' className='flex flex-col gap-12 ' titleSize='text-5xl'></Box>
                            <ul className='flex'>
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white mt-10" variant={'outline'}>Learn More</Button>
                            
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
                    <div className='md:flex md:px-20 md:py-20'>
                        <section className='text-6xl md:w-2/4 font-bold'>
                            Discover the power of Our Software
                        </section>


                        <section className='md:w-2/4 text-xl md:pl-20 pt-10'>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi, magni eum natus quas corrupti quae soluta cupiditate adipisci, quod sint repellat tempore id hic et voluptate! Odio magnam tenetur quas.
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore temporibus asperiores dolorum nemo enim, in, iure sequi est eligendi minima id placeat repellat. Ipsa, iusto iste non cum commodi enim!
                        </section>
                    </div>
                    {/* Three boxes 2*/}

                    <div className='grid grid-cols-3 md:px-20 py-40 '>
                        <section className='md:pr-10'>
                            <Box label='Efficient and Effective Solutions' desc='' className='md:*:h-40' titleSize='text-5xl'></Box>
                            <div className='flex'>
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            
                        </div>
                        </section>


                        <section className='md:pr-10'>
                            <Box label='Powerful Solutions for Your Business' desc='Our software affers a wide range of features and benefits to help your business succeed.' className='md:*:h-40' titleSize='text-5xl'></Box>
                            <ul className='flex'>
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            
                        </ul>
                        </section>


                        <section>
                            <Box label='Streamline Your Workflow with Ease' desc='Our software simplifies complex tasks and improves efficiency.' className='md:*:h-40' titleSize='text-5xl'></Box>
                            <ul className='flex'>
                            
                            
                        </ul>
                        </section>
                    </div>

                    {/* Three para */}
                    <section className='flex justify-center'>
                    <section className='pt-20 md:w-3/6 text-center'>
                        <p className='font-bold text-center text-gray-400'>Innovate</p>
                        <h1 className='text-6xl font-bold text-center py-9'>Unlock potential Through Custom Development and</h1>
                        <p className='font-bold text-gray-400'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Maiores reprehenderit, odit tempore harum voluptatem, exercitationem nam expedita dignissimos unde nesciunt vero, qui voluptatum distinctio quas velit pariatur ea neque molestias.</p>
                    </section>
                    </section>

                    {/* Three boxes 3*/}
                    <div className='grid grid-cols-3 md:-20 my-36 '>
                        <section className='md:pr-10 '>
                            <Box label='Efficient and effective Solutions' desc='' className=' gap-5 flex flex-col justify-center items-center text-center' titleSize='text-4xl'></Box>
                            <div className='flex'>
                            
                            
                        </div>
                        </section>


                        <section className='md:pr-10'>
                            <Box label='Powerful Solutions for Your Business' desc='Our software affers a wide rang111sfdfe of features and benefits to help your business succeed.' className='gap-5 flex flex-col justify-center items-center text-center ' titleSize='text-4xl'></Box>
                            <ul className='flex justify-center py-20'>
                            
                            <Button className="rounded-none border border-black hover:bg-pink-600 hover:border-pink-600 hover:text-white" variant={'outline'}>Learn More</Button>
                            <Button className='rounded-none border-0' variant={'outline'}>Sign up {'>'} </Button>
                            
                        </ul>
                        </section>


                        <section>
                            <Box label='Streamline Your Workflow with Ease' desc='Our software simplifies complex tasks and improves efficiency.' className='gap-5 flex flex-col justify-center items-center text-center ' titleSize='text-4xl'></Box>
                            <ul className='flex'>
                            
                            
                        </ul>
                        </section>

                    </div>
        </div>
        {/* Third */}
        <div></div>
        <div className='md:flex justify-center gap-20 md:px-20 px-5'>
            <section className='md:w-2/4'>
                <h1 className='text-5xl font-bold pb-10'>Discover the Power of Our Reliable and Successful Software</h1>
            </section>
            <section className='md:w-2/4'>
                <p className=''>Our software has been proven to deliver exceptional results, providing reliable solutions for the business of all sizes.</p>
                <div className='grid grid-cols-2 pt-10'>
                    <div>
                        <h1 className='text-4xl font-bold'>50%</h1>
                        <p></p>
                    </div>
                    <div>
                        <h1 className='text-4xl font-bold'>50%</h1>
                        <p>Improve Effeciency and drive growth with our innovative software solutions.</p>
                    </div>
                </div>
            </section>
            
        </div>
        {/* review */}
        <div>
            
            <section className='py-40 px-5'>
                <Swiper cssMode={true}
                        navigation={true}
                        pagination={true}
                        
                        modules={[Navigation, Pagination]}
                        className='mySwiper'>
                    <SwiperSlide className=''>
                        <div className='md:grid grid-cols-2 items-center md:h-96'>
                            <div className='flex justify-center '><img src="https://images.unsplash.com/photo-1595956553259-1e2dce209bf4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            className='md:h-96 rounded-xl my-10' alt="" /></div>
                            <div>
                            <div className=' flex flex-col gap-7'>
                                <p className='flex'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                                <h1 className='text-xl font-bold '>Our software has completely turned the way is does business. It's Efficient, user-friendly, and has increased our productivity ten-folds.</h1>
                                    <div className='flex'>
                                        <div className='font-semibold text-gray-500'>
                                            <p>Suresh Raima</p>
                                            <p className='font-mono'>CEO, COMPANY NAME</p>
                                        </div>
                                        <h1 className='text-5xl pl-2'>|</h1>
                                        <h1 className='font-bold text-xl cen'>Webflow</h1>
                                    </div>
                            </div>
                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide><div className='grid grid-cols-2 items-center h-96'>
                            <div className='flex justify-center'><img src="https://images.unsplash.com/photo-1595956553259-1e2dce209bf4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            className='h-96 rounded-xl' alt="" /></div>
                            <div>
                            <div className=' flex flex-col gap-7'>
                                <p className='flex'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                                <h1 className='text-xl font-bold'>Our software has completely turned the way is does business. It's Efficient, user-friendly, and has increased our productivity ten-folds.</h1>
                                    <div className='flex'>
                                        <div className='font-semibold text-gray-500'>
                                            <p>Suresh Raima</p>
                                            <p className='font-mono'>CEO, COMPANY NAME</p>
                                        </div>
                                        <h1 className='text-5xl pl-2'>|</h1>
                                        <h1 className='font-bold text-xl cen'>Webflow</h1>
                                    </div>
                            </div>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className='grid grid-cols-2 items-center h-96'>
                            <div className='flex justify-center'><img src="https://images.unsplash.com/photo-1595956553259-1e2dce209bf4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            className='h-96 rounded-xl' alt="" /></div>
                            <div>
                            <div className=' flex flex-col gap-7'>
                                <p className='flex'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                                <h1 className='text-xl font-bold'>Our software has completely turned the way is does business. It's Efficient, user-friendly, and has increased our productivity ten-folds.</h1>
                                    <div className='flex'>
                                        <div className='font-semibold text-gray-500'>
                                            <p>Suresh Raima</p>
                                            <p className='font-mono'>CEO, COMPANY NAME</p>
                                        </div>
                                        <h1 className='text-5xl pl-2'>|</h1>
                                        <h1 className='font-bold text-xl cen'>Webflow</h1>
                                    </div>
                            </div>
                            </div>
                        </div></SwiperSlide>
                    <SwiperSlide><div className='grid grid-cols-2 items-center h-96'>
                            <div className='flex justify-center'><img src="https://images.unsplash.com/photo-1595956553259-1e2dce209bf4?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                            className= 'h-96 rounded-xl' alt="" /></div>
                            <div>
                            <div className=' flex flex-col gap-7'>
                                <p className='flex'><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar><FaStar></FaStar></p>
                                <h1 className='text-xl font-bold'>Our software has completely turned the way is does business. It's Efficient, user-friendly, and has increased our productivity ten-folds.</h1>
                                    <div className='flex'>
                                        <div className='font-semibold text-gray-500'>
                                            <p>Suresh Raima</p>
                                            <p className='font-mono'>CEO, COMPANY NAME</p>
                                        </div>
                                        <h1 className='text-5xl pl-2'>|</h1>
                                        <h1 className='font-bold text-xl cen'>Webflow</h1>
                                    </div>
                            </div>
                            </div>
                        </div></SwiperSlide>
                </Swiper>
            </section>
        </div>
        <div className='md:pl-20 px-5'>
            <p>innovative</p>
            <h1 className='text-4xl'>Get to know our team</h1>
            <p className='text-gray-400'>Get to know the experts behind our softwares</p>
            <section className='grid grid-cols-4 '>
                <Member name='John Doe' designation='Front End Developer' desc='With knowlege of 10 to 15 front end frameworks and languages.' className='md:p-20'/>
                <Member name='John Doe' designation='Front End Developer' desc='With knowlege of 10 to 15 front end frameworks and languages.' className='md:p-20'/>
                <Member name='John Doe' designation='Front End Developer' desc='With knowlege of 10 to 15 front end frameworks and languages.' className='md:p-20'/>
                <Member name='John Doe' designation='Front End Developer' desc='With knowlege of 10 to 15 front end frameworks and languages.' className='md:p-20'/>
                <Member name='John Doe' designation='Front End Developer' desc='With knowlege of 10 to 15 front end frameworks and languages.' className='md:p-20'/>
                <Member name='John Doe' designation='Front End Developer' desc='With knowlege of 10 to 15 front end frameworks and languages.' className='md:p-20'/>
            </section>
        </div>

    </main>
)
}

export default Learn