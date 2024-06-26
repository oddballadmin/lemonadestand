type SidebarProps = {
	isAdmin: boolean;
};
const Sidebar = ({ isAdmin }: SidebarProps) => {
	return (
		<div>
			<h2>Sidebar</h2>
			{isAdmin ? <h3>Logged In</h3> : <h3>Logged Out</h3>}
		</div>
	);
};

export default Sidebar;
