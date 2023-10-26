import Image from 'next/image';
import React from "react";
const Services = () => {
  return (
        <section className="bg-white">
                <div id="services" className='flex flex-col w-full pb-28 bg-gradient-to-b  from-green-400 via-green-500 to-green-600 border-t-2 border-green-400 shadow-xl'>
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

                <div name="services" className='flex flex-col p-10 bg-gradient-to-b  from-green-600 to-violet-700 pb-10 pt-10'>
                <div className='border-t mb-2 border-black'></div>
                <h3 className='justify-start text-3xl  mb-10'> Latest Updates</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 items-center justify-center mx-auto gap-10">
                        <div className="cols-span-1 relative group w-12/12 bg-transparent p-0 hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-2 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:bg-indigo-700 hover:opacity-100 hover:blur duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 01"
                            /> 
                        </div>

                        <div className="cols-span-1 relative group w-12/12 bg-transparent p-0 hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-2 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:bg-indigo-700 hover:opacity-100 hover:blur duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 02"
                            /> 
                        </div>

                        <div className="cols-span-1 relative group w-12/12 bg-transparent p-0 hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:bg-indigo-700 hover:opacity-100 hover:blur duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 03"
                            /> 
                        </div>

                        <div className="cols-span-1 relative group w-12/12 bg-transparent p-0 hover:bg-gray-800 hover-blur rounded-lg duration-1000 cursor-pointer mb-6 mx-auto">
                            <Image
                                className='opacity-80 rounded-lg hover:bg-indigo-700 hover:opacity-100 hover:blur duration-1000'
                                width='500'
                                height='500'
                                src="/assets/Services_Card.png"
                                alt="News Card 04"
                            /> 
                        </div>
                    </div>
                    <div className='border-t mt-14 mb-2 border-white'></div>
                    <h3 className='justify-start text-3xl mb-1 text-white'> Past Updates</h3>

                    <div className='items-center justify-center grid grid-cols-2 gap-8 pt-10'>
                        <div className='border-2 border-white pt-3 pb-3 rounded-md hover:border-violet-400 hover:bg-violet-400 duration-300 cursor-pointer'>
                            <p className='mx-auto items-center justify-center flex font-semibold text-white'>2023</p>
                        </div>
                        <div className='border-2 border-white pt-3 pb-3 rounded-md hover:border-violet-400 hover:bg-violet-400 duration-300 cursor-pointer'>
                            <p className='mx-auto items-center justify-center flex font-semibold text-white'>2022</p>
                        </div>

                    </div>    
                </div>
        </section>
    )
};

export default Services;