import styles from './workshops.module.css';
import WorkshopsImage1 from '../../assets/workshops-1.svg';
import WorkshopsImage2 from '../../assets/workshops-2.svg';
import { ClassesList } from "./classes-list";
import { Container } from '../../components/container/container';
import { workshopsList } from '../../constants/workshops';

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
      />

      <Container>
        <div className={styles.workshops_images}>
          <div className={styles.workshops_image_container}>
            <img
              className={styles.workshops_image}
              src={WorkshopsImage1}
            />
          </div>
          <div className={styles.workshops_image_container}>
            <img
              className={styles.workshops_image}
              src={WorkshopsImage2}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
