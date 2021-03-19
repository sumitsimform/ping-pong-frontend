import React from "react";

function UserIcon() {
  return (
    <span className="anticon anticon-user">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 23 24"
      >
        <g
          fill="none"
          fillRule="evenodd"
          stroke="currentColor"
          strokeWidth="1.65"
          transform="translate(1)"
        >
          <path
            strokeLinecap="round"
            d="M0 23.14v-2.198a5.51 5.51 0 015.511-5.51h9.92a5.51 5.51 0 015.511 5.51v2.197"
          ></path>
          <circle cx="10.471" cy="6.062" r="5.237"></circle>
        </g>
      </svg>
    </span>
  );
}

export default UserIcon;
