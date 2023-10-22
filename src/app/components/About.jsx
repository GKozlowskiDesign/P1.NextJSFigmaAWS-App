import React from "react";
const About = () => {
  return (
        <section>
               <div name="services" className='flex flex-col w-full p-8 pb-10 bg-white'>
                  <div className="grid grid-cols-2 border-t-2 border-black">
                    {/* grid cols 1 & 2 */}
                    <div className="col-span-1 pt-10">
                    <h1 className="text-4xl pb-4">Getting Started</h1>
                    <p className="text-xs lg:text-md tracking-wider">The MetverseOfThings (MVoT) is a pioneering company at the forefront of blockchain research and deployment, firmly rooted in the practical applications of this groundbreaking technology in the real world. 
                    Our core mission is as ambitious as it is vital: to ensure that blockchain is seamlessly integrated into the fabric of society, thereby fostering benefits for all of humanity.
                    </p>
                    <p className="text-xs lg:text-md pt-2 tracking-wider">In a world where trust, security, and transparency have never been more critical, blockchain technology represents a transformative force. 
                    MVoT recognizes the immense potential it holds to revolutionize industries, from finance to healthcare, supply chain management to governance. By harnessing the power of blockchain, we aim to create a world where transactions are verifiable, data is secure, and individuals have greater control over their digital identities.
                    </p>
                    <p className="text-xs lg:text-md pt-2 tracking-wider">We are committed to pushing the boundaries of blockchain's capabilities, constantly innovating, and providing practical solutions that empower people and organizations. 
                    With a vision of a future where blockchain is seamlessly woven into the daily lives of individuals, MVoT is dedicated to leaving a lasting, positive impact on the world, ushering in an era of trust, efficiency, and inclusivity.
                    </p>
                    <h3 className="underline pt-6">Read Our Litepaper</h3>
                    <h3 className="underline pt-2">Speak to our Ai</h3>
                    </div>
                    {/* grid cols 3 */}
                    <div  className="col-span-1 pt-10 p-2">
                      <div className="flex items-center justify-center">
                        <img
                        src="https://images.pexels.com/photos/18318818/pexels-photo-18318818/free-photo-of-statue-of-liberty-at-night.png?auto=compress&cs=tinysrgb&w=600&lazy=load"
                        className="items-center w-full lg:w-9/12 rounded-sm lg:ml-20 border border-gray-500 shadow-xl mx-auto"
                        alt=""
                        />
                      </div>                    
                    </div>

                  </div>
                </div>
        </section>
    )
};

export default About;