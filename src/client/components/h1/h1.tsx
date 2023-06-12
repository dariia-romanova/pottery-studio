import style from "./h1.module.css"

type H1Props = {
  title: string;
}

export const H1 = ({ title }: H1Props) => {
  return (
    <h1 className={style.h1}>{title}</h1>
  );
};
