import { useContext } from "react";
import CardContext from "../contexts/CardContext";

export default function useCard(){
    return useContext(CardContext);
}