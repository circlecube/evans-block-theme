<?php
/**
 * @var array $args {
 *     $args is provided by get_template_call.
 *
 *     @type array $attributes Block attributes.
 *     @type array $content    Block content.
 *     @type array $block      Block instance.
 * }
 */

// Set defaults.
$args = wp_parse_args(
	$args,
	array(
		'attributes' => array(),
	)
);

// Bail early if no label.
// if ( empty( $args['attributes']['label'] ) ) {
// 	return;
// }

// destructure attributes
$className = isset($args['attributes']['className']) ? $args['attributes']['className'] : '';
$label     = isset($args['attributes']['label']) ? $args['attributes']['label'] : '';
$level     = isset($args['attributes']['level']) ? $args['attributes']['level'] : '';

$allowed_html = array(
	'br'     => array(),
	'p'      => array(),
	'strong' => array(),
	'em'     => array(),
);
?>
<ul 
    id="<?php echo sanitize_title($label); ?>"
    class="block-skills <?php echo esc_attr( $className ); ?>"
>
	<?php echo $args['content']; ?>
</ul>