import { useInView } from "react-intersection-observer";
import styles from './classes-page.module.css';
import clsx from "clsx";

export const WorkshopsPageDecorations = () => {
  const { ref, inView } = useInView({});

  return (
    <div ref={ref}>
      <svg
        className={styles.worksops_decoration_text}
        width="530"
        height="370"
        viewBox="0 30 560 370"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          className={clsx(inView && styles.worksops_decoration_text_path, styles.worksops_decoration_text_path_1)}
          d="M101.772 172.969C139.921 163.993 186.684 123.901 176.578 80.9506C174.414 71.7525 168.757 61.5001 157.703 67.1268C144.294 73.9516 144.149 96.4726 142.116 108.984C136.761 141.941 129.004 174.885 127.37 208.306C127.042 215.007 127.985 220.867 129.494 227.279C129.755 228.39 130.236 232.641 130.07 229.408C129.818 224.491 132.58 218.916 133.49 214.112C133.682 213.1 139.148 189.275 143.957 191.875C149.342 194.786 147.397 216.363 148.433 221.163C152.158 238.422 164.945 219.437 170.047 212.303C173.788 207.074 177.203 205.12 178.002 198.362"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.worksops_decoration_text_path, styles.worksops_decoration_text_path_2)}
          d="M201.155 183.487C193.062 185.391 186.516 187.048 181.765 194.659C178.344 200.139 169.487 220.701 173.592 226.936C175.596 229.979 185.748 226.209 187.931 224.911C198.733 218.49 203.647 205.075 205.295 193.575C206.45 185.52 202.162 202.697 201.68 204.206C200.356 208.353 193.13 228.138 200.378 231.021C212.537 235.858 223.349 217.732 228.179 209.106"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.worksops_decoration_text_path, styles.worksops_decoration_text_path_3)}
          d="M229.7 179.828C234.447 200.004 238.355 201.048 240.843 221.609C242.177 232.636 241.112 215.93 241.512 211.942C241.922 207.854 244.462 174.863 252.223 177.27C255.218 178.198 256.612 185.88 257.92 188.222C260.866 193.497 261.288 200.294 267.804 202.435C280.212 206.512 287.885 190.266 285.473 180.013"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.worksops_decoration_text_path, styles.worksops_decoration_text_path_4)}
          d="M299.469 162.04C296.762 160.067 293.183 156.962 289.585 158.122C287.628 158.754 286.86 163.831 286.355 165.579C285.397 168.892 285.51 172.739 285.447 176.164C285.38 179.753 285.006 187.425 289.552 188.692C299.732 191.529 299.087 173.603 298.911 168.012C298.558 156.841 295.662 134.628 295.472 123.457C295.461 122.798 295.691 114.091 293.682 114.564C291.979 114.965 293.391 123.866 293.491 124.88C294.713 137.33 300.983 161.567 305.197 173.33C305.994 175.556 308.804 183.494 312.044 183.174C315.303 182.851 318.336 178.567 320.477 176.431C326.625 170.302 333.678 165.205 339.788 158.999C343.219 155.514 346.569 151.879 349.594 148.031C350.333 147.091 351.214 146.247 349.774 146.227" 
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.worksops_decoration_text_path, styles.worksops_decoration_text_path_5)}
          d="M290.693 234.323C292.307 241.182 293.92 248.041 295.534 254.9C295.925 256.563 299.038 270.999 300.112 266.468C303.143 253.679 301.252 239.293 304.985 226.7C305.836 223.832 307.658 227.541 307.897 228.557C309.24 234.263 311.156 238.081 314.318 242.99C315.646 245.053 320.318 254.97 322.777 249.728C325.538 243.844 324.683 236.402 325.584 230.1C325.685 229.396 326.714 222.763 327.523 223.734C329.562 226.179 331.796 249.524 335.951 247.865C339.009 246.644 341.831 233.868 343.041 230.666C344.576 226.602 345.857 222.429 347.594 218.462" stroke="#1F1F1F" strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.worksops_decoration_text_path, styles.worksops_decoration_text_path_6)}
          d="M366.552 201.791C365.472 197.199 358.686 198.84 355.485 199.692C349.434 201.303 345.016 203.172 346.615 209.967C347.434 213.45 349.841 222.512 354.696 221.743C359.209 221.029 359.45 217.392 360.668 213.32C361.498 210.545 362.104 204.747 362.104 204.747C362.104 204.747 362.438 206.264 362.428 207.034C362.4 209.133 363.343 210.736 365.365 211.523C370.398 213.481 382.024 214.308 384.952 208.538C386.081 206.314 391.549 196.519 389.631 194.213"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.worksops_decoration_text_path, styles.worksops_decoration_text_path_7)}
          d="M402.733 170.953C401.258 167.25 391.888 166.909 389.446 169.734C387.41 172.09 388.889 178.331 389.105 181.058C389.511 186.152 390.49 191.251 391.861 196.177C393.161 200.845 400.459 195.787 401.542 193.138C403.224 189.021 404.096 184.35 404.954 180.017C406.486 172.278 407.595 164.383 408.013 156.496C408.407 149.052 407.475 141.606 405.28 134.473C404.549 132.098 403.397 129.61 402.276 127.385C401.543 125.929 401.14 125.588 401.297 127.481C402.054 136.568 403.979 145.283 406.022 154.187C408.597 165.408 410.338 178.197 415.673 188.581C418.087 193.281 420.437 186.092 422.191 184.024C422.782 183.327 432.571 173.773 430.527 173.283"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.worksops_decoration_text_path, styles.worksops_decoration_text_path_8)}
          d="M425.475 168.252C435.695 165.848 443.099 152.715 441.447 142.62C440.802 138.679 437.386 136.991 433.667 137.957C428.421 139.321 427.889 146.764 427.766 151.197C427.588 157.619 429.332 164.388 431.174 170.504C432.227 173.999 434.429 178.015 438.683 177.5C440.673 177.259 442.337 176.198 443.898 175.012C449.312 170.903 454.56 166.525 459.84 162.247C465.213 157.894 472.231 153.115 475.477 146.843"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M39.5747 118.818C38.9992 118.674 38.7201 116.998 38.5715 116.612C37.3013 113.311 35.9397 110.043 34.8797 106.665C33.4305 102.046 32.6725 96.2984 33.6759 91.4627C35.0373 84.9018 41.4874 74.5552 48.6838 81.0741C55.845 87.561 55.3614 96.897 51.5731 105.02C49.7788 108.867 47.8391 112.816 45.7143 116.492C45.2628 117.273 44.0341 121.026 42.9856 121.325C42.1757 121.556 42.1028 121.091 42.1028 120.443C42.1028 119.439 43.2813 119.36 43.9286 118.778C46.2066 116.729 47.8848 114.198 49.9278 111.939C53.8198 107.635 59.2259 103.813 65.1364 103.376C71.676 102.891 77.488 102.766 82.2711 107.547C83.7756 109.051 88.0361 114.141 84.8393 115.93C82.6268 117.169 79.5755 117.454 77.1146 117.916C72.5519 118.771 67.8756 119.32 63.2503 119.7C58.1347 120.122 53.2416 120.543 48.2224 119.54C47.7525 119.446 45.5414 119.206 45.3733 118.618C45.0777 117.584 49.473 118.259 49.8074 118.297C59.5618 119.397 72.2049 120.656 79.2213 128.565C80.7895 130.333 82.8238 133.586 80.7462 135.785C79.2682 137.349 77.5199 137.587 75.6098 138.392C72.4436 139.727 69.2211 140.815 65.959 141.902C60.0471 143.871 53.0957 142.149 48.0819 138.653C43.2984 135.317 41.2612 130.45 38.411 125.597C38.204 125.244 36.6703 122.319 37.4881 123.511C38.589 125.116 39.3223 127.086 39.9359 128.926C41.9992 135.113 43.4225 141.769 42.7449 148.339C41.7531 157.955 27.7084 161.421 21.8782 153.975C14.753 144.874 19.6414 133.565 27.7369 126.76C29.3393 125.413 30.6691 123.775 32.2714 122.428C33.1978 121.649 34.0127 120.352 35.3212 120.262C36.21 120.201 38.8606 119.901 37.9696 119.901C36.2159 119.901 34.2797 120.563 32.5322 120.824C25.5099 121.869 18.5316 121.858 12.8494 116.953C9.28663 113.877 7.04224 109.905 4.76358 105.842C3.48783 103.568 1.73018 100.3 2.03486 97.5595C2.18257 96.2308 4.45841 95.2703 5.42569 94.6515C6.69854 93.8372 8.11064 93.7642 9.59902 93.9295C11.0265 94.088 12.2584 94.9462 13.4112 95.7144C14.4513 96.4075 15.9309 96.789 16.8221 97.6798C19.2664 100.123 22.054 101.97 24.4866 104.458C26.582 106.602 28.4224 109.156 30.7465 111.057C33.0576 112.947 35.6021 116.458 35.6021 119.54"
          stroke="#DDFA8A" 
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M505.147 114.422C507.279 112.015 507.435 108.829 503.487 110.922C501.263 112.101 498.648 114.375 501.119 116.565C502.503 117.79 506.003 115.698 506.105 113.907C506.152 113.064 501.312 116.191 504.863 114.742"
          stroke="#DDFA8A"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          d="M477.95 92.2584C477.498 91.8011 478.001 92.0416 478.46 91.7008C479.649 90.8197 480.128 89.5445 480.029 88.0794C479.835 85.2006 476.542 77.5312 473.211 80.6998C469.954 83.7982 468.134 86.7572 469.093 91.4072C469.753 94.611 470.807 95.2044 473.379 93.4336C474.439 92.7035 478.446 90.1377 477.758 88.4135C477.128 86.8337 476.208 84.426 474.569 86.0463C473.38 87.2214 472.979 92.4578 475.659 91.4446C477.37 90.7977 476.052 85.5208 475.106 85.5155"
          stroke="#DDFA8A"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.worksops_decoration_text_arrow)}
          d="M503 193C536.477 228.637 561.788 291.1 545.612 339.629C538.871 359.849 526.33 377.863 509.815 390.708C508.63 391.629 506.02 395.664 504.514 395.664C503.053 395.664 506.329 386.718 506.442 386.302C508.023 380.451 507.956 374.956 507.956 368.954"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.worksops_decoration_text_arrowTip)}
          d="M506.717 396.214C523.914 396.214 540.343 388.78 557.521 388.78"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
