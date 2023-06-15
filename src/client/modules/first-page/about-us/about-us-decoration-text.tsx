import clsx from 'clsx';
import styles from './about-us.module.css';
import { useInView } from 'react-intersection-observer';

export const AboutUsDecorationText = () => {
  const { ref, inView } = useInView({});

  return (
    <div ref={ref}>
      <svg
        width="539"
        height="506"
        viewBox="0 0 539 506"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M481.575 41.8181C480.999 41.6742 480.72 39.9981 480.572 39.612C479.301 36.3109 477.94 33.0428 476.88 29.6646C475.43 25.0457 474.672 19.2984 475.676 14.4627C477.037 7.90185 483.487 -2.44483 490.684 4.07407C497.845 10.561 497.361 19.897 493.573 28.02C491.779 31.8674 489.839 35.8158 487.714 39.4916C487.263 40.2729 486.034 44.0255 484.986 44.325C484.176 44.5563 484.103 44.0913 484.103 43.4425C484.103 42.4394 485.281 42.3603 485.929 41.7779C488.207 39.7287 489.885 37.1984 491.928 34.9391C495.82 30.635 501.226 26.8131 507.136 26.3755C513.676 25.8913 519.488 25.766 524.271 30.547C525.776 32.0509 530.036 37.1406 526.839 38.9301C524.627 40.1685 521.576 40.4544 519.115 40.9156C514.552 41.7707 509.876 42.3198 505.25 42.7005C500.135 43.1216 495.242 43.5435 490.222 42.54C489.752 42.4461 487.541 42.2058 487.373 41.6175C487.078 40.5836 491.473 41.2589 491.807 41.2966C501.562 42.3974 514.205 43.6563 521.221 51.5649C522.79 53.3325 524.824 56.5859 522.746 58.7848C521.268 60.349 519.52 60.5865 517.61 61.392C514.444 62.7271 511.221 63.8148 507.959 64.9017C502.047 66.8714 495.096 65.1491 490.082 61.6527C485.298 58.3169 483.261 53.4505 480.411 48.5967C480.204 48.2442 478.67 45.3189 479.488 46.511C480.589 48.1158 481.322 50.0859 481.936 51.9259C483.999 58.113 485.422 64.7693 484.745 71.3394C483.753 80.9555 469.708 84.4213 463.878 76.9749C456.753 67.8744 461.641 56.5646 469.737 49.7599C471.339 48.4131 472.669 46.7749 474.271 45.428C475.198 44.6494 476.013 43.3522 477.321 43.262C478.21 43.2008 480.861 42.901 479.97 42.901C478.216 42.901 476.28 43.5634 474.532 43.8236C467.51 44.869 460.532 44.8582 454.849 39.9529C451.287 36.8773 449.042 32.9052 446.764 28.8423C445.488 26.5676 443.73 23.3005 444.035 20.5595C444.183 19.2308 446.458 18.2703 447.426 17.6515C448.699 16.8372 450.111 16.7642 451.599 16.9295C453.026 17.088 454.258 17.9462 455.411 18.7144C456.451 19.4075 457.931 19.789 458.822 20.6798C461.266 23.123 464.054 24.9705 466.487 27.4585C468.582 29.6017 470.422 32.1559 472.747 34.0567C475.058 35.9467 477.602 39.4576 477.602 42.54"
          stroke="#F59ADB"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.aboutUs_decoration_text_arrow)}
          d="M332 348C332 371.174 347.98 392.141 362.527 408.82C383.527 432.898 404.784 456.934 434.165 470.575C457.337 481.333 479.862 484.344 505.044 486.423C514.534 487.207 524.116 488.885 533.641 489.055C534.977 489.079 538.311 488.006 536.214 489.055"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
          <path
          className={clsx(inView && styles.aboutUs_decoration_text_arrowTip)}
            d="M506.74 464.844C507.201 468.994 515.768 474.675 519.372 476.657C524.973 479.738 529.67 485.584 535.571 487.944C537.187 488.591 532.414 489.485 530.717 489.874C525.01 491.182 520.149 492.71 515.161 495.897C513.433 497.001 502.26 505.359 501.477 503.792"
            stroke="#1F1F1F"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            className={clsx(inView && styles.aboutUs_decoration_text_path, styles.aboutUs_decoration_text_path_1)}
            d="M20.7717 252.969C58.9206 243.993 105.684 203.901 95.5783 160.951C93.4141 151.753 87.7571 141.5 76.7026 147.127C63.2942 153.952 63.1486 176.473 61.1158 188.984C55.7612 221.941 48.0043 254.885 46.3695 288.306C46.0417 295.007 46.985 300.867 48.4936 307.279C48.7551 308.39 49.2357 312.641 49.0699 309.408C48.8179 304.491 51.5805 298.916 52.4903 294.112C52.6818 293.1 58.1478 269.275 62.9571 271.875C68.3422 274.786 66.3968 296.363 67.4327 301.163C71.1576 318.422 83.9451 299.437 89.0473 292.303C92.7878 287.074 96.2029 285.12 97.002 278.362"
            stroke="#1F1F1F"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            className={clsx(inView && styles.aboutUs_decoration_text_path, styles.aboutUs_decoration_text_path_2)}
            d="M120.155 263.487C112.062 265.391 105.516 267.048 100.765 274.659C97.3436 280.139 88.4873 300.701 92.5922 306.936C94.5957 309.979 104.748 306.209 106.931 304.911C117.733 298.49 122.647 285.075 124.295 273.575C125.45 265.52 121.162 282.697 120.68 284.206C119.356 288.353 112.13 308.138 119.378 311.021C131.537 315.858 142.349 297.732 147.179 289.106"
            stroke="#1F1F1F"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            className={clsx(inView && styles.aboutUs_decoration_text_path, styles.aboutUs_decoration_text_path_3)}
            d="M148.7 259.828C153.447 280.004 157.355 281.048 159.843 301.609C161.177 312.636 160.112 295.93 160.512 291.942C160.922 287.854 163.462 254.863 171.223 257.27C174.218 258.198 175.612 265.88 176.92 268.222C179.866 273.497 180.288 280.294 186.804 282.435C199.212 286.512 206.885 270.266 204.473 260.013"
            stroke="#1F1F1F"
            strokeWidth="3"
            strokeLinecap="round"
          />
        <path
          className={clsx(inView && styles.aboutUs_decoration_text_path, styles.aboutUs_decoration_text_path_4)}
          d="M218.469 242.04C215.762 240.067 212.183 236.962 208.585 238.122C206.628 238.754 205.86 243.831 205.355 245.579C204.397 248.892 204.51 252.739 204.447 256.164C204.38 259.753 204.006 267.425 208.552 268.692C218.732 271.529 218.087 253.603 217.911 248.012C217.558 236.841 214.662 214.628 214.472 203.457C214.461 202.798 214.691 194.091 212.682 194.564C210.979 194.965 212.391 203.866 212.491 204.88C213.713 217.33 219.983 241.567 224.197 253.33C224.994 255.556 227.804 263.494 231.044 263.174C234.303 262.851 237.336 258.567 239.477 256.431C245.625 250.302 252.678 245.205 258.788 238.999C262.219 235.514 265.569 231.879 268.594 228.031C269.333 227.091 270.214 226.247 268.774 226.227"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
          />
          <path
            className={clsx(inView && styles.aboutUs_decoration_text_path, styles.aboutUs_decoration_text_path_5)}
            d="M209.693 314.323C211.307 321.182 212.92 328.041 214.534 334.9C214.925 336.563 218.038 350.999 219.112 346.468C222.143 333.679 220.252 319.293 223.985 306.7C224.836 303.832 226.658 307.541 226.897 308.557C228.24 314.263 230.156 318.081 233.318 322.99C234.646 325.053 239.318 334.97 241.777 329.728C244.538 323.844 243.683 316.402 244.584 310.1C244.685 309.396 245.714 302.763 246.523 303.734C248.562 306.179 250.796 329.524 254.951 327.865C258.009 326.644 260.831 313.868 262.041 310.666C263.576 306.602 264.857 302.429 266.594 298.462"
            stroke="#1F1F1F"
            strokeWidth="3"
            strokeLinecap="round"
          />
          <path
            className={clsx(inView && styles.aboutUs_decoration_text_path, styles.aboutUs_decoration_text_path_6)}
            d="M285.552 281.791C284.472 277.199 277.686 278.84 274.485 279.692C268.434 281.303 264.016 283.172 265.615 289.967C266.434 293.45 268.841 302.512 273.696 301.743C278.209 301.029 278.45 297.392 279.668 293.32C280.498 290.545 281.104 284.747 281.104 284.747C281.104 284.747 281.438 286.264 281.428 287.034C281.4 289.133 282.343 290.736 284.365 291.523C289.398 293.481 301.024 294.308 303.952 288.538C305.081 286.314 310.549 276.519 308.631 274.213" stroke="#1F1F1F"
            strokeWidth="3"
            strokeLinecap="round"
          />
        <path
            className={clsx(inView && styles.aboutUs_decoration_text_path, styles.aboutUs_decoration_text_path_8)}
          d="M344.475 248.252C354.695 245.848 362.099 232.715 360.447 222.62C359.802 218.679 356.386 216.991 352.667 217.957C347.421 219.321 346.889 226.764 346.766 231.197C346.588 237.619 348.332 244.388 350.174 250.504C351.227 253.999 353.429 258.015 357.683 257.5C359.673 257.259 361.337 256.198 362.898 255.012C368.312 250.903 373.56 246.525 378.84 242.247C384.213 237.894 391.231 233.115 394.477 226.843"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
        <path
          className={clsx(inView && styles.aboutUs_decoration_text_path, styles.aboutUs_decoration_text_path_7)}
          d="M321.733 250.953C320.258 247.25 310.888 246.909 308.446 249.734C306.41 252.09 307.889 258.331 308.105 261.058C308.511 266.152 309.49 271.251 310.861 276.177C312.161 280.845 319.459 275.787 320.542 273.138C322.224 269.021 323.096 264.35 323.954 260.017C325.486 252.278 326.595 244.383 327.013 236.496C327.407 229.052 326.475 221.606 324.28 214.473C323.549 212.098 322.397 209.61 321.276 207.385C320.543 205.929 320.14 205.588 320.297 207.481C321.054 216.568 322.979 225.283 325.022 234.187C327.597 245.408 329.338 258.197 334.673 268.581C337.087 273.281 339.437 266.092 341.191 264.024C341.782 263.327 351.571 253.773 349.527 253.283"
          stroke="#1F1F1F"
          strokeWidth="3"
          strokeLinecap="round"
        />
      </svg>
    </div>
  );
};
