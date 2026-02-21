import { useState,useEffect } from "react";
import CardContext from "../contexts/CardContext";
import img1 from '../assets/image/actionimg1.png'
import img2 from '../assets/image/actionimg2.png'
import img3 from '../assets/image/actionimg3.png'
export default function CardProvider({children}){
    const [carditem, setCarditem  ] = useState([]);
        const images ={img1,img2,img3};
    
        useEffect(() => {
            fetch('http://localhost:3001/cards')
                .then((response) => response.json())
                .then((data) => setCarditem(data))
                .catch((error) => console.error('Error fetching banner items:', error));
        }, []);
        return <CardContext.Provider value={{setCarditem,carditem ,images}}>{children}</CardContext.Provider>
}