import styles from './classes-page.module.css';
import { HeroSection } from "../../components/hero-section/hero-section";
import { H1 } from '../../components/h1/h1';
import { Cards } from '../../components/card/cards';
import { Container } from '../../components/container/container';
import { LongTermsDecoration } from './long-terms-decoration';
import { useFetch } from '../../hooks/useFetch';

export const LongTermsPage = () => {
  const { data, loading } = useFetch("api/courses?type=longterms");

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
          {loading ? (
          <>Loading long-term course</>
          ) : (
            <Cards cards={data} type="extended" baseLink='/long-term-classes' />
          )}
        </div>
      </Container>
    </>
  );
};
