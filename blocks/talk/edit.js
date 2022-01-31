/**
 * WordPress dependencies
 */
import {
	__experimentalLinkControl as LinkControl,
	MediaUpload,
	MediaUploadCheck,
	RichText,
	useBlockProps,
} from '@wordpress/block-editor';
import { Button, ButtonGroup, Icon } from '@wordpress/components';
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
		className: 'block-talk',
	} );
	const {
		label,
		headline,
		description,
		slide_link,
		video_link,
		talk_link,
		image,
	} = attributes;

	const onSelectImage = ( media ) => {
		setAttributes( {
			image: media,
		} );
	};
	const removeMedia = () => {
		setAttributes( {
			image: {},
		} );
	};

	return (
		<>
			<div { ...blockProps }>
				<div className="block-talk-inner">
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
							tagName="span"
							allowedFormats={ [] }
							className="block-talk-label"
						/>
					) }

					<div className="block-talk-content">
						<RichText
							placeholder={ __(
								'Talk title',
								'evans-block-theme'
							) }
							value={ headline }
							onChange={ ( value ) => {
								setAttributes( { headline: value } );
							} }
							tagName="h2"
							allowedFormats={ [] }
							className={ `block-talk-title` }
						/>
						{ ( isSelected || description ) && (
							<div className="block-talk-desc">
								<RichText
									placeholder={ __(
										'Talk Description',
										'evans-block-theme'
									) }
									value={ description }
									onChange={ ( value ) => {
										setAttributes( { description: value } );
									} }
									tagName="p"
									allowedFormats={ [
										'core/bold',
										'core/italic',
									] }
								/>
							</div>
						) }

						{ isSelected && (
							<div className="block-talk-links">
								<label>
									<em>Talk:</em>
									<LinkControl
										value={ talk_link }
										onChange={ ( value ) => {
											setAttributes( {
												talk_link: value,
											} );
										} }
										settings={ [] }
									/>
								</label>
								<label>
									<em>Slides:</em>
									<LinkControl
										value={ slide_link }
										onChange={ ( value ) => {
											setAttributes( {
												slide_link: value,
											} );
										} }
										settings={ [] }
									/>
								</label>
								<label>
									<em>Video:</em>
									<LinkControl
										value={ video_link }
										onChange={ ( value ) => {
											setAttributes( {
												video_link: value,
											} );
										} }
										settings={ [] }
									/>
								</label>
							</div>
						) }
						{ ! isSelected && (
							<div className="block-talk-links">
								<ButtonGroup className="block-talk-button-group">
									{ talk_link.url && (
										<Button
											href={ talk_link.url }
											variant="primary"
											icon="tickets"
											className="block-talk-button"
										>
											{ talk_link.title }
										</Button>
									) }
									{ slide_link.url && (
										<Button
											href={ slide_link.url }
											variant="primary"
											icon="slides"
											className="block-talk-button"
										>
											{ slide_link.title }
										</Button>
									) }
									{ video_link.url && (
										<Button
											href={ video_link.url }
											variant="primary"
											icon="video-alt"
											className="block-talk-button"
										>
											{ video_link.title }
										</Button>		
									) }
								</ButtonGroup>
							</div>
						) }
					</div>
					<div className="block-talk-image-wrap">
						{ ! isSelected && image.url && (
							<img
								src={ image.url }
								className="block-talk-image"
                                alt={ headline + ' talk thumbanil' }
							/>
						) }
						{ ! isSelected && ! image.url && (
							<Icon
								icon="megaphone"
								size="200"
								className="block-talk-image"
							/>
						) }
						{ isSelected && (
							<MediaUploadCheck>
								<MediaUpload
									allowedTypes={ [ 'image' ] }
									value={ image.id }
									onSelect={ onSelectImage }
									render={ ( { open } ) => (
										<Button
											isDefault
											isLarge
											className={
												! image.id
													? 'editor-post-featured-image__toggle'
													: 'editor-post-featured-image__preview'
											}
											onClick={ open }
											icon={
												! image.id ? 'format-image' : ''
											}
											title={
												! image.id
													? __(
															'Set Image',
															'evans-block-theme'
													  )
													: __(
															'Image Preview',
															'evans-block-theme'
													  )
											}
										>
											{ ! image.id ? (
												__(
													'Set Image',
													'evans-block-theme'
												)
											) : (
												<img
													src={ image.url }
													className="block-talk-image"
                                                    alt={ headline + ' talk thumbanil' }
												/>
											) }
										</Button>
									) }
								/>
							</MediaUploadCheck>
						) }

						{ isSelected && image.id && (
							<MediaUploadCheck>
								<MediaUpload
									allowedTypes={ [ 'image' ] }
									value={ image.id }
									onSelect={ onSelectImage }
									render={ ( { open } ) => (
										<Button
											isDefault
											isLarge
											className="block-talk-image-replace"
											onClick={ open }
											icon="edit"
											title={ __(
												'Replace Image',
												'evans-block-theme'
											) }
										/>
									) }
								/>
								<Button
									isLarge
									isDestructive
									className="block-talk-image-remove"
									onClick={ removeMedia }
									icon="trash"
									title={ __(
										'Remove image',
										'evans-block-theme'
									) }
								/>
							</MediaUploadCheck>
						) }
					</div>
				</div>
			</div>
		</>
	);
};
export default Edit;
