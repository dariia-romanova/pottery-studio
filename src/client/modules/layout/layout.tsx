import { Header } from "../../components/header/header";
import { Footer } from "../../components/footer/footer";
import { Outlet } from "react-router-dom";
import { Container } from "../../components/container/container";

import styles from './layout.module.css';

export const Layout = () => {
  return (
    <>
      <div className={styles.header}>
        <Container>
          <Header />
        </Container>
      </div>

      <Outlet />

      <Container>
        <Footer />
      </Container>
    </>
  )
}