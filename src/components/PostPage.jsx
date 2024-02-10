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
		<div>
			<p>{post.title}</p>
			<p>{post.body}</p>
			<h2>comments</h2>
			{comments.map((el) => (
				<Comment key={el.id} comm={el} />
			))}
		</div>
	);
}

export default PostPage;
