import "./App.css";
import { Feed } from "./components/Feed/Feed";
import { Header } from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Signup from "./components/Auth/Signup/Signup";
import { useSelector } from "react-redux";
import Login from "./components/Auth/Login/Login";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
function App() {
	const user = useSelector((state) => state.user);
	return (
		<Router>
			<div className="App">
				{!user ? (
					<Signup />
				) : (
					<>
						<Header />
						<div className="app_body">
							<Feed />

							<Sidebar />
						</div>
					</>
				)}

				<Routes>
					<Route path="/register" element={<Signup />} />
					<Route path="/login" element={<Login />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
