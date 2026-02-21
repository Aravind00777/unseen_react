import { useContext } from "react";
import BannerContext from "../contexts/BannerContext";

export default function useBanner(){
    return useContext(BannerContext);
}