import React from "react";
import { countWords } from "./utils/countWords";
import Link from "next/link";

function Post({ postProp, onDelete }) {
	const { id, userId, title, body } = postProp;
	const wordCount = countWords(body);

	const deleteHandler = async () => {
		try {
			const response = await fetch(
				`https://jsonplaceholder.typicode.com/posts/${id}`,
				{
					method: "DELETE",
				}
			);

			if (response.ok) {
				onDelete(id);
			} else {
				console.error(`Failed to delete post with id ${id}`);
			}
		} catch (error) {
			console.error("Error while deleting post:", error);
		}
	};

	return (
		<div className="m-2 border flex justify-center items-center">
			<Link href={`/posts/${id}`} className="w-[95%]">
				<p>{userId} </p>
				<p>{id} </p>
				<p>{title} </p>
				<p>{body} </p>
				<p>{wordCount} </p>
			</Link>
			<div className="w-[5%]">
				<button className="text-red-500" onClick={deleteHandler}>
					Delete
				</button>
			</div>
		</div>
	);
}

export default Post;
