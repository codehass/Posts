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
		<div>
			<input
				type="text"
				placeholder="Search posts..."
				value={searchTerm}
				onChange={(e) => setSearchTerm(e.target.value)}
			/>

			{data
				.filter((post) =>
					post.title.toLowerCase().includes(searchTerm.toLowerCase())
				)
				.map((post) => (
					<Post key={post.id} postProp={post} onDelete={handleDelete} />
				))}

			{/* Pagination controls */}
			<div>
				<button
					disabled={currentPage === 1}
					onClick={() => handlePageChange(currentPage - 1)}
					className="text-red-500 font-bold"
				>
					Previous Page
				</button>
				<span> Page {currentPage} </span>
				<button
					disabled={data.length < ITEMS_PER_PAGE}
					onClick={() => handlePageChange(currentPage + 1)}
					className="text-red-500 font-bold"
				>
					Next Page
				</button>
			</div>
		</div>
	);
}

export default Posts;
