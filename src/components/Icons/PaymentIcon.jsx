import React from 'react';

export const PaymentIcon = ({ width, color }) => {
  return (
    <svg
      width={width ? width : '40'}
      height={width ? width : '40'}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M3.33203 14.1748H36.6654"
        stroke={color ? color : 'white'}
        stroke-width="2.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10 27.5083H13.3333"
        stroke={color ? color : 'white'}
        stroke-width="2.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M17.5 27.5083H24.1667"
        stroke={color ? color : 'white'}
        stroke-width="2.5"
        stroke-miterlimit="10"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
      <path
        d="M10.732 5.8418H29.2487C35.182 5.8418 36.6654 7.30846 36.6654 13.1585V26.8418C36.6654 32.6918 35.182 34.1585 29.2654 34.1585H10.732C4.81536 34.1751 3.33203 32.7085 3.33203 26.8585V13.1585C3.33203 7.30846 4.81536 5.8418 10.732 5.8418Z"
        stroke={color ? color : 'white'}
        stroke-width="2.5"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </svg>
  );
};
