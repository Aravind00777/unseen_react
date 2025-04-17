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
        <div key={index}  className={`mt-12 flex item-center ${index === 1 ?"flex-row-reverse":""}`}>
        <div className='basis-[40%] max-w-[40%]'>
            <img className='w-full h-full object-contain object-top' src={item.profileimage} alt="" />
        </div>
        <div className='basis-[60%] max-w-[60%]'>
            <div className='relative'>
            <img className='w-full h-[305px] object-cover ' src={item.image} alt="" />
            <span className={`inline-block font-bold absolute bottom-0 py-5 px-8 text-4xl text-white bg-black w-[85%] rounded-tr-[80px]  ${index === 1 ?"right-0 rounded-tr-none rounded-ss-[80px] text-right":""}`}>{item.title}</span>
            </div>
            <div>
                <p className='text-lg p-8'>{item.content}</p>
            </div>
        </div>
</div>
    ))}
    </>
}