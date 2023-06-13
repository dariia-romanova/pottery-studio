import { Button } from "../../components/button/button";
import { Input } from "../../components/form/input";

import styles from './coworking-page.module.css';

export const CoworkingForm = () => {
  return (
    <form className={styles.coworking_form}>
      <Input type="text" label="name" tip="Your name" required />
      <Input type="email" label="your e-mail" tip="youremail@gmail.com" required />
      <Input type="tel" label="name" tip="Your phone number" required />
      <Input type="textarea" label="additional info" tip="Write your message here" />
      <Button text="Send" link="" />
    </form>
  );
};
