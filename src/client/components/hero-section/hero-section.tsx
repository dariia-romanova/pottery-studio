import React from "react";
import styles from "./hero-section.module.css";

import { Container } from "../../components/container/container";
import { H1 } from "../../components/h1/h1";
import { Header } from "../../components/header/header";

type HeroSectionProps = {
  title: string,
  children?: React.ReactNode,
}

export const HeroSection = ({ title, children }: HeroSectionProps) => {
  return (
    <div className={styles.heroSection}>
      <Container>
        <Header />
        <div className={styles.heroSection_title}>
          <H1 title={title} />
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
