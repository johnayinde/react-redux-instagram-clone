import "./App.css";
import { Feed } from "./components/Feed/Feed";
import { Header } from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";
import Signup from "./components/Auth/Signup/Signup";
import Login from "./components/Auth/Login/Login";

function App() {
	return (
		<div className="App">
			{/* // 	<Header />
		// 	<div className="app_body">
		// 		<Feed />
		// 		<Sidebar />
		// 	</div> */}
			<Signup />
		</div>
	);
}

export default App;
