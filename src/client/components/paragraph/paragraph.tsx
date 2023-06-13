import clsx from "clsx";
import styles from "./paragraph.module.css"

type ParagraphProps = {
  text: string;
  mobileCentered?: boolean;
  className?: string;
}

export const Paragraph = ({ text, mobileCentered, className } : ParagraphProps) => {
  return (
    <p className={clsx(styles.paragraph, mobileCentered && styles.paragraph_mobile_centered, className)}>
      {text}
    </p>
  );
};
