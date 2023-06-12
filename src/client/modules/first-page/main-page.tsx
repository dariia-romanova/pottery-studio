import { Footer } from "../../components/footer/footer";
import { AboutUs } from "./about-us";
import { Coworking } from "./coworking";
import { HeroSection } from "./hero-section";
import { LongTerms } from "./long-terms";
import { Workshops } from "./workshops";


export const MainPage = () => {
  return (
    <>
      <HeroSection />
      <AboutUs />
      <Workshops />
      <LongTerms />
      <Coworking />
      <Footer />
    </>
  );
}
