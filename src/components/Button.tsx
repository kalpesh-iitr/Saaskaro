interface ButtonProps {
    customClassName?: string;
    onClick?: (event: React.MouseEvent<HTMLButtonElement>) => void;
    text: string;
  }
const Button: React.FC<ButtonProps> = ({ customClassName, onClick, text })=> {
    return (<button className={customClassName} onClick={onClick}>{text}</button>);
}
export default Button;