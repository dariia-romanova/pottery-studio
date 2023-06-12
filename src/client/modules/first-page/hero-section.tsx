import styles from "./hero-section.module.css";

import { Container } from "../../components/container/container";
import { H1 } from "../../components/h1/h1";
import { Header } from "../../components/header/header";


export const HeroSection = () => {
  return (
    <div className={styles.heroSection}>
      <Container>
        <Header />
        <div className={styles.heroSection_title}>
          <H1 title="Your pottery and ceramics studio in Kyiv" />
        </div>
      </Container>
    </div>
  );
};
