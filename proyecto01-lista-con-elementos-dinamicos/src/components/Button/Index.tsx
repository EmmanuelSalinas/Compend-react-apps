import { useState, type ReactNode } from "react";
/* import styles from "./Button.module.css"; */
/* import styled from "styled-components"; */

type BtnProps = {
  isLoading: boolean;
};

/* const Btn = styled.button<BtnProps>`
  background-color: ${(props) => (props.isLoading ? "gray" : "red")};
  padding: 20px 24px;
`; */

type Props = {
  children: ReactNode;
  isLoading: boolean;
  onClicked: () => void;
};

//constante para agregar inline styles al boton, no es lo mas recomendable
/* const styles = {
  backgroundColor: "#007bff",
}; */
function Button({ children, isLoading, onClicked }: Props) {
  const [classButton, setClassButton] = useState("btn-primary");

  return (
    <button
      /* style={styles} */
      disabled={isLoading}
      /* isLoading={isLoading} */
      type="button"
      /* className={styles.button} */
      className={`btn btn-${isLoading ? "secondary" : "primary"} `}
      onClick={onClicked}
    >
      {isLoading ? "Cargando..." : children}
    </button>
  );
}

export default Button;
