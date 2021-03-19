import React from "react";

function UserGroupIcon() {
  return (
    <span className="anticon anticon-usergroup">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 31 18"
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
            d="M6.887 16.969v-1.611a4.042 4.042 0 014.041-4.042h7.275a4.042 4.042 0 014.042 4.042v1.61"
          ></path>
          <g transform="translate(19.13 1.53)">
            <path
              strokeLinecap="round"
              d="M0 9.786v.043a2.587 2.587 0 012.587-2.587h4.655A2.588 2.588 0 019.83 9.83v1.031"
            ></path>
            <circle cx="4.914" cy="2.845" r="2.02"></circle>
          </g>
          <g transform="translate(0 1.53)">
            <path
              strokeLinecap="round"
              d="M0 10.86V9.83a2.587 2.587 0 012.587-2.588h4.655A2.588 2.588 0 019.83 9.83v.119"
            ></path>
            <circle cx="4.914" cy="2.845" r="2.02"></circle>
          </g>
          <circle cx="14.566" cy="4.446" r="3.621"></circle>
        </g>
      </svg>
    </span>
  );
}

export default UserGroupIcon;
