import React from "react";
import "../../styles/Modal.css";

const Modal = ({ children }: { children: React.ReactNode }) => {
	return <div className="Modal">{children}</div>;
};

export default Modal;
