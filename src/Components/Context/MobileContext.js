import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";

export const MobileContext = createContext();
export default function MobileContextProvider({children}){
const [isMobile, setIsMobile] = useState()
const [openMenu, setOpenMenu] = useState(false)

const isMobileHandler =(e)=>{
    setIsMobile(e.matches)
}
useEffect(()=>{
    window.matchMedia("(max-width:992px)").addEventListener("change", isMobileHandler);
    setIsMobile(window.matchMedia("(max-width:992px)").matches)
},[])

// close
useEffect(()=>{
    if(!isMobile){
        setOpenMenu(false)
    }
}
,[isMobile])

    return <MobileContext.Provider value={{isMobile, openMenu, setOpenMenu}}>
        {children}
    </MobileContext.Provider>
}