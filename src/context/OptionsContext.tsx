// OptionContext.js
import React, { createContext, useState } from "react";

// Create the context
interface OptionContextType {
	navToggle: boolean;
	setNavToggle: React.Dispatch<React.SetStateAction<boolean>>;

	filterText: number | undefined;
	setFilterText: React.Dispatch<React.SetStateAction<number | undefined>>;
}
export const OptionContext = createContext<OptionContextType | undefined>(
	undefined
);

// Create a provider component
export const OptionProvider = ({ children }: { children: React.ReactNode }) => {
	const [navToggle, setNavToggle] = useState(false);
	const [filterText, setFilterText] = useState<number | undefined>(undefined);

	return (
		<OptionContext.Provider
			value={{ navToggle, setNavToggle, filterText, setFilterText }}
		>
			{children}
		</OptionContext.Provider>
	);
};

// Custom hook to use the OptionContext
