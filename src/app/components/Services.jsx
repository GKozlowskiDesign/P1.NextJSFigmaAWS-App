'use client';


import React from 'react';
import { data } from './../../mockData';
import { MdChevronLeft, MdChevronRight } from 'react-icons/md';


const Services = () => {

    const slideLeft = () => {
      var slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft - 500;
    };
  
    const slideRight = () => {
      var slider = document.getElementById('slider');
      slider.scrollLeft = slider.scrollLeft + 500;
    };
  
    return (
      <>
     <div className="w-full h-42 overflow-y-scroll no-scrollbar">
     <div className='relative flex items-center p-20 bg-black pt-40 pb-80'>
          <MdChevronLeft className='opacity-60 cursor-pointer hover:opacity-100' onClick={slideLeft} size={40} />
          <div
            id='slider'
            className='w-full h-full overflow-x-auto scroll whitespace-nowrap scroll-smooth scrollbar-hidden '
          >
            {data.map((item) => (
              <img
                className='w-full md:w-1/3 inline-block p-2 cursor-pointer hover:scale-105 ease-in-out duration-300 rounded-3xl'
                src={item.img}
                alt='/'
              />
            ))}
          </div>
          <MdChevronRight className='opacity-50 cursor-pointer hover:opacity-100' onClick={slideRight} size={40} />
        </div>
     </div>


      </>
    );
  }
    
        

       
        
        
   
  
  
  export default Services;