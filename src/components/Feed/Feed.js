import React from "react";
import { logo2 } from "../utils/images";
import "./Feed.css";
import Feedstatus from "./Feedstatus";

import Post from "./Post/Post";
import { useSelector } from "react-redux";

export const Feed = () => {
	const user = useSelector((state) => state.user);
	return (
		<div className="feed">
			<div className="feed_status">
				<Feedstatus name="Ayinde john" />
				<Feedstatus name="Ayinde john" />
				<Feedstatus name="Ayinde john" />
				<Feedstatus name="Ayinde john" />
			</div>

			<Post
				username={user.username}
				content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
						voluptates et magnam accusamus temporibus est, quaerat, similique
						iure fugit, minima quos molestiae possimus quasi libero iste id hic
						quod doloribus?"
				image={logo2}
				avatar={user.photoURL}
			/>
			<Post
				username={user.username}
				content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque
						voluptates et magnam accusamus temporibus est, quaerat, similique
						iure fugit, minima quos molestiae possimus quasi libero iste id hic
						quod doloribus?"
				image={logo2}
				avatar={user.photoURL}
			/>
		</div>
	);
};
