import { useInView } from 'react-intersection-observer';
import styles from './coworking.module.css';
import clsx from 'clsx';

export const CoworkingDecoration = () => {
  const { ref, inView } = useInView({});

  return (
    <div ref={ref}>
      <svg width="353" height="155" viewBox="0 0 353 155" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          className={clsx(inView && styles.coworking_decoration_path)}
          d="M26.4056 2C26.4056 41.4212 17.9355 78.7386 8.23699 117.473C5.53694 128.257 2 139.751 2 150.85C2 159.385 16.3067 139.82 17.1857 138.826C44.7304 107.697 75.441 78.2285 106.402 49.06C107.093 48.4083 119.147 35.6511 119.147 39.7309C119.147 50.5774 113.06 61.2649 119.282 71.968C127.68 86.4135 134.384 84.256 149.518 76.1142C170.609 64.7676 191.539 53.3431 211.21 40.5601C219.276 35.3189 228.787 26.0115 239.548 23.7678C239.865 23.7017 243.384 64.6024 243.48 67.0961C243.835 76.331 246.182 91.1125 236.836 98.504C223.075 109.387 199.911 97.4928 188.567 90.5225C170.609 79.4878 143.907 62.1235 160.365 42.6333C168.197 33.3587 195.011 18.5105 209.448 28.9506C228.514 42.7392 220.169 66.496 222.193 84.0958C225.127 109.616 246.553 86.9683 256.903 76.8398C268.552 65.4402 278.238 68.3717 287.41 79.3276C300.467 94.9253 308.505 77.6761 321.442 69.5839C336.16 60.3777 319.539 93.1114 318.052 96.0163C313.997 103.939 328.087 92.6007 331.34 90.8334C337.376 87.5544 344.021 84.0084 351 82.23"
          stroke="#161616"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};