/**
 * WordPress dependencies
 */
import { useBlockProps, InnerBlocks } from '@wordpress/block-editor';
import { __ } from '@wordpress/i18n';

/**
 * Edit component.
 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} props               The block props.
 * @param          props.isSelected
 * @param          props.attributes
 * @param          props.setAttributes
 * @return {Function} Render the edit screen
 */
const Edit = ( { isSelected, attributes, setAttributes } ) => {
	const blockProps = useBlockProps( {
		className: 'block-skills is-style-resume_skills',
	} );
	const ALLOWED = [
		'evans-block-theme/skill'
	];

	return (
		<ul { ...blockProps }>
			<InnerBlocks
				allowedBlocks={ ALLOWED }
			/>
		</ul>
	);
};
export default Edit;
