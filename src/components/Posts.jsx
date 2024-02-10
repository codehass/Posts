"use client";
import React, { useEffect, useState } from "react";
import Post from "./Post";
import { getData } from "./utils/getData";

const ITEMS_PER_PAGE = 10;

function Posts() {
	const [data, setData] = useState([]);
	const [currentPage, setCurrentPage] = useState(1);
	const [searchTerm, setSearchTerm] = useState("");

	useEffect(() => {
		const fetchData = async () => {
			try {
				const result = await getData(currentPage);
				setData(result);
			} catch (error) {
				console.error("Error fetching data:", error.message);
			}
		};

		fetchData();
	}, [currentPage, searchTerm]);

	const handlePageChange = (newPage) => {
		setCurrentPage(newPage);
	};

	const handleDelete = (postId) => {
		setData((prevPosts) => prevPosts.filter((post) => post.id !== postId));
	};

	return (
		<div className="w-full md:w-[80%] m-auto my-4">
			<div className="w-full text-center">
				<input
					type="text"
					placeholder="Search posts..."
					value={searchTerm}
					onChange={(e) => setSearchTerm(e.target.value)}
					className="p-1 text-center"
				/>
			</div>

			{data
				.filter((post) =>
					post.title.toLowerCase().includes(searchTerm.toLowerCase())
				)
				.map((post) => (
					<Post key={post.id} postProp={post} onDelete={handleDelete} />
				))}

			{/* Pagination controls */}
			<div className="w-full text-center">
				<button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
					className="font-medium px-2 py-1 rounded-md border hover:cursor-pointer"
				>
					Previous Page
				</button>
				<span className="font-bold"> {currentPage} </span>
				<button
					disabled={data.length < ITEMS_PER_PAGE}
					onClick={() => handlePageChange(currentPage + 1)}
					className="font-medium px-2 py-1 rounded-md border hover:cursor-pointer"
				>
					Next Page
				</button>
			</div>
		</div>
	);
}

export default Posts;
