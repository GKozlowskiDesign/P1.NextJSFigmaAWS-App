'use client';

import React from "react";
const About = () => {

  return (
        <section>
              <div id="about" className='w-full rounded-tr-3xl '>
              <div className="w-full h-4 bg-green-400"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-white">

                      <div className="col-span-1 pt-20 p-10">
                            <h1 className="text-4xl lg:text-5xl pl-2  text-black border-l-4 border-indigo-600">Mission</h1>
                            <p className="text-xs md:text-lg font-light pt-4 tracking-wider mb-1 md:mb-10 md:text-black">Our core mission is as ambitious as it is vital to ensure that blockchain is seamlessly integrated into the fabric of society, thereby fostering benefits for all of humanity.Our core mission is as ambitious as it is vital to ensure that blockchain is seamlessly integrated into the fabric of society, thereby fostering benefits for all of humanity.</p>            

                       
                      </div>

                      <div  className="col-span-1 justify-end mx-auto flex flex-row ">
                          <section className="md:visible w-8/12 sm:w-12/12 md:w-10/12 justify-center">
                          {/* external image */}
                          <img
                          src="https://images.pexels.com/photos/18069490/pexels-photo-18069490/free-photo-of-a-white-and-green-machine-with-people-on-it.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="w-full rounded-l-3xl border-t-4 border border-black shadow-2xl mx-auto mt-2 md:mt-20"
                          alt="Space"
                          />
                          </section>
                      </div>  

                      <div  className="col-span-1 justify-end mx-auto ">
                          <section className="md:visible w-8/12 sm:w-12/12 md:w-10/12 justify-center">
                          {/* external image */}
                          <img
                          src="https://images.pexels.com/photos/18069514/pexels-photo-18069514/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-potential-of-ai-for-society-through-3d-visualisations-it-was-created-by-novoto-studio-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                          className="w-full rounded-r-3xl border-t-4 border border-black shadow-2xl mx-auto mt-10 md:mt-20 md:mb-20"
                          alt="Space"
                          />
                          </section>
                      </div>  



                      <div className="col-span-1 pt-10 p-10 pb-28">
                      <h1 className="text-4xl lg:text-5xl pl-2  text-black border-l-4 border-indigo-600">Vision</h1>
                            <p className="text-xs md:text-lg font-light pt-4 tracking-wider md:text-black">We are committed to pushing the boundaries of blockchain's capabilities, constantly innovating, and providing practical solutions that empower people and organizations. 
                            With a vision of a future where blockchain is seamlessly woven into the daily lives of individuals, MVoT is dedicated to leaving a lasting, positive impact on the world, ushering in an era of trust, efficiency, and inclusivity.
                            </p>
                            <div className="w-2/5 md:w-2/4 lg:w-2/5">
                            <ul className="mt-6">
                            <li><h3 className="underline pt-2 cursor-pointer hover:text-indigo-300 hover:font-bold mx-auto p-1 justify-center text-sm md:text-lg md:text-indigo-600">Read Whitepaper</h3></li>
                            <li><h3 className="underline pt-2 cursor-pointer  hover:text-indigo-300 hover:font-bold mx-auto p-1 justify-center text-sm md:text-lg md:text-indigo-600">Ask Question</h3></li>
                            </ul>
                            </div>
                      </div>


                        
                  </div>

                  <div className="cols-span-1 p-10 rounded-t-3xl bg-black">                                                  
                    <h1 className="text-4xl lg:text-5xl justify-center flex text-center text-white">Made For Mass Adoption</h1>
                    </div>

                  <div className="bg-gradient-to-b from-black to-indigo-900 pt-10 grid grid-cols-1 md:grid-cols-2 pb-20 p-10">

                 
                  <div className="cols-span-1 md:p-6">
                        <div className="bg-black opacity-60 border-2 border-gray-600 rounded-3xl pt-6 pb-6 mb-10 grid grid-cols-1">
                           <div className="p-3"><h1 className="justify-start pl-2 mx-auto text-2xl border-l-4 border-teal-400 text-white font-semibold"> Fast</h1></div>
                           <div className="p-3"><p className="justify-start pl-2 mx-auto text-md text-white">Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.</p></div> 
                        </div>
                </div>
                <div className="cols-span-1 md:p-6">
                        <div className="bg-black opacity-60 border-2 border-gray-600 rounded-3xl pt-6 pb-6 mb-10 grid grid-cols-1">
                           <div className="p-3"><h1 className="justify-start pl-2 mx-auto text-2xl border-l-4 border-yellow-400 text-white font-semibold"> Decentralized</h1></div>
                           <div className="p-3"><p className="justify-start pl-2 mx-auto text-md text-white">The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.

</p></div> 
                        </div>
                </div>
                <div className="cols-span-1 md:p-6">
                    <div className="bg-black opacity-60 border-2 border-gray-600 rounded-3xl pt-6 pb-6 mb-10 grid grid-cols-1 mx-auto">
                           <div className="p-3"><h1 className="justify-start pl-2 mx-auto text-2xl border-l-4 border-violet-400 text-white font-semibold"> Scalable</h1></div>
                           <div className="p-3"><p className="justify-start pl-2 mx-auto text-md text-white">Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.0025.

</p></div> 
                        </div>
                    </div>
                    <div className="cols-span-1 md:p-6">
                        <div className="bg-black opacity-60 border-2 border-gray-600 rounded-3xl pt-6 pb-6 mb-10 grid grid-cols-1 mx-auto">
                           <div className="p-3"><h1 className="justify-start pl-2 mx-auto text-2xl border-l-4 border-green-400 text-white font-semibold"> Green</h1></div>
                           <div className="p-3"><p className="justify-start pl-2 mx-auto text-md text-white">Solana’s proof of stake network and other innovations minimize its impact on the environment and transactions use the same energy as Google searches.</p>
                        </div> 
                        </div>
                    </div>
                   




                  </div>
              </div>
        </section>
    )
};

export default About;