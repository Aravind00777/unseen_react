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
    return <section className='relative z-[2] py-ptA1 text-white'>
        <img src={knowbg} className='absolute object-contain w-full z-[-1] left-0 top-0 bottom-0 right-0' alt="" />
        <div className="container text-center">
                <h3 className='text-45px font-bold'>{Knowmore.knowmore_title}</h3>
                <p className='text-lg py-5'>{Knowmore.knowmore_cnt}</p>
                <a href="#" className='block rounded-full max-w-max282 text-2xl py-[19px] mx-auto px-[50px] font-semi border border-white'>{Knowmore.knowmore_btn}</a>
        </div>
    </section>
}