'use client';


import React from "react";
const Hiring = () => {
    return (
<section class="w-11/12 justify-center items-center mx-auto pb-10 pt-10">
    <div className="bg-black border-t-2 border-gray-600 text-white py-2 pt-10 rounded-3xl shadow-2xl shadow-gray-900">
        <div class="w-full bg-transparent px-4 pt-4 py-8 mx-auto text-left md:max-w-none md:text-center">
        <h1 class="text-2xl font-extrabold leading-10 tracking-tight text-white text-center sm:leading-none md:text-5xl">
            <span class="inline md:block pb-2 font-monument-extended">Join Us</span>
            <span class=" mt-2 bg-clip-text text-transparent bg-gradient-to-r from-purple-400 via-emerald-400 to-green-500 md:inline-block font-monument-extended"> 
            We are<span class="bg-clip-text text-transparent bg-gradient-to-r from-teal-500 via-cyon-400 to-purple-300"> Hiring</span> </span>
        </h1>
      <div class="mx-auto rounded-lg font-black mt-5 text-zinc-400 md:mt-12 md:max-w-lg text-center lg:text-lg">
        <button class="bg-tkb border border-indigo-600 hover:bg-indigo-400 text-sm text-white py-3 px-7 rounded-full">
        Join MVoT
        </button>
      </div>
    </div>
    </div>
</section>

);
};

export default Hiring;