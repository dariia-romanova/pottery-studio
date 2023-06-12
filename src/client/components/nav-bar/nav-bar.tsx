import styles from './nav-bar.module.css';
import { Link } from 'react-router-dom';
import underline from "../../assets/underline.svg";
import { menu } from '../../constants/menu';

export const NavBar = () => {
  return (
      <ul className={styles.nav}>
        {menu.map(({ name, link }) => (
          <li className={styles.nav_item} key={link}>
            <Link to={link} >
              {name}
            </Link>
            <div className={styles.nav_underline}>
              <img src={underline} className={styles.nav_underline_img} />
            </div>
          </li>
        ))}
      </ul>
  )
};