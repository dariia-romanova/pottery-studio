import styles from './footer.module.css';
import { Logo } from "../logo/logo";
import { NavBar } from "../nav-bar/nav-bar";
import { Paragraph } from '../paragraph/paragraph';
import { FooterImage } from './footer-image';
import { FooterImageText } from './footer-image-text';

export const Footer = () => {
  return (
    <div className={styles.footer}>
      <div className={styles.footer_info}>
        <div className={styles.footer_contacts}>
          <Logo size="big" />
          <Paragraph text='Kyiv, Kyiv street, 20' mobileCentered />
          <Paragraph text='+38099 202 00 22' mobileCentered />
        </div>
        <div className={styles.footer_images}>
          <div className={styles.footer_imageContainer}>
            <FooterImage />
          </div>
          <div className={styles.footer_imageContainer}>
            <FooterImageText />
          </div>
        </div>
      </div>
      <div className={styles.footer_navbar}>
        <p>2023</p>
        <NavBar />
      </div>
    </div>
  );
};
