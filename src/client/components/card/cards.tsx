import styles from './cards.module.css';
import { Card, CardType } from "./card";
import clsx from 'clsx';
import useMediaQuery from '../../hooks/useMediaQuery';

type CardsProps = {
  cards: CardType[],
  type: 'short' | 'extended';
  baseLink: string;
};

export const Cards = ({ cards, type, baseLink }: CardsProps) => {
  if (!cards) {
    return <></>
  }

  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isTablet = useMediaQuery('(min-width: 620px)');
  const cardCounts = isDesktop ? 3 : isTablet ? 2 : 3;

  const prepearedCards = cards.slice(0, cardCounts);


  return (
    <div className={clsx(
      styles.cards,
      type === 'short' && styles.cards_short,
      type === 'extended' && styles.cards_extended
    )}>
      {prepearedCards.map((card) => (
        <Card card={card} type={type} key={card.slug} baseLink={baseLink} />
      ))}
    </div>
  );
};
