import "./styles/HeaderMenu.css";
import { FcMenu } from "react-icons/fc";
import Button from "../Button";

const HeaderMenu = () => {
	return (
		<div className="HeaderMenu">
			<Button action={() => console.log("Clicked")} name="MenuToggle">
				<FcMenu />
			</Button>
		</div>
	);
};

export default HeaderMenu;
