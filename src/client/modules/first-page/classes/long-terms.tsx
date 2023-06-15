import { longTermsList } from "../../../constants/long-terms";
import { ClassesList } from "./classes-list";

export const LongTerms = () => {
  return (
    <ClassesList
      cardsList={longTermsList}
      title="long-term courses"
      button= {{
        link: "./long-term-classes",
        text: 'all courses'
      }}
      baseLink="/long-term-classes"
    />
  );
};
