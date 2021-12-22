import fetchData from '../functions/fetchData';
import Accordion from './Accordion';
// import Grid from './Grid';

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
		this.renderAccordion();
	}

	/**
	 * Render our Accordion.
	 */
	renderAccordion() {
		this.accordion = new Accordion();
	}
}