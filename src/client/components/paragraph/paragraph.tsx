import clsx from "clsx";
import styles from "./paragraph.module.css"

type ParagraphProps = {
  text: string;
  mobileCentered?: boolean;
}

export const Paragraph = ({ text, mobileCentered } : ParagraphProps) => {
  return (
    <p className={clsx(styles.paragraph, mobileCentered && styles.paragraph_mobile_centered)}>
      {text}
    </p>
  );
};
