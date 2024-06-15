import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { OptionProvider } from "./context/OptionsContext";
import { UserProvider } from "./context/UserContext.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<OptionProvider>
			<UserProvider>
				<App />
			</UserProvider>
		</OptionProvider>
	</React.StrictMode>
);
