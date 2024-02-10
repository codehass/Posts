import React from "react";

function Comment({ comm }) {
	const { name, body } = comm;
	return (
		<div>
			<div>
				<h3>{name}</h3>
				<p>{body}</p>
			</div>
		</div>
	);
}

export default Comment;
