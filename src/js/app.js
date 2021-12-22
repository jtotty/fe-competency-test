import '../scss/app.scss'; // Compile our SCSS
import Application from './modules/Application';

window.application = new Application({
	// Usually this would come from a .env file.
	// But for the purpose of this task we'll hardcode it here.
	endpoint: 'https://api.punkapi.com/v2/beers',
});
