import { Button } from "../../components/button/button";
import { Container } from "../../components/container/container";
import styles from './class-page.module.css';

export const NoPlacesInfo = () => {
  return (
    <div className={styles.class_noplaces}>
      <Container>
        <p>Sorry, there are no places left on this course. We are will open new course soon. Stay tuned!</p>
      </Container>
  </div>
  );
};
