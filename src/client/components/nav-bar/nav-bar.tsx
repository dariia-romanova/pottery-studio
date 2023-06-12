import styles from './nav-bar.module.css';
import { Link } from 'react-router-dom';
import underline from "../../assets/underline.svg";

const navigation = [
  {
    name: 'workshops',
    link: '/workshops',
  },
  {
    name: 'long-term classes',
    link: '/long-term-classes',
  },
  {
    name: 'coworking',
    link: '/coworking',
  },
];

export const NavBar = () => {
  return (
      <ul className={styles.nav}>
        {navigation.map(({ name, link }) => (
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