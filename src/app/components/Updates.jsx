'use client';


import Image from 'next/image';
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import React from "react";
const Updates = () => {

    const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
        <section className="bg-white">            

                <div name="services" className='flex flex-col bg-gradient-to-b from-violet-600 to-violet-800 pt-20 pb-32 border-t-4 border-black'>
                <h1 className='justify-center text-4xl lg:text-5xl p-8 pt-10 pb-4 text-black font-mono'>Business Updates</h1>
             
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2'>
            
                <div className='cols-span-1'>
                <p className='w-11/12 md:w-full lg:w-full p-10 lg:p-10 bg-white border-t-4 border-black border-r-4 border-b-2 rounded-r-3xl'>Welcome to our Recent Updates section, your gateway to the latest business and technology developments. 
                                        Here, we delve deeper into the intricacies of our progress, offering insights beyond the constraints of social media. 
                                        While quarterly reports paint a broad picture, our monthly reporting offers a more current and nuanced understanding 
                                        of our strides in the industry. Investors can expect comprehensive information tailored specifically to highlight our 
                                        monthly progress, providing a detailed perspective on the innovations, breakthroughs, and advancements driving our 
                                        business and technology endeavors. Stay tuned for exclusive, in-depth updates that keep you informed and engaged 
                                        with our continuous journey of growth and achievement.
                                        <br></br><br></br>
                                        Discover our tailored updates designed for diverse audiences. For investors seeking financial insights, developers looking for technical advancements, 
                                        and businesses aiming to stay informed, our three distinct sections cater to your specific needs. To the right, explore detailed breakdowns of each post type, 
                                        providing precise information relevant to investors, developers, and businesses.





                        </p>


                </div>
                    <div className='p-10 cols-span-1'>
                                        <Accordion variant="splitted font-mono">
                                        <AccordionItem key="1" aria-label="Accordion 1" title="Investors" className='text-black font-mono bg-white p-1 mb-2 rounded-md
                                          border-t-4 border-t-black 
                                          border-r-2 border-r-black
                                          border-b-2 border-b-black
                                          border-l-2 border-l-black
                                          '>
                                    
                                            {content}
                                        </AccordionItem>
                                        <AccordionItem key="2" aria-label="Accordion 2" title="Developers"  className='text-black font-mono bg-white p-1 mb-2 rounded-md
                                        border-t-4 border-t-black 
                                        border-r-2 border-r-black
                                        border-b-2 border-b-black
                                        border-l-2 border-l-black
                                        '>
                                        {content}
                                        </AccordionItem>
                                        <AccordionItem key="3" aria-label="Accordion 3" title="Business" className='text-black font-mono bg-white p-1 mb-2 rounded-md
                                        border-t-4 border-t-black 
                                        border-r-2 border-r-black
                                        border-b-2 border-b-black
                                        border-l-2 border-l-black
                                        '>
                                            {content}
                                        </AccordionItem>
                                        </Accordion>
                    </div>
                </div>
                </div>    

                <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 items-center justify-center mx-auto gap-10 p-8 pt-10 bg-gradient-to-b from-violet-800 to-indigo-900  border-black ">
                <div className="cols-span-1 relative group w-10/12 md:w-full bg-transparent p-0 border border-black hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:opacity-100 duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 01"
                            /> 
                            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 rounded-md rounded-t-xl bg-white  border border-t-4 border-black hover:bg-violet-400">
                            <h3 class="text-lg text-black font-mono text-center justify-center flex">
                                    Business News</h3>
                                    <p class="mt-2 text-xs text-black text-center justify-center flex">Sept 12, 2023</p>
                            </div>
                        </div>

                        <div className="cols-span-1 relative group w-10/12 md:w-full bg-transparent p-0 border border-black hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:opacity-100 duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 02"
                            />
                            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 rounded-md rounded-t-xl bg-white  border border-t-4 border-black hover:bg-violet-400">
                            <h3 class="text-lg text-black font-mono text-center justify-center flex">
                                    Investor News</h3>
                                    <p class="mt-2 text-xs text-black text-center justify-center flex">Aug 22, 2023</p>
                            </div>
                        </div>

                        <div className="cols-span-1 relative group w-10/12 md:w-full bg-transparent p-0 border border-black hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:opacity-100 duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 03"
                            /> 
                            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 rounded-md rounded-t-xl bg-white  border border-t-4 border-black hover:bg-violet-400">
                            <h3 class="text-lg text-black font-mono text-center justify-center flex">
                                    Business News</h3>
                                    <p class="mt-2 text-xs text-black text-center justify-center flex">July 20, 2023</p>
                            </div>
                        </div>

                        <div className="cols-span-1 relative group w-10/12 md:w-full bg-transparent p-0 border border-black hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:opacity-100 duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 04"
                            /> 
                            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 rounded-md rounded-t-xl bg-white  border border-t-4 border-black hover:bg-violet-400">
                            <h3 class="text-lg text-black font-mono text-center justify-center flex">
                                    Investor News</h3>
                                    <p class="mt-2 text-xs text-black text-center justify-center flex">June 15, 2023</p>
                            </div>
                        </div>

                        <div className="cols-span-1 relative group w-10/12 md:w-full bg-transparent p-0 border border-black hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:opacity-100 duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 04"
                            /> 
                            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 rounded-md rounded-t-xl bg-white  border border-t-4 border-black hover:bg-violet-400">
                            <h3 class="text-lg text-black font-mono text-center justify-center flex">
                                    Developer News</h3>
                                    <p class="mt-2 text-xs text-black text-center justify-center flex">May 14, 2023</p>
                            </div>
                        </div>

                        <div className="cols-span-1 relative group w-10/12 md:w-full bg-transparent p-0 border border-black hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:opacity-100 duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 04"
                            /> 
                            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 rounded-md rounded-t-xl bg-white  border border-t-4 border-black hover:bg-violet-400">
                            <h3 class="text-lg text-black font-mono text-center justify-center flex">
                                    Business News</h3>
                                    <p class="mt-2 text-xs text-black text-center justify-center flex">April 22, 2023</p>
                            </div>
                        </div>

                        <div className="cols-span-1 relative group w-10/12 md:w-full bg-transparent p-0 border border-black hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:opacity-100 duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 04"
                            /> 
                            <div class="absolute bottom-0 left-0 right-0 px-4 py-4 rounded-md rounded-t-xl bg-white  border border-t-4 border-black hover:bg-violet-400">
                                <h3 class="text-lg text-black font-mono text-center justify-center flex">
                                    Business News</h3>
                                    <p class="mt-2 text-xs text-black text-center justify-center flex">March 24, 2023</p>
                            </div>
                        </div>
                    </div>
                    <div className='items-center justify-center grid grid-cols-2 gap-8 pt-32 p-8   pb-32  border-b-4 border-black bg-indigo-900'>
                        <div className='border-2 border-black border-t-4 pt-3 pb-3 rounded-md bg-green-400 hover:bg-green-600 duration-300 cursor-pointer'>
                            <p className='mx-auto items-center justify-center flex font-semibold text-black'>2023</p>
                        </div>
                        <div className='border-2 border-black border-t-4 pt-3 pb-3 rounded-md bg-green-400  hover:bg-green-600 duration-300 cursor-pointer'>
                            <p className='mx-auto items-center justify-center flex font-semibold text-black'>2022</p>
                        </div>

                </div>
        </section>
    )
};

export default Updates;