export default class Accordion {
	constructor({ el, data }) {
		this.el = el;
		this.data = data;
		this.init();
	}

	/**
	 * Create our accordion.
	 */
	init() {
		// Loop through first 5 items in data.
		for (let i = 0; i < 5; i++) {
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
		const { name, tagline, first_brewed, description, food_pairing } = data;
	
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
			});
		});
	}

	/**
	 * Open all accordions.
	 */
	initOpenCloseAll() {
		['open-all', 'close-all'].forEach(id => {
			const btn = this.el.querySelector(`#${id}`);

			btn.addEventListener('click', () => {
				this.accordions.forEach(accordion => {
					const content = accordion.querySelector('.accordion-content');

					if (id === 'open-all') {
						content.classList.add('active');
					} else if (id === 'close-all') {
						content.classList.remove('active');
					}
				});
			});
		});
	}
}
