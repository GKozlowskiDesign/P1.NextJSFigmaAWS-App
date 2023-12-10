'use client';

import React from "react";
const About = () => {

  return (
        <section>
              <div id="mission" className='w-full'>
              <div className="w-full bg-black md:pt-40"></div>
                  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 bg-gradient-to-b from-black to-gray-900">
                        {/* Mission Statement */}
                        <div className="col-span-1 md:pt-20 p-10">
                                <h1 className="text-4xl md:text-5xl pl-2  text-gray-300 border-l-4 border-green-400 font-monument-extended">Mission</h1>
                                <p className="text-sm md:text-lg pt-4 mb-1 md:mb-10  text-gray-500 font-thin">
                                Our mission at MVoT is to cultivate a dynamic ecosystem through our platform, where collaborative efforts give rise to 
                                innovative projects and products in Managed Infrastructure, Tokenization and Digital Assets, Analytics, and Governance and Security. 
                                We are dedicated to making the benefits of IoT and blockchain accessible to all through community-driven initiatives. By fostering inclusivity and collaboration, 
                                we strive to ensure that the MVoT ecosystem becomes a driving force for positive societal impact, where the power of technology is harnessed to address global challenges and reshape the future for the better.
                                </p>            
                        </div>
                        {/* Mission Imagery */}
                        <div  className="col-span-1 justify-end mx-auto flex flex-row pb-20 md:pb-0">
                            <section className="md:visible w-8/12 sm:w-12/12 md:w-10/12 justify-center">
                            <img
                            src="https://images.pexels.com/photos/18069490/pexels-photo-18069490/free-photo-of-a-white-and-green-machine-with-people-on-it.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="w-full rounded-l-3xl border-t-4 border border-black shadow-2xl shadow-green-600 mx-auto mt-10 md:mt-20 md:mb-20"
                            alt="Smart Buildings"
                            />
                            </section>
                        </div>  
                          
                        {/* Vision Imagery */}
                        <div  className="col-span-1 justify-end mx-auto pb-10 md:pb-0 ">
                            <section className="md:visible w-8/12 sm:w-12/12 md:w-10/12 justify-center">
                            <img
                            src="https://images.pexels.com/photos/18069514/pexels-photo-18069514/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-potential-of-ai-for-society-through-3d-visualisations-it-was-created-by-novoto-studio-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                            className="w-full rounded-r-3xl border-t-4 border border-black shadow-2xl shadow-green-600 mx-auto mt-10 md:mt-20 md:mb-20"
                            alt="Smart Cities"
                            />
                            </section>
                        </div>  

                    {/* Vision Statement */}
                      <div   id="vision" className="col-span-1 pt-10 p-10 ">
                        <h1 className="text-4xl lg:text-5xl pl-2  text-gray-300 border-l-4 border-green-400 font-monument-extended">Vision</h1>
                        <p className="text-sm md:text-lg pt-4 mb-1 md:mb-10  text-gray-500 font-thin"> In envisioning the future, MVoT aims to be the catalyst for mainstream adoption of IoT and blockchain technologies. 
                             Our mission is realized through a vibrant ecosystem on our platform, where the MVoT community collaboratively develops innovative projects in Managed Infrastructure, Tokenization and Digital Assets, 
                             Analytics, and Governance and Security. By fostering inclusivity and collaboration, our vision extends beyond the mere proliferation of smart devices. 
                             We strive to create a connected world where over 100 billion interconnected devices, empowered by blockchain solutions, serve as agents for positive change. 
                             Through the MVoT ecosystem, we are committed to reshaping the relationship between individuals, businesses, and technology, ensuring that the benefits of these technologies are accessible to everyone and drive positive societal impact.
                            </p>
                      </div>   
                  </div>
              </div>
        </section>
    )
};

export default About;