import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Page from "./Page";
import Navigation from "./Navigation";
import "./../styles/Dashboard.css";
const Dashboard = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const pageName = currentPath === "/" ? "Home" : currentPath.substring(1);
	return (
		<div className="Dashboard">
			<Header title="SmallWorks" />
			<div className="pageLayout">
				<Navigation />
				<Page name={pageName}>
					<Outlet />
				</Page>
			</div>
		</div>
	);
};

export default Dashboard;
