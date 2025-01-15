export const Magnifier = ({ size = 24 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M27.414 24.586L22.337 19.509C23.386 17.928 24 16.035 24 14C24 8.486 19.514 4 14 4C8.486 4 4 8.486 4 14C4 19.514 8.486 24 14 24C16.035 24 17.928 23.386 19.509 22.337L24.586 27.414C25.366 28.195 26.634 28.195 27.414 27.414C28.195 26.633 28.195 25.367 27.414 24.586V24.586ZM7 14C7 10.14 10.14 7 14 7C17.86 7 21 10.14 21 14C21 17.86 17.86 21 14 21C10.14 21 7 17.86 7 14V14Z"
        fill="#5D5FEF"
      />
    </svg>
  );
};

export const United = () => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath="url(#clip0_8121_115)">
        <path
          d="M12 0.75C9.88129 0.751693 7.80612 1.35165 6.01337 2.4808H17.9702C16.1822 1.35461 14.1131 0.754774 12 0.75Z"
          fill="#B22234"
        />
        <path
          d="M6.01337 2.48083C5.24109 2.96973 4.53126 3.55092 3.8996 4.21155H20.1137C19.4728 3.54901 18.7529 2.96775 17.9702 2.48083H6.01337Z"
          fill="white"
        />
        <path
          d="M3.8996 4.21155C3.38899 4.7424 2.93174 5.32212 2.53445 5.94235H21.4785C21.0813 5.32214 20.6242 4.74242 20.1137 4.21155H3.8996Z"
          fill="#B22234"
        />
      </g>
    </svg>
  );
};

export const DownArrow = ({ size = 16 }) => {
  return (
    <svg
      width={size}
      height={size}
      viewBox={`0 0 ${size} ${size}`}
      fill="currentColor"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M4 6L8 10L12 6"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};

export const MenuIcon = ({size = 25,className,onClick}) => {
  return (
    <div className={`${className}`} onClick={onClick}>

    <svg
      fill="#000000"
      version="1.1"
      id="Capa_1"
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24.75 24.75"
      height={size}
      width={size}
    >
      <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
      <g
        id="SVGRepo_tracerCarrier"
        stroke-linecap="round"
        stroke-linejoin="round"
      ></g>
      <g id="SVGRepo_iconCarrier">
        {" "}
        <g>
          {" "}
          <path d="M0,3.875c0-1.104,0.896-2,2-2h20.75c1.104,0,2,0.896,2,2s-0.896,2-2,2H2C0.896,5.875,0,4.979,0,3.875z M22.75,10.375H2 c-1.104,0-2,0.896-2,2c0,1.104,0.896,2,2,2h20.75c1.104,0,2-0.896,2-2C24.75,11.271,23.855,10.375,22.75,10.375z M22.75,18.875H2 c-1.104,0-2,0.896-2,2s0.896,2,2,2h20.75c1.104,0,2-0.896,2-2S23.855,18.875,22.75,18.875z"></path>{" "}
        </g>{" "}
      </g>
    </svg>
    </div>
  );
};
