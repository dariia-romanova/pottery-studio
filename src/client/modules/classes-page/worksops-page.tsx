import styles from './classes-page.module.css';
import { HeroSection } from "../../components/hero-section/hero-section";
import { H1 } from '../../components/h1/h1';
import { Cards } from '../../components/card/cards';
import { Container } from '../../components/container/container';
import { WorkshopsPageDecorations } from './workshops-page-decoration';
import { useFetch } from '../../hooks/useFetch';
import { Loading } from '../../components/loading/loading';

export const WorkshopsPage = () => {
  const { data, loading } = useFetch("api/courses?type=workshop");

  if (loading) {
    return (
      <div className={styles.classes_loading}>
        <Loading />
      </div>
    );
  };

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
          <Cards cards={data} type="extended" baseLink='/workshops' />
        </div>
      </Container>
    </>
  );
};
