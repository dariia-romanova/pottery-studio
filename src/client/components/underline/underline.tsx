import styles from './underline.module.css';

type UnderlineProps = {
  children: React.ReactNode,
}

export const Underline = ({ children }: UnderlineProps) => {
  return (
    <div className={styles.underline}>
      <div>
        {children}
      </div>
      <svg width="90" height="8" viewBox="0 0 90 8" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path className={styles.underline_path} d="M2 5.53457C5.85575 5.53457 9.58733 5.16279 13.4153 4.638C23.2434 3.29059 32.9969 2.94092 42.906 2.94092C51.5462 2.94092 60.1863 2.94092 68.8265 2.94092C73.1056 2.94092 77.697 3.38679 81.9388 2.78081C84.0211 2.48335 86.0715 1.5 88.1668 1.5" stroke="#1F1F1F" stroke-width="3" stroke-linecap="round"/>
      </svg>
    </div>
  );
};
