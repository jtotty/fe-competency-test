/**
 * Grid module.
 * 
 * @params {Object} options - Options object.
 */
 export default class Grid {
	constructor({ el, data, maxItems }) {
		this.el = el;
		this.data = data;
		this.maxItems = maxItems
		this.init();
	}

	/**
	 * Create our grid.
	 */
	init() {
		// Retrieve the first 'x' items in data.
		for (let i = 0; i < this.maxItems; i++) {
			const markup = this.generateMarkup(i, this.data[i]);
			this.el.innerHTML += markup;
		}
	}

	/**
	 * Generate our HTML markup.
	 *
	 * @param {number} index 
	 * @param {object} data
	 * @returns {string}
	 */
	generateMarkup(index, data) {
		const { name, tagline, abv } = data;
	
		return `
			<div id="grid-${index}" class="grid-item">
				<div class="grid-heading">
					<h3>${name}</h3>
				</div>

				<div class="grid-content">
					<p>${tagline}</p>
					<p>${abv}% (abv)</p>
				</div>
			</div>
		`;
	}
}