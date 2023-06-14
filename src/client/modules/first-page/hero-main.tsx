import clsx from "clsx";

import styles from "./hero-main.module.css";
import HeroImage1 from "../../assets/main-page-hero-1.svg";
import HeroImage2 from "../../assets/main-page-hero-2.svg";
import { HeroSection } from "../../components/hero-section/hero-section"
import { H1 } from "../../components/h1/h1";

export const HeroMain = () => {
  return (
    <HeroSection >
      <H1>
        {`Your pottery and ceramics `}
        <span className={styles.hero_highlight}>
          {`studio `}
          <svg className={styles.hero_highlight_image} width="306" height="124" viewBox="0 0 306 124" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path className={styles.hero_highlight_path} d="M142.993 2.00007C125.723 2.00007 108.454 2.00007 91.1853 2.00007C75.7535 2.00007 63.7055 1.89561 50.2483 9.86367C39.5808 16.18 29.1422 22.4765 20.1816 31.1416C14.8123 36.334 7.26586 41.1851 3.64496 47.9096C1.01403 52.7956 2.13344 62.6728 2.95112 67.9155C5.47044 84.0688 23.938 95.7476 36.6027 103.475C61.619 118.739 92.7307 120.802 121.252 121.457C156.576 122.269 192.425 122.857 227.758 121.515C254.748 120.49 292.464 107.918 301.19 79.2484C305.904 63.7593 304.191 50.7864 290.666 40.046C275.448 27.9608 255.94 18.9922 237.876 12.0608C223.92 6.70579 210.122 6.16315 195.378 6.16315C173.319 6.16315 151.134 2.96847 132.585 16.5709" stroke="#1F1F1F" stroke-width="3" stroke-linecap="round"/>
          </svg>
        </span>
        {`in Kyiv`}
      </H1>
      <div>
        <img src={HeroImage1} className={clsx(styles.hero_image, styles.hero_image_1)} />
        <img src={HeroImage2} className={clsx(styles.hero_image, styles.hero_image_2)} />
      </div>
    </HeroSection>
  );
};
