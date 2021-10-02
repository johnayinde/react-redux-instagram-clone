import { Avatar } from "@material-ui/core";
import React from "react";
import { logo2 } from "../utils/images";
import "./HeaderOption.css";

export const HeaderOption = ({ Icon, avatar }) => {
	return (
		<div className="HeaderOption">
			{Icon && <Icon className="header_icon" />}
			{avatar && <Avatar src={logo2} />}
		</div>
	);
};
