import React, { useEffect, useState } from 'react';

export default function Banner() {
    const [bannerItems, setBannerItems] = useState({});

    useEffect(() => {
        fetch('http://localhost:3001/school')
            .then((response) => response.json())
            .then((data) => setBannerItems(data))
            .catch((error) => console.error('Error fetching banner items:', error));
    }, []);

    return (
        <section className="bg-black py-20">
            <div className="container">
                <div className="max-w-2xl">
                    <h1 className='text-white text-5xl font-bold leading-[1.4]'>
                        {bannerItems.name || 'Loading...'}
                    </h1>
                    <p className='text-white text-xl pt-10 font-normal'>
                        {bannerItems.description || ''}
                    </p>

                    {bannerItems.school?.clicks?.map((item, index) => (
                        <a key={index} href={item.href} className='text-white text-2xl p-6'>
                            {item.contact}
                        </a>
                    ))}
                </div>
            </div>
        </section>
    );
}
