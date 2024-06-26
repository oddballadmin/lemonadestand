import React from "react";

import "../../styles/JobBoardList.css";

const UserCreatedJobList = ({ children }: { children: React.ReactNode }) => {
	return <ul className="JobBoardList">{children}</ul>;
};

export default UserCreatedJobList;
