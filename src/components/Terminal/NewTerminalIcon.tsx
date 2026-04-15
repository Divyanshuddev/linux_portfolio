import React from "react";

const NewTerminalIcon: React.FC<{ size?: number; color?: string }> = ({ size = 20,
  color = "#FFFFFF"}) => {
  return (
  <svg
      width={size}
      height={size}
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M10 30V20C10 16 13 13 17 13H31C35 13 38 16 38 20V30"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
        strokeLinejoin="round"
      />

      <line
        x1="10"
        y1="30"
        x2="6"
        y2="30"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="38"
        y1="30"
        x2="42"
        y2="30"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />

      <line
        x1="24"
        y1="19"
        x2="24"
        y2="29"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
      <line
        x1="19"
        y1="24"
        x2="29"
        y2="24"
        stroke={color}
        strokeWidth="3"
        strokeLinecap="round"
      />
    </svg>
  );
};

export default NewTerminalIcon;