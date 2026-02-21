import { useEffect, useState } from "react";
import DataContext from "../contexts/DataContext";


export default function DataPorvider({children}){
    const [navItems, setNavItems] = useState([]);
    const [isOpen , setIsOpen] = useState(false);
    const [isMobile , setIsMobile] = useState(false);


    const handleclick = () =>{
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
    return <DataContext.Provider value={{navItems,handleclick,setNavItems,isMobile,isOpen,setIsOpen,setIsMobile}}>{children}</DataContext.Provider>
}