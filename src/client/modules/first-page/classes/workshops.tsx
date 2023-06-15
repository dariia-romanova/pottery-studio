import styles from './workshops.module.css';
import { ClassesList } from "./classes-list";
import { Container } from '../../../components/container/container';
import { workshopsList } from '../../../constants/workshops';
import { WorkshopsDecorationImage } from './workshops-decoration-image';
import { WorkshopsDecorationText } from './workshops-decoration-text';

export const Workshops = () => {
  return (
    <div>
      <ClassesList
        cardsList={workshopsList}
        title="workshops"
        button= {{
          link: "./workshops",
          text: 'all workshops'
        }}
        baseLink="/workshops"
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
