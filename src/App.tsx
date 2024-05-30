import "./App.css";
import Dashboard from "./components/Dashboard";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import Jobs from "./pages/Jobs";
import Error from "./pages/Error";
const router = createBrowserRouter([
	{
		path: "/",
		element: <Dashboard />,
		children: [
			{ index: true, element: <Home /> },
			{ path: "jobs", element: <Jobs /> },
			{ path: "*", element: <Error /> }, // Optional: Catch-all route for 404
		],
	},
]);
function App() {
	return <RouterProvider router={router} />;
}

export default App;
