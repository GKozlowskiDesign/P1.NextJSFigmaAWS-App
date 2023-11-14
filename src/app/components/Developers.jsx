'use client';


import Image from 'next/image';
import {Accordion, AccordionItem} from "@nextui-org/accordion";
import React from "react";
const Developers = () => {

    const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
 
     <section>
         <div className="p-4 w-12/12 pb-20  rounded-br-3xl rounded-tr-3xl mb-16 bg-gradient-to-b from-black via-gray-900 to-black">
                 <h1 className="text-4xl lg:text-5xl text-white font-semibold p-6 justify-center flex">Built For All Types of Projects</h1>
                <div className='cols-span-1 p-6 w-10/12 mx-auto'>
               <Accordion variant="splitted font-mono">
               <AccordionItem key="1" aria-label="Accordion 1" title="Archiecture" className='bg-gradient-to-br from-gray-500 to-gray-900 p-3 mb-4 rounded-lg border-l-2 border-r-2 border-t-4 border-b-2 border-black
                 hover:bg-violet-400 hover:rounded-lg
                 '>
           
                   {content}
               </AccordionItem>
               <AccordionItem key="2" aria-label="Accordion 2" title="Application" className='bg-gradient-to-br from-gray-500 to-gray-900 p-3 mb-4 rounded-lg border-l-2 border-r-2 border-t-4 border-b-2 border-black
                 hover:bg-violet-400 hover:rounded-lg
                 '>

               {content}
               </AccordionItem>
               <AccordionItem key="3" aria-label="Accordion 3" title="Software" className='bg-gradient-to-br from-gray-500 to-gray-900 p-3 mb-4 rounded-lg border-l-2 border-r-2 border-t-4 border-b-2 border-black
                 '>

                   {content}
               </AccordionItem>
             
               
               </Accordion>
                </div>

               

              </div>
     </section>
    )
};

export default Developers;