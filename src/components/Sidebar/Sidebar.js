import React from "react";
import "./Sidebar.css";
import UserAccountIcon from "./UserAccountIcon";

function Sidebar() {
	return (
		<div className="sidebar">
			<UserAccountIcon name="Ayiinde John" text="Switch" />
			<div className="sidebar_suggest">
				<div className="suggest_header">
					<p className="title">Suggestions for you</p>
					<p className="seeAll"> See All</p>
				</div>

				<div className="suggest_body">
					<UserAccountIcon name="Follow you" text="Follow" />
					<UserAccountIcon name="Follow you" text="Follow" />
					<UserAccountIcon name="Follow you" text="Follow" />
					<UserAccountIcon name="Follow you" text="Follow" />
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
