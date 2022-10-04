import { ReactNode } from "react";
import style from "./Button.module.scss";

interface ButtonProps {
  type?: "button" | "submit" | "reset" | undefined;
  onClick?: (e?: any) => void;
  children?: ReactNode;
}

function Button({ onClick, type, children }: ButtonProps) {
  return (
    <button className={style.botao} onClick={onClick} type={type}>
      {children}
    </button>
  );
}

export default Button;
