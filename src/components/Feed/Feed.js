import React from "react";
import "./Feed.css";
import Feedstatus from "./Feedstatus";

import Post from "./Post/Post";
import logo2 from "../../logo2.png";

export const Feed = () => {
	return (
		<div className="feed">
			<div className="feed_status">
				<Feedstatus name="Ayinde john" />
				<Feedstatus name="Ayinde john" />
				<Feedstatus name="Ayinde john" />
				<Feedstatus name="Ayinde john" />
			</div>

			<Post
				username="ayindejo"
				content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
						voluptates et magnam accusamus temporibus est, quaerat, similique
						iure fugit, minima quos molestiae possimus quasi libero iste id hic
						quod doloribus?"
				image={logo2}
				avatar={logo2}
			/>
		</div>
	);
};
