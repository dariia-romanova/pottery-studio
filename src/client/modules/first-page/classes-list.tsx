import useMediaQuery from "../../hooks/useMediaQuery";
import styles from "./classes-list.module.css";
import { Section } from "../../components/section/section";
import { Button } from "../../components/button/button";
import { Cards } from "../../components/card/cards";
import { CardType } from "../../components/card/card";

type ClassesListProps = {
  cardsList: CardType[],
  title: string,
  button: {
    link: string,
    text: string,
  }
}

export const ClassesList = ({ cardsList, title, button }: ClassesListProps) => {
  const isDesktop = useMediaQuery('(min-width: 960px)');
  const isTablet = useMediaQuery('(min-width: 620px)');

  const cardCounts = isDesktop ? 3 : isTablet ? 2 : 3;
  const cards = cardsList.slice(0, cardCounts);

  return (
    <Section title={title}>
      <div className={styles.workshops}>
        <Cards cards={cards}  />
      </div>
      <Button link={button.link} text={button.text}/>
    </Section>
  )
}