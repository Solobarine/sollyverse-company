import React from "react";

const Blob = ({ color }: { color: string }) => {
  return (
    <div>
      <svg viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg">
        <path
          fill={color ? color : "#8A3FFC"}
          d="M23.2,12.5C12.8,31.4,-24.8,33.7,-33.2,16C-41.6,-1.8,-20.8,-39.6,-2,-40.7C16.8,-41.9,33.6,-6.4,23.2,12.5Z"
          transform="translate(100 100)"
        />
      </svg>
    </div>
  );
};

export default Blob;
