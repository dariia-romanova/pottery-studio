import styles from './cards.module.css';
import { Card, CardType } from "./card";
import clsx from 'clsx';

type CardsProps = {
  cards: CardType[],
  type: 'short' | 'extended';
};

export const Cards = ({ cards, type }: CardsProps) => {
  return (
    <div className={clsx(
      styles.cards,
      type === 'short' && styles.cards_short,
      type === 'extended' && styles.cards_extended
    )}>
      {cards.map((card) => (
        <Card card={card} type={type} key={card.link} />
      ))}
    </div>
  );
};
