import Image from 'next/image';
import React from "react";
const Services = () => {
  return (
        <section className="bg-white">
                <div id="services" className='flex flex-col w-full pb-20 md:pb-40 lg:pb-40 bg-gradient-to-b  from-green-400 to-green-500 border-t-4 border-black shadow-xl rounded-t-3xl'>
                    <div className="pt-10 pb-10 grid grid-cols-1 items-center justify-center p-6">
                        <h1 className="text-4xl md:text-4xl lg:text-5xl lg:pb-10 font-semibold p-6 mt-10 items-center justify-center flex mx-auto font-mono">
                        Powerful Web3 PaaS LaunchPad Tooling</h1>
                    </div> 
                    <div className="grid grid-cols-4">
                            <div class="p-2 md:p-5 lg:p-10 lg:pb-28 lg:pt-28 md:pb-28 md:pt-28 overflow-hidden shadow-2xl items-center justify-center flex border-t-4 border-r-2 border-y-2 bg-green-400  hover:bg-green-600 cursor-pointer border-black">
                            <Image
                                className='mx-auto'
                                width='100'
                                height='100'
                                src="/assets/Earth.png"
                                alt="Earth Icon"
                            /> 
                            </div>
                            
                            <div class="p-2 md:p-5 lg:p5 xl:p-5 md:pb-28 md:pt-28 overflow-hidden shadow-2xl items-center justify-center flex border-t-4 border-r-2 border-y-2 bg-green-400 hover:bg-green-600 cursor-pointer border-black">
                            <Image
                                className='mx-auto'
                                width='100'
                                height='100'
                                src="/assets/Phone.png"
                                alt="Phone Icon"
                            /> 
                            </div>
                            
                            <div class="p-2 md:p-5 lg:p5 xl:p-5 md:pb-28 md:pt-28 overflow-hidden shadow-2xl items-center justify-center flex border-t-4  border-r-2 border-y-2 bg-green-400 hover:bg-green-600 cursor-pointer border-black">
                            <Image
                                className='mx-auto'
                                width='100'
                                height='100'
                                src="/assets/Bug.png"
                                alt="Bug Icon"
                            />
                            </div>
                            
                            <div class="p-2 md:p-5 lg:p5 xl:p-5 md:pb-28 md:pt-28 overflow-hidden shadow-2xl items-center justify-center flex border-t-4  border-y-2 bg-green-400  hover:bg-green-600 cursor-pointer border-black">
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

               
             
        </section>
    )
};

export default Services;