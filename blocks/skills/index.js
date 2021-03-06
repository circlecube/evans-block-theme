/**
 * WordPress dependencies
 */
import { registerBlockType } from '@wordpress/blocks';
import { InnerBlocks, useBlockProps } from '@wordpress/block-editor';

/**
 * Internal dependencies
 */
import edit from './edit';
import name, * as settings from './block.json';

//  import './style.css';

/* Uncomment for CSS overrides in the admin */
// import './index.css';

/**
 * Register block
 */
registerBlockType( name, {
	...settings,
	edit,
	save: () => {
		const blockProps = useBlockProps.save();
 
        return (
            <div { ...blockProps }>
                <InnerBlocks.Content />
            </div>
        );
	},
} );
