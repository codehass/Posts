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
		<div className="m-2 border p-3 relative rounded-lg">
			<Link href={`/posts/${id}`} className="w-[95%]">
				<p>{userId} </p>
				<p>{id} </p>
				<p className="font-bold text-blue-700">{title} </p>
				<p className="text-gray-500">{body} </p>
				<p className="font-medium">
					{" "}
					<span>Words counts:</span> {wordCount}{" "}
				</p>
			</Link>

			<button
				className="bg-red-500 absolute top-1 right-1 text-white p-1 rounded-md hover:cursor-pointer"
				onClick={deleteHandler}
			>
				Delete
			</button>
		</div>
	);
}

export default Post;
