import Footer from "@/components/shared/Footer";
import Navigation from "@/components/shared/Navigation";
import React from "react";
import { Outlet } from "react-router-dom";
function RootLayout(){
    return(
        <>
        <Navigation/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default RootLayout