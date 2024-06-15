// OptionContext.js
import React, { createContext, useMemo, useState, useEffect } from "react";
import { getProfile } from "./../helper/routes";
import { JobType } from "./../types";

interface UserType {
	firstName: string;
	lastName: string;
	email: string;
	_id: string;
	birthdate: string;
	jobsApplied: [JobType | null];
}
interface UserContextType {
	user: UserType;
	setUser: React.Dispatch<React.SetStateAction<UserType>>;
	refreshUser?: () => void;
}
export const UserContext = createContext<UserContextType | undefined>(
	undefined
);

// Create a provider component
export const UserProvider = ({ children }: { children: React.ReactNode }) => {
	const [user, setUser] = useState<UserType>({
		firstName: "",
		lastName: "",
		email: "",
		_id: "",
		birthdate: "",
		jobsApplied: [null],
	});
	const fetchUser = async () => {
		try {
			const userData = await getProfile(); // Get user data
			setUser(userData); // Set user data
		} catch (error) {
			console.error("Failed to fetch user:", error);
		}
	};
	useEffect(() => {
		fetchUser();
	}, []); // Empty dependency array to run only once on mount
	const value = useMemo(
		() => ({ user, setUser, refreshUser: fetchUser }),
		[user, setUser]
	);
	return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
