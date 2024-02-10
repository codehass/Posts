export async function getPostComments(postId) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}/comments`
	);

	const comments = await res.json();

	return comments;
}
