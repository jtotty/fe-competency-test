/**
 * Funciton that fetches data from the API.
 *
 * @param {string} endpoint - The url to fetch data from.
 * @returns {array}
 */
export default async function fetchData(endpoint) {
	const data = await fetch(endpoint)
		.then(response => response.json())
		.then(data => data);

	return data;
}