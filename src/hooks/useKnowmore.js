import { useContext } from "react";
import KnowmoreContext from "../contexts/KnowmoreContext";

export default function useKnowmore(){
    return useContext(KnowmoreContext);
}