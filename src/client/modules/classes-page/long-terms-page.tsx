import Image from '../../assets/long-terms-page-1.svg';
import styles from './classes-page.module.css';
import { HeroSection } from "../../components/hero-section/hero-section";
import { H1 } from '../../components/h1/h1';
import { Cards } from '../../components/card/cards';
import { Container } from '../../components/container/container';
import { Footer } from '../../components/footer/footer';
import { longTermsList } from '../../constants/long-terms';

export const LongTermsPage = () => {
  return (
    <>
      <HeroSection >
        <H1>
          Long-term courses
        </H1>
        <img src={Image} className={styles.classes_image} />
      </HeroSection>
      <Container>
        <div className={styles.classes_content} >
          <Cards cards={longTermsList} type="extended" />
        </div>
      </Container>
    </>
  );
};
