import { useEffect, useState } from "react";
import FooterContext from "../contexts/FooterContext";

export default function FooterProvider({children}){
     const [footerdata ,setFooterdata] = useState({});
        const Footerblk = {
          title:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi blandit cursus risus at. Enim neque volutpat ac tincidunt vitae. Scelerisque eu ultrices vitae auctor eu augue ut. In est ante in nibh mauris.",
          logos :[
            {logo:img1 ,href:"#"},
            {logo:img2 ,href:"#"},
            {logo:img3 ,href:"#"},
            {logo:img4 ,href:"#"}
          ],
          bottomcnt:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Vestibulum morbi"
    
        }
        useEffect(()=> {
            fetch('http://localhost:3001/footerdata')
            .then((response ) => response.json())
            .then((data) => setFooterdata(data))
            .catch((error) => console.error('Error fetching footer data', error));
    
        },[]);
        return <FooterContext.Provider value={{setFooterdata,footerdata}}>{children}</FooterContext.Provider>
}