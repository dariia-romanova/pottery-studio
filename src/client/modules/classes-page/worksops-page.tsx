import Image from '../../assets/workshops-page-1.svg';
import styles from './classes-page.module.css';
import { HeroSection } from "../../components/hero-section/hero-section";
import { H1 } from '../../components/h1/h1';
import { Cards } from '../../components/card/cards';
import { Container } from '../../components/container/container';
import { workshopsList } from '../../constants/workshops';

export const WorkshopsPage = () => {
  return (
    <>
      <HeroSection >
        <H1 title="Workshops" />
        <img src={Image} className={styles.classes_image} />
      </HeroSection>
      <Container>
        <div className={styles.classes_content} >
          <Cards cards={workshopsList} type="extended" />
        </div>
      </Container>
    </>
  );
};
