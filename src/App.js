import "./App.css";
import { Feed } from "./components/Feed/Feed";
import { Header } from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Signup from "./components/Auth/Signup/Signup";
// import Login from "./components/Auth/Login/Login";
import { useSelector } from "react-redux";
function App() {
	const user = useSelector((state) => state.user);
	return (
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
		</div>
	);
}

export default App;
