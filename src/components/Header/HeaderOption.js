import { Avatar } from "@material-ui/core";
import React from "react";
import { useSelector } from "react-redux";
import { logo2 } from "../utils/images";
import "./HeaderOption.css";

export const HeaderOption = ({ Icon, avatar, onclick }) => {
	const user = useSelector((state) => state.user);

	return (
		<div className="HeaderOption" onClick={onclick}>
			{Icon && <Icon className="header_icon" />}
			{avatar && (
				<Avatar className="avatar_icon" src={user ? user.photoURL : logo2} />
			)}
		</div>
	);
};
