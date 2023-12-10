'use client';
import { SocialIcon } from 'react-social-icons'
import 'react-social-icons/x'
import 'react-social-icons/medium'
import 'react-social-icons/github'

import React from "react";
const Community = () => {
    return (
<section id="community" class="w-full justify-center items-center mx-auto md:pt-32 pb-20 md:pb-60 bg-black p-4">
    <div className="bg-transparent text-white py-2 pt-10 w-full md:w-10/12 mx-auto">
        <div class="w-full bg-transparent px-4 pt-4 py-8 mx-auto text-left md:max-w-none md:text-center">
        <h1 class="text-2xl font-extrabold leading-10 tracking-tight text-gray-300 text-center sm:leading-none md:text-5xl">
            <span class="inline md:block pb-2 font-monument-extended">Community</span>
        </h1>
        <h6 className='text-xl text-gray-500 justify-center text-center flex mx-auto font-thin'>Get Involved in our community. Everyone is welcome!</h6>

     <div className="grid grid-cols-1 md:grid-cols-3 gap-5 p-2 md:p-6">

     <div class="mx-auto font-black text-zinc-400 md:max-w-lg text-center lg:text-lg bg-black">
     <button class="bg-tkb border border-gray-900 hover:border-green-400 hover:shadow-2xl hover:shadow-green-400 duration-1000 text-sm text-white py-3 px-7 rounded-md">        
        <div className='grid grid-cols-3 gap-2'>
                <div className='cols-span-1 justify-center items-center flex'>
                <SocialIcon bgColor="#000000" url="www.x.com"></SocialIcon>
                </div>
                <div className='cols-span-1 justify-center items-center flex'>
                    <h5 className='text-sm md:text-lg'>X</h5>
                </div>
                <div className='cols-span-1 justify-center items-center flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </div>
            </div>
            <p className="font-thin mx-auto pb-2">For conversations, updates, and general infomation.</p>
        </button>
      </div>

      <div class="mx-auto font-black text-zinc-400 md:max-w-lg text-center lg:text-lg bg-black">
      <button class="bg-tkb border border-gray-900 hover:border-green-400 hover:shadow-2xl hover:shadow-green-400 duration-1000 text-sm text-white py-3 px-7 rounded-md">        
            <div className='grid grid-cols-3 gap-2'>
                <div className='cols-span-1 justify-center items-center flex'>
                    <SocialIcon bgColor="#000000" url="www.medium.com"></SocialIcon>
                </div>
                <div className='cols-span-1 justify-center items-center flex'>
                    <h5 className='text-sm md:text-lg'>Medium</h5>
                </div>
                <div className='cols-span-1 justify-center items-center flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </div>
            </div>
        <p className="font-thin mx-auto pb-2">For business updates and roadmap reviews.</p>
        </button>
      </div>

      <div class="mx-auto font-black text-zinc-400 md:max-w-lg text-center lg:text-lg bg-black">
        <button class="bg-tkb border border-gray-900 hover:border-green-400 hover:shadow-2xl hover:shadow-green-400 duration-1000 text-sm text-white py-3 px-7 rounded-md">        
        <div className='grid grid-cols-3 gap-2'>
                <div className='cols-span-1 justify-center items-center flex'>
                <SocialIcon bgColor="#000000" url="www.github.com"></SocialIcon>
                </div>
                <div className='cols-span-1 justify-center items-center flex'>
                    <h5 className='text-sm md:text-lg'>GitHub</h5>
                </div>
                <div className='cols-span-1 justify-center items-center flex'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M13.5 6H5.25A2.25 2.25 0 003 8.25v10.5A2.25 2.25 0 005.25 21h10.5A2.25 2.25 0 0018 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                    </svg>
                </div>
            </div>
        <p className="font-thin mx-auto pb-2">To report bugs, request features, and contribute.</p>
        </button>
      </div>

     </div>

     <p class="text-xs font-thin leading-10 tracking-tight text-white text-center sm:leading-none">
     @2023 MetaverseOfThings Inc.
        </p>

    </div>

    </div>
</section>

);
};

export default Community;