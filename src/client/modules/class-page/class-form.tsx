import { Button } from "../../components/button/button";
import { Input } from "../../components/form/input";
import { H2 } from "../../components/h2/h2";

import styles from './class-page.module.css';

type ClassFormType = {
  classTitle: string, 
  dates: string
}

export const ClassForm = ({ classTitle, dates }: ClassFormType) => {
  return (
    <form className={styles.class_form}>
      <H2>book this class</H2>
      <Input type="text" label="name" tip="Your name" required />
      <Input type="email" label="your e-mail" tip="youremail@gmail.com" required />
      <Input type="tel" label="Phone number" tip="Your phone number" required />
      <Input type="text" label="Class name" tip="" fixedValue={classTitle} required />
      <Input type="text" label="Dates" tip="" fixedValue={dates} required />
      <Input type="textarea" label="additional info" tip="Write your message here" />
      <Button text="Send" link="" />
    </form>
  );
};
