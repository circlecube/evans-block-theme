/**
 * WordPress dependencies
 */
 import {
    RichText,
	useBlockProps
} from '@wordpress/block-editor';
import { 
    Button, 
    ButtonGroup, 
    Icon
} from '@wordpress/components';
import { __ } from '@wordpress/i18n';

/**
 * Edit component.
 * See https://wordpress.org/gutenberg/handbook/designers-developers/developers/block-api/block-edit-save/#edit
 *
 * @param {Object} props The block props.
 * @return {Function} Render the edit screen
 */
const Edit = ( { isSelected, attributes, setAttributes } ) => {
	const blockProps = useBlockProps( {
		className: 'block-skills is-style-resume_skills',
	});
	const {
		label,
		level,
	} = attributes;

	return (
		<>
			<ul {...blockProps}>
				<li className='block-skills__inner'>
				  { (isSelected || label) && (
					  <RichText
						  placeholder={ __( 'Label text', 'evans-block-theme' ) }
						  value={label}
						  onChange={ (value) => { setAttributes( { label: value } ) } }
						  tagName="strong"
						  allowedFormats={[]}
						  className="block-skills__label"
					  />
				  ) }
				  { (isSelected || level) && (
					  <RichText
						  placeholder={ __( 'level text', 'evans-block-theme' ) }
						  value={level}
						  onChange={ (value) => { setAttributes( { level: value } ) } }
						  tagName="em"
						  allowedFormats={[]}
						  className="block-skills__level"
					  />
				  ) }
				</li>
			</ul>
		</>
	);
};
export default Edit;