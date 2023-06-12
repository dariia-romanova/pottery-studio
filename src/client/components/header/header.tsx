import styles from "./header.module.css";

import { Logo } from "../logo/logo";
import { NavBar } from "../nav-bar/nav-bar";

export const Header = () => {
  return (
    <div className={styles.header}>
      <Logo size="small" />
      <NavBar />
    </div>
  );
};
