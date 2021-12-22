/**
 * Handle our response errors.
 *
 * @param {Response} response
 * @returns {Response}
 */
export function handleErrors(response) {
	if (!response.ok) throw Error(response.statusText);

	return response;
}

/**
 * Funciton that fetches data from the API.
 *
 * @param {string} endpoint - The url to fetch data from.
 * @returns {array}
 */
 export async function fetchData(endpoint) {
	const data = await fetch(endpoint)
		.then(handleErrors)
		.then(response => response.json())
		.then(data => data)
		.catch(error => console.log(error));

	return data;
}