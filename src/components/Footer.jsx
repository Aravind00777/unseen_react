import React, { useEffect, useState } from 'react';
import LazyLoadImage from './Lazyload';
import logo from  "../assets/image/logo.png";

export default function Footer(){
    const [footerdata ,setFooterdata] = useState({});

    useEffect(()=> {
        fetch('http://localhost:3001/footerdata')
        .then((response ) => response.json())
        .then((data) => setFooterdata(data))
        .catch((error) => console.error('Error fetching footer data', error));

    },[]);
    return <footer className='pt-20 pb-10 bg-black text-white'>
        <div className="container">
            <a href=""><img src="" alt="" /></a>
            <ul className='flex pb-24'>
                {footerdata?.footertitles?.map((item , index)=>(
                      <li key={index} className='flex-1'>
                      <span className='block pb-6 uppercase text-lg font-bold'>{item.title}</span>
                      <ul>
                        {item.links?.map((item , index) => (
                            <li  key={index} className='pb-6'>
                                <a className='text-lg inline-block' href={item.href}>{item.link}</a>
                            </li>
                        ))}
                          
                      </ul>
                  </li>
                ))}
              <li className='flex-initial w-80'>
                <span className='block pb-6 uppercase text-lg font-bold'>{footerdata.title}</span>
                <form className='flex '>
                <input type="text" placeholder='Enter your email'  className='text-lg border border-dark-pink flex-1 px-4 py-[5px] bg-transparent'/>
                <a href="" className='flex-initial justify-center flex items-center w-12 bg-dark-pink text-white border-dark-pink duration-300 ease-in-out text-lg text-center capitalize items-center hover:bg-transparent border hover:border-dark-pink'>{footerdata.btngo}</a>
                </form>
               
              </li>
            </ul>
        </div>
    </footer>
}