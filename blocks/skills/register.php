<?php
namespace EvansBlockTheme\Skills;

register_block_type(
	get_stylesheet_directory() . '/blocks/skills',
	array(
		'render_callback' => __NAMESPACE__ . '\render_block_callback',
	)
);

function render_block_callback( $attributes, $content, $block ) {
	ob_start();

	get_template_part(
		'blocks/skills/render',
		null,
		array(
			'attributes' => $attributes,
			'content'    => $content,
			'block'      => $block,
		)
	);

	return ob_get_clean();
}