import React from "react";
import { useSelector } from "react-redux";
import "./Sidebar.css";
import UserAccountIcon from "./UserAccountIcon";

function Sidebar() {
	const user = useSelector((state) => state.user);
	return (
		<div className="sidebar">
			<UserAccountIcon
				photo={user.photoURL}
				subtitle={user.name}
				username={user.username}
				text="Switch"
			/>
			<div className="sidebar_suggest">
				<div className="suggest_header">
					<p className="title">Suggestions for you</p>
					<p className="seeAll"> See All</p>
				</div>

				<div className="suggest_body">
					<UserAccountIcon subtitle="Follow you" username="abc" text="Follow" />
					<UserAccountIcon subtitle="Follow you" username="abc" text="Follow" />
					<UserAccountIcon subtitle="Follow you" username="abc" text="Follow" />
					<UserAccountIcon subtitle="Follow you" username="abc" text="Follow" />
				</div>
			</div>
			<div className="sidebar_footer">
				<div className="links">
					<span>About</span>
					<span>Help</span>
					<span>Press</span>
					<span>API</span>
					<span>Privacy</span>
					<span>Terms</span>
					<span>Locations</span>
					<br />
					<span>Top Accounts</span>
					<span>Hashtags</span>
					<span>Language</span>
					<span></span>
				</div>
				<br />
				<br />

				<p> 20211 INSTAGRAM FROM FACEBOOK</p>
			</div>
		</div>
	);
}

export default Sidebar;
