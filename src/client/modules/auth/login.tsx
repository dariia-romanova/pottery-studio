import { Button } from "../../components/button/button";
import { Container } from "../../components/container/container";
import { Input } from "../../components/form/input";
import { H1 } from "../../components/h1/h1";
import { HeroSection } from "../../components/hero-section/hero-section";

import styles from './login.module.css'

export const Login = () => {
  return (
    <>
      <HeroSection variant="small">
        <H1>Login</H1>
      </HeroSection>
      <Container>
        <div className={styles.auth_content}>
          <div className={styles.auth_formContainer}>
          <form className={styles.auth_form}>
            <Input type="email" label="your e-mail" tip="youremail@gmail.com" required />
            <Input type="password" label="your password" tip="Type in your password" required />
            <Button text="Login" link="" />
          </form>
        </div>
        <div className={styles.auth_buttons}>
          <div className={styles.auth_button}>
            <p className={styles.auth_button_text}>forgot password?</p>
            <Button text="Restore password" link="" variant="no-arrow" />
          </div>

          <div className={styles.auth_button}>
            <p className={styles.auth_button_text}>don’t have an account yet?</p>
            <Button text="Register" link="" variant="no-arrow" />
          </div>
        </div>
        </div>
      </Container>
    </>
  );
};