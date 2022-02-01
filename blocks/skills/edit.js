/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { Button, ButtonGroup, Icon, SelectControl } from '@wordpress/components';
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
	const { label, level } = attributes;

	return (
		<>
			<ul { ...blockProps }>
				<li className="block-skills-inner">
					{ ( isSelected || label ) && (
						<RichText
							placeholder={ __(
								'Label text',
								'evans-block-theme'
							) }
							value={ label }
							onChange={ ( value ) => {
								setAttributes( { label: value } );
							} }
							tagName="strong"
							allowedFormats={ [] }
							className="block-skills-label"
						/>
					) }
					{ ( isSelected ) && (
						<SelectControl
							value={ level }
							className="block-skills-level block-skills-level-select"
							options={ [
								{ label: '★★★★★', value: '★★★★★' },
								{ label: '★★★★☆', value: '★★★★☆' },
								{ label: '★★★☆☆', value: '★★★☆☆' },
								{ label: '★★☆☆☆', value: '★★☆☆☆' },
								{ label: '★☆☆☆☆', value: '★☆☆☆☆' },
							] }
							onChange={ ( value ) => {
								setAttributes( { level: value } );
							} }
						/>
					) }
					{ ( ! isSelected ) && (
						<em className="block-skills-level">{ level }</em>
					)}
				</li>
			</ul>
		</>
	);
};
export default Edit;
