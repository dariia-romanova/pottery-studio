import { Link } from 'react-router-dom';
import styles from './cards.module.css';
import { Button } from '../button/button';
import { Paragraph } from '../paragraph/paragraph';

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
  baseLink?: string,
};

export const Card = ({ card, type, baseLink }: CardProps) => {
  if (type === 'full') {
    return (
      <div className={styles.card__full}>
        <div className={styles.card__full_head}>
          <div className={styles.card_complexity}>
            <p>{card.complexity}</p>
            <div className={styles.card_complexity_underline} />
          </div>

          <p>{card.placesLeft} place left</p>
        </div>

        <div className={styles.card_lessons}>{card.lessons}</div>

        <Paragraph text={card.description} />

        <div className={styles.card__full_info}>
          <div className={styles.card__full_dates}>
              <p>{card.day} {card.time}</p>
              <p>{card.dateStart} - {card.dateEnd}</p>
            </div>

            <div className={styles.card__full_price}>{card.price}$</div>
        </div>
      </div>

    );
  }

  return (
    <div className={styles.card}>
      <Link to={`${baseLink}/${card.link}`} className={styles.card_content}>
        <div className={styles.card_head}>
          <div className={styles.card_complexity}>
            <p>{card.complexity}</p>
            <div className={styles.card_complexity_underline} />
          </div>

            <div className={styles.card_lessons}>{card.lessons}</div>
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
