import React from "react";

function FilterIcon() {
  return (
    <span className="anticon  anticon-filter">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 21 21"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          transform="translate(1 1)"
        >
          <path
            fill="currentColor"
            strokeWidth="0.5"
            d="M3 0v19H2V0h1zm7 0v19H9V0h1zm7 0v19h-1V0h1z"
          ></path>
          <circle
            cx="2.5"
            cy="12.5"
            r="2.5"
            fill="#FAFAFA"
            strokeWidth="1.5"
          ></circle>
          <circle
            cx="9.5"
            cy="5.5"
            r="2.5"
            fill="#FAFAFA"
            strokeWidth="1.5"
          ></circle>
          <circle
            cx="16.5"
            cy="12.5"
            r="2.5"
            fill="#FAFAFA"
            strokeWidth="1.5"
          ></circle>
        </g>
      </svg>
    </span>
  );
}

export default FilterIcon;
