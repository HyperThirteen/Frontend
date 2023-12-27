import { SVGAttributes } from "react";

const SuccessIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 66 66"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M43 26.3333L29.6667 39.6667L23 33M33 63C16.4315 63 3 49.5685 3 33C3 16.4315 16.4315 3 33 3C49.5685 3 63 16.4315 63 33C63 49.5685 49.5685 63 33 63Z"
        stroke="#2D9AFF"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default SuccessIcon;
