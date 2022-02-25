/**
 * WordPress dependencies
 */
import { RichText, useBlockProps } from '@wordpress/block-editor';
import { SelectControl } from '@wordpress/components';
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
		className: 'block-skill',
	} );
	const { label, level } = attributes;
    const renderStars = (num) => {
        switch (num){
            case '5':
                return '★★★★★';
            case '4':
                return '★★★★☆';
            case '3':
                return '★★★☆☆';
            case '2':
                return '★★☆☆☆';
            case '1':
                return '★☆☆☆☆';
            default:
                return '';
        }
    };

	return (
        <li className="block-skill" { ...blockProps }>
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
                    className="block-skill-label"
                />
            ) }
            { ( isSelected ) && (
                <SelectControl
                    value={ level }
                    selected="5"
                    className="block-skill-level block-skill-level-select"
                    options={ [
                        { label: '★★★★★', value: '5' },
                        { label: '★★★★☆', value: '4' },
                        { label: '★★★☆☆', value: '3' },
                        { label: '★★☆☆☆', value: '2' },
                        { label: '★☆☆☆☆', value: '1' },
                    ] }
                    onChange={ ( value ) => {
                        setAttributes( { level: value } );
                    } }
                />
            ) }
            { ( ! isSelected ) && (
                <em className="block-skill-level">{ renderStars(level) }</em>
            )}
        </li>
	);
};
export default Edit;
