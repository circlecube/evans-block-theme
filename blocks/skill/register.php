<?php
namespace EvansBlockTheme\Skill;

function render_block_callback( $attributes, $content, $block ) {
	ob_start();

	get_template_part(
		'blocks/skill/render',
		null,
		array(
			'attributes' => $attributes,
			'content'    => $content,
			'block'      => $block,
		)
	);

	return ob_get_clean();
}

function register_skill_block() {
	register_block_type(
		get_stylesheet_directory() . '/blocks/skill/',
		array(
			'render_callback' => __NAMESPACE__ . '\\render_block_callback',
		)
	);
}

add_action( 'init',  __NAMESPACE__ . '\\register_skill_block' );