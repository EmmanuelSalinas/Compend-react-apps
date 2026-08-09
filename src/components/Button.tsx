import { useState, type ReactNode } from "react";

type Props = {
  children: ReactNode;
  isLoading: boolean;
  onClicked: () => void;
};

function Button({ children, isLoading, onClicked }: Props) {
  const [classButton, setClassButton] = useState("btn-primary");

  return (
    <button
      disabled={isLoading}
      type="button"
      className={`btn btn-${isLoading ? "secondary" : "primary"} `}
      onClick={onClicked}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Button;
