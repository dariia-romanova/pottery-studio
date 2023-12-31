import styles from './workshops.module.css';
import { ClassesList } from "./classes-list";
import { Container } from '../../../components/container/container';
import { WorkshopsDecorationImage } from './workshops-decoration-image';
import { WorkshopsDecorationText } from './workshops-decoration-text';
import { useFetch } from '../../../hooks/useFetch';

export const Workshops = () => {
  const { data, loading } = useFetch("api/courses?type=workshop&limit=3");

  return (
    <div>
      <ClassesList
        cardsList={data}
        title="workshops"
        button= {{
          link: "./workshops",
          text: 'all workshops'
        }}
        baseLink="/workshops"
        loading={loading}
      />

      <Container>
        <div className={styles.workshops_images}>
          <div className={styles.workshops_image_container}>
            <WorkshopsDecorationText />
          </div>
          <div className={styles.workshops_image_container}>
            <WorkshopsDecorationImage />
          </div>
        </div>
      </Container>
    </div>
  );
};
