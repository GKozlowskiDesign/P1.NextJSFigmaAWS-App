'use client';

import React from "react";
const About = () => {

  return (
        <section>
              <div id="mission" className='w-full p-4 bg-black pt-40 pb-60 p-20'>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 border-1 border-gray-800 bg-gradient-to-br from-gray-950 via-gray-900 to-black rounded-3xl p-8">
                        {/* Mission Statement */}
                        <div   id="vision" className="col-span-1 pt-10 p-4">
                                <h1 className="text-4xl md:text-5xl pl-2  text-orange-200 border-l-4 border-orange-400 font-monument-extended">Mission</h1>
                                <p className="text-sm md:text-lg pt-2 mb-1  text-gray-400 font-regular">
                                Our mission at MVoT is to cultivate a dynamic ecosystem through our platform, where collaborative efforts give rise to 
                                innovative projects and products in<span className="font-bold text-orange-400"> Managed Infrastructure, Tokenization and Digital Assets, Analytics, and Governance and Security. </span> 
                                We are dedicated to making the benefits of IoT and blockchain accessible to all through community-driven initiatives.
                                </p>            
                        </div>
          

                    {/* Vision Statement */}
                      <div   id="vision" className="col-span-1 pt-10 p-4">
                      <h1 className="text-4xl md:text-5xl pl-2  text-orange-200 border-l-4 border-orange-400 font-monument-extended">Vision</h1>
                      <p className="text-sm md:text-lg pt-2  mb-1  text-gray-400 font-regular">
                        In envisioning the future, MVoT aims to be the catalyst for mainstream adoption of IoT and blockchain technologies. 
                             Our mission is realized through a vibrant ecosystem on our platform, where the MVoT community collaboratively develops innovative projects in Managed Infrastructure, Tokenization and Digital Assets, 
                             Analytics, and Governance and Security.  
                           
                            
                            </p>
                      </div>   
                  </div>
              </div>
        </section>
    )
};

export default About;