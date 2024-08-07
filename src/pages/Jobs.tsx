import React, { useState, useEffect } from "react";
import JobList from "../components/Job/JobList";
import { useUserContext } from "../hooks/useUserContext";
import Modal from "../components/utils/Modal";
import "../styles/Job.css";
import CreateJobForm from "../components/Job/CreateJobForm";
import { JobBoardType } from "../types";
import { getAllJobs } from "../helper/routes";
import { useOptionContext } from "../hooks/useOptionContext";

const Jobs = () => {
	const { setNavToggle } = useOptionContext();
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
	const [jobs, setJobs] = useState<JobBoardType[]>([]);

	const getJobsData = async () => {
		setJobs(await getAllJobs());
	};

	useEffect(() => {
		setNavToggle(false);
		getJobsData();
	}, []);

	const addJob = (newJob: JobBoardType) => {
		setJobs((prevJobs) => [newJob, ...prevJobs]);
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
							<CreateJobForm addJob={addJob} />
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
				<JobList filterInput={filterText} jobs={jobs} />
			</div>
		);
	}
};

export default Jobs;
