import FormGroup from "../utils/FormGroup";
import "../../styles/CreateJobForm.css";
import { useEffect, useState } from "react";
import { CreateJobType, JobBoardType } from "../../types";
import { createJob } from "../../helper/routes";
import { useUserContext } from "../../hooks/useUserContext";

const CreateJobForm = ({ addJob }: { addJob: (job: JobBoardType) => void }) => {
	const { user } = useUserContext();
	const [formData, setFormData] = useState<CreateJobType>({
		title: "",
		description: "",
		zipcode: undefined,
		payment: undefined,
		creator: "",
	});

	useEffect(() => {
		if (user) {
			setFormData((prevState) => ({
				...prevState,
				creator: user.firstName + " " + user.lastName,
			}));
		}
	}, [user]);

	const [formErrorData, setFormErrorData] = useState({
		title: "",
		description: "",
		zipcode: "",
		payment: "",
	});

	const isValidForm = ({ form }: { form: CreateJobType }) => {
		let isValid = true;
		if (!form.title) {
			setFormErrorData((prevState) => ({
				...prevState,
				title: "Title is required",
			}));
			isValid = false;
		} else {
			setFormErrorData((prevState) => ({ ...prevState, title: "" }));
		}
		if (!form.description) {
			setFormErrorData((prevState) => ({
				...prevState,
				description: "Description is required",
			}));
			isValid = false;
		} else {
			setFormErrorData((prevState) => ({ ...prevState, description: "" }));
		}
		if (!form.zipcode) {
			setFormErrorData((prevState) => ({
				...prevState,
				zipcode: "Zipcode is required",
			}));
			isValid = false;
		} else {
			setFormErrorData((prevState) => ({ ...prevState, zipcode: "" }));
		}
		if (!form.payment) {
			setFormErrorData((prevState) => ({
				...prevState,
				payment: "Payment is required",
			}));
			isValid = false;
		} else {
			setFormErrorData((prevState) => ({ ...prevState, payment: "" }));
		}

		return isValid;
	};

	const handleSubmit = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!isValidForm({ form: formData })) {
			return;
		}
		try {
			const createdJob = await createJob(formData);
			if (createdJob) {
				addJob(createdJob); // Update the job list
				handleReset();
			}
		} catch (error) {
			console.error("Error creating job:", error);
		}
	};

	const handleReset = () => {
		setFormData({
			title: "",
			description: "",
			zipcode: undefined,
			payment: undefined,
			creator: user ? user.firstName + " " + user.lastName : "",
		});
	};

	return (
		<>
			<form action="#" id="createJob" className="container CreateJobForm ">
				<h3>Create A Job</h3>
				<FormGroup>
					<label htmlFor="title">Title</label>
					<input
						type="text"
						placeholder="Title "
						name="title"
						onChange={(e) =>
							setFormData({ ...formData, title: e.target.value })
						}
						value={formData.title}
					/>
					<div className="error">
						<span>{formErrorData.title}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="description">Description</label>
					<textarea
						placeholder="Description "
						name="description"
						onChange={(e) =>
							setFormData({ ...formData, description: e.target.value })
						}
						value={formData.description}
					/>
					<div className="error">
						<span>{formErrorData.description}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="zipcode">ZipCode</label>
					<input
						type="number"
						placeholder="ZipCode"
						name="zipcode"
						onChange={(e) =>
							setFormData({ ...formData, zipcode: parseFloat(e.target.value) })
						}
						value={formData.zipcode}
					/>
					<div className="error">
						<span>{formErrorData.zipcode}</span>
					</div>
				</FormGroup>
				<FormGroup>
					<label htmlFor="pay">Payment Amount</label>
					<input
						type="number"
						placeholder="Payment Amount "
						name="pay"
						onChange={(e) =>
							setFormData({
								...formData,
								payment: e.target.value
									? parseFloat(e.target.value)
									: undefined,
							})
						}
						value={formData.payment || ""}
					/>
					<div className="error">
						<span>{formErrorData.payment}</span>
					</div>
				</FormGroup>

				<div className="buttonGroup">
					<button type="reset" onClick={handleReset}>
						Reset
					</button>
					<button type="submit" onClick={handleSubmit}>
						Create Job
					</button>
				</div>
			</form>
		</>
	);
};

export default CreateJobForm;
