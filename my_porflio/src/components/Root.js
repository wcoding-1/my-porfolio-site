import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";


export default function Root() {
    return (
        <>
            <Header/>
            <main>
                <div className='barner'>Full-Stack-Engineering</div>
                <Outlet/>
            </main>
            <Footer/>
        </>
    )
}