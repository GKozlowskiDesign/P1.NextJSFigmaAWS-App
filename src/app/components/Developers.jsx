'use client';


import {Accordion, AccordionItem} from "@nextui-org/accordion";
import React from "react";
const Developers = () => {


    const itemClasses = {
        base: "py-0 w-full",
        title: "font-normal text-xl text-white",
        trigger: "px-2 py-0  rounded-lg h-14 flex items-center",
        indicator: "text-medium",
        content: "text-small px-2",
      };

    const content =
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";


  return (
 
     <section>
        
         <div className="p-10 w-12/12 pb-20 bg-gradient-to-b from-black via-gray-900 to-black">
                 <h1 className="text-4xl lg:text-5xl text-white font-semibold p-6 justify-center flex">Frequently Asked Questions</h1>
                <div className='cols-span-1 p-6 w-12/12 mx-auto'>
               <Accordion variant="splitted font-mono" itemClasses={itemClasses}>

               <AccordionItem key="1" aria-label="Accordion 1" title="General"  className='text-white bg-gradient-to-t from-zinc-900 to-gray-700 p-3 mb-4 rounded-lg border-l-2 border-r-2 border-t-2 border-b-4 border-zinc-600
                 hover:bg-violet-400 hover:rounded-lg
                 '>
           
                   {content}
               </AccordionItem>
               <AccordionItem key="2" aria-label="Accordion 2" title="Business" className='text-white bg-gradient-to-t from-zinc-900 to-gray-700 p-3 mb-4 rounded-lg border-l-2 border-r-2 border-t-2 border-b-4 border-zinc-600
                 hover:bg-violet-400 hover:rounded-lg
                 '>

               {content}
               </AccordionItem>
               <AccordionItem key="3" aria-label="Accordion 3" title="Software" className='text-white bg-gradient-to-t from-zinc-900 to-gray-700 p-3 mb-4 rounded-lg border-l-2 border-r-2 border-t-2 border-b-4 border-zinc-600
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