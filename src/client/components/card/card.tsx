import { Link } from 'react-router-dom';
import styles from './cards.module.css';
import { Button } from '../button/button';

export type CardType = {
    link: string,
    complexity: string,
    lessons: string,
    title: string,
    description: string,
    dateStart: string,
    dateEnd: string,
    day: string,
    time: string,
    placesLeft: number,
    price: number,
};

type CardProps = {
  card: CardType,
  type: 'short' | 'extended' | 'full',
};

export const Card = ({ card, type }: CardProps) => {
  return (
    <div className={styles.card}>
      <Link to={card.link} className={styles.card_content}>
        <div className={styles.card_head}>
          <div className={styles.card_complexity}>
            <p>{card.complexity}</p>
            <div className={styles.card_complexity_underline} />
          </div>

            <div>{card.lessons}</div>
          </div>
  
          <h3 className={styles.card_title}>{card.title}</h3>

          {type === 'extended' && (
            <p className={styles.card_description}>
              {card.description}
            </p>
          )}

          <div className={styles.card_dates}>
            <p>{card.dateStart} - {card.dateEnd}</p>
            <p>{card.day} {card.time}</p>
          </div>
          {type === 'extended' && (
            <div className={styles.card_bookings}>
              <Button text="book" link={card.link} />
              <div className={styles.card_price}>{card.price}$</div>
            </div>
          )}
      </Link>
    </div>
  );
};
