'use client';

import Image from 'next/image';
import React from "react";
import { Link } from "react-scroll";

const Services = () => {


  function FrontOfCard({ title }) {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gradient-to-tr from-green-900 via-green-500 to-lime-200 transition-all duration-1000 delay-200 z-20 hover:opacity-0 font-monument-extended">
          {title}
      </div>
    );
  }


  function BackOfCard({ description }) {
    return (
      <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-gradient-to-bl from-green-400 via-green-700 to-green-900 transition-all duration-1000 z-10 card-back p-8 text-xs font-monument-extended text-center text-black">
          {description}
      </div>
    );
  }
  
    const cardData = [
        {
          title: 'Infrastructure',
          description: 'MVoT offers tools, resources, and components for customizable blockchain ecosystems.',
        },
        {
          title: 'Platform',
          description: 'MVoT PaaS tools innovate, offer easy market access, manage blockchain.',
        },
        {
          title: 'Governance',
          description: 'MVoT simplifies deploying, configuring Layer 1/2 nodes, and creating Wallets.',
        },
        {
          title: 'Tokenization',
          description: 'MVoT NFT solutions enable users to mint, manage digital assets easily.',
        },
        {
          title: 'Analytics',
          description: 'MVoT Analytics inspects, identifies, visualizes blockchain data for effective monitoring and adaptation.',
        },
        {
          title: 'Compliance',
          description: 'MVoT Fintech suite ensures regulatory compliance, offers selective transparency to stakeholders.',
        },
    ];
  
    return (
      <section  id="ecosystem" className="bg-gradient-to-b from-gray-900 via-gray-950 to-black grid-cols-1 md:grid-cols-2 grid md:pt-20 pb-4 md:pb-20  shadow-2xl">

      <div className="cols-span-1 p-10 md:p-20">                                                  
      <div className="grid grid-cols-1 p-0 gap-10">
              
      <div className='justify-center items-center '>
      <h1 className="text-4xl md:text-5xl pl-2  text-gray-300 border-l-4 border-green-400 font-monument-extended">Ecosystem</h1>

              <h6 className='text-sm md:text-lg text-gray-500 justify-center flex mx-auto pt-4 font-thin'>Explore the MVoT ecosystem of projects, partners, services and products.</h6>
              </div>

              <div  className="col-span-1 justify-end">
                  <section className="w-5/5 mx-auto md:w-full justify-center pb-4">
                    <img
                    src="https://images.pexels.com/photos/18069496/pexels-photo-18069496/free-photo-of-an-artist-s-illustration-of-artificial-intelligence-ai-this-image-depicts-the-potential-of-ai-for-society-through-3d-visualisations-it-was-created-by-novoto-studio-as-part-of-the-visua.png?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
                    className="w-full rounded-3xl border-b-4 border-r-2 border border-black shadow-2xl mx-auto"
                    alt="Space"
                    />
                  </section>
              
              <div className="mx-auto md:w-3/3 flex justify-center items-center hover:rounded-3xl duration-700 bg-gradient-to-tr from-green-900 via-green-500 to-lime-200 rounded-md hover:bg-green-600 md:mt-4 cursor-pointer shadow-lg shadow-green-600">
                  <Link activeClass="active" to="about" smooth duration={300}>
                      <h2 className="md:text-sm p-4 justify-center items-center text-white font-semibold font-monument-extended">Explore Ecosystem</h2>
                  </Link>     
                </div>
          </div>

        </div>                  </div>
  
        <div className="pt-10 grid grid-cols-1  md:grid-cols-2 pb-20 p-8 gap-8">
          {cardData.map((card, index) => (
            <div key={index} className="cols-span-1 hidden md:block">
              <div className="opacity-80 rounded-3xl grid grid-cols-1 h-full shadow-xl shadow-green-700">
                <div className="relative w-full h-full rounded-2xl text-white overflow-hidden cursor-pointer transition-all duration-1000 card border border-green-600">
                  <FrontOfCard className="card" title={card.title} />
                  <BackOfCard className="card" description={card.description} />
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  };
  
  export default Services;