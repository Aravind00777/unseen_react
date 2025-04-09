import React, { useEffect, useState } from 'react';
import LazyLoadImage from './Lazyload';
import bannerBg from "../assets/image/banner-bg.png";  
import img1 from "../assets/image/videoimg1.png";
import img2 from "../assets/image/videoimg2.png";
import img3 from "../assets/image/videoimg3.png";
import sign from "../assets/image/sign.png";




export default function Banner() {
    const [bannerItems, setBannerItems] = useState({});
    

    useEffect(() => {
        fetch('http://localhost:3001/school')
            .then((response) => response.json())
            .then((data) => setBannerItems(data))
            .catch((error) => console.error('Error fetching banner items:', error));
    }, []);
    const cardblock = {
        cards: [
          { cardImage:img1,
    cardTitle:"Lorem ipsum consectetur adipiscing",
    cardCnt:"The Unseen provides affordable high-end,weekend actor training"},
    { cardImage:img2,
    cardTitle:"Lorem ipsum consectetur adipiscing",
    cardCnt:"The Unseen provides affordable high-end,weekend actor training"},
    { cardImage:img3,
    cardTitle:"Lorem ipsum consectetur adipiscing",
    cardCnt:"The Unseen provides affordable high-end,weekend actor training"}
        ]
      };
      
    return (
        <section className="bg-black py-20 z-[1] relative pt-[230px] min-h-screen flex items-center">
            <div className="container">
                <>
                <div className="max-w-3xl ">
                    <h1 className='text-white text-6xl font-bold leading-[1.4]'>
                        {bannerItems.name || 'Loading...'}
                    </h1>
                    <p className='text-white text-xl pt-10 font-normal'>
                        {bannerItems.description || ''}
                    </p>

                    {bannerItems.clicks?.map((item, index) => (
                        <a key={index} href={item.href} className='text-white border-[2px] border-transparent hover:border-dark-pink hover:bg-transparent duration-300 ease-in-out px-8 py-4 bg-dark-pink rounded-full text-center block mt-8 text-2xl px-2 max-w-[346px]'>
                            {item.contact}
                        </a>
                    ))}
                </div>
                <div className="static ">
                <LazyLoadImage 
                    src={bannerBg} 
                    alt="Sample Image" 
                    className="absolute right-[8%] w-auto top-[0px] z-[-1]"/>
                </div>
                </>
                <ul className='pt-ptA1 text-white flex items-center'>
                {cardblock?.cards?.map((item, index) => (
                       <li key={index} className='p-cardpadding border-2 border-dark-pink mx-3 rounded-2xl' >
                       <LazyLoadImage
                       src={item.cardImage}
                       alt="image"
                       className='w-[46px]'
                       />
                       <span className='block text-2xl text-white py-[24px]'>{item.cardTitle}</span>
                       <p className='text-lg'>{item.cardCnt}</p>
                         
                   </li>
                    ))}
                    <li>
                        <LazyLoadImage
                        src={sign}
                        alt="signed cnt"
                        className=''
                        />
                    </li>
                </ul>
            </div>
        </section>
    );
}