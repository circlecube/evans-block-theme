<?php
namespace EvansBlockTheme\Talk;

register_block_type_from_metadata(
	get_stylesheet_directory() . '/blocks/talk',
	array(
		'render_callback' => __NAMESPACE__ . '\render_block_callback',
	)
);

function render_block_callback( $attributes, $content, $block ) {
	ob_start();

	get_template_part(
		'blocks/talk/render',
		null,
		array(
			'attributes' => $attributes,
			'content'    => $content,
			'block'      => $block,
		)
	);

	return ob_get_clean();
}