import * as React from "react";

import { IconSvgProps } from "@/types";

export const LibraryIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <g clipPath="url(#clip0_2022_2166)">
      <path
        d="M11.562 12.3567V29.6435"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.02054"
      />
      <path
        d="M17.3243 12.3567V29.6435"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.02054"
      />
      <path
        d="M23.0865 29.6435V12.3567L28.8488 16.346V29.6435H23.0865Z"
        stroke="currentColor"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth="2.02054"
      />
    </g>
    <defs>
      <clipPath id="clip0_2022_2166">
        <rect
          fill="white"
          height="40.4108"
          transform="translate(0 0.794556)"
          width="40.4108"
        />
      </clipPath>
    </defs>
  </svg>
);

export const PinIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 35 35"
    width={size || width}
    {...props}
  >
    <path
      d="M20.7741 9.60523L19.4595 8.29062M20.7741 9.60523L14.9709 15.4085C14.8643 15.5151 14.725 15.5829 14.5753 15.6011L12.1907 15.891C11.6324 15.9589 11.3974 16.6399 11.7951 17.0376L15.1976 20.4402M20.7741 9.60523L26.0326 14.8636M27.3472 16.1782L26.0326 14.8636M26.0326 14.8636L20.2293 20.6669C20.1227 20.7735 20.0549 20.9128 20.0367 21.0625L19.7468 23.4471C19.6789 24.0054 18.9978 24.2404 18.6002 23.8427L15.1976 20.4402M15.1976 20.4402L10.7218 24.916"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.73221"
    />
  </svg>
);

export const HideIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 35 35"
    width={size || width}
    {...props}
  >
    <path
      d="M12.0344 11.6277C13.4674 10.2927 15.3881 9.47721 17.5 9.47721C21.9298 9.47721 25.5208 13.0683 25.5208 17.498C25.5208 19.2695 24.9473 20.9057 23.975 22.2328L12.0344 11.6277ZM11.0614 12.714L23.0103 23.3265C21.5727 24.6863 19.6339 25.5189 17.5 25.5189C13.0702 25.5189 9.47917 21.9278 9.47917 17.498C9.47917 15.7046 10.0671 14.0498 11.0614 12.714Z"
      stroke="currentColor"
      strokeWidth="1.45833"
    />
  </svg>
);

export const FavouriteIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M22.0692 14.3895L20.2054 16.1954L18.3415 14.3895C16.3872 12.4958 13.252 12.6004 11.4282 14.62C9.65841 16.5798 9.41476 19.5152 11.0173 21.6139C11.2143 21.8718 11.4079 22.1188 11.5922 22.3449C12.7586 23.7758 15.3036 26.2748 16.5788 27.6159C17.5209 28.6067 18.3677 29.433 19.0057 30.0349C19.6794 30.6705 20.7193 30.6566 21.3943 30.0224C22.5707 28.917 24.3746 27.1953 25.6453 25.8589C26.9204 24.5178 27.6521 23.7758 28.8186 22.3449C29.0028 22.1188 29.1965 21.8718 29.3934 21.6139C30.996 19.5152 30.7523 16.5798 28.9826 14.62C27.1587 12.6004 24.0236 12.4958 22.0692 14.3895Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.02054"
    />
  </svg>
);

export const SaveIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M12.3243 12.6332V28.937C12.3243 29.8804 13.3907 30.4291 14.1583 29.8808L19.095 26.3546C19.9016 25.7785 20.985 25.7785 21.7916 26.3546L26.7283 29.8808C27.4959 30.4291 28.5623 29.8804 28.5623 28.937V12.6332C28.5623 11.352 27.5237 10.3135 26.2426 10.3135H14.644C13.3629 10.3135 12.3243 11.352 12.3243 12.6332Z"
      stroke="currentColor"
      strokeWidth="2.3197"
    />
  </svg>
);

export const FolderIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M30.8324 26.3838C30.8324 28.0406 29.4893 29.3838 27.8324 29.3838H11.8324C10.1755 29.3838 8.8324 28.0406 8.8324 26.3838V14.1838V13.8838C8.8324 12.2269 10.1755 10.8838 11.8324 10.8838H16.192C17.2142 10.8838 18.166 11.4042 18.7177 12.2648L19.0625 12.8028C19.6142 13.6633 20.566 14.1838 21.5882 14.1838H27.8324C29.4893 14.1838 30.8324 15.5269 30.8324 17.1838V26.3838Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const BookIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M20.3297 31.2056L11.7921 28.823C10.9276 28.5817 10.3297 27.7941 10.3297 26.8966V13.7241C10.3297 12.4365 11.5286 11.4844 12.7827 11.776L18.7827 13.1714C19.6886 13.3821 20.3297 14.1894 20.3297 15.1194V31.2056ZM20.3297 31.2056L28.8673 28.823C29.7318 28.5817 30.3297 27.7941 30.3297 26.8966V13.7881C30.3297 12.4804 29.0954 11.5245 27.8294 11.8517L23.1297 13.066"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2"
    />
  </svg>
);

export const HomeFilledIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M2.10266 10.2266V17.7351C2.10266 18.665 2.85652 19.4188 3.78644 19.4188H7.15401C7.72019 19.4475 8.19496 18.9962 8.19496 18.4293V13.5219C8.19496 12.5962 8.94219 11.8441 9.86785 11.8382L14.6554 11.8072C15.5895 11.8011 16.35 12.5568 16.35 13.4909V18.5122C16.35 19.0129 16.756 19.4188 17.2567 19.4188H20.6243C21.5542 19.4188 22.3081 18.665 22.3081 17.7351V10.2266C22.3081 9.73131 22.09 9.26114 21.7119 8.94122L13.293 1.81752C12.6652 1.28631 11.7455 1.28631 11.1177 1.81752L2.69882 8.94122C2.32072 9.26114 2.10266 9.73131 2.10266 10.2266Z"
      fill="currentColor"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.3573"
    />
  </svg>
);
export const HomeIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M25.2566 29.4188H28.6242C29.5541 29.4188 30.3079 28.665 30.3079 27.7351V20.2266C30.3079 19.7313 30.0899 19.2611 29.7118 18.9412L21.2929 11.8175C20.6651 11.2863 19.7454 11.2863 19.1176 11.8175L10.6987 18.9412C10.3206 19.2611 10.1025 19.7313 10.1025 20.2266V27.7351C10.1025 28.665 10.8564 29.4188 11.7863 29.4188H15.1539"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.3573"
    />
  </svg>
);

export const StarIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M20.0864 32.1759L20.5902 30.3817C21.8157 26.0163 25.2271 22.6049 29.5925 21.3793L31.3867 20.8756L29.5925 20.3719C25.2271 19.1463 21.8157 15.7349 20.5902 11.3696L20.0864 9.5753L19.5827 11.3696C18.3572 15.7349 14.9457 19.1463 10.5804 20.3719L8.78611 20.8756L10.5804 21.3793C14.9457 22.6049 18.3572 26.0163 19.5827 30.3816L20.0864 32.1759Z"
      stroke="currentColor"
      strokeWidth="2"
    />
  </svg>
);

export const ArtistIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M23.573 13.757C23.573 15.6168 22.0653 17.1245 20.2055 17.1245C18.3456 17.1245 16.8379 15.6168 16.8379 13.757C16.8379 11.8971 18.3456 10.3894 20.2055 10.3894C22.0653 10.3894 23.573 11.8971 23.573 13.757Z"
      stroke="currentColor"
      strokeWidth="2.02054"
    />
    <path
      d="M16.8379 20.4922L13.2861 22.86C12.3493 23.4846 11.7866 24.5361 11.7866 25.662V27.3396C11.7866 28.2075 12.4902 28.9111 13.3581 28.9111H20.2055"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.02054"
    />
    <path
      d="M27.7825 13.7571V21.3341M27.7825 21.3341V25.0971C27.7825 25.8462 27.249 26.4996 26.5003 26.476C25.262 26.437 23.5731 25.9929 23.5731 23.8598C23.5731 20.4922 27.7825 21.3341 27.7825 21.3341Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.68378"
    />
  </svg>
);

export const MicrophoneIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M19.9314 14.2415V20.1709C19.9314 22.627 21.9224 24.618 24.3785 24.618C26.8345 24.618 28.8255 22.627 28.8255 20.1709V19.1827V14.2415C28.8255 11.7855 26.8345 9.79443 24.3785 9.79443C21.9224 9.79443 19.9314 11.7855 19.9314 14.2415Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.016"
    />
    <path
      d="M15.9784 20.6648C15.9784 20.6648 16.9666 28.5707 24.3784 28.5707M24.3784 28.5707C31.7902 28.5707 32.7784 20.6648 32.7784 20.6648M24.3784 28.5707V32.0295"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.016"
    />
    <path
      d="M7.57837 14.8345H13.4584"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.016"
    />
    <path
      d="M7.57837 21.5544H11.7784"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.016"
    />
    <path
      d="M7.57837 28.2744H13.4584"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.016"
    />
  </svg>
);

export const MusicIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <circle
      cx="20.2054"
      cy="20.8488"
      r="2.75528"
      stroke="currentColor"
      strokeWidth="2.02054"
    />
    <path
      d="M20.2053 30.9514C14.6257 30.9514 10.1026 26.4282 10.1026 20.8487C10.1026 15.2691 14.6257 10.746 20.2053 10.746C23.1179 10.746 25.7427 11.9785 27.5864 13.9505"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.02054"
    />
    <path
      d="M29.2959 18.2217V25.7987M29.2959 25.7987V29.5617C29.2959 30.3108 28.7624 30.9642 28.0136 30.9406C26.7754 30.9016 25.0864 30.4575 25.0864 28.3244C25.0864 24.9568 29.2959 25.7987 29.2959 25.7987Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.68378"
    />
  </svg>
);

export const PlaylistIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <rect
      height="20"
      rx="3"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="2"
      transform="matrix(1 0 0 -1 10.0757 31.7405)"
      width="20"
    />
    <path
      d="M12.0757 11.7405H28.0757V11.7405C28.0757 10.0836 26.7325 8.74048 25.0757 8.74048H15.0757C13.4188 8.74048 12.0757 10.0836 12.0757 11.7405V11.7405Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
    <path
      d="M20.5883 22.6964V17.3655C20.5883 17.0203 20.8681 16.7405 21.2133 16.7405H23.3297M20.5883 22.6964V25.7134C20.5883 26.2682 20.1944 26.7517 19.6397 26.7393C18.6777 26.7179 17.3297 26.3842 17.3297 24.6817C17.3297 22.0346 20.5883 22.6964 20.5883 22.6964Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.5"
    />
  </svg>
);

export const DiscordIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 41 40"
      width={size || width}
      {...props}
    >
      <path
        d="M14.82 4.26a10.14 10.14 0 0 0-.53 1.1 14.66 14.66 0 0 0-4.58 0 10.14 10.14 0 0 0-.53-1.1 16 16 0 0 0-4.13 1.3 17.33 17.33 0 0 0-3 11.59 16.6 16.6 0 0 0 5.07 2.59A12.89 12.89 0 0 0 8.23 18a9.65 9.65 0 0 1-1.71-.83 3.39 3.39 0 0 0 .42-.33 11.66 11.66 0 0 0 10.12 0q.21.18.42.33a10.84 10.84 0 0 1-1.71.84 12.41 12.41 0 0 0 1.08 1.78 16.44 16.44 0 0 0 5.06-2.59 17.22 17.22 0 0 0-3-11.59 16.09 16.09 0 0 0-4.09-1.35zM8.68 14.81a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.93 1.93 0 0 1 1.8 2 1.93 1.93 0 0 1-1.8 2zm6.64 0a1.94 1.94 0 0 1-1.8-2 1.93 1.93 0 0 1 1.8-2 1.92 1.92 0 0 1 1.8 2 1.92 1.92 0 0 1-1.8 2z"
        fill="currentColor"
      />
    </svg>
  );
};

export const TwitterIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 41 40"
      width={size || width}
      {...props}
    >
      <path
        d="M19.633 7.997c.013.175.013.349.013.523 0 5.325-4.053 11.461-11.46 11.461-2.282 0-4.402-.661-6.186-1.809.324.037.636.05.973.05a8.07 8.07 0 0 0 5.001-1.721 4.036 4.036 0 0 1-3.767-2.793c.249.037.499.062.761.062.361 0 .724-.05 1.061-.137a4.027 4.027 0 0 1-3.23-3.953v-.05c.537.299 1.16.486 1.82.511a4.022 4.022 0 0 1-1.796-3.354c0-.748.199-1.434.548-2.032a11.457 11.457 0 0 0 8.306 4.215c-.062-.3-.1-.611-.1-.923a4.026 4.026 0 0 1 4.028-4.028c1.16 0 2.207.486 2.943 1.272a7.957 7.957 0 0 0 2.556-.973 4.02 4.02 0 0 1-1.771 2.22 8.073 8.073 0 0 0 2.319-.624 8.645 8.645 0 0 1-2.019 2.083z"
        fill="currentColor"
      />
    </svg>
  );
};

export const GithubIcon: React.FC<IconSvgProps> = ({
  size = 40.41,
  width,
  height,
  ...props
}) => {
  return (
    <svg
      height={size || height}
      viewBox="0 0 41 40"
      width={size || width}
      {...props}
    >
      <path
        clipRule="evenodd"
        d="M12.026 2c-5.509 0-9.974 4.465-9.974 9.974 0 4.406 2.857 8.145 6.821 9.465.499.09.679-.217.679-.481 0-.237-.008-.865-.011-1.696-2.775.602-3.361-1.338-3.361-1.338-.452-1.152-1.107-1.459-1.107-1.459-.905-.619.069-.605.069-.605 1.002.07 1.527 1.028 1.527 1.028.89 1.524 2.336 1.084 2.902.829.091-.645.351-1.085.635-1.334-2.214-.251-4.542-1.107-4.542-4.93 0-1.087.389-1.979 1.024-2.675-.101-.253-.446-1.268.099-2.64 0 0 .837-.269 2.742 1.021a9.582 9.582 0 0 1 2.496-.336 9.554 9.554 0 0 1 2.496.336c1.906-1.291 2.742-1.021 2.742-1.021.545 1.372.203 2.387.099 2.64.64.696 1.024 1.587 1.024 2.675 0 3.833-2.33 4.675-4.552 4.922.355.308.675.916.675 1.846 0 1.334-.012 2.41-.012 2.737 0 .267.178.577.687.479C19.146 20.115 22 16.379 22 11.974 22 6.465 17.535 2 12.026 2z"
        fill="currentColor"
        fillRule="evenodd"
      />
    </svg>
  );
};

export const MoonFilledIcon = ({
  size = 40.41,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 01-1.88.13 8.409 8.409 0 01-5.91-2.82 8.068 8.068 0 01-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 00-6.32 10.21 10.475 10.475 0 007.04 8.99 10 10 0 002.89.55c.16.01.32.02.48.02a10.5 10.5 0 008.47-4.27c.67-.93.49-1.519.32-1.79z"
      fill="currentColor"
    />
  </svg>
);

export const SunFilledIcon = ({
  size = 40.41,
  width,
  height,
  ...props
}: IconSvgProps) => (
  <svg
    aria-hidden="true"
    focusable="false"
    height={size || height}
    role="presentation"
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <g fill="currentColor">
      <path d="M19 12a7 7 0 11-7-7 7 7 0 017 7z" />
      <path d="M12 22.96a.969.969 0 01-1-.96v-.08a1 1 0 012 0 1.038 1.038 0 01-1 1.04zm7.14-2.82a1.024 1.024 0 01-.71-.29l-.13-.13a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.984.984 0 01-.7.29zm-14.28 0a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a1 1 0 01-.7.29zM22 13h-.08a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zM2.08 13H2a1 1 0 010-2 1.038 1.038 0 011.04 1 .969.969 0 01-.96 1zm16.93-7.01a1.024 1.024 0 01-.71-.29 1 1 0 010-1.41l.13-.13a1 1 0 011.41 1.41l-.13.13a.984.984 0 01-.7.29zm-14.02 0a1.024 1.024 0 01-.71-.29l-.13-.14a1 1 0 011.41-1.41l.13.13a1 1 0 010 1.41.97.97 0 01-.7.3zM12 3.04a.969.969 0 01-1-.96V2a1 1 0 012 0 1.038 1.038 0 01-1 1.04z" />
    </g>
  </svg>
);

export const SearchIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M24.7356 25.1555C26.2732 23.5871 27.2213 21.4385 27.2213 19.0686C27.2213 14.2661 23.3281 10.3729 18.5256 10.3729C13.7232 10.3729 9.82999 14.2661 9.82999 19.0686C9.82999 23.8711 13.7232 27.7642 18.5256 27.7642C20.9582 27.7642 23.1574 26.7654 24.7356 25.1555ZM24.7356 25.1555L29.83 30.3729"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.02054"
    />
  </svg>
);

export const GearIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M23.0298 9.62158H18.7971C18.5149 9.62158 18.2703 9.71325 18.0634 9.89658C17.8565 10.0799 17.7342 10.3091 17.6966 10.5841L17.3579 13.1416C17.1134 13.2332 16.8831 13.3432 16.6672 13.4716C16.4504 13.5999 16.2386 13.7374 16.0317 13.8841L13.5767 12.8941C13.3133 12.8024 13.05 12.7932 12.7866 12.8666C12.5232 12.9399 12.3163 13.0957 12.1658 13.3341L10.0776 16.8816C9.92713 17.1199 9.8801 17.3766 9.93654 17.6516C9.99298 17.9266 10.1341 18.1466 10.3598 18.3116L12.4762 19.8791C12.4574 20.0074 12.448 20.1313 12.448 20.2509V20.9934C12.448 21.1122 12.4574 21.2357 12.4762 21.3641L10.3598 22.9316C10.1341 23.0966 9.99298 23.3166 9.93654 23.5916C9.8801 23.8666 9.92713 24.1232 10.0776 24.3616L12.1658 27.9091C12.2975 28.1657 12.4995 28.3263 12.7719 28.3909C13.0451 28.4547 13.3133 28.4407 13.5767 28.3491L16.0317 27.3591C16.2386 27.5057 16.455 27.6432 16.6807 27.7716C16.9065 27.8999 17.1322 28.0099 17.3579 28.1016L17.6966 30.6591C17.7342 30.9341 17.8565 31.1632 18.0634 31.3466C18.2703 31.5299 18.5149 31.6216 18.7971 31.6216H23.0298C23.312 31.6216 23.5566 31.5299 23.7635 31.3466C23.9704 31.1632 24.0927 30.9341 24.1303 30.6591L24.469 28.1016C24.7135 28.0099 24.9442 27.8999 25.1609 27.7716C25.3768 27.6432 25.5883 27.5057 25.7952 27.3591L28.2502 28.3491C28.5136 28.4407 28.7769 28.4499 29.0403 28.3766C29.3037 28.3032 29.5106 28.1474 29.6611 27.9091L31.7493 24.3616C31.8998 24.1232 31.9468 23.8666 31.8904 23.5916C31.8339 23.3166 31.6928 23.0966 31.4671 22.9316L29.3507 21.3641C29.3695 21.2357 29.3789 21.1122 29.3789 20.9934V20.2509C29.3789 20.1313 29.3601 20.0074 29.3225 19.8791L31.4389 18.3116C31.6646 18.1466 31.8057 17.9266 31.8621 17.6516C31.9186 17.3766 31.8716 17.1199 31.7211 16.8816L29.6329 13.3616C29.4824 13.1232 29.271 12.9626 28.9986 12.8798C28.7254 12.7976 28.4571 12.8024 28.1938 12.8941L25.7952 13.8841C25.5883 13.7374 25.3719 13.5999 25.1462 13.4716C24.9204 13.3432 24.6947 13.2332 24.469 13.1416L24.1303 10.5841C24.0927 10.3091 23.9704 10.0799 23.7635 9.89658C23.5566 9.71325 23.312 9.62158 23.0298 9.62158Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle
      cx="3.34783"
      cy="3.34783"
      r="3.34783"
      stroke="currentColor"
      strokeWidth="2"
      transform="matrix(1 0 0 -1 17.5656 23.9694)"
    />
  </svg>
);

export const AudioOutputIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <rect
      height="17.6797"
      rx="2.94662"
      stroke="currentColor"
      strokeWidth="2.06263"
      width="11.7865"
      x="17.5234"
      y="11.6599"
    />
    <circle cx="23.4168" cy="23.4466" fill="currentColor" r="2.94662" />
    <circle cx="23.4167" cy="16.08" fill="currentColor" r="1.47331" />
    <circle cx="13.1037" cy="27.8666" fill="currentColor" r="1.47331" />
    <path
      d="M13.8403 22.7099H13.1037C12.29 22.7099 11.6304 22.0503 11.6304 21.2366V16.08C11.6304 15.2663 12.29 14.6067 13.1037 14.6067H13.8403"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.06263"
    />
  </svg>
);

export const LyricIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M11.405 14.6509H23.255"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.975"
    />
    <path
      d="M11.4051 21.5632H19.3051"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.975"
    />
    <path
      d="M11.4051 28.4756H19.3051"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="1.975"
    />
    <path
      d="M29.18 13.6633V22.4855M29.18 22.4855V27.0928C29.18 27.8334 28.6539 28.4745 27.9133 28.4758C26.4504 28.4785 24.2425 28.0482 24.2425 25.4262C24.2425 21.5052 29.18 22.4855 29.18 22.4855Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.975"
    />
  </svg>
);

export const BoxAddIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <rect
      height="19.75"
      rx="2.9625"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.975"
      transform="matrix(1 0 0 -1 10.3551 31.6887)"
      width="19.75"
    />
    <path
      d="M12.3295 11.9387H28.1295V11.9387C28.1295 10.3026 26.8032 8.97622 25.167 8.97622H15.292C13.6559 8.97622 12.3295 10.3026 12.3295 11.9387V11.9387Z"
      stroke="currentColor"
      strokeLinejoin="round"
      strokeWidth="1.48125"
    />
    <path
      d="M16.2799 21.8128H20.2299M24.1799 21.8128H20.2299M20.2299 21.8128V17.8628M20.2299 21.8128V25.7628"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.99528"
    />
  </svg>
);

export const SpeakerIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <g clipPath="url(#clip0_2051_12840)">
      <path
        d="M13.887 16.6345L22.5307 12.3126C22.9739 12.091 23.4955 12.4133 23.4955 12.9089L23.4955 27.5154C23.4955 28.011 22.9739 28.3334 22.5307 28.1117L13.887 23.7899C10.9388 22.3158 10.9388 18.1085 13.887 16.6345Z"
        stroke="currentColor"
        strokeWidth="2"
      />
      <path
        d="M27.829 25.2129C28.6098 24.9999 29.3318 24.5275 29.9071 23.8391C30.7108 22.8774 31.1623 21.573 31.1623 20.2129C31.1623 18.8528 30.7108 17.5484 29.9071 16.5867C29.3318 15.8983 28.6098 15.4259 27.829 15.2129"
        stroke="currentColor"
        strokeLinecap="round"
        strokeWidth="1.66667"
      />
      <path
        d="M26.9959 19.7072C26.9959 19.5265 27.1479 19.3742 27.3148 19.4434V19.4434C27.4159 19.4853 27.5078 19.5467 27.5852 19.624C27.6626 19.7014 27.724 19.7933 27.7658 19.8944C27.8077 19.9955 27.8293 20.1039 27.8293 20.2133C27.8293 20.3227 27.8077 20.4311 27.7658 20.5322C27.724 20.6333 27.6626 20.7252 27.5852 20.8026C27.5078 20.8799 27.4159 20.9413 27.3148 20.9832V20.9832C27.1479 21.0524 26.9959 20.9001 26.9959 20.7194L26.9959 20.2133L26.9959 19.7072Z"
        fill="currentColor"
        stroke="currentColor"
        strokeWidth="0.833333"
      />
    </g>
    <defs>
      <clipPath id="clip0_2051_12840">
        <rect
          fill="currentColor"
          height="23.3333"
          transform="translate(9.49561 8.5459)"
          width="23.3333"
        />
      </clipPath>
    </defs>
  </svg>
);

export const RepeatIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M15.309 24.7363H12.933C11.1833 24.7363 9.76489 23.3179 9.76489 21.5682V15.2321C9.76489 13.4824 11.1833 12.064 12.933 12.064H25.6053C27.355 12.064 28.7734 13.4824 28.7734 15.2321V21.5682C28.7734 23.3179 27.355 24.7363 25.6053 24.7363H19.2692M19.2692 24.7363L22.4372 21.5682M19.2692 24.7363L22.4372 27.9044"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.90085"
    />
  </svg>
);

export const RepeatOneIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M15.309 24.7363H12.933C11.1833 24.7363 9.76489 23.3179 9.76489 21.5682V15.2321C9.76489 13.4824 11.1833 12.064 12.933 12.064H25.6053C27.355 12.064 28.7734 13.4824 28.7734 15.2321V21.5682C28.7734 23.3179 27.355 24.7363 25.6053 24.7363H19.2692M19.2692 24.7363L22.4372 21.5682M19.2692 24.7363L22.4372 27.9044"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.90085"
    />
    <text
      alignmentBaseline="middle"
      fill="currentColor"
      fontFamily="Arial, sans-serif"
      fontSize="10"
      textAnchor="middle"
      x="18"
      y="20"
    >
      1
    </text>
  </svg>
);

export const ShuffleIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M9.99622 12.0639V12.0639C11.4823 12.0639 12.8717 12.8006 13.7055 14.0307L14.4917 15.1903L15.5514 16.7535M27.5381 24.5695H22.9049C21.6627 24.5695 20.47 24.0831 19.582 23.2146L18.7085 22.3601M27.5381 24.5695L24.2526 27.9043M27.5381 24.5695L24.2526 21.2346"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.90085"
    />
    <path
      d="M9.99622 26.4794V26.4794C11.486 26.4794 12.8826 25.7547 13.7403 24.5367L19.5475 16.2901C20.4376 15.0261 21.887 14.274 23.4329 14.274H27.538M27.538 14.274L24.2526 10.9392M27.538 14.274L24.2526 17.6089"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.90085"
    />
  </svg>
);

export const NextIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M24.4841 14.4399V23.9442"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.37606"
    />
    <path
      d="M22.5947 17.9804C23.478 18.547 23.478 19.8379 22.5947 20.4045L16.0094 24.629C15.051 25.2438 13.7918 24.5556 13.7918 23.4169L13.7918 14.968C13.7918 13.8293 15.051 13.1411 16.0094 13.7559L22.5947 17.9804Z"
      fill="currentColor"
    />
  </svg>
);

export const PreviousIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M15.2108 14.4399V23.9442"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2.37606"
    />
    <path
      d="M17.1003 20.4044C16.2169 19.8378 16.2169 18.5469 17.1003 17.9803L23.6855 13.7558C24.644 13.141 25.9031 13.8292 25.9031 14.9679V23.4168C25.9031 24.5555 24.644 25.2437 23.6855 24.6289L17.1003 20.4044Z"
      fill="currentColor"
    />
  </svg>
);

export const PlayIcon = ({
  size = 24,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 11 12"
    width={size || width}
    {...props}
  >
    <path
      d="M9.63265 4.68272C10.6531 5.27189 10.6531 6.74482 9.63264 7.33399L2.34445 11.5418C1.32398 12.131 0.0483869 11.3945 0.048387 10.2162L0.0483874 1.80051C0.0483874 0.622168 1.32398 -0.114293 2.34446 0.474879L9.63265 4.68272Z"
      fill="currentColor"
    />
  </svg>
);

export const PauseIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 10 14"
    width={size || width}
    {...props}
  >
    <path
      d="M1.84015 2.25635V11.7606"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="3.16809"
    />
    <path
      d="M8.17651 2.25635V11.7606"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="3.16809"
    />
  </svg>
);

export const LeftArrowIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 25 21"
    width={size || width}
    {...props}
  >
    <path
      d="M19.9608 10.5792L5.64865 10.5792M5.64865 10.5792L11.5419 16.4724M5.64865 10.5792L11.5419 4.68593"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.02054"
    />
  </svg>
);

export const RightArrowIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 24 21"
    width={size || width}
    {...props}
  >
    <path
      d="M5.05933 10.579H19.3715M19.3715 10.579L13.4782 4.68579M19.3715 10.579L13.4782 16.4723"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.02054"
    />
  </svg>
);

export const ThreeDotsIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 24 24"
    width={size || width}
    {...props}
  >
    <circle cx="3.78657" cy="11.7846" fill="currentColor" r="1.68378" />
    <circle cx="12.2055" cy="11.7846" fill="currentColor" r="1.68378" />
    <circle cx="20.6242" cy="11.7846" fill="currentColor" r="1.68378" />
  </svg>
);

export const FilterIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M10.416 2.38098H3.41602C2.31145 2.38098 1.41602 3.27641 1.41602 4.38098V4.38098C1.41602 5.48555 2.31145 6.38098 3.41602 6.38098H10.416"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
    <rect
      height="6.23077"
      rx="3.11538"
      stroke="currentColor"
      strokeWidth="2"
      width="6.23077"
      x="14.1852"
      y="1.38098"
    />
    <path
      d="M11.416 16.6119L18.416 16.6119C19.5206 16.6119 20.416 15.7165 20.416 14.6119V14.6119C20.416 13.5074 19.5206 12.6119 18.416 12.6119L11.416 12.6119"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
    <rect
      height="6.23077"
      rx="3.11538"
      stroke="currentColor"
      strokeWidth="2"
      transform="rotate(-180 7.64679 17.6119)"
      width="6.23077"
      x="7.64679"
      y="17.6119"
    />
  </svg>
);

export const UsersIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M29.5783 15.1082C29.5783 16.968 28.0706 18.4757 26.2107 18.4757C24.3509 18.4757 22.8431 16.968 22.8431 15.1082C22.8431 13.2483 24.3509 11.7406 26.2107 11.7406C28.0706 11.7406 29.5783 13.2483 29.5783 15.1082Z"
      stroke="currentColor"
      strokeWidth="2.02054"
    />
    <path
      d="M19.2913 24.2112L20.0411 23.7114C21.8681 22.4934 24.0148 21.8434 26.2107 21.8434C28.4065 21.8434 30.5532 22.4934 32.3802 23.7114L33.13 24.2112C34.0669 24.8358 34.6296 25.8873 34.6296 27.0132V28.6908C34.6296 29.5587 33.926 30.2623 33.0581 30.2623H26.2107H19.3633C18.4953 30.2623 17.7917 29.5587 17.7917 28.6908V27.0132C17.7917 25.8873 18.3545 24.8358 19.2913 24.2112Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.02054"
    />
    <path
      d="M18.1594 15.1082C18.1594 16.968 16.6517 18.4757 14.7919 18.4757C12.932 18.4757 11.4243 16.968 11.4243 15.1082C11.4243 13.2483 12.932 11.7406 14.7919 11.7406C16.6517 11.7406 18.1594 13.2483 18.1594 15.1082Z"
      stroke="currentColor"
      strokeWidth="2.02054"
    />
    <path
      d="M14.7918 21.8434V21.8434C12.596 21.8434 10.4493 22.4934 8.62229 23.7114L7.8725 24.2112C6.93565 24.8358 6.37292 25.8873 6.37292 27.0132V28.6908C6.37292 29.5587 7.07652 30.2623 7.94446 30.2623H14.0054"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.02054"
    />
  </svg>
);
export const LockOpenIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M25.5013 13.2591C25.71 13.7026 26.2388 13.8929 26.6823 13.6842C27.1259 13.4755 27.3162 12.9467 27.1075 12.5032L25.5013 13.2591ZM14.5723 16.9817C15.4484 16.8395 15.4485 16.8399 15.4485 16.8403C15.4485 16.8404 15.4486 16.8407 15.4486 16.8409C15.4487 16.8413 15.4487 16.8415 15.4487 16.8417C15.4488 16.842 15.4488 16.8419 15.4487 16.8413C15.4485 16.8403 15.4481 16.8376 15.4475 16.8333C15.4463 16.8248 15.4442 16.81 15.4415 16.7892C15.4362 16.7477 15.4287 16.6829 15.4211 16.598C15.406 16.4279 15.3911 16.1798 15.3938 15.8802C15.3993 15.275 15.4764 14.4918 15.7458 13.7259C16.0128 12.9667 16.4602 12.2456 17.2002 11.7092C17.9379 11.1745 19.0418 10.7687 20.7189 10.7687V8.99353C18.7466 8.99353 17.2574 9.47532 16.1584 10.2719C15.0616 11.0669 14.4285 12.121 14.0712 13.1369C13.7163 14.1461 13.6253 15.1381 13.6187 15.8642C13.6154 16.2303 13.6335 16.5369 13.6529 16.7552C13.6626 16.8645 13.6727 16.9521 13.6807 17.0147C13.6847 17.0459 13.6882 17.071 13.6909 17.0893C13.6922 17.0985 13.6934 17.106 13.6943 17.1117C13.6947 17.1146 13.6951 17.1171 13.6954 17.1191C13.6956 17.1201 13.6957 17.121 13.6958 17.1218C13.6959 17.1222 13.696 17.1227 13.696 17.1229C13.6961 17.1234 13.6962 17.1239 14.5723 16.9817ZM20.7189 10.7687C22.2238 10.7687 23.2656 11.0956 23.9938 11.5458C24.7199 11.9947 25.192 12.6018 25.5013 13.2591L27.1075 12.5032C26.676 11.5864 25.9909 10.6935 24.9273 10.0359C23.8656 9.3796 22.4851 8.99353 20.7189 8.99353V10.7687Z"
      fill="currentColor"
    />
    <path
      d="M26.9319 17.4254H14.5059C13.0353 17.4254 11.8432 18.6176 11.8432 20.0881V29.4077C11.8432 30.8782 13.0353 32.0704 14.5059 32.0704H26.9319C28.4025 32.0704 29.5947 30.8782 29.5947 29.4077V20.0881C29.5947 18.6176 28.4025 17.4254 26.9319 17.4254Z"
      stroke="currentColor"
      strokeWidth="1.77515"
    />
    <circle
      cx="20.7189"
      cy="24.9698"
      r="2.66272"
      stroke="currentColor"
      strokeWidth="1.77515"
    />
  </svg>
);

export const BellIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M28.2303 25.0694H13.1746C11.9849 25.0694 11.335 23.6819 12.0966 22.768L13.3512 21.2626C13.5665 21.0041 13.6741 20.6772 13.6708 20.3409C13.6501 18.2215 14.0222 10.3363 20.7024 10.3363C27.3826 10.3363 27.7547 18.2215 27.7341 20.3409C27.7308 20.6772 27.8383 21.0041 28.0537 21.2626L29.3082 22.768C30.0698 23.6819 29.4199 25.0694 28.2303 25.0694Z"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6838"
    />
    <path
      d="M17.1946 27.8756C17.1946 27.8756 17.8962 29.9803 20.7025 29.9803C23.5088 29.9803 24.2103 27.8756 24.2103 27.8756"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="1.6838"
    />
  </svg>
);

export const ChevronRightIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M19.1108 25.2567L24.1621 20.2054L19.1108 15.154"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.3573"
    />
  </svg>
);

export const CloseIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M13.6676 4.15393L8.61629 9.20528M3.56494 14.2566L8.61629 9.20528M8.61629 9.20528L3.56494 4.15393M8.61629 9.20528L13.6676 14.2566"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.02054"
    />
  </svg>
);

export const EyeOpenIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 26 26"
    width={size || width}
    {...props}
  >
    <path
      d="M12.8911 5.22238C17.277 5.25237 20.8569 8.37154 22.9342 10.7215C24.2427 12.2019 24.2208 14.3598 22.8597 15.792C20.7981 17.9614 17.3065 20.7495 12.9971 20.72C8.6659 20.6904 5.12205 17.8258 3.03466 15.6236C1.67634 14.1905 1.64041 12.0348 2.94815 10.5554C4.9974 8.23713 8.52359 5.19251 12.8911 5.22238Z"
      stroke="currentColor"
      strokeWidth="2"
    />
    <circle cx="12.969" cy="12.9357" fill="currentColor" r="4.25215" />
  </svg>
);

export const EyeClosedIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 30 30"
    width={size || width}
    {...props}
  >
    <path
      d="M14.9925 19.6455C13.029 19.6321 11.2334 19.0137 9.67316 18.1417M14.9925 19.6455V22.7272M14.9925 19.6455C17.0114 19.6593 18.8439 19.0311 20.4222 18.1417M26.457 12.4872C26.457 12.4872 25.8117 13.4806 24.6531 14.7272M3.429 12.3298C3.429 12.3298 4.13449 13.4029 5.38817 14.7272M5.38817 14.7272L2.67316 17.4422M5.38817 14.7272C6.45309 15.8521 7.91355 17.1582 9.67316 18.1417M9.67316 18.1417L7.67316 21.2272M20.4222 18.1417L22.1732 21.2272M20.4222 18.1417C22.1784 17.152 23.6199 15.8389 24.6531 14.7272M24.6531 14.7272L27.1732 17.2473"
      stroke="#898989"
      strokeLinecap="round"
      strokeWidth="2"
    />
  </svg>
);

export const MoveIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 12 20"
    width={size || width}
    {...props}
  >
    <circle
      cx="1.9"
      cy="1.9"
      fill="currentColor"
      r="1.9"
      transform="matrix(1 0 0 -1 0.00585938 19.5781)"
    />
    <circle
      cx="1.9"
      cy="1.9"
      fill="currentColor"
      r="1.9"
      transform="matrix(1 0 0 -1 7.60547 19.5781)"
    />
    <circle
      cx="1.9"
      cy="1.9"
      fill="currentColor"
      r="1.9"
      transform="matrix(1 0 0 -1 0.00585938 11.9785)"
    />
    <circle
      cx="1.9"
      cy="1.9"
      fill="currentColor"
      r="1.9"
      transform="matrix(1 0 0 -1 0.00585938 4.37891)"
    />
    <circle
      cx="1.9"
      cy="1.9"
      fill="currentColor"
      r="1.9"
      transform="matrix(1 0 0 -1 7.60547 11.9785)"
    />
    <circle
      cx="1.9"
      cy="1.9"
      fill="currentColor"
      r="1.9"
      transform="matrix(1 0 0 -1 7.60547 4.37891)"
    />
  </svg>
);

export const AdjustIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 22 19"
    width={size || width}
    {...props}
  >
    <path
      d="M10.416 2.38098H3.41602C2.31145 2.38098 1.41602 3.27641 1.41602 4.38098V4.38098C1.41602 5.48555 2.31145 6.38098 3.41602 6.38098H10.416"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
    <rect
      height="6.23077"
      rx="3.11538"
      stroke="currentColor"
      strokeWidth="2"
      width="6.23077"
      x="14.1852"
      y="1.38098"
    />
    <path
      d="M11.416 16.6119L18.416 16.6119C19.5206 16.6119 20.416 15.7165 20.416 14.6119V14.6119C20.416 13.5074 19.5206 12.6119 18.416 12.6119L11.416 12.6119"
      stroke="currentColor"
      strokeLinecap="round"
      strokeWidth="2"
    />
    <rect
      height="6.23077"
      rx="3.11538"
      stroke="currentColor"
      strokeWidth="2"
      transform="rotate(-180 7.64679 17.6119)"
      width="6.23077"
      x="7.64679"
      y="17.6119"
    />
  </svg>
);

export const UserAddIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M15.573 7.47023C15.573 9.33009 14.0653 10.8378 12.2055 10.8378C10.3456 10.8378 8.83789 9.33009 8.83789 7.47023C8.83789 5.61037 10.3456 4.10266 12.2055 4.10266C14.0653 4.10266 15.573 5.61037 15.573 7.47023Z"
      stroke="currentColor"
      strokeWidth="2.02054"
    />
    <path
      d="M8.83797 14.2054L5.2862 16.5733C4.34935 17.1979 3.78662 18.2493 3.78662 19.3753V21.0528C3.78662 21.9208 4.49022 22.6244 5.35815 22.6244H18.0988"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.02054"
    />
    <path
      d="M15.573 15.0475H18.0987M20.6244 15.0475H18.0987M18.0987 15.0475V12.5219M18.0987 15.0475V17.5732"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.02054"
    />
  </svg>
);
export const MusicBarsIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M1.41724 12.323V8.23997M5.87149 12.323V1.55859M10.3257 12.323V5.64166"
      stroke="#1ED760"
      strokeLinecap="round"
      strokeWidth="1.48475"
    />
  </svg>
);

export const DotIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <circle cx="1.5" cy="1.5" fill="currentColor" r="1.5" />
  </svg>
);

export const ListIcon = ({
  size = 40.41,
  height,
  width,
  ...props
}: IconSvgProps) => (
  <svg
    height={size || height}
    viewBox="0 0 41 40"
    width={size || width}
    {...props}
  >
    <path
      d="M12.4697 15.0929C12.4697 13.543 13.7262 12.2866 15.276 12.2866H26.5013C28.0511 12.2866 29.3076 13.543 29.3076 15.0929V15.0929C29.3076 16.6428 28.0511 17.8992 26.5013 17.8992H15.276C13.7262 17.8992 12.4697 16.6428 12.4697 15.0929V15.0929Z"
      stroke="currentColor"
      strokeWidth="2.3573"
    />
    <path
      d="M12.4697 23.512L29.3076 23.512"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.3573"
    />
    <path
      d="M12.4697 29.1245L29.3076 29.1245"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth="2.3573"
    />
  </svg>
);
