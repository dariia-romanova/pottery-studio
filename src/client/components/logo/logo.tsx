import clsx from "clsx";
import styles from "./logo.module.css";
import { Link } from "react-router-dom";

type LogoType = {
  size: 'small' | 'big';
}

export const Logo = ({ size } : LogoType) => {
  return (
    <div>
      <Link to="/" className={clsx(styles.logo, size === 'big' && styles.logo_big)}>
        clayclay
      </Link>
    </div>
  );
};
