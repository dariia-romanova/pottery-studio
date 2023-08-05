import React from "react";
import style from "./h2.module.css"

type H2Props = {
  children: React.ReactNode;
}

export const H2 = ({ children }: H2Props) => {
  return (
    <h1 className={style.h2}>
      { children }
    </h1>
  );
};
