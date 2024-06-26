import React from "react";
import FormGroup from "../utils/FormGroup";
import { applyJob } from "../../helper/routes";
import "../../styles/ApplyForm.css";

const ApplyForm = ({
	jobId,
	setViewApply,
}: {
	jobId: string;
	setViewApply: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
	const [formData, setFormData] = React.useState({
		message: "",
	});
	const [formErrorData, setFormErrorData] = React.useState<{ message: string }>(
		{
			message: "",
		}
	);

	const isValidForm = ({ form }: { form: { message: string } }) => {
		const isValid = true;
		if (!form.message) {
			setFormErrorData((prevState) => ({
				...prevState,
				message: "Message is required",
			}));
			return !isValid;
		} else {
			setFormErrorData((prevState) => ({ ...prevState, message: "" }));
		}
		return isValid;
	};

	const handleReset = () => {
		setFormData({
			message: "",
		});
	};
	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!isValidForm({ form: formData })) {
			return;
		}
		applyJob(jobId, formData.message);
		handleReset();
	};
	const handleCancel = (e: React.FormEvent) => {
		e.preventDefault();
		setViewApply(false);
	};
	return (
		<div className="ApplyForm">
			<form action="#" id="applyJob">
				<h3>Apply To Job</h3>
				<FormGroup>
					<label htmlFor="message">Message</label>
					<textarea
						placeholder="message "
						name="message"
						onChange={(e) =>
							setFormData({ ...formData, message: e.target.value })
						}
						value={formData.message}
					/>
					<div className="error">
						<span>{formErrorData.message}</span>
					</div>
				</FormGroup>

				<div className="buttonGroup">
					<button type="reset" onClick={handleReset}>
						Reset
					</button>
					<button type="button" onClick={handleCancel}>
						Cancel
					</button>
					<button type="submit" onClick={handleSubmit}>
						Submit
					</button>
				</div>
			</form>
		</div>
	);
};

export default ApplyForm;
