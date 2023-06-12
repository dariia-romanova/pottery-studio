import { Footer } from "../../components/footer/footer";
import { AboutUs } from "./about-us";
import { Coworking } from "./coworking";
import { HeroMain } from "./hero-main";
import { LongTerms } from "./long-terms";
import { Workshops } from "./workshops";


export const MainPage = () => {
  return (
    <>
      <HeroMain />
      <AboutUs />
      <Workshops />
      <LongTerms />
      <Coworking />
      <Footer />
    </>
  );
}
