import styles from "./classes-list.module.css";
import { Section } from "../../../components/section/section";
import { Button } from "../../../components/button/button";
import { Cards } from "../../../components/card/cards";
import { CardType } from "../../../components/card/card";
import { Loading } from "../../../components/loading/loading";

type ClassesListProps = {
  cardsList: CardType[],
  title: string,
  button: {
    link: string,
    text: string,
  },
  baseLink: string,
  loading: boolean,
}

export const ClassesList = ({ cardsList, title, button, baseLink, loading }: ClassesListProps) => {

  return (
    <Section title={title}>
      <div className={styles.workshops}>
        {loading ? (
          <div>
            <Loading />
          </div>
        ) : (
          <Cards cards={cardsList} type="short" baseLink={baseLink} />
        )}
      </div>
      <Button link={button.link} text={button.text}/>
    </Section>
  )
}