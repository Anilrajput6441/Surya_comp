import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import HowWeMake from "@/components/HowWeMake";
import Reviews from "@/components/Reviews";
import ServicesPage from "@/components/ServicesPage";
import TrustEthics from "@/components/TrustEthics";
import TrustSection from "@/components/TrustSection";
import WhoWeWorkWith from "@/components/WhoWeWorkWith";


export default function Home() {
  return (
    <div className="bg-gradient-light w-full min-h-screen">
      <Hero/>
      <TrustSection/>
      <ServicesPage/>
      <HowWeMake/>
      <WhoWeWorkWith/>
      <TrustEthics/>
      <Reviews/>
      <Contact/>
      <Footer/>

      
    </div>
  );
}
