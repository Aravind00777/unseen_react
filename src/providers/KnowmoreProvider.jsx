import { children, useEffect, useState } from "react";
import KnowmoreContext from "../contexts/KnowmoreContext";

export default function KnowmoreProvider({children}){
     const [ Knowmore,setKnowmore ] = useState({});
             useEffect(() => {
                    fetch('http://localhost:3001/knowmore')
                        .then((response) => response.json())
                        .then((data) => setKnowmore(data))
                        .catch((error) => console.error('Error fetching learnmore items:', error));
                }, []);
    return <KnowmoreContext.Provider value={{Knowmore}}>{children}</KnowmoreContext.Provider>
}