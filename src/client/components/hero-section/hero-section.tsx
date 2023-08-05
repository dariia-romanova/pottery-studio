import React from "react";
import styles from "./hero-section.module.css";

import { Container } from "../../components/container/container";
import clsx from "clsx";

type HeroSectionProps = {
  children?: React.ReactNode,
  variant?: 'small' | 'standart';
}

export const HeroSection = ({ children, variant = 'standart' }: HeroSectionProps) => {
  return (
    <div className={styles.heroSection}>
      <Container>
        <div className={clsx(styles.heroSection_title, variant === 'small' && styles.heroSection_title__small)}>
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
