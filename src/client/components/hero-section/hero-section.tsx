import React from "react";
import styles from "./hero-section.module.css";

import { Container } from "../../components/container/container";
import { H1 } from "../../components/h1/h1";
import { Header } from "../../components/header/header";

type HeroSectionProps = {
  children?: React.ReactNode,
}

export const HeroSection = ({ children }: HeroSectionProps) => {
  return (
    <div className={styles.heroSection}>
      <Container>
        <div className={styles.heroSection_title}>
          {!!children && (
            <div>
              {children}
            </div>
          )}
        </div>
      </Container>
    </div>
  );
};
