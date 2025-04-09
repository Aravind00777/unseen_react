import React, { useEffect, useState } from 'react';
import LazyLoadImage from './Lazyload';

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
                            <span>{item.subtitle}</span>
                            <h2 className='text-45px font-bold'>{item.title}</h2>
                    </div>
                    <div className='max-w-[50%] basis-1/2 '>
                            <hr className='border-1 border-black pb-4'/>
                            <p>{item.content}</p> 
                    </div>
                </div>
            ))}
                
        </div>
    </section>
}
