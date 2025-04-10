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
        title:"Hollywood A-list masterclasses",
        content:"We are supported by some of the hottest movie stars in the world. Our free to student masterclasses have included Academy Award winner Daniel Kaluuya, Ben Barnes, Natalie Dormer, Ed Skrein, Robert Sheehan,  Sofia Boutella, directors Antony Byrne, Wayne Yip and many others.",
        profileimage:img2,
        image:masterclass
      },
      {

        title:"Hollywood A-list masterclasses",
        content:"We are supported by some of the hottest movie stars in the world. Our free to student masterclasses have included Academy Award winner Daniel Kaluuya, Ben Barnes, Natalie Dormer, Ed Skrein, Robert Sheehan,  Sofia Boutella, directors Antony Byrne, Wayne Yip and many others.",
        profileimage:img3,
        image:masterclass
      }]
    return <>
    {hollywood_block?.map((item , index )=>(
        <div key={index}  className={`mt-12 flex item-center ${index === 1 ?"flex-row-reverse":""}`}>
        <div className=''>
            <figure><img src={item.profileimage} alt="" /></figure>
        </div>
        <div>
            <div>
            <img src={item.image} alt="" />
            <span>{item.title}</span>
            </div>
            <div>
                <p>{item.content}</p>
            </div>
        </div>
</div>
    ))}
    </>
}