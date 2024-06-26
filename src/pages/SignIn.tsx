import Form from "./../components/utils/Form";
import { useState } from "react";
import FormGroup from "./../components/utils/FormGroup";
import "./../styles/Form.css";
import { login } from "../helper/routes";
import { useUserContext } from "../hooks/useUserContext";
import { Navigate } from "react-router-dom";
const SignIn = () => {
	const { refreshUser } = useUserContext();
	const [formData, setFormData] = useState({
		email: "",
		password: "",
	});
	const [redirect, setRedirect] = useState(false);
	const [formError, setFormError] = useState({
		emailError: "",
		passwordError: "",
	});
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		login(formData)
			.then(() => {
				setRedirect(true);
				refreshUser && refreshUser();
			})
			.catch((err) => {
				console.log(err);
			});
	};
	const handleReset = (e: React.FormEvent) => {
		e.preventDefault();
		setFormData({
			email: "",
			password: "",
		});
		setFormError({
			emailError: "",
			passwordError: "",
		});
	};
	if (redirect) {
		return <Navigate to="/" />;
	}

	return (
		<div className="Form container">
			<h3>Login To Your Account</h3>
			<Form action="#" formId="register" method="post">
				<FormGroup>
					<label htmlFor="email">Enter Your Email</label>
					<input
						type="email"
						placeholder="Email: "
						name="email"
						onChange={(e) =>
							setFormData({ ...formData, email: e.target.value })
						}
						value={formData.email}
					/>
					<div className="error">
						<span>{formError.emailError}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="password">Enter Your Password</label>
					<input
						type="password"
						placeholder="Password: "
						name="password"
						onChange={(e) =>
							setFormData({ ...formData, password: e.target.value })
						}
						value={formData.password}
					/>
					<div className="error">
						<span>{formError.passwordError}</span>
					</div>
				</FormGroup>

				<div className="buttonGroup">
					<button onClick={handleSubmit}>Submit</button>
					<button type="reset" onClick={handleReset}>
						Reset
					</button>
				</div>
			</Form>
		</div>
	);
};

export default SignIn;
