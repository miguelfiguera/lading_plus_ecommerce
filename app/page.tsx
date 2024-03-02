import Faq from "@/components/landingComponents/Faq";
import Carousel from "@/components/landingComponents/Carousel";
import AboutUsRows from "@/components/landingComponents/AboutUsRows";
export default function Home() {
  return (
    <div className="container">
      <AboutUsRows />
      <Carousel />
      <Faq />
    </div>
  );
}
