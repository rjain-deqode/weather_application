import React from "react";

export const Button = ({ onClick, className, label, type }) => {
  return (
    <button onClick={onClick} className={className} type={type}>
      {label}
    </button>
  );
};
