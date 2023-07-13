import { HeroSection } from "../../components/hero-section/hero-section";
import { Card, CardType } from "../../components/card/card";
import { H1 } from "../../components/h1/h1";
import { Container } from "../../components/container/container";

import styles from './class-page.module.css';
import { ClassForm } from "./class-form";
import { useLocation } from 'react-router-dom';
import { useFetch } from "../../hooks/useFetch";
import { getDates } from "../../utils/getDates";

type ClassPageProps = {
  card: CardType,
}

  export const ClassPage = () => {
    const location = useLocation();
    const slug = location.pathname.split('/').slice(-1)[0];
    const { data, loading } = useFetch(`api/courses/${slug}`);

    if (!data) return <></>;
    if (loading) return <></>;

    const dates = getDates(data.dateStart, data.dateEnd);

    console.log(data.dateStart, data.dateEnd)
  
  return (
    <>
      <HeroSection>
        <H1>
          {data.title}
        </H1>
      </HeroSection>
      <div className={styles.class_content}>
        <Container>
          <Card type="full" card={data} />
          <div className={styles.class_formContainer}>
            <ClassForm classTitle={data.title} dates={dates} />
          </div>
        </Container>
      </div>
    </>
  );
};
