import { HeroSection } from "../../components/hero-section/hero-section";
import { Card, CardType } from "../../components/card/card";
import { H1 } from "../../components/h1/h1";
import { Container } from "../../components/container/container";
import { ClassForm } from "./class-form";
import { useLocation } from 'react-router-dom';
import { useFetch } from "../../hooks/useFetch";
import { getDates } from "../../utils/getDates";
import { Loading } from "../../components/loading/loading";
import { NoPlacesInfo } from "./no-places-info";

import styles from './class-page.module.css';

type ClassPageProps = {
  card: CardType,
}

  export const ClassPage = () => {
    const location = useLocation();
    const slug = location.pathname.split('/').slice(-1)[0];
    const { data, loading } = useFetch(`api/course/${slug}`);

    if (loading) return (
      <div className={styles.class_loading}>
        <Loading />
      </div>
    );

    if (!data) return <></>;
  

    const dates = getDates(data.dateStart, data.dateEnd);
  
  return (
    <>
      <HeroSection>
        <H1>
          {data.title}
        </H1>
      </HeroSection>
      {!data.placesLeft && <NoPlacesInfo />}
      <div className={styles.class_content}>
        <Container>
          <Card type="full" card={data} />
          {!!data.placesLeft && (
            <div className={styles.class_formContainer}>
              <ClassForm classTitle={data.title} dates={dates} />
            </div>
          )}
        </Container>
      </div>
    </>
  );
};
