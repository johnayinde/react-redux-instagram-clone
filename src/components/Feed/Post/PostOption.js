import React from "react";
import { HeaderOption } from "../../Header/HeaderOption";
import {
	BookmarkBorderOutlined,
	CompassCalibrationOutlined,
	FavoriteBorderOutlined,
	MessageOutlined,
	MoreHoriz,
} from "@material-ui/icons";
import "./PostOption.css";

function PostOption() {
	return (
		<div className="post_optionContainer">
			<div className="option_Left">
				<HeaderOption Icon={FavoriteBorderOutlined} />
				<HeaderOption Icon={MessageOutlined} />
				<HeaderOption Icon={CompassCalibrationOutlined} />
			</div>
			<div className="option_middle">
				<HeaderOption Icon={MoreHoriz} />
			</div>
			<div className="option_right">
				<HeaderOption Icon={BookmarkBorderOutlined} />
			</div>
		</div>
	);
}

export default PostOption;
