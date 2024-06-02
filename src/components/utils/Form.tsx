import React from "react";
type FormProps = {
	children: React.ReactNode;
	action: string;
	method?: string;
	formId: string;
	className?: string; // Change 'class' to 'className'
};

const Form = ({ children, action, method, formId, className }: FormProps) => {
	return (
		<form method={method} action={action} id={formId} className={className}> 
			{children}
		</form>
	);
};

export default Form;
