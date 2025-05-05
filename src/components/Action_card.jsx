import React, { useEffect, useState } from 'react';
import LazyLoadImage from './Lazyload';
import img1 from "../assets/image/actionimg1.png";
import img2 from "../assets/image/actionimg2.png";
import img3 from "../assets/image/actionimg3.png";


export default function Action_card(){

    const actioncard = {
        cards:[{
            cardimage:img1,
            cardtitle:"6 week part time acting courses in London",
            cardcnt:"The Unseen provides affordable high-end, weekend actor training courses at The Unseen drama school in London. Professional high end environments under the supervision of real working industry professionals"
        },
        {
            cardimage:img2,
            cardtitle:"Actor Training -our current class structure",
            cardcnt:"The Unseen provides affordable high-end, weekend actor training courses at The Unseen drama school in London. Professional high end environments under the supervision of real working industry professionals"
        },
        {
            cardimage:img3,
            cardtitle:"The Unseen Showcase is streaming!",
            cardcnt:"The Unseen provides affordable high-end, weekend actor training courses at The Unseen drama school in London. Professional high end environments under the supervision of real working industry professionals"
        }     
        ]
    }
    return <section className='py-20 max-2xl:py-16'>
        <div className="container ">
            <ul className='flex items-center  max-lg:flex-wrap justify-center max-lg:gap-4'>
                {actioncard?.cards?.map((item ,index)=>(
                    <li key={index} className=' flex-1 px-3 max-lg:basis-[70%] max-lg:max-w-[70%] max-sm:basis-[100%] max-sm:max-w-[100%] max-lg:px-0 '>
                    <div className='relative z-[1]'>
                        <img className='object-contain w-full h-full' src={item.cardimage} alt="" />
                        <span className='block bg-[rgba(0,0,0,.7)] absolute bottom-0 left-0 right-0 w-full p-5 max-xl:p-2 text-2xl max-3xl:text-[22px] max-2xl:text-xl max-xl:text-lg font-bold text-white '>{item.cardtitle}</span>
                    </div>
                    <div className='pt-5  pl-5 pr-4 pb-12 max-xl:px-2 max-xl:py-4 bg-lightgrey '>
                            <p className='text-lg max-2xl:text-base'>{item.cardcnt}</p>
                        </div>

                </li>
                ))}
                
            </ul>
        </div>
    </section>
}