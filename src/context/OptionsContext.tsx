// OptionContext.js
import React, { createContext, useContext, useState } from "react";

// Create the context
interface OptionContextType {
	navToggle: boolean;
	setNavToggle: (toggle: boolean) => void;
}
const OptionContext = createContext<OptionContextType | undefined>(undefined);

// Create a provider component
export const OptionProvider = ({ children }: { children: React.ReactNode }) => {
	const [navToggle, setNavToggle] = useState(false);

	return (
		<OptionContext.Provider value={{ navToggle, setNavToggle }}>
			{children}
		</OptionContext.Provider>
	);
};

// Custom hook to use the OptionContext
export const useOptionContext = () => {
	const context = useContext(OptionContext);

	if (context === undefined) {
		throw new Error("useOptionContext must be used within an OptionProvider");
	}
	return context;
};
