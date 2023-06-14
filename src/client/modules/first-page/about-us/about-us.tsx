import styles from './about-us.module.css';
import { Paragraph } from "../../../components/paragraph/paragraph"
import { Section } from "../../../components/section/section"
import { AboutUsDecorationImage } from './about-us-decoration-image';
import { AboutUsDecorationText } from './about-us-decoration-text';

export const AboutUs = () => {
  return (
    <Section title="about us">
      <div className={styles.aboutUs}>
      <Paragraph text="We are a small cozy ceramic studio in the city center. Visit our workshop, long-term classes to learn pottery and hand-modelling. Or join our cozy coworking to make your best pieces." />
      </div>

      <div className={styles.aboutUs_images}>
        <div className={styles.aboutUs_image_container}>
          <AboutUsDecorationText />
        </div>
        <div className={styles.aboutUs_image_container}>
          <AboutUsDecorationImage />
        </div>
      </div>
    </Section>
  )
}