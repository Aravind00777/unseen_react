import logo from  "../assets/image/logo.png";
import React, { useEffect, useState } from 'react';

export default function Header(props){
    const [navItems, setNavItems] = useState([]);
    const [isOpen , setIsOpen] = useState(false);
    const [isMobile , setIsMobile] = useState(false);


    const Handleclick = () =>{
        setIsOpen(!isOpen);
    }


    useEffect(() => {
        fetch('http://localhost:3001/navItems')
          .then((response) => response.json())
          .then((data) => setNavItems(data))
          .catch((error) => console.error('Error fetching navitems:', error));

         const checkScreenSize = () => {
      setIsMobile(window.innerWidth <= 991);
    };
    
    // Check on initial render
    checkScreenSize();
    
    // Add event listener for window resize
    window.addEventListener('resize', checkScreenSize);
    
    // Clean up event listener
    return () => {
      window.removeEventListener('resize', checkScreenSize);
    };
        
        
      }, []);
    return  (
       
      <div className="fixed top-0 bg-black py-8 w-full left-0 z-[999]">
       <div className="container ">
     <nav className="flex items-center justify-between">
        <a href="#"  className="w-auto max-lg:w-40 realtive z-[99]"><img className="object-contain w-full " src={logo} alt="" /></a>
           
                    <ul className={` flex max-xl:absolute max-xl:flex-col max-xl:items-start top-0 items-center justify-between duration-500 ease-in-out ${isOpen? " max-xl:absolute max-xl:top-0 max-xl:h-screen  max-xl:w-full max-xl:z-[9] max-xl:left-0 max-xl:py-24 max-xl:px-[30px] max-xl:bg-black max-xl:rotate-[0deg] max-xl:origin-top-right ":"max-xl:rotate-[95deg] max-xl:origin-top-right  "}`}>
                    {navItems.map((item ) => (
                        <li className="px-4 max-3xl:px-2 max-xl:pb-10" key={item.id}>
                        <a className="text-white uppercase hover:text-dark-pink font-bold transition-all text-base max-2xl:text-sm max-xl:text-[18px] "  href={item.href}>{item.label}</a>
                        </li>
                    ))}
               
                </ul>
          <button id="burgger-menu" onClick={Handleclick} className=" w-[30px] h-[23px] relative z-[99] hidden max-xl:inline-block">
                <span className={`block w-[3px] absolute left-0 right-0 bg-white h-[3px] w-full top-0 duration-300 ease-in-out ${isOpen ? " max-xl:right-[20px] max-xl:rotate-45 max-xl:translate-y-2":"" }`} ></span>
                <span className={`block w-[3px] absolute left-0 right-0 bg-white h-[3px] w-full top-[10px] duration-300 ease-in-out ${isOpen ? "opacity-0":"opacity-100"}`} ></span>
                <span className={`block w-[3px] absolute left-0 right-0 bg-white h-[3px] w-full bottom-0 duration-300 ease-in-out ${isOpen ? "-rotate-45 -translate-y-2":""}`}></span>
            </button>
            
            </nav>
           

          
       </div>
       </div>
    )
}

