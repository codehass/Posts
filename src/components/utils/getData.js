async function getData(page) {
	const ITEMS_PER_PAGE = 10;
	const startIndex = (page - 1) * ITEMS_PER_PAGE;
	const endIndex = startIndex + ITEMS_PER_PAGE;

	const res = await fetch("https://jsonplaceholder.typicode.com/posts");

	if (!res.ok) {
		throw new Error("Failed to fetch data");
	}

	const json = await res.json();
	return json.slice(startIndex, endIndex);
}

export { getData };
