import Faq from "@/components/landingComponents/Faq";
import Carousel from "@/components/landingComponents/Carousel";
import AboutUsRows from "@/components/landingComponents/AboutUsRows";
import Hero from "@/components/landingComponents/Hero";
export default function Home() {
  return (
    <div className="container-fluid">
      {" "}
      <Hero />
      <div className="container">
        <AboutUsRows />
        <Carousel />
        <Faq />
      </div>{" "}
    </div>
  ); 
}
