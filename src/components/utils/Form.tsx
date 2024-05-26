import React from "react";
type FormProps = {
	children: React.ReactNode;
	action: string;
	method?: string;
	formId: string;
};

const Form = ({ children, action, method, formId }: FormProps) => {
	return (
		<form method={method} action={action} id={formId}>
			{children}
		</form>
	);
};

export default Form;
