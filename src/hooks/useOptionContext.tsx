import { useContext } from "react";
import { OptionContext } from "../context/OptionsContext";
export const useOptionContext = () => {
	const context = useContext(OptionContext);

	if (context === undefined) {
		throw new Error("useOptionContext must be used within an OptionProvider");
	}
	return context;
};
