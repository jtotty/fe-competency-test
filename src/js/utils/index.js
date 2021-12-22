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

/**
 * Create Date object.
 *
 * @param {string} dateString - The date string to convert.
 * @returns {Date}
 */
export function createDateObj(dateString) {
	const { 0: month, 1: year } = dateString.split('/');
	return new Date(year, month - 1);
}

/**
 * Create human readable date.
 * 
 * @param {Date} dateObj - The date object to format.
 * @returns {string}
 */
export function humanReadable(dateObj) {
	return dateObj.toLocaleDateString('en-GB', {
		month: 'long',
		year: 'numeric'
	});
}
