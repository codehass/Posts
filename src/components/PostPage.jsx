"use client";
import React, { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { getPost } from "./utils/getPost";
import { getPostComments } from "./utils/getPostComments";
import Comment from "./Comment";

function PostPage() {
	const params = useParams();
	const [post, setPost] = useState([]);
	const [comments, setComments] = useState([]);

	// Fetch both post and comments using Promise.all
	useEffect(() => {
		const fetchData = async () => {
			try {
				const [postResult, commentsResult] = await Promise.all([
					getPost(params.postId),
					getPostComments(params.postId),
				]);

				setPost(postResult);
				setComments(commentsResult);
			} catch (error) {
				console.error("Error fetching data:", error.message);
			}
		};

		fetchData();
	}, [params.postId]);

	return (
		<div className="w-full md:w-[80%] m-auto mt-4">
			<div className="border p-4 rounded-lg">
				<p className="font-bold text-blue-700">{post.title} </p>
				<p className="text-gray-500">{post.body} </p>
			</div>
			<h2 className="font-bold pl-2">comments:</h2>
			<div className="pl-4">
				{comments.map((el) => (
					<Comment key={el.id} comm={el} />
				))}
			</div>
		</div>
	);
}

export default PostPage;
