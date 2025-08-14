"use client";

import Header from "@/components/headerr";
import Portofolio from "@/components/portofolioo";
import Features from "@/components/feature";
import TechStack from "@/components/tech-stackk";
import Footer from "@/components/footerr";
import { useEffect } from "react";
import { useSearchParams } from "next/navigation";

export default function Home() {
  const searchParams = useSearchParams();
  const scrollTo = searchParams.get("scrollTo");

  useEffect(() => {
    if (!scrollTo) return;
    const element = document.getElementById(scrollTo);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  }, [scrollTo]);
  return (
    <div>
      <Header />
      <section id="features">
        <Features />
      </section>
      <section id="portfolio">
        <Portofolio />
      </section>
      <section id="techstack">
        <TechStack />
      </section>
      <Footer />
    </div>
  );
}
