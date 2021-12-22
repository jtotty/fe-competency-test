import BaseModule from './BaseModule';

/**
 * Accordion module.
 * 
 * @params {Object} options - Options object.
 */
export default class Accordion extends BaseModule {
	constructor(data) {
		super(data);

		// Start
		this.init();
	}

	/**
	 * Create our accordion.
	 */
	init() {
		// Loop through first 5 items in data.
		for (let i = 0; i < this.maxItems; i++) {
			const markup = this.generateMarkup(i, this.data[i]);
			this.el.innerHTML += markup;
		}

		this.accordions = document.querySelectorAll('.accordion-item');
		this.addEventListeners();
		this.initOpenCloseAll();
	}

	/**
	 * Generate our HTML markup.
	 *
	 * @param {number} index 
	 * @param {object} data
	 * @returns {string}
	 */
	generateMarkup(index, data) {
		const { name, tagline, abv, first_brewed, description, food_pairing } = data;
	
		return `
			<div id="accordion-${index}"  class="accordion-item">
				<div class="accordion-heading">
					<h3>${name}</h3>
					<button class="btn">Open</button>
				</div>

				<div class="accordion-content">
					<p>${tagline}</p>
					<date>${first_brewed}</date>
					<p>${description}</p>
					<p>Food Pairing</p>
					<ul>
						${food_pairing.map(item => `<li>${item}</li>`).join('')}
					</ul>
					<p>${abv}% (abv)</p>			
				</div>
			</div>
		`;
	}

	/**
	 * Add our event listeners to the accordion items.
	 */
	addEventListeners() {
		this.accordions.forEach(accordion => {
			const button = accordion.querySelector('.btn');
			const content = accordion.querySelector('.accordion-content');

			button.addEventListener('click', () => {
				content.classList.toggle('active');

				// Update button text
				content.classList.contains('active') 
					? button.innerHTML = 'Close'
					: button.innerHTML = 'Open';
			});
		});
	}

	/**
	 * Add event listener to open/close all button.
	 * Update accordion active state.
	 * Update button texts.
	 */
	initOpenCloseAll() {
		const actionBtnEls = document.querySelectorAll('.btn-minimal');
		
		actionBtnEls.forEach(btn => {
			btn.addEventListener('click', () => {
				this.accordions.forEach(accordion => {
					const content = accordion.querySelector('.accordion-content');
					
					// Expand/collapse accordion items
					if (btn.dataset.action === 'open') {
						content.classList.add('active');
					} else if (btn.dataset.action === 'close') {
						content.classList.remove('active');
					}

					// Update individual accordion button text
					const accordionBtn = accordion.querySelector('.btn');
					content.classList.contains('active') 
						? accordionBtn.innerHTML = 'Close'
						: accordionBtn.innerHTML = 'Open';
				});
			});
		});
	}
}
