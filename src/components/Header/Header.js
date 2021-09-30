import React from "react";
import "./header.css";
import logo from "../../logo.png";
import {
	CompassCalibrationOutlined,
	FavoriteBorderOutlined,
	HomeOutlined,
	MessageOutlined,
	Search,
} from "@material-ui/icons";
import { HeaderOption } from "./HeaderOption";

export const Header = () => {
	return (
		<div className="header">
			<div className="headerContainer">
				<div className="header_left">
					<img src={logo} alt="" />
				</div>
				<div className="header_middle">
					<div className="header_searchContainer">
						<div className="search_icon">
							{/* search icon */}
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
					<HeaderOption avatar={true} />
				</div>
			</div>
		</div>
	);
};
