import styles from './nav-bar.module.css';
import { Link } from 'react-router-dom';
import { menu } from '../../constants/menu';
import { Underline } from '../underline/underline';

export const NavBar = () => {
  return (
      <ul className={styles.nav}>
        {menu.map(({ name, link }) => (
          <li className={styles.nav_item} key={link}>
            <Link to={link} >
              <Underline>
                  {name}
              </Underline>
            </Link>
          </li>
        ))}
      </ul>
  )
};