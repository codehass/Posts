import React from "react";
import { countWords } from "./utils/countWords";
import Link from "next/link";

function Post({ postProp }) {
	const { userId, id, title, body } = postProp;
	const wordCount = countWords(body);

	return (
		<div className="m-2 border ">
			<Link href={`/posts/${id}`}>
				<p>{userId} </p>
				<p>{id} </p>
				<p>{title} </p>
				<p>{body} </p>
				<p>{wordCount} </p>
			</Link>
		</div>
	);
}

export default Post;
