import React, { useEffect, useState } from 'react';
import LazyLoadImage from './Lazyload';
import img1 from "../assets/image/list1.png";
import img2 from "../assets/image/list2.png";
import img3 from "../assets/image/list3.png";
import masterclass from "../assets/image/masterclass.png"


export default function Hollywoodcard(){

    const  hollywood_block = [{
        title:"Hollywood A-list masterclasses",
        content:"We are supported by some of the hottest movie stars in the world. Our free to student masterclasses have included Academy Award winner Daniel Kaluuya, Ben Barnes, Natalie Dormer, Ed Skrein, Robert Sheehan,  Sofia Boutella, directors Antony Byrne, Wayne Yip and many others.",
        profileimage:img1,
        image:masterclass
      },
      {
        title:"Exceptional acting showcases",
        content:"We are supported by some of the hottest movie stars in the world. Our free to student masterclasses have included Academy Award winner Daniel Kaluuya, Ben Barnes, Natalie Dormer, Ed Skrein, Robert Sheehan,  Sofia Boutella, directors Antony Byrne, Wayne Yip and many others.",
        profileimage:img2,
        image:masterclass
      },
      {

        title:"Unseen Productions",
        content:"We are supported by some of the hottest movie stars in the world. Our free to student masterclasses have included Academy Award winner Daniel Kaluuya, Ben Barnes, Natalie Dormer, Ed Skrein, Robert Sheehan,  Sofia Boutella, directors Antony Byrne, Wayne Yip and many others.",
        profileimage:img3,
        image:masterclass
      }]
    return <>
    {hollywood_block?.map((item , index )=>(
        <div key={index}  className={`mt-12 flex item-center ${index === 1 ?"flex-row-reverse":"" } max-lg:flex-wrap justify-center max-lg:gap-4`}>
        <div className='basis-[40%] max-w-[40%] max-xl:max-w-[30%] max-xl:basis-[30%] max-lg:basis-[70%] max-lg:max-w-[70%]  max-sm:basis-[100%]  max-sm:max-w-[100%]'>
            <img className='w-full h-full object-contain object-top' src={item.profileimage} alt="" />
        </div>
        <div className='basis-[60%] max-w-[60%] max-xl:max-w-[70%] max-xl:basis-[70%] flex flex-col max-lg:basis-[70%]  max-lg:max-w-[70%] max-sm:basis-[100%]  max-sm:max-w-[100%]'>
            <div className='relative'>
            <img className='w-full h-[305px] max-3xl:h-auto object-cover max-xl:h-[100px] max-lg:h-auto' src={item.image} alt="" />
            <span className={`inline-block font-bold absolute bottom-0 py-5 max-2xl:py-3 px-8 max-2xl:px-4 max-xl:px-2 max-xl:text-base text-4xl  max-3xl:text-3xl max-2xl:text-2xl max-xl:text-lg text-white bg-black w-[85%] rounded-tr-[80px]  ${index === 1 ?"right-0 rounded-tr-none rounded-ss-[80px] text-right":""}`}>{item.title}</span>
            </div>
            <div className='grow p-8 max-2xl:p-4 max-xl:px-2'>
                <p className='text-lg max-2xl:text-base max-xl:text-sm'>{item.content}</p>
            </div>
        </div>
</div>
    ))}
    </>
}