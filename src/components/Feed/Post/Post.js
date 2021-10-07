import React from "react";
import { MoreHoriz } from "@material-ui/icons";
import PostOption from "../Post/PostOption";
import PostComment from "../Post/PostComment";
import "./Post.css";

import { useSelector } from "react-redux";
import { Avatar } from "@material-ui/core";

function Post({ avatar, username, image, content }) {
	const user = useSelector((state) => state.user);
	return (
		<div className="feed_post">
			<div className="post_header">
				<div className="post_header_left">
					<Avatar className="post_header_image" src={avatar} />
					{/* prop:avatar */}
					<p>{username}</p>
				</div>
				<div className="post_header_right">
					<MoreHoriz />
				</div>
			</div>

			<div className="post_article">
				<img src={image} className="article_image" alt="" /> {/* prop:image */}
			</div>

			<div className="post">
				<PostOption />

				<div className="post_content">
					<div className="content_like">
						<p>232 likes</p>
					</div>

					<p>{content}</p>
					<div className="content_comment">
						<p>View All 232 comments</p>
					</div>

					<div className="content_time">
						<p>36 MINUTES AGO</p>
					</div>
				</div>
				<PostComment />
			</div>
		</div>
	);
}

export default Post;
