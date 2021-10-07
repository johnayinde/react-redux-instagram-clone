import { Avatar } from "@material-ui/core";
import React from "react";
import "./UserAccountIcon.css";

function UserAccountIcon({ text, subtitle, username, photo }) {
	return (
		<div className="account">
			<div className="account_detail">
				<Avatar src={photo} />
				<div className="account_name">
					<p className="username">{username}</p>
					<p className="name">{subtitle}</p>
				</div>
			</div>
			<p>{text}</p>
		</div>
	);
}

export default UserAccountIcon;
