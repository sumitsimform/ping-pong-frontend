import React from "react";

function CheckRoundFill({ selected }) {
  return (
    <span
      className="anticon anticon-checkfill"
      style={!selected ? { opacity: "0.2" } : {}}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 21 21"
      >
        <g fill="none" fillRule="evenodd">
          <circle cx="10.5" cy="10.5" r="10.5" fill="#0096dc"></circle>
          <path
            stroke="#FFF"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="1.5"
            d="M6.6 11.055l2.65 2.726 5.351-6.111"
          ></path>
        </g>
      </svg>
    </span>
  );
}

export default CheckRoundFill;
