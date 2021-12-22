import '../scss/app.scss';
import Application from './modules/Application';

window.application = new Application({
	endpoint: 'https://api.punkapi.com/v2/beers',
});