import styles from './coworking-page.module.css';
import HeaderImage from '../../assets/coworking-page.svg';
import Image from '../../assets/coworking-page-2.svg';

import { H1 } from "../../components/h1/h1";
import { HeroSection } from "../../components/hero-section/hero-section";
import { Paragraph } from '../../components/paragraph/paragraph';
import { Container } from '../../components/container/container';
import { CoworkingForm } from './coworking-form';
import { Footer } from '../../components/footer/footer';

export const CoworkingPage = () => {
  return (
    <>
      <HeroSection>
        <H1 title="Coworking" />
        <img src={HeaderImage} className={styles.coworking_heroImage} />
      </HeroSection>
        <Container>
          <div className={styles.coworking_content}>
          <Paragraph text="Our studio offers a place in our coworking space for people, who already familiar with ceramics. All the material, clay, tints are included in the price. You can use the potter's wheel and the baking oven, and you will also have a separate shelf for storing your products" className={styles.coworking_firstParagraph} />
          <Paragraph text="Don’t worry, our teachers is always here to help you and answer all your questions." />
          <img src={Image} className={styles.coworking_photo} />
          <Paragraph text="Leave us a message and we will contact you in no time. Or just drop in in our studio, we always happy to see you." />
          <div className={styles.coworking_formContainer}>
            <CoworkingForm />
          </div>
        </div>
        <Footer />
      </Container>

    </>
  );
};
