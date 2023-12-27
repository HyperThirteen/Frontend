import { SVGAttributes } from "react";

const CloseIcon = (props: SVGAttributes<SVGSVGElement>) => {
  return (
    <svg
      viewBox="0 0 18 18"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M16.9999 16.9999L9 9M9 9L1 1M9 9L17 1M9 9L1 17"
        stroke="#EAEAEA"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
};

export default CloseIcon;
