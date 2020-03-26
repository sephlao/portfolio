import React from "react";
import { motion } from 'framer-motion';
const HeaderIcons = ({ icon }) => (
  <div className="header-icons">
    <motion.button
    whileHover={{ scale: 1.05 }}
    whileTap={{ scale: 0.9 }}
    className="header-icon">
      <svg
        width="20"
        height="21"
        viewBox="0 0 20 21"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M10 15.065C8.67392 15.065 7.40215 14.5382 6.46447 13.6005C5.52678 12.6629 5 11.3911 5 10.065C5 8.73892 5.52678 7.46715 6.46447 6.52947C7.40215 5.59179 8.67392 5.065 10 5.065C11.3261 5.065 12.5979 5.59179 13.5355 6.52947C14.4732 7.46715 15 8.73892 15 10.065C15 11.3911 14.4732 12.6629 13.5355 13.6005C12.5979 14.5382 11.3261 15.065 10 15.065ZM10 0.0650024C10.2652 0.0650024 10.5196 0.170359 10.7071 0.357896C10.8946 0.545432 11 0.799786 11 1.065V3.065C11 3.33022 10.8946 3.58457 10.7071 3.77211C10.5196 3.95965 10.2652 4.065 10 4.065C9.73478 4.065 9.48043 3.95965 9.29289 3.77211C9.10536 3.58457 9 3.33022 9 3.065V1.065C9 0.799786 9.10536 0.545432 9.29289 0.357896C9.48043 0.170359 9.73478 0.0650024 10 0.0650024ZM10 16.065C10.2652 16.065 10.5196 16.1704 10.7071 16.3579C10.8946 16.5454 11 16.7998 11 17.065V19.065C11 19.3302 10.8946 19.5846 10.7071 19.7721C10.5196 19.9596 10.2652 20.065 10 20.065C9.73478 20.065 9.48043 19.9596 9.29289 19.7721C9.10536 19.5846 9 19.3302 9 19.065V17.065C9 16.7998 9.10536 16.5454 9.29289 16.3579C9.48043 16.1704 9.73478 16.065 10 16.065ZM1 9.065H3C3.26522 9.065 3.51957 9.17036 3.70711 9.35789C3.89464 9.54543 4 9.79979 4 10.065C4 10.3302 3.89464 10.5846 3.70711 10.7721C3.51957 10.9596 3.26522 11.065 3 11.065H1C0.734784 11.065 0.48043 10.9596 0.292893 10.7721C0.105357 10.5846 0 10.3302 0 10.065C0 9.79979 0.105357 9.54543 0.292893 9.35789C0.48043 9.17036 0.734784 9.065 1 9.065ZM17 9.065H19C19.2652 9.065 19.5196 9.17036 19.7071 9.35789C19.8946 9.54543 20 9.79979 20 10.065C20 10.3302 19.8946 10.5846 19.7071 10.7721C19.5196 10.9596 19.2652 11.065 19 11.065H17C16.7348 11.065 16.4804 10.9596 16.2929 10.7721C16.1054 10.5846 16 10.3302 16 10.065C16 9.79979 16.1054 9.54543 16.2929 9.35789C16.4804 9.17036 16.7348 9.065 17 9.065ZM17.071 2.994C17.2585 3.18153 17.3638 3.43584 17.3638 3.701C17.3638 3.96617 17.2585 4.22047 17.071 4.408L15.657 5.822C15.5648 5.91751 15.4544 5.99369 15.3324 6.0461C15.2104 6.09851 15.0792 6.1261 14.9464 6.12725C14.8136 6.12841 14.6819 6.10311 14.559 6.05282C14.4361 6.00254 14.3245 5.92829 14.2306 5.8344C14.1367 5.7405 14.0625 5.62885 14.0122 5.50596C13.9619 5.38306 13.9366 5.25138 13.9377 5.1186C13.9389 4.98582 13.9665 4.8546 14.0189 4.7326C14.0713 4.61059 14.1475 4.50025 14.243 4.408L15.657 2.994C15.8445 2.80653 16.0988 2.70122 16.364 2.70122C16.6292 2.70122 16.8835 2.80653 17.071 2.994ZM5.757 14.308C5.94447 14.4955 6.04979 14.7498 6.04979 15.015C6.04979 15.2802 5.94447 15.5345 5.757 15.722L4.343 17.136C4.25075 17.2315 4.14041 17.3077 4.0184 17.3601C3.8964 17.4125 3.76518 17.4401 3.6324 17.4413C3.49962 17.4424 3.36794 17.4171 3.24505 17.3668C3.12215 17.3165 3.0105 17.2423 2.9166 17.1484C2.82271 17.0545 2.74846 16.9429 2.69818 16.82C2.6479 16.6971 2.6226 16.5654 2.62375 16.4326C2.6249 16.2998 2.65249 16.1686 2.7049 16.0466C2.75731 15.9246 2.83349 15.8142 2.929 15.722L4.343 14.308C4.53053 14.1205 4.78484 14.0152 5.05 14.0152C5.31516 14.0152 5.56947 14.1205 5.757 14.308ZM4.343 2.994L5.757 4.408C5.93916 4.5966 6.03995 4.84921 6.03767 5.1114C6.0354 5.3736 5.93023 5.62441 5.74482 5.80982C5.55941 5.99523 5.3086 6.1004 5.0464 6.10268C4.7842 6.10496 4.5316 6.00416 4.343 5.822L2.93 4.408C2.74784 4.2194 2.64705 3.9668 2.64933 3.7046C2.6516 3.4424 2.75677 3.19159 2.94218 3.00618C3.12759 2.82078 3.3784 2.71561 3.6406 2.71333C3.9028 2.71105 4.1554 2.81184 4.344 2.994H4.343ZM15.657 14.308L17.071 15.722C17.2532 15.9106 17.354 16.1632 17.3517 16.4254C17.3494 16.6876 17.2442 16.9384 17.0588 17.1238C16.8734 17.3092 16.6226 17.4144 16.3604 17.4167C16.0982 17.419 15.8456 17.3182 15.657 17.136L14.243 15.722C14.1475 15.6298 14.0713 15.5194 14.0189 15.3974C13.9665 15.2754 13.9389 15.1442 13.9377 15.0114C13.9366 14.8786 13.9619 14.7469 14.0122 14.624C14.0625 14.5012 14.1367 14.3895 14.2306 14.2956C14.3245 14.2017 14.4361 14.1275 14.559 14.0772C14.6819 14.0269 14.8136 14.0016 14.9464 14.0028C15.0792 14.0039 15.2104 14.0315 15.3324 14.0839C15.4544 14.1363 15.5648 14.2125 15.657 14.308Z"
          fill="#F9F871"
        />
      </svg>
    </motion.button>
  </div>
);

export default () => (
  <header className="header">
    <HeaderIcons />
  </header>
);
