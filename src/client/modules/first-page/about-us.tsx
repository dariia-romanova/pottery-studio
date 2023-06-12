import styles from './about-us.module.css';
import { Paragraph } from "../../components/paragraph/paragraph"
import { Section } from "../../components/section/section"
import AboutUsImage1 from '../../assets/about-us-1.svg';
import AboutUsImage2 from '../../assets/about-us-2.svg';

export const AboutUs = () => {
  return (
    <Section title="about us">
      <div className={styles.aboutUs}>
      <Paragraph text="We are a small cozy ceramic studio in the city center. Visit our workshop, long-term classes to learn pottery and hand-modelling. Or join our cozy coworking to make your best pieces." />
      </div>

      <div className={styles.aboutUs_images}>
        <div className={styles.aboutUs_image_container}>
          <img
            className={styles.aboutUs_image}
            src={AboutUsImage1}
          />
        </div>
        <div className={styles.aboutUs_image_container}>
          <img src={AboutUsImage2} className={styles.aboutUs_image} />
        </div>
      </div>
    </Section>
  )
}