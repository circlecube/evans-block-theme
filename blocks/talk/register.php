<?php
namespace EvansBlockTheme\Talk;

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

function register_talk_block() {
	register_block_type(
		get_stylesheet_directory() . '/blocks/talk/',
		array(
			'render_callback' => __NAMESPACE__ . '\\render_block_callback',
		)
	);
}

add_action( 'init',  __NAMESPACE__ . '\\register_talk_block' );