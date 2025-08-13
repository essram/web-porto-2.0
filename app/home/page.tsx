'use client'

import Header from "@/components/header";
import Portofolio from "@/components/portofolio";
import Features from "@/components/feature";
import TechStack from "@/components/tech-stack";
import Footer from "@/components/footer";

export default function Home() {
    return <div>
        <Header />
        <Features/>
        <Portofolio/>
        <TechStack/>   
        <Footer/> 
    </div>;
}