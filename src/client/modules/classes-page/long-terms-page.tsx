import styles from './classes-page.module.css';
import { HeroSection } from "../../components/hero-section/hero-section";
import { H1 } from '../../components/h1/h1';
import { Cards } from '../../components/card/cards';
import { Container } from '../../components/container/container';
import { longTermsList } from '../../constants/long-terms';
import { LongTermsDecoration } from './long-terms-decoration';

export const LongTermsPage = () => {
  return (
    <>
      <HeroSection >
        <div className={styles.classes_title}>
          <H1>
            Long-term courses
          </H1>
        </div>
        <div className={styles.classes_image}>
          <LongTermsDecoration />
        </div>
      </HeroSection>
      <Container>
        <div className={styles.classes_content} >
          <Cards cards={longTermsList} type="extended" baseLink='/long-term-classes' />
        </div>
      </Container>
    </>
  );
};
