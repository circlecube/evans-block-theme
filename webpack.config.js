/**
 * External Dependencies
 */
const path = require( 'path' );

/**
 * WordPress Dependencies
 */
const defaultConfig = require( '@wordpress/scripts/config/webpack.config.js' );

module.exports = {
	...defaultConfig,
	...{
		entry: {
			'editor-scripts': path.resolve( process.cwd(), 'src', 'editor.js' ),
			'site-scripts': path.resolve( process.cwd(), 'src', 'site.js' ),
			'editor-styles': path.resolve(
				process.cwd(),
				'src',
				'editor.scss'
			),
			'site-styles': path.resolve( process.cwd(), 'src', 'site.scss' ),
		},
	},
};
