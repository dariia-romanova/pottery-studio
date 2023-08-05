import styles from "./section.module.css";

import React from "react"
import { Container } from "../container/container";
import { H2 } from "../h2/h2";

type SectionProps = {
  title: string;
  children: React.ReactNode;
  
}


export const Section = ({ title, children } : SectionProps) => {
  return (
    <div className={styles.section}>
      <Container>
        <H2>
          {title}
        </H2>
        {/* <h2 className={styles.section_title}>{title}</h2> */}
        <div>
          {children}
        </div>
      </Container>
    </div>
  );
};
