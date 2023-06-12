import styles from './workshops.module.css';
import WorkshopsImage1 from '../../assets/workshops-1.svg';
import WorkshopsImage2 from '../../assets/workshops-2.svg';
import { ClassesList } from "./classes-list";
import { Container } from '../../components/container/container';

const cardsList = [
  {
    complexity: 'begginer',
    link: 'your-first-candleholder',
    lessons: '2 lessons x 1.5 hour',
    title: 'Your first candleholder',
    description: 'A workshop consists of two lessons. In the first lessons you going to learn a basic modeling technic and make a candle holder. In the second lesson, after the product has dried, you will color it. We will bake your candlestick for you and you will receive the finished product in 2 weeks',
    dateStart: '20.08',
    dateEnd: '27.08',
    day: 'Tue',
    time: '19:00',
    placesLeft: 10,
    price: 30,
  },
  {
    complexity: 'begginer',
    link: 'make-a-dish-set',
    lessons: '2 lessons x 2 hour',
    title: 'Make a dish set',
    description: 'A workshop consists of two lessons. In the first lessons you going to learn a basic modeling technic and make a candle holder. In the second lesson, after the product has dried, you will color it. We will bake your candlestick for you and you will receive the finished product in 2 weeks',
    dateStart: '20.08',
    dateEnd: '27.08',
    day: 'Tue',
    time: '19:00',
    placesLeft: 5,
    price: 40,
  },
  {
    complexity: 'intermediate',
    link: 'make-a-vase',
    lessons: '2 lessons x 2.5 hour',
    title: 'Make a vase',
    description: 'A workshop consists of two lessons. In the first lessons you going to learn a basic to use a wheel and with a help of ower teacher make a vase. In the second lesson, after the product has dried, you will color it. We will bake your vase for you and you will receive the finished product in 2 weeks',
    dateStart: '20.08',
    dateEnd: '27.08',
    day: 'Tue',
    time: '19:00',
    placesLeft: 5,
    price: 40,
  },
]

export const Workshops = () => {
  return (
    <div>
      <ClassesList
        cardsList={cardsList}
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
              src={WorkshopsImage2}
              className={styles.aboutUs_image}
            />
          </div>
        </div>
      </Container>
    </div>
  );
};
