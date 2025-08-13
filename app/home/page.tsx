'use client'

import Header from "@/components/headerr";
import Portofolio from "@/components/portofolioo";
import Features from "@/components/feature";
import TechStack from "@/components/tech-stackk";
import Footer from "@/components/footerr";

export default function Home() {
    return <div>
        <Header />
        <Features/>
        <Portofolio/>
        <TechStack/>   
        <Footer/> 
    </div>;
}