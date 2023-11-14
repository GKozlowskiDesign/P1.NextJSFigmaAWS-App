'use client';


import React from "react";
const Integration = () => {

  

  return (
    <main class="relative flex flex-col justify-center bg-green-400 overflow-hidden">
    <div class="w-full max-w-5xl mx-auto px-2 md:px-2">
        <div class="text-center">    
                <div
                    x-data="{}"
                    x-init="$nextTick(() => {
                        let ul = $refs.logos;
                        ul.insertAdjacentHTML('afterend', ul.outerHTML);
                        ul.nextSibling.setAttribute('aria-hidden', 'true');
                    })"
                    class="w-full  flex-nowrap overflow-hidden inline-flex justify-center items-center  [mask-image:_linear-gradient(to_right,transparent_0,_black_100px,_black_calc(100%-100px),transparent_100%)]"
                >
                
                <ul x-ref="logos" class="flex items-center justify-center md:justify-end [&_li]:mx-8 [&_img]:max-w-xs  bg-green-400 border-2  border-indigo-600 animate-infinite-scroll p-6">
                    <li className="p-0">
                        <img src="../assets/Solana.png" className="mx-auto" alt="Facebook" />
                    </li>
                    <li>
                    <img src="../assets/Solana.png" className="mx-auto" alt="Facebook" />
                    </li>
                    <li>
                    <img src="../assets/Solana.png" className="mx-auto" alt="Facebook" />
                    </li>
                    <li>
                    <img src="../assets/Solana.png" className="mx-auto" alt="Facebook" />
                    </li>
                    <li>
                    <img src="../assets/Solana.png" className="mx-auto" alt="Facebook" />
                    </li>
                    <li>
                    <img src="../assets/Solana.png" className="mx-auto" alt="Facebook" />
                    </li>
                    <li>
                    <img src="../assets/Solana.png" className="mx-auto" alt="Facebook" />
                    </li>
                    <li>
                    <img src="../assets/Solana.png" className="mx-auto" alt="Facebook" />
                    </li>
                    <li>
                    <img src="../assets/Solana.png" className="mx-auto" alt="Facebook" />
                    </li>
                    <li>
                    <img src="../assets/Solana.png" className="mx-auto" alt="Facebook" />
                    </li>
                </ul>                                   
            </div>
        </div>
    </div>
</main>
  
              
    )
};

export default Integration;