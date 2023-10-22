import React from "react";
import Image from 'next/image';
const Hero = () => {
  return (
        <div className="grid grid-col-1 items-center h-screen pb-10 rounded-3xl border-2 bg-black shadow-2xl justify-center">
               <div className="lg:hidden circle rounded-full mx-auto"></div>

                <div className="justify-center flex items-center">
                        <Image
                        className="shadow-xl p-6"
                        src="/favicon.png"
                        alt="MVoT Logo"
                        width={500}
                        height={40}
                        priority
                        />
                </div>
                <div className="lg:hidden circle rounded-full justify-end"></div>
            

      
        </div>
    )
};

export default Hero;