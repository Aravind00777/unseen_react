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
    return <section className='py-20'>
        <div className="container">
            {learnmore?.learnmore_block?.map((item ,index) => (
                    <div className='flex item-center justify-center'>
                    <div className='max-w-[50%] basis-1/2 '>
                            <span className='block text-2xl font-bold'>{item.subtitle}</span>
                            <h2 className='text-45px font-bold'>{item.title}</h2>
                    </div>
                    <div className='max-w-[50%] basis-1/2 '>
                            <hr className='border-1 border-black pb-4'/>
                            <p className='text-lg'>{item.content}</p> 
                            <a href="" className='text-lg border border-dark-pink rounded-full mt-8 max-w-[248px] font-semibold py-3 px-4 block text-center'>{item.btn}</a>
                    </div>
                </div>
            ))}
            <Hollywoodcard/>
                
        </div>
    </section>
}
