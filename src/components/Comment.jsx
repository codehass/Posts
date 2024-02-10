import React from "react";

function Comment({ comm }) {
	const { name, body } = comm;
	return (
		<div>
			<div className=" ">
				<h3 className="text-gray-950 font-semibold">{name}:</h3>
				<p className="pl-2">{body}</p>
			</div>
		</div>
	);
}

export default Comment;
