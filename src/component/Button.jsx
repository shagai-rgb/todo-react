import React from "react";

export const Button = ({ onclick }) => {
  return (
    <button className="addButton" onClick={onclick}>
      add Todo
    </button>
  );
};
