import { Link } from "react-router-dom";
import styles from "./button.module.css";
import arrow from "../../assets/arrow.svg";

type ButtonProps = {
  text: string;
  link: string;
}

export const Button = ({ text, link } : ButtonProps) => {
  return (
    <button className={styles.button}>
      <Link className={styles.button_content} to={link}>
        <div className={styles.button_title}>{text}</div>
        <img src ={arrow} className={styles.button_arrow} />
      </Link>
    </button>
  );
};
