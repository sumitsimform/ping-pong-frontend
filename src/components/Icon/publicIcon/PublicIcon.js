import React from "react";

function PublicIcon() {
  return (
    <span className="anticon anticon-public">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 17 16"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeWidth="1.3"
          transform="translate(1.5 1)"
        >
          <circle cx="7" cy="7" r="7" strokeLinecap="square"></circle>
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M7 14c1.867-1.697 2.8-4.03 2.8-7 0-2.97-.933-5.303-2.8-7-1.867 1.697-2.8 4.03-2.8 7 0 2.97.933 5.303 2.8 7z"
          ></path>
          <path strokeLinecap="round" d="M.35 4.9h13.3M.35 9.1h13.3"></path>
        </g>
      </svg>
    </span>
  );
}

export default PublicIcon;
