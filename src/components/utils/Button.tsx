import React from "react";

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
	name: string;
	children: React.ReactNode;
	action: () => void;
}
const Button = ({ children, name, action }: ButtonProps) => {
	return (
		<button
			onMouseDown={action}
			className={name.toString() + "Btn"}
			id={name.toString() + "Btn"}
		>
			{children}
		</button>
	);
};

export default Button;
