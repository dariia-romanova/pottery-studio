import { Link } from "react-router-dom";
import styles from "./button.module.css";
import arrow from "../../assets/arrow.svg";
import clsx from "clsx";

type ButtonProps = {
  text: string;
  link: string;
  variant?: 'standart' | 'no-arrow';
}

export const Button = ({ text, link, variant = 'standart' } : ButtonProps) => {
  return (
    <button className={styles.button}>
      <Link className={styles.button_content} to={link}>
        <div className={clsx(styles.button_title, variant === 'no-arrow' && styles.button_title__noArrow)}>{text}</div>
        {variant === 'standart' && (
          <img src ={arrow} className={styles.button_arrow} />
        )}
      </Link>
    </button>
  );
};
