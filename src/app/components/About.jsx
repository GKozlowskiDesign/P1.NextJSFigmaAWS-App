'use client';


import React from "react";
const About = () => {
  return (
        <section>
              <div id="about" className='w-full md:pb-4 bg-white'>
               <div className='border-t mb-2 mt-2 border-black'></div>
               <div className="border-b-1 border-black mb-2"></div>
               <div className="border-b-1 border-black mb-2"></div>
               <div className="border-b-1 border-black mb-2"></div>


                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-t border-black">
                    {/* grid cols 1 & 2 */}
                      <div className="col-span-1 pt-20 p-10">

                            <h1 className="text-4xl lg:text-5xl pb-4">Getting Started</h1>
                            <p className="text-xs md:text-md lg:text-lg tracking-wider mb-4">The MetverseOfThings (MVoT) is a pioneering company at the forefront of blockchain research and deployment, firmly rooted in the practical applications of this groundbreaking technology in the real world. 
                            Our core mission is as ambitious as it is vital: to ensure that blockchain is seamlessly integrated into the fabric of society, thereby fostering benefits for all of humanity.
                            </p>                   
                            <p className="text-xs md:text-md lg:text-lg pt-2 tracking-wider">We are committed to pushing the boundaries of blockchain's capabilities, constantly innovating, and providing practical solutions that empower people and organizations. 
                            With a vision of a future where blockchain is seamlessly woven into the daily lives of individuals, MVoT is dedicated to leaving a lasting, positive impact on the world, ushering in an era of trust, efficiency, and inclusivity.
                            </p>
                            <div className="w-2/5 md:w-2/4 lg:w-2/5">
                            <ul className="mt-6">
                            <li><h3 className="underline pt-2 cursor-pointer hover:text-indigo-900 hover:font-bold mx-auto p-1 justify-center text-lg">Read Our Litepaper</h3></li>
                            <li><h3 className="underline pt-2 cursor-pointer  hover:text-indigo-900 hover:font-bold mx-auto p-1 justify-center text-lg">Speak to our Ai</h3></li>
                            </ul>
                            </div>
                      
                      </div>
                    {/* grid cols 3 */}
                      <div  className="col-span-1 mt-10 justify-end mx-auto flex flex-row ">
                 
                          <section className="invisible md:visible w-1/12 sm:w-12/12 md:w-10/12 lg:w-9/12 mb-10">
                          {/* external image */}
                          <img
                          src="https://images.pexels.com/photos/3646377/pexels-photo-3646377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="w-full rounded-l-3xl rounded-br-xl border-t-4 border-r-1 border border-black shadow-2xl mx-auto"
                          alt="Statue Of Liberty"
                          />
                          </section>
                        </div>  
                  </div>
                </div>
             


        </section>
    )
};

export default About;