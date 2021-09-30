import { EmojiFlags } from "@material-ui/icons";
import React from "react";
import "./PostComment.css";

function PostComment() {
	return (
		<div className="comment_container">
			<form>
				<EmojiFlags />
				<input type="text" placeholder="Add a comment..." />
				<submit>Post</submit>
			</form>
		</div>
	);
}

export default PostComment;
