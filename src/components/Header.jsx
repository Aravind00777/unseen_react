import logo from  "../assets/image/logo.png"
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
      <div className="sticky top-0 bg-black py-8">
       <div className="container">
           <nav className="flex items-center justify-between">
        <a href="#"><img src={logo} alt="" /></a>
            <ul className="flex items-center justify-center">
                {navItems.map((item ) => (
                    <li className="px-4 " key={item.id}>
                    <a className="text-white uppercase hover:text-dark-pink font-bold transition-all text-base"  href={item.href}>{item.label}</a>
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