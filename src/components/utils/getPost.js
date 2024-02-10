export async function getPost(postId) {
	const res = await fetch(
		`https://jsonplaceholder.typicode.com/posts/${postId}`
	);

	const post = await res.json();

	return post;
}
