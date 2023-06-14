import React from "react";
import style from "./h1.module.css"

type H1Props = {
  children: React.ReactNode;
}

export const H1 = ({ children }: H1Props) => {
  return (
    <h1 className={style.h1}>
      { children }
    </h1>
  );
};
