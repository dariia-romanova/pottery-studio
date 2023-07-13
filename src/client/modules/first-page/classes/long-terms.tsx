import { useFetch } from "../../../hooks/useFetch";
import { ClassesList } from "./classes-list";

export const LongTerms = () => {
  const { data, loading } = useFetch("api/courses?type=longterms");

  if (loading) {
    return (
      <>Loading long-term course</>
    );
  };

  return (
    <ClassesList
      cardsList={data}
      title="long-term courses"
      button= {{
        link: "./long-term-classes",
        text: 'all courses'
      }}
      baseLink="/long-term-classes"
    />
  );
};
