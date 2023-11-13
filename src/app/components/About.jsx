'use client';


import React from "react";
import {Accordion, AccordionItem} from "@nextui-org/accordion";

const About = () => {


  const content =
  "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.";

  return (
        <section>
              <div id="about" className='w-full'>
          
      



                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gradient-to-b from-violet-600 via-indigo-400 to-gray-700">
                    {/* grid cols 1 & 2 */}
                      <div className="col-span-1 pt-20 p-10">

                            <h1 className="text-4xl lg:text-5xl pb-4 text-violet-300">Mission</h1>
                            <p className="text-xs md:text-md lg:text-lg pt-2 tracking-wider">Our core mission is as ambitious as it is vital: to ensure that blockchain is seamlessly integrated into the fabric of society, thereby fostering benefits for all of humanity.</p>            
                            
                            <h1 className="pt-20 text-4xl lg:text-5xl pb-4 text-violet-600">Vision</h1>
                            <p className="text-xs md:text-md lg:text-lg pt-2 tracking-wider">We are committed to pushing the boundaries of blockchain's capabilities, constantly innovating, and providing practical solutions that empower people and organizations. 
                            With a vision of a future where blockchain is seamlessly woven into the daily lives of individuals, MVoT is dedicated to leaving a lasting, positive impact on the world, ushering in an era of trust, efficiency, and inclusivity.
                            </p>
                            <div className="w-2/5 md:w-2/4 lg:w-2/5">
                            <ul className="mt-6">
                            <li><h3 className="underline pt-2 cursor-pointer hover:text-indigo-300 hover:font-bold mx-auto p-1 justify-center text-lg text-white">Read Our Litepaper</h3></li>
                            <li><h3 className="underline pt-2 cursor-pointer  hover:text-indigo-300 hover:font-bold mx-auto p-1 justify-center text-lg text-white">Speak to our Ai</h3></li>
                            </ul>
                            </div>
                      
                      </div>
                    {/* grid cols 3 */}
                      <div  className="col-span-1 justify-end mx-auto flex flex-row ">
                 
                          <section className="md:visible w-8/12 sm:w-12/12 md:w-10/12 lg:w-9/12 justify-center">
                          {/* external image */}
                          <img
                          src="https://images.pexels.com/photos/3646377/pexels-photo-3646377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="w-full rounded-l-3xl border-t-4 border border-black shadow-2xl mx-auto mt-10 md:mt-20"
                          alt="Space"
                          />
                          </section>
                        </div>  
                  </div>
               
             
                 <div className="p-2 pb-4 bg-gray-700 rounded-b-3xl border-b-4 border-black">
                 <h1 className="text-4xl lg:text-5xl text-indigo-400 font-semibold p-6 justify-center flex">Built By Developers For Developers</h1>
            
                 
                <div className='cols-span-1 p-6 w-10/12 mx-auto'>
               


               <Accordion variant="splitted font-mono">
               <AccordionItem key="1" aria-label="Accordion 1" title="Ultra Fast" className='bg-white p-3 mb-4 rounded-lg border-l-2 border-r-2 border-t-4 border-b-2 border-indigo-600
                 hover:bg-indigo-400 hover:rounded-lg
                 '>
           
                   {content}
               </AccordionItem>
               <AccordionItem key="2" aria-label="Accordion 2" title="Highly Available" className='bg-white p-3 mb-4 rounded-lg border-l-2 border-r-2 border-t-4 border-b-2 border-indigo-600
                 hover:bg-indigo-400 hover:rounded-lg
                 '>

               {content}
               </AccordionItem>
               <AccordionItem key="3" aria-label="Accordion 3" title="Decentralized" className='bg-white p-3 mb-4 rounded-lg border-l-2 border-r-2 border-t-4 border-b-2 border-indigo-600
                 hover:bg-indigo-400 hover:rounded-lg
                 '>

                   {content}
               </AccordionItem>
             
               
               </Accordion>
</div>
                 </div>
              
                    </div>


        </section>
    )
};

export default About;