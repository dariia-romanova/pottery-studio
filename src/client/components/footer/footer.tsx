import styles from './footer.module.css';
import FooterImage1 from '../../assets/footer-1.svg';
import FooterImage2 from '../../assets/footer-2.svg';
import { Container } from "../container/container";
import { Logo } from "../logo/logo";
import { NavBar } from "../nav-bar/nav-bar";
import { Paragraph } from '../paragraph/paragraph';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <Container>
        <div className={styles.footer_images}>
          <div className={styles.footer_imageContainer}>
            <img src={FooterImage1} className={styles.footer_image_1} />
          </div>
          <div className={styles.footer_imageContainer}>
            <img src={FooterImage2} className={styles.footer_image_2} />
          </div>
        </div>
        <div className={styles.footer_contacts}>
          <Logo size="big" />
          <Paragraph text='Kyiv, Kyiv street, 20' mobileCentered />
          <Paragraph text='+38099 202 00 22' mobileCentered />
        </div>
        <div className={styles.footer_navbar}>
          <p>2023</p>
          <NavBar />
        </div>
      </Container>
    </div>
  );
};
