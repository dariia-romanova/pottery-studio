import { AboutUs } from "./about-us/about-us";
import { HeroMain } from "./hero-main/hero-main";
import { LongTerms } from "./classes/long-terms";
import { Workshops } from "./classes/workshops";
import { Coworking } from "./coworking/coworking";


export const MainPage = () => {
  return (
    <>
      <HeroMain />
      <AboutUs />
      <Workshops />
      <LongTerms />
      <Coworking />
    </>
  );
}
