import React from "react";
import "./header.css";
import {
	CompassCalibrationOutlined,
	FavoriteBorderOutlined,
	HomeOutlined,
	MessageOutlined,
	Search,
} from "@material-ui/icons";
import { HeaderOption } from "./HeaderOption";
import { logo } from "../utils/images";
import { useDispatch } from "react-redux";
import { logoutUser } from "../../Redux/user/userAction";

export const Header = () => {
	const dispatch = useDispatch();

	const logoutApp = () => {
		dispatch(logoutUser());
	};
	return (
		<div className="header">
			<div className="headerContainer">
				<div className="header_left">
					<img src={logo} alt="" />
				</div>
				<div className="header_middle">
					<div className="header_searchContainer">
						<div className="search_icon">
							<Search />
							<span>Search</span>
						</div>
					</div>
				</div>
				<div className="header_right">
					<HeaderOption
						Icon={HomeOutlined}
						active={true}
						className="hederIcon_home"
					/>
					<HeaderOption Icon={MessageOutlined} />
					<HeaderOption Icon={CompassCalibrationOutlined} />
					<HeaderOption Icon={FavoriteBorderOutlined} />
					<HeaderOption avatar={true} onclick={logoutApp} />
				</div>
			</div>
		</div>
	);
};
