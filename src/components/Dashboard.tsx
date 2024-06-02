import { Outlet, useLocation } from "react-router-dom";
import Header from "./Header";
import Page from "./Page";
import Navigation from "./Navigation";
import "./../styles/Dashboard.css";
import { useOptionContext } from "./../context/OptionsContext";
import { UserProvider } from "../context/UserContext";
const Dashboard = () => {
	const location = useLocation();
	const currentPath = location.pathname;
	const pageName = currentPath === "/" ? "Home" : currentPath.substring(1);
	const { navToggle } = useOptionContext();

	return (
		<div className="Dashboard">
			<UserProvider>
				<Header title="SmallWorks" />
				<div className="pageLayout">
					{navToggle && <Navigation />}
					<Page name={pageName}>
						<Outlet />
					</Page>
				</div>
			</UserProvider>
		</div>
	);
};

export default Dashboard;
