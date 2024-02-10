import React from "react";
import { countWords } from "./utils/countWords";

function Post({ postProp }) {
	const { userId, id, title, body } = postProp;
	const wordCount = countWords(body);

	return (
		<div className="m-2 border ">
			<p>{userId} </p>
			<p>{id} </p>
			<p>{title} </p>
			<p>{body} </p>
			<p>{wordCount} </p>
		</div>
	);
}

export default Post;
