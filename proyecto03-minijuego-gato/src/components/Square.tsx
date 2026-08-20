import { useState, type ReactNode } from "react";
import "../App.css";

type Square = {
  children: ReactNode;
  updateBoard?: (index: number) => void;
  isSelected?: boolean;
  index: number;
};

const Square = ({ children, index, isSelected, updateBoard }: Square) => {
  const className: string = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    if (updateBoard) updateBoard(index);
  };
  return (
    <div className={className} onClick={handleClick}>
      {children}
    </div>
  );
};

export default Square;
