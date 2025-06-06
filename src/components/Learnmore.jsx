import React, { useEffect, useState } from 'react';
import Hollywoodcard from './Hollywoodcard';


export default function Learnmore(){
    const [learnmore,setLearnmore] = useState({});
     useEffect(() => {
            fetch('http://localhost:3001/learnmore')
                .then((response) => response.json())
                .then((data) => setLearnmore(data))
                .catch((error) => console.error('Error fetching learnmore items:', error));
        }, []);
    return <section className='py-20 max-xl:py-14'>
        <div className="container ">
            {learnmore?.learnmore_block?.map((item ,index) => (
                    <div key={index} className='flex  gap-3 item-center justify-center max-md:flex-col'>
                    <div className='max-w-[50%] basis-1/2  max-md:basis-full max-md:max-w-full'>
                            <span className='block text-2xl max-2xl:text-xl max-xl:text-lg max-lg:text-base font-bold'>{item.subtitle}</span>
                            <h2 className='text-45px max-3xl:text-[40px] max-2xl:text-4xl max-2xl:text-4xl max-xl:text-3xl max-lg:text-2xl font-bold'>{item.title}</h2>
                    </div>
                    <div className='max-w-[50%] basis-1/2 max-md:basis-full max-md:max-w-full'>
                            <hr className='border-1 border-black pb-4'/>
                            <p className='text-lg max-xl:text-base max-lg:text-sm'>{item.content}</p> 
                            <a href="" className='duration-300 ease-in-out hover:bg-dark-pink hover:text-white text-lg border border-dark-pink rounded-full mt-8 max-w-[248px] font-semibold py-3 px-4 block text-center'>{item.btn}</a>
                    </div>
                </div>
            ))}
            <Hollywoodcard/>
                
        </div>
    </section>
}
