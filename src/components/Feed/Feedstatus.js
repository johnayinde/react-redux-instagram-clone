import { Avatar } from "@material-ui/core";
import React from "react";
import "./Feedstatus.css";

const Feedstatus = ({ name }) => {
	return (
		<div className="feedStatus">
			<div className="avatarContainer">
				<Avatar className="avatar" />
			</div>
			<p>{name}</p>
		</div>
	);
};

export default Feedstatus;
