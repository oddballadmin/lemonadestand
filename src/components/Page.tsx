import React from "react";
interface PageProps {
	name: string;
	children: React.ReactNode;
}
const Page = ({ name, children }: PageProps) => {
	return (
		<main id={name} className="container">
			{children}
		</main>
	);
};

export default Page;
