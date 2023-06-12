import styles from './cards.module.css';
import { Card, CardType } from "./card";

type CardsProps = {
  cards: CardType[]
};

export const Cards = ({ cards }: CardsProps) => {
  return (
    <div className={styles.cards}>
      {cards.map((card) => (
        <Card card={card} type="short" key={card.link} />
      ))}
    </div>
  );
};
