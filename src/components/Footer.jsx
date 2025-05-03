import React, { useEffect, useState } from 'react';
import LazyLoadImage from './Lazyload';
import logo from  "../assets/image/logo.png";
import img1 from  "../assets/image/fb.png";
import img2 from  "../assets/image/tw.png";
import img3 from  "../assets/image/linkedin.png";
import img4 from  "../assets/image/youtube.png";

export default function Footer(){
    const [footerdata ,setFooterdata] = useState({});
    const Footerblk = {
      title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus at. Enim neque volutpat ac tincidunt vitae. Scelerisque eu ultrices vitae auctor eu augue ut. In est ante in nibh mauris.",
      logos :[
        {logo:img1 ,href:"#"},
        {logo:img2 ,href:"#"},
        {logo:img3 ,href:"#"},
        {logo:img4 ,href:"#"}
      ],
      bottomcnt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi"

    }
    useEffect(()=> {
        fetch('http://localhost:3001/footerdata')
        .then((response ) => response.json())
        .then((data) => setFooterdata(data))
        .catch((error) => console.error('Error fetching footer data', error));

    },[]);
    return <footer className='pt-20 pb-10 max-2xl:pt-14  bg-black text-white border-t-[7px] border-dark-pink'>
        <div className="container ">
            <a href=""><img className='object-contain w-auto h-auto' src={logo} alt="" /></a>
            <ul className='flex pb-24 pt-16 max-2xl:pb-16 max-2xl:pt-10 gap-2'>
                {footerdata?.footertitles?.map((item , outterIndex)=>(
                      <li key={outterIndex} className='flex-1'>
                      <span className='block pb-6 uppercase text-lg font-bold'>{item.title}</span>
                      <ul>
                        {item.links?.map((item , innerIndex) => (                      
                            <li  key={innerIndex} className={`pb-6 `} >
                                <a  className={`text-lg max-2xl:text-sm inline-block duration-300 ease-in-out hover:text-dark-pink ${outterIndex === 3?"uppercase":"" }`} href={item.href}>{item.link}</a>
                            </li>
                        ))}
                          
                      </ul>
                  </li>
                ))}
              <li className='flex-initial w-80 max-2xl:w-56'>
                <span className='block pb-6 uppercase text-lg font-bold'>{footerdata.title}</span>
                <form className='flex '>
                <input type="text" placeholder='Enter your email'  className='text-lg border border-dark-pink flex-1 max-2xl:w-[80%] px-4 py-[5px] bg-transparent outline-none'/>
                <a href="" className='flex-initial justify-center flex items-center w-12 bg-dark-pink text-white border-dark-pink duration-300 ease-in-out text-lg text-center capitalize items-center hover:bg-transparent border hover:border-dark-pink'>{footerdata.btngo}</a>
                </form>
               
              </li>
            </ul>
            <div className='flex border-b border-dark-pink pb-8 mb-8 max-2xl:pb-6 max-2xl:mb-6'>
              <div className='flex-1'>
                <p className='text-sm'> {Footerblk.title}</p>
              </div>
              <div className='flex-initial w-80 '>
                <ul className='flex justify-end'>
                  {Footerblk?.logos?.map((item , index) =>(
                     <li key={index} className=' ms-4 flex-initial w-[48px] h-[48px] flex items-center justify-center border border-dark-pink duration-300 ease-in-out hover:bg-dark-pink rounded-xl'><a className='block w-full h-full flex items-center justify-center' href={item.href} ><img className='object-contain w-auto h-auto' src={item.logo} alt="" /></a></li>
                  ))}
                 
                </ul>
              </div>
            </div>
            <p className='text-sm'>{Footerblk.bottomcnt}</p>
        </div>
    </footer>
}