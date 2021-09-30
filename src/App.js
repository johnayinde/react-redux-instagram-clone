import "./App.css";
import { Feed } from "./components/Feed/Feed";
import { Header } from "./components/Header/Header";
import Sidebar from "./components/Sidebar/Sidebar";

function App() {
	return (
		<div className="App">
			{/* <header className="App-header">his is the header</header> */}
			<Header />
			<div className="app_body">
				<Feed />
				<Sidebar />
				{/* <Sidebar /> */}
			</div>
		</div>
	);
}

export default App;
