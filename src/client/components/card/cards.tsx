import styles from './cards.module.css';
import { Card, CardType } from "./card";
import clsx from 'clsx';

type CardsProps = {
  cards: CardType[],
  type: 'short' | 'extended';
  baseLink: string;
};

export const Cards = ({ cards, type, baseLink }: CardsProps) => {
  if (!cards) {
    return <></>
  }

  return (
    <div className={clsx(
      styles.cards,
      type === 'short' && styles.cards_short,
      type === 'extended' && styles.cards_extended
    )}>
      {cards.map((card) => (
        <Card card={card} type={type} key={card.slug} baseLink={baseLink} />
      ))}
    </div>
  );
};
