import { Link } from 'react-router-dom';
import styles from './cards.module.css';
import { Button } from '../button/button';
import { Paragraph } from '../paragraph/paragraph';
import { getDates } from '../../utils/getDates';

export type CardType = {
    slug: string,
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


  const dates = getDates(card.dateStart, card.dateEnd);

  if (type === 'full') {
    return (
      <div className={styles.card__full}>
        <div className={styles.card__full_head}>
          {/* <div className={styles.card_complexity}>
            <p>{card.complexity}</p>
            <div className={styles.card_complexity_underline} />
          </div> */}

         <p>{card.placesLeft} place left</p>
        </div>

        <div className={styles.card_lessons}>{card.lessons}</div>

        <Paragraph text={card.description} />

        <div className={styles.card__full_info}>
          <div className={styles.card__full_dates}>
              <p>{card.day} {card.time}</p>
              <p>{dates}</p>
            </div>

            <div className={styles.card__full_price}>{card.price}$</div>
        </div>
      </div>

    );
  }

  return (
    <div className={styles.card}>
      <Link to={`${baseLink}/${card.slug}`} className={styles.card_content}>
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

          {!card.placesLeft && (
            <p className={styles.card_noplaces}>
              No places left
            </p>
          )}

          <div className={styles.card_dates}>
            <p>{dates}</p>
            <p>{card.day} {card.time}</p>
          </div>
          {type === 'extended' && (
            <div className={styles.card_bookings}>
              <Button text="book" link={card.slug} />
              <div className={styles.card_price}>{card.price}$</div>
            </div>
          )}
      </Link>
    </div>
  );
};
