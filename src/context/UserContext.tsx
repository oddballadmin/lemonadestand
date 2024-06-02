// OptionContext.js
import React, { createContext, useContext, useMemo, useState } from "react";

// Create the context
interface UserType {
	name: string;
	email: string;
}
interface UserContextType {
	user: UserType;
	setUser: React.Dispatch<React.SetStateAction<UserType>>;
}
const UserContext = createContext<UserContextType | undefined>(undefined);

// Create a provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<UserType>({
		name: "John Doe",
		email: "",
	});

	const value = useMemo(() => ({ user, setUser }), [user, setUser]);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};

// Custom hook to use the OptionContext
export const useUserContext = () => {
	const context = useContext(UserContext);

	if (context === undefined) {
		throw new Error("useUserContext must be used within an OptionProvider");
	}
	return context;
};
