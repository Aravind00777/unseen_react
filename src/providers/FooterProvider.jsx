import { useEffect, useState } from "react";
import FooterContext from "../contexts/FooterContext";

export default function FooterProvider({children}){
     const [footerdata ,setFooterdata] = useState({});
        useEffect(()=> {
            fetch('http://localhost:3001/footerdata')
            .then((response ) => response.json())
            .then((data) => setFooterdata(data))
            .catch((error) => console.error('Error fetching footer data', error));
    
        },[]);
        return <FooterContext.Provider value={{setFooterdata,footerdata}}>{children}</FooterContext.Provider>
}