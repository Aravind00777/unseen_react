import BannerContext from "../contexts/BannerContext";
import { useEffect, useState } from "react";

export default function BannerProvider({children}){
     const [bannerItems, setBannerItems] = useState({});
        
    
        useEffect(() => {
            fetch('http://localhost:3001/school')
                .then((response) => response.json())
                .then((data) => setBannerItems(data))
                .catch((error) => console.error('Error fetching banner items:', error));
        }, []);
        return <BannerContext.Provider value={{setBannerItems,bannerItems}}>{children}</BannerContext.Provider>
}