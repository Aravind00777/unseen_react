import React, { useEffect, useState } from 'react';
import knowbg from "../assets/image/knowbg.png";


export default function Knowmore(){

      const [Knowmore,setKnowmore] = useState({});
         useEffect(() => {
                fetch('http://localhost:3001/knowmore')
                    .then((response) => response.json())
                    .then((data) => setKnowmore(data))
                    .catch((error) => console.error('Error fetching learnmore items:', error));
            }, []);
    return <section className='relative z-[2] py-ptA1 max-3xl:py-20 text-white'>
        <img src={knowbg} className='h-full absolute object-cover w-full z-[-1] left-0 top-0 bottom-0 right-0' alt="" />
        <div className="container text-center">
                <h3 className='text-45px max-3xl:text-[40px]  font-bold'>{Knowmore.knowmore_title}</h3>
                <p className='text-lg py-5'>{Knowmore.knowmore_cnt}</p>
                <a href="#" className='block duration-300 ease-in-out hover:bg-white hover:text-dark-pink rounded-full max-w-max282 text-2xl py-[19px] mx-auto px-[50px] font-semi border border-white'>{Knowmore.knowmore_btn}</a>
        </div>
    </section>
}