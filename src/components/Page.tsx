import React from "react";
import { Toaster } from "react-hot-toast";
interface PageProps {
	name: string;
	children: React.ReactNode;
}
const Page = ({ name, children }: PageProps) => {
	return (
		<main id={name} className="container">
			<Toaster position="top-right" toastOptions={{ duration: 2000 }} />

			{children}
		</main>
	);
};

export default Page;
