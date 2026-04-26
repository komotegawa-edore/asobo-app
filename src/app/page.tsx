import Header from "@/components/lp/Header";
import Hero from "@/components/lp/Hero";
import PainPoints from "@/components/lp/PainPoints";
import Features from "@/components/lp/Features";
import HowItWorks from "@/components/lp/HowItWorks";
import Safety from "@/components/lp/Safety";
import Genres from "@/components/lp/Genres";
import Recommend from "@/components/lp/Recommend";
import CTA from "@/components/lp/CTA";
import Footer from "@/components/lp/Footer";

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PainPoints />
        <Features />
        <HowItWorks />
        <Safety />
        <Genres />
        <Recommend />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
