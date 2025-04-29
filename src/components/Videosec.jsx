import React, { useEffect, useState } from 'react';
import img from "../assets/image/cover.png";
import playbtn from "../assets/image/play.png";
import LazyLoadImage from './Lazyload';

export default function Videosec (){

    const videoSec ={
            coverimage:img,
            videotitle:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.",
            videolink:"https://www.youtube.com/watch?v=IOVFRMuPeVQ",
            playbtn:playbtn
    }
    return <section className="py-20 bg-lightgrey">
        <div className="container">
                <h2 className='font-bold text-45px '>{videoSec.videotitle}</h2>
                <div className='relative z-[2] mt-10'>
                    <video className='w-full h-full' src={videoSec.videolink}></video>
                    <LazyLoadImage 
                    src={videoSec.coverimage} 
                    alt="Sample Image" 
                    className="absolute left-0 top-0 right-0 bottom-0 w-full h-full "/>
                    <a href="#" className='absolute z-[3] -translate-y-1/2 -translate-x-1/2 left-[50%] top-[50%]'><img className='object-contain w-auto' src={videoSec.playbtn} alt="" /></a>
                </div>
               

        </div>
    </section>
}