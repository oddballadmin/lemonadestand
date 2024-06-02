import React from "react";
import Form from "./../components/utils/Form";
import "../styles/Form.css";
import FormGroup from "./../components/utils/FormGroup";
const Register = () => {
	const [formData, setFormData] = React.useState({
		fname: "",
		lname: "",
		bday: "",
		zip: "",
		email: "",
		password: "",
		password2: "",
	});
	const [formError, setFormError] = React.useState({
		fnameError: "",
		lnameError: "",
		bdayError: "",
		zipError: "",
		emailError: "",
		passwordError: "",
		password2Error: "",
	});
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		console.log(formData);
	};
	const handleReset = (e: React.FormEvent) => {
		e.preventDefault();
		setFormError({
			fnameError: "",
			lnameError: "",
			bdayError: "",
			zipError: "",
			emailError: "",
			passwordError: "",
			password2Error: "",
		});
		setFormData({
			fname: "",
			lname: "",
			bday: "",
			zip: "",
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
					<label htmlFor="fname">Enter Your First Name</label>
					<input
						type="text"
						placeholder="First Name: "
						name="fname"
						onChange={(e) =>
							setFormData({ ...formData, fname: e.target.value })
						}
						value={formData.fname}
					/>
					<div className="error">
						<span>{formError.fnameError}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="lname">Enter Your Last Name</label>
					<input
						type="text"
						placeholder="Last Name: "
						name="lname"
						onChange={(e) =>
							setFormData({ ...formData, lname: e.target.value })
						}
						value={formData.lname}
					/>
					<div className="error">
						<span>{formError.lnameError}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="bday">Enter Your Birthdate</label>
					<input
						type="date"
						placeholder="Birth Date: "
						name="bday"
						onChange={(e) => setFormData({ ...formData, bday: e.target.value })}
						value={formData.bday}
					/>
					<div className="error">
						<span>{formError.bdayError}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="zip">Enter Your Zip Code</label>
					<input
						type="number"
						placeholder="Zipcode: "
						name="zip"
						onChange={(e) => setFormData({ ...formData, zip: e.target.value })}
						value={formData.zip}
					/>
					<div className="error">
						<span>{formError.zipError}</span>
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
			</Form>
		</div>
	);
};

export default Register;
