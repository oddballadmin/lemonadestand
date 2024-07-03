import "./App.css";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Error from "./pages/Error";
import SignIn from "./pages/SignIn";
import Register from "./pages/Register";
import About from "./pages/About";
import axios from "axios";
import Applicants from "./pages/Applicants";
import.meta.env.VITE_NODE_ENV === "development"
	? (axios.defaults.baseURL = import.meta.env.VITE_API_BASE_URL)
	: (axios.defaults.baseURL = import.meta.env.VITE_PROD_API_BASE_URL);
axios.defaults.withCredentials = true;

const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "jobs", element: <Jobs />, children: [] },
			{ path: "jobs/:jobId/applicants", element: <Applicants /> },
			{ path: "login", element: <SignIn /> },
			{ path: "register", element: <Register /> },
			{ path: "about", element: <About /> },
			{ path: "*", element: <Error /> }, // Optional: Catch-all route for 404
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
