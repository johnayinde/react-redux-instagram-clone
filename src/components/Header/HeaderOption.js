import { Avatar } from "@material-ui/core";
import React from "react";
import "./HeaderOption.css";
import logo2 from "../../logo2.png";

export const HeaderOption = ({ Icon, avatar }) => {
	return (
		<div className="HeaderOption">
			{Icon && <Icon className="header_icon" />}
			{avatar && <Avatar src={logo2} />}
		</div>
	);
};
