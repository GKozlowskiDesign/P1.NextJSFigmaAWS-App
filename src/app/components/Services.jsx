import Image from 'next/image';
import React from "react";
const Services = () => {
  return (
        <section className="bg-white">
                <div name="services" className='flex flex-col w-full pb-28 bg-gradient-to-b  from-green-400 via-green-500 to-green-700 border-t-2 border-green-400 shadow-xl'>
                    <div className="pt-10 grid grid-cols-1 items-center justify-center p-6">
                        <h1 className="text-3xl md:text-5xl lg:font-6xl font-semibold p-6 pt-20 items-center justify-center flex mx-auto">
                        Start Building with MVoT Powerful Managed Web3 Tools
                        </h1>
                    </div> 
                    <div className="grid grid-cols-4">
                            <div class="p-5 md:pb-28 md:pt-28 overflow-hidden shadow-2xl items-center justify-center flex border-r-2 border-y-2 border-black">
                            <Image
                                className='mx-auto'
                                width='100'
                                height='100'
                                src="/assets/Earth.png"
                                alt="Earth Icon"
                            /> 
                            </div>
                            
                            <div class="p-5 overflow-hidden shadow-lg items-center justify-center flex border-r-2 border-y-2 border-black">
                            <Image
                                className='mx-auto'
                                width='100'
                                height='100'
                                src="/assets/Phone.png"
                                alt="Phone Icon"
                            /> 
                            </div>
                            
                            <div class="p-5 overflow-hidden shadow-lg items-center justify-center flex border-r-2 border-y-2 border-black">    
                            <Image
                                className='mx-auto'
                                width='100'
                                height='100'
                                src="/assets/Bug.png"
                                alt="Bug Icon"
                            />
                            </div>
                            
                            <div class="p-5 overflow-hidden shadow-lg items-center justify-center flex border-x-1 border-y-2 border-black">
                            <Image
                                className='mx-auto'
                                width='100'
                                height='100'
                                src="/assets/Key.png"
                                alt="Key Icon"
                            /> 
                            </div>
                    </div>
                </div>

                <div name="services" className='flex flex-col p-10 bg-gradient-to-b  from-green-700 via-indigo-900 to-black pb-10 pt-10'>
                <div className='border-t mb-8 border-black'></div>
                <h3 className='justify-start text-3xl  mb-6'> Latest Updates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center mx-auto gap-20">
                        <div className="cols-span-1 relative group w-10/12 bg-transparent p-1.5 hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:bg-indigo-700 hover:opacity-100 hover:blur duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 01"
                            /> 
                        </div>

                        <div className="cols-span-1 relative group w-10/12 bg-transparent p-1.5 hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:bg-indigo-700 hover:opacity-100 hover:blur duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 02"
                            /> 
                        </div>

                        <div className="cols-span-1 relative group w-10/12 bg-transparent p-1.5 hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:bg-indigo-700 hover:opacity-100 hover:blur duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 03"
                            /> 
                        </div>

                        <div className="cols-span-1 relative group w-10/12 bg-transparent p-1.5 hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:bg-indigo-700 hover:opacity-100 hover:blur duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 04"
                            /> 
                        </div>
                    </div>    
                </div>
        </section>
    )
};

export default Services;