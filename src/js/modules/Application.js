import { fetchData } from '../utils';
import Accordion from './Accordion';
import Grid from './Grid';

export default class Application {
	constructor({ endpoint }) {
		this.endpoint = endpoint;
		this.beerData = [];
		this.init();
	}

	/**
	 * Start the application.
	 */
	async init() {
		this.beerData = await fetchData(this.endpoint);
		console.log(this.beerData);

		this.accordion = new Accordion({
			el: document.querySelector('#accordion'),
			data: this.beerData,
			maxItems: 5,
		});

		this.grid = new Grid({
			el: document.querySelector('.grid-container'),
			data: this.beerData,
			maxItems: 8,
		});
	}
}