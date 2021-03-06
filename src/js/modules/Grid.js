import BaseModule from './BaseModule';
import { createDateObj, humanReadable } from "../utils";

/**
 * Grid module.
 * 
 * @params {Object} options - Options object.
 */
 export default class Grid extends BaseModule {
	constructor(data) {
		super(data);
		this.sortDirection = 'asc'; // Default sorting direction

		// Start
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

		this.initSortUtils();
	}

	/**
	 * Generate our HTML markup.
	 *
	 * @param {number} index 
	 * @param {object} data
	 * @returns {string}
	 */
	generateMarkup(index, data) {
		const { name, tagline, description, first_brewed, abv } = data;
	
		return `
			<div id="grid-${index}" class="grid-item appear">
				<div class="grid-heading">
					<h3>${name}</h3>
				</div>

				<div class="grid-content">
					<div>
						<h4>${tagline}</h4>
						<p>First Brewed <date>${humanReadable(createDateObj(first_brewed))}</date></p>
						<p class="description">${description}</p>
					</div>
					<div class="abv">${abv}% (abv)</div>
				</div>
			</div>
		`;
	}

	/**
	 * Initialize our sort utils.
	 */
	initSortUtils() {
		// Add event listener to select element.
		const selectEl = document.querySelector('#sort-by');
		selectEl.addEventListener('change', e => {
			this.sortDirection = e.target.value;
		});

		// Add event listener to sort buttons.
		const sortBtnEls = document.querySelectorAll('.btn-sort');
		sortBtnEls.forEach(btn => {
			btn.addEventListener('click', () => {
				this.sort(btn.dataset.sort);
			});
		});
	}

	/**
	 * Sort the grid items.
	 *
	 * @param {string} btn 
	 */
	sort(sortType) {
		const beers = this.data;
		
		if (sortType === 'firstbrewed') {
			// Sort by date
			beers.sort((a, b) => {
				const aDate = createDateObj(a.first_brewed);
				const bDate = createDateObj(b.first_brewed);
				
				return this.sortDirection === 'asc'
					? aDate - bDate
					: bDate - aDate;
			});
		} else {
			// Sort by other string/numerical based options
			beers.sort((a, b) => {
				// Sort by either asc or desc
				return this.sortDirection === 'asc' 
					? (a[sortType] < b[sortType] ? 1 : -1) 
					: (a[sortType] > b[sortType] ? 1 : -1);
			});
		}

		// Only show the first 'x' items in the grid
		const sliced = beers.slice(0, this.maxItems);

		// Add class to all grid items
		const gridItems = document.querySelectorAll('.grid-item');
		gridItems.forEach(item => {
			item.classList.add('vanish');
		});

		const vanishTiming = 500;
		const staggeredDelay = 800;

		// Wait for all grid items to vanish
		setTimeout(() => {
			// Clear the grid
			this.el.innerHTML = '';

			// Add sorted grid items
			for (let i = 0; i < sliced.length; i++) {
				const markup = this.generateMarkup(i, sliced[i]);
				this.el.innerHTML += markup;
			}
		}, vanishTiming + staggeredDelay);
	}
}
