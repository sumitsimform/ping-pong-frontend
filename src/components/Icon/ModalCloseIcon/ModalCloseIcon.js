import React from "react";

function ModalCloseIcon() {
  return (
    <span className="anticon anticon-close ant-modal-close-icon">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="45"
        height="45"
        viewBox="0 0 45 45"
      >
        <g fill="none" fillRule="evenodd" transform="rotate(45 10.55 27.45)">
          <circle
            cx="15.5"
            cy="15.5"
            r="15.5"
            fill="#DEE2EA"
            opacity="0.301"
          ></circle>
          <path
            fill="#7E868F"
            stroke="#7E868F"
            d="M15.5 8.267c.5 0 .904.404.904.904v5.425h5.425a.904.904 0 110 1.808h-5.425v5.425a.904.904 0 11-1.808 0v-5.425H9.17a.904.904 0 110-1.808h5.425V9.17c0-.5.405-.904.904-.904z"
          ></path>
        </g>
      </svg>
    </span>
  );
}

export default ModalCloseIcon;
