import logo from  "../assets/image/logo.png";
import React, { useEffect, useState } from 'react';

export default function Header(props){
    const [navItems, setNavItems] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3001/navItems')
          .then((response) => response.json())
          .then((data) => setNavItems(data))
          .catch((error) => console.error('Error fetching navitems:', error));
      }, []);
    return  (
      <div className="fixed top-0 bg-black py-8 w-full left-0 z-[99]">
       <div className="container ">
           <nav className="flex items-center justify-between">
        <a href="#" className="w-auto max-lg:w-40"><img className="object-contain w-full " src={logo} alt="" /></a>
            
            <ul className="flex items-center justify-center max-xl:hidden max-xl:flex-col">
                {navItems.map((item ) => (
                    <li className="px-4 max-3xl:px-2" key={item.id}>
                    <a className="text-white uppercase hover:text-dark-pink font-bold transition-all text-base max-2xl:text-sm"  href={item.href}>{item.label}</a>
                    </li>
                ))}
            <li>
            </li>
            </ul>
            </nav>
       </div>
       </div>
    )
}