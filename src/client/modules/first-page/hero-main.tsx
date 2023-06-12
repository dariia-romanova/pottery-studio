import clsx from "clsx";

import styles from "./hero-main.module.css";
import HeroImage1 from "../../assets/main-page-hero-1.svg";
import HeroImage2 from "../../assets/main-page-hero-2.svg";
import HeroImageHighlight from "../../assets/main-page-hero-highlight.svg";
import { HeroSection } from "../../components/hero-section/hero-section"
import { H1 } from "../../components/h1/h1";

export const HeroMain = () => {
  return (
    <HeroSection >
      <H1 title="Your pottery and ceramics studio in Kyiv" />
      <div>
        <img src={HeroImage1} className={clsx(styles.hero_image, styles.hero_image_1)} />
        <img src={HeroImage2} className={clsx(styles.hero_image, styles.hero_image_2)} />
        {/* <img src={HeroImageHighlight} className={clsx(styles.hero_image, styles.hero_image_highlight)} /> */}
      </div>
    </HeroSection>
  );
};
