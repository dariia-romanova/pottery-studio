import styles from './coworking.module.css';

import { Button } from "../../components/button/button";
import { Paragraph } from "../../components/paragraph/paragraph";
import { Section } from "../../components/section/section";

export const Coworking = () => {
  return (
    <div className={styles.coworking}>
      <Section title="coworking">
        <div className={styles.coworking_paragraph}>
          <Paragraph text="Our studio offers a place in our coworking space for people, who already familiar with ceramics. Don’t worry, our teachers is always here to help you and answer all your questuion." />
        </div>
        <Button text="learn more" link="./coworking" />
      </Section>
    </div>

  );
};
