import Image from '../../assets/workshops-page-1.svg';
import styles from './classes-page.module.css';
import { HeroSection } from "../../components/hero-section/hero-section";
import { H1 } from '../../components/h1/h1';
import { Cards } from '../../components/card/cards';
import { Container } from '../../components/container/container';
import { Footer } from '../../components/footer/footer';

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
];


export const WorkshopsPage = () => {
  return (
    <>
      <HeroSection >
        <H1 title="Workshops" />
        <img src={Image} className={styles.classes_image} />
      </HeroSection>
      <Container>
        <div className={styles.classes_content} >
          <Cards cards={cardsList} type="extended" />
        </div>
      </Container>
      <Footer />
    </>
  );
};
