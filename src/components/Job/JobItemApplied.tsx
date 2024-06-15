import React from "react";

import { JobApplyType } from "../../types";

const JobItemApplied = ({ _id, title, company, date, status }: JobApplyType) => {
	return (
		<li key={_id} className="jobListItem">
			<div className="jobItemContent">
				<h4>{title}</h4>
				<p>{company}</p>
				<p>{date}</p>
				<p className={status.toLowerCase()}>{status}</p>
			</div>
		</li>
	);
};

export default JobItemApplied;
