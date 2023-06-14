import { HeroSection } from "../../components/hero-section/hero-section";
import { Card, CardType } from "../../components/card/card";
import { H1 } from "../../components/h1/h1";
import { Container } from "../../components/container/container";

import styles from './class-page.module.css';
import { ClassForm } from "./class-form";

type ClassPageProps = {
  card: CardType,
}

export const ClassPage = ({ card } : ClassPageProps) => {
  return (
    <>
      <HeroSection>
        <H1>
          {card.title}
        </H1>
      </HeroSection>
      <div className={styles.class_content}>
        <Container>
          <Card type="full" card={card} />
          <div className={styles.class_formContainer}>
            <ClassForm classTitle={card.title} dates={`${card.dateStart} - ${card.dateEnd}`} />
          </div>
        </Container>
      </div>
    </>
  );
};
