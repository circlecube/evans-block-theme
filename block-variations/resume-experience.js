/**
 * Registers a new block variation provided a unique name and an object defining its behavior.
 *
 * @see https://developer.wordpress.org/block-editor/packages/packages-blocks/#registerBlockVariation
 */
 import { registerBlockVariation } from '@wordpress/blocks';

 /**
  * Retrieves the translation of text.
  *
  * @see https://developer.wordpress.org/block-editor/packages/packages-i18n/
  */
 import { __ } from '@wordpress/i18n';
 
 /**
  * Variation content
  */
 
 registerBlockVariation( 
    'core/columns', 
    {
        name: 'resume-experience',
        title: __( 'Resume Experience', 'evans-block-theme' ),
        description: __( 'Add experience to resume.', 'evans-block-theme' ),
        category: 'evans-block-theme',
        scope: [ 'inserter' ],
        attributes: { 'className': 'resume-experience-block', 'verticalAlignment': 'top' },
        icon: {
            src: 'id'
        },
        innerBlocks: [
            [ 'core/column', { 'width': '50%', 'verticalAlignment': 'top' }, [
                [ 'core/heading', { 'level': 2, placeholder: 'Company', className: 'job-company' } ],
                [ 'core/heading', { 'level': 3, placeholder: 'Location', className: 'job-location' } ],
                [ 'core/heading', { 'level': 4, placeholder: 'From – To', className: 'job-dates' } ],
            ] ],
            [ 'core/column', { 'width': '50%', 'verticalAlignment': 'top' }, [
                [ 'core/heading', { 'level': 3, placeholder: 'Job Title', className: 'job-title' } ],
                [ 'core/paragraph', { placeholder: 'Job Description', className: 'job-description' } ],
            ] ],
        ]
    }
);