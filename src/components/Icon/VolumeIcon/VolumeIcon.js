import React from "react";

function VolumeIcon() {
  return (
    <span className="anticon anticon-volume">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 21 20"
      >
        <g fill="none" fillRule="evenodd" stroke="currentColor" strokeWidth="1.5">
          <path
            strokeLinecap="square"
            d="M12.176 2v15.647l-5.588-4.471H1V6.471h5.588z"
          ></path>
          <path
            strokeLinecap="round"
            d="M12.176 12.059c1.677-1.118 1.677-3.353 0-4.47m1.677 6.208c2.98-1.987 2.98-5.96 0-7.947m2.235 10.928c5.216-3.477 5.216-10.432 0-13.909"
          ></path>
        </g>
      </svg>
    </span>
  );
}

export default VolumeIcon;
