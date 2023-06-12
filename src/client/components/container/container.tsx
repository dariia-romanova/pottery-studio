import React, { FC } from "react";
import styles from "./container.module.css";

type ConteinerProps = {
  children: React.ReactNode,
};

export const Container = ({ children } : ConteinerProps) => {
  return (
    <div className={styles.container}>
      {children}
    </div>
  );
};
