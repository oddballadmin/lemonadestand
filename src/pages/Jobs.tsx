import React from "react";
import JobList from "../components/Job/JobList";
import { useUserContext } from "../hooks/useUserContext";
import { useOptionContext } from "../hooks/useOptionContext";
import Modal from "../components/utils/Modal";
import "../styles/Job.css";
import CreateJobForm from "../components/Job/CreateJobForm";
const Jobs = () => {
	const { filterText, setFilterText } = useOptionContext();
	const { user } = useUserContext();
	const handleFilter = (e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value;
		setFilterText(value ? Number(value) : undefined);
	};
	const [dislayModal, setDisplayModal] = React.useState(false);
	const toggleModal = () => {
		setDisplayModal((prevState) => !prevState);
	};
	if (!user) {
		return <h2>Please log in to view this page</h2>;
	} else {
		return (
			<div className="Job">
				<h2>Local Job List</h2>

				<div className="row relative">
					<button onClick={toggleModal}>
						{dislayModal ? "Close" : "Create Job"}
					</button>
					{dislayModal && (
						<Modal>
							<CreateJobForm />
						</Modal>
					)}

					<div className="filter">
						<label htmlFor="filter">Search By Zipcode</label>
						<input
							type="number"
							id="filter"
							placeholder="Enter Zipcode"
							onChange={handleFilter}
							value={filterText !== undefined ? filterText : ""}
						/>
					</div>
				</div>
				<JobList filterInput={filterText} />
			</div>
		);
	}
};

export default Jobs;
