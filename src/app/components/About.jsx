'use client';


import React from "react";
const About = () => {
  return (
        <section>
              <div id="about" className='w-full md:pb-0 bg-indigo-600'>
              <div className="border-b-5 border-indigo-900 mb-2 bg-indigo-300 pt-0.5"></div>
              <div className="border-t border-t-black border-b-5 border-indigo-900 mb-2 bg-indigo-300 pt-0.5"></div>
              <div className="border-t border-t-black border-b-5 border-indigo-900 mb-2 bg-indigo-300 pt-0.5"></div>
              <div className="border-t border-t-black border-b-5 border-indigo-900 mb-2 bg-indigo-300 pt-0.5"></div>
              <div className=" mt-2 bg-indigo-400 pt-1"></div>



                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gradient-to-b from-indigo-400 to-white">
                    {/* grid cols 1 & 2 */}
                      <div className="col-span-1 pt-20 p-10">

                            <h1 className="text-4xl lg:text-5xl pb-4 text-indigo-900">Getting Started</h1>
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
                      <div  className="col-span-1 justify-end mx-auto flex flex-row ">
                 
                          <section className="md:visible w-8/12 sm:w-12/12 md:w-10/12 lg:w-9/12 justify-center">
                          {/* external image */}
                          <img
                          src="https://images.pexels.com/photos/3646377/pexels-photo-3646377.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="w-full rounded-l-3xl border-t-4 border border-black shadow-2xl mx-auto mt-10 md:mt-20"
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