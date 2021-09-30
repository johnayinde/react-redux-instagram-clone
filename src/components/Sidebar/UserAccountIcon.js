import { Avatar } from "@material-ui/core";
import React from "react";
import "./UserAccountIcon.css";

function UserAccountIcon({ text, name }) {
	return (
		<div className="account">
			<div className="account_detail">
				<Avatar />
				<div className="account_name">
					<p className="username">ayindejo</p>
					<p className="name">{name}</p>
				</div>
			</div>
			<p>{text}</p>
		</div>
	);
}

export default UserAccountIcon;
