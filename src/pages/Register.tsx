import React, { useState } from "react";
import Form from "./../components/utils/Form";
import "../styles/Form.css";
import FormGroup from "./../components/utils/FormGroup";
import { register } from "../helper/routes";
const Register = () => {
	const [isLoading, setIsLoading] = useState(false);
	const [formData, setFormData] = useState({
		firstName: "",
		lastName: "",
		birthdate: "",
		zipcode: "",
		phone: "",
		email: "",
		password: "",
		password2: "",
	});
	const [formError, setFormError] = useState({
		firstNameError: "",
		lastNameError: "",
		birthdateError: "",
		zipcodeError: "",
		phoneError: "",
		emailError: "",
		passwordError: "",
		password2Error: "",
	});
	const isValidForm = () => {
		let isValid = true;
		if (!formData.firstName) {
			setFormError((prevState) => ({
				...prevState,
				firstNameError: "First name is required",
			}));
			isValid = false;
		} else {
			setFormError((prevState) => ({ ...prevState, firstNameError: "" }));
		}
		if (!formData.lastName) {
			setFormError((prevState) => ({
				...prevState,
				lastNameError: "Last name is required",
			}));
			isValid = false;
		} else {
			setFormError((prevState) => ({ ...prevState, lastNameError: "" }));
		}
		if (!formData.birthdate) {
			setFormError((prevState) => ({
				...prevState,
				birthdateError: "Birthdate is required",
			}));
			isValid = false;
		} else {
			setFormError((prevState) => ({ ...prevState, birthdateError: "" }));
		}
		if (!formData.zipcode) {
			setFormError((prevState) => ({
				...prevState,
				locationError: "Location is required",
			}));
			isValid = false;
		} else {
			setFormError((prevState) => ({ ...prevState, locationError: "" }));
		}
		if (!formData.phone) {
			setFormError((prevState) => ({
				...prevState,
				phoneError: "Phone number is required",
			}));
			isValid = false;
		} else {
			setFormError((prevState) => ({ ...prevState, phoneError: "" }));
		}
		if (!formData.email) {
			setFormError((prevState) => ({
				...prevState,
				emailError: "Email is required",
			}));
			isValid = false;
		} else {
			setFormError((prevState) => ({ ...prevState, emailError: "" }));
		}
		if (!formData.password) {
			setFormError((prevState) => ({
				...prevState,
				passwordError: "Password is required",
			}));
			isValid = false;
		} else {
			setFormError((prevState) => ({ ...prevState, passwordError: "" }));
		}
		if (formData.password !== formData.password2) {
			setFormError((prevState) => ({
				...prevState,
				password2Error: "Passwords do not match",
			}));
			isValid = false;
		} else {
			setFormError((prevState) => ({ ...prevState, password2Error: "" }));
		}
		return isValid;
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		setIsLoading(true);
		console.log(formData);
		if (!isValidForm()) return;

		register(formData);
		setIsLoading(false);
	};
	const handleReset = (e: React.FormEvent) => {
		e.preventDefault();
		setFormError({
			firstNameError: "",
			lastNameError: "",
			birthdateError: "",
			phoneError: "",
			zipcodeError: "",
			emailError: "",
			passwordError: "",
			password2Error: "",
		});
		setFormData({
			firstName: "",
			lastName: "",
			birthdate: "",
			zipcode: "",
			phone: "",
			email: "",
			password: "",
			password2: "",
		});
	};
	return (
		<div className="Form container">
			<h3>Create an account</h3>
			<Form action="#" formId="register" method="post">
				<FormGroup>
					<label htmlFor="firstName">Enter Your First Name</label>
					<input
						type="text"
						placeholder="First Name: "
						name="firstName"
						onChange={(e) =>
							setFormData({ ...formData, firstName: e.target.value })
						}
						value={formData.firstName}
					/>
					<div className="error">
						<span>{formError.firstNameError}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="lastName">Enter Your Last Name</label>
					<input
						type="text"
						placeholder="Last Name: "
						name="lastName"
						onChange={(e) =>
							setFormData({ ...formData, lastName: e.target.value })
						}
						value={formData.lastName}
					/>
					<div className="error">
						<span>{formError.lastNameError}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="birthdate">Enter Your birthdate</label>
					<input
						type="date"
						placeholder="Birth Date: "
						name="birthdate"
						onChange={(e) =>
							setFormData({ ...formData, birthdate: e.target.value })
						}
						value={formData.birthdate}
					/>
					<div className="error">
						<span>{formError.birthdateError}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="zip">Enter Your Zip Code</label>
					<input
						type="number"
						placeholder="Zipcode: "
						name="zip"
						onChange={(e) =>
							setFormData({ ...formData, zipcode: e.target.value })
						}
						value={formData.zipcode}
					/>
					<div className="error">
						<span>{formError.zipcodeError}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="zip">Enter Your Phone Number</label>
					<input
						type="number"
						placeholder="Phone: "
						name="phone"
						onChange={(e) =>
							setFormData({ ...formData, phone: e.target.value })
						}
						value={formData.phone}
					/>
					<div className="error">
						<span>{formError.phoneError}</span>
					</div>
				</FormGroup>
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
				<FormGroup>
					<label htmlFor="password2">Confirm Your Password</label>
					<input
						type="password"
						placeholder="Confirm Password: "
						name="password2"
						onChange={(e) =>
							setFormData({ ...formData, password2: e.target.value })
						}
						value={formData.password2}
					/>
					<div className="error">
						<span>{formError.password2Error}</span>
					</div>
				</FormGroup>
				<div className="buttonGroup">
					<button onClick={handleSubmit}>Submit</button>
					<button type="reset" onClick={handleReset}>
						Reset
					</button>
				</div>
				<div className="loading">{isLoading && <span>Loading...</span>}</div>
			</Form>
		</div>
	);
};

export default Register;
