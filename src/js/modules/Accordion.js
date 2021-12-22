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

		this.addEventListeners();
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
			<div class="accordion-item">
				<div id="accordion-${index}" class="accordion-heading">
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
		const accordions = document.querySelectorAll('.accordion-item');

		// Add event listener to each accordion.
		accordions.forEach(accordion => {
			const button = accordion.querySelector('.btn');
			const content = accordion.querySelector('.accordion-content');

			button.addEventListener('click', () => {
				content.classList.toggle('active');
			});
		});
	}
}
