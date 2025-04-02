import React, { useEffect, useState } from 'react';
import LazyLoadImage from './Lazyload';
import bannerBg from "../assets/image/banner-bg.png";  


export default function Banner() {
    const [bannerItems, setBannerItems] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/school')
            .then((response) => response.json())
            .then((data) => setBannerItems(data))
            .catch((error) => console.error('Error fetching banner items:', error));
    }, []);

    return (
        <section className="bg-black py-20 z-[1] relative pt-[108px] min-h-screen flex items-center">
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
                    className="absolute right-[8%] w-auto top-[108px] z-[-1]"
      />
                </div>
                </>
            </div>
        </section>
    );
}