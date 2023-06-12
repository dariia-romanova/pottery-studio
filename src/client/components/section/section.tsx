import styles from "./section.module.css";

import React from "react"
import { Container } from "../container/container";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  
}


export const Section = ({ title, children } : SectionProps) => {
  return (
    <div className={styles.section}>
      <Container>
        <h2 className={styles.section_title}>{title}</h2>
        <div>
          {children}
        </div>
      </Container>
    </div>
  );
};
