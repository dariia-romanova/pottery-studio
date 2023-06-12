import Image from '../../assets/long-terms-page-1.svg';
import styles from './classes-page.module.css';
import { HeroSection } from "../../components/hero-section/hero-section";
import { H1 } from '../../components/h1/h1';
import { Cards } from '../../components/card/cards';
import { Container } from '../../components/container/container';
import { Footer } from '../../components/footer/footer';


const cardsList = [
  {
    complexity: 'begginer',
    link: 'basic-pottery',
    lessons: '12 lessons x 2.5 hour',
    title: 'Basic pottery',
    description: 'In this long term class you going to learn everything to start working with pottery wheel. It consist of 12 lessons, where you learn technics to works with clay on the pottery wheel, to color and bake your products. After that this class you will be able to join our coworking and work by yourself. ',
    dateStart: '20.08',
    dateEnd: '27.08',
    day: 'Tue',
    time: '19:00',
    placesLeft: 10,
    price: 30,
  },
  {
    complexity: 'begginer',
    link: 'basic-hand-modelling',
    lessons: '10 lessons x 2.5 hour',
    title: 'Basic hand-modelling',
    description: 'In this long term class you going to learn everything to start working with hand modeling. It consist of 10 lessons, where you learn technics to works with hand modeling, to color and bake your products. After that this class you will be able to join our coworking and work by yourself.',
    dateStart: '20.08',
    dateEnd: '27.08',
    day: 'Tue',
    time: '19:00',
    placesLeft: 5,
    price: 40,
  },
  {
    complexity: 'intermediate',
    link: 'pottery-hand-modelling',
    lessons: '20 lessons x 2.5 hour',
    title: 'Pottery + hand-modelling',
    description: 'In this long term class you going to learn everything to start working with ceramics. It consist of 10 lessons, where you learn technics to works with hand modeling and pottery, to color and bake your products. After that this class you will be able to join our coworking and work by yourself.',
    dateStart: '20.08',
    dateEnd: '27.08',
    day: 'Tue',
    time: '19:00',
    placesLeft: 5,
    price: 40,
  },
];


export const LongTermsPage = () => {
  return (
    <>
      <HeroSection >
        <H1 title="Long-term courses" />
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
