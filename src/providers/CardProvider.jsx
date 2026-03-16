import { useState,useEffect } from "react";
import CardContext from "../contexts/CardContext";
export default function CardProvider({children}){
    const [carditem, setCarditem ] = useState([]);
    
        useEffect(() => {
            fetch('http://localhost:3001/cards')
                .then((response) => response.json())
                .then((data) => setCarditem(data))
                .catch((error) => console.error('Error fetching banner items:', error));
        }, []);
        return <CardContext.Provider value={{setCarditem,carditem }}>{children}</CardContext.Provider>
}