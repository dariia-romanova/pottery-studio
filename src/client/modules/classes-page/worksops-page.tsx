import styles from './classes-page.module.css';
import { HeroSection } from "../../components/hero-section/hero-section";
import { H1 } from '../../components/h1/h1';
import { Cards } from '../../components/card/cards';
import { Container } from '../../components/container/container';
import { workshopsList } from '../../constants/workshops';
import { WorkshopsPageDecorations } from './workshops-page-decoration';

export const WorkshopsPage = () => {
  return (
    <>
      <HeroSection >
        <H1>
          Workshops
        </H1>
        <div className={styles.classes_image} >
          <WorkshopsPageDecorations />
        </div>
      </HeroSection>
      <Container>
        <div className={styles.classes_content} >
          <Cards cards={workshopsList} type="extended" />
        </div>
      </Container>
    </>
  );
};
