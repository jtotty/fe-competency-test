/**
 * Base module class.
 * Shared data and methods.
 */
export default class BaseModule {
	constructor({ el, data, maxItems }) {
		this.el = el;
		this.data = data;
		this.maxItems = maxItems;
	}
}
