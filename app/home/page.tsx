'use client'

import Header from "@/components/Header";
import Portofolio from "@/components/Portofolio";
import Features from "@/components/Features";
import TechStack from "@/components/Tech-Stack";
import Footer from "@/components/Footer";

export default function Home() {
    return <div>
        <Header />
        <Features/>
        <Portofolio/>
        <TechStack/>   
        <Footer/> 
    </div>;
}