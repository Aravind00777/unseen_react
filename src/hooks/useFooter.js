import { useContext } from "react";
import FooterContext from "../contexts/FooterContext";

export default function useFooter(){
    return useContext(FooterContext);
}