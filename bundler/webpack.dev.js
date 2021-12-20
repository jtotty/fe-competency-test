const { merge } = require('webpack-merge');
const portFinderSync = require('portfinder-sync');
const ip = require('internal-ip');
const commonConfiguration = require('./webpack.common');

const infoColor = (_message) => `\u001b[1m\u001b[34m${_message}\u001b[39m\u001b[22m`;

module.exports = merge(
	commonConfiguration,
	{
		mode: 'development',
		devServer:
		{
			host: '0.0.0.0',
			port: portFinderSync.getPort(8080),
			contentBase: './dist',
			watchContentBase: true,
			open: true,
			https: false,
			useLocalIp: true,
			disableHostCheck: true,
			overlay: true,
			noInfo: true,
			after(app, server) {
				const { port } = server.options;
				const https = server.options.https ? 's' : '';
				const localIp = ip.v4.sync();
				const domain1 = `http${https}://${localIp}:${port}`;
				const domain2 = `http${https}://localhost:${port}`;
				console.log(`Project running on:\n  - ${infoColor(domain1)}\n  - ${infoColor(domain2)}`);
			},
		},
	},
);
