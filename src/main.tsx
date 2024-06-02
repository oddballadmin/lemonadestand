import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import { OptionProvider } from "./context/OptionsContext";

ReactDOM.createRoot(document.getElementById("root")!).render(
	<React.StrictMode>
		<OptionProvider>
			<App />
		</OptionProvider>
	</React.StrictMode>
);
