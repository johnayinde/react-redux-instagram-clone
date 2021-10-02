import { EmojiFlags } from "@material-ui/icons";
import React from "react";
import "./PostComment.css";

function PostComment() {
	return (
		<div className="comment_container">
			<form className="comment_form">
				<EmojiFlags />
				<input
					className="commentBox"
					type="text"
					placeholder="Add a comment..."
				/>
				<submit>Post</submit>
			</form>
		</div>
	);
}

export default PostComment;
