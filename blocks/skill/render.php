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
if ( empty( $args['attributes']['label'] ) ) {
	return;
}

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
<li class="block-skill <?php echo esc_attr( $className ); ?>">
    <?php if ( ! empty( $label ) ) : ?>
        <strong class="block-skill-label">
            <?php echo esc_html( $label ); ?>
        </strong>
    <?php endif; ?>
    <?php if ( ! empty( $level ) ) : ?>
        <em class="block-skill-level">
            <?php 
            switch ($level):
                case '1':
                    echo '★☆☆☆☆';
                    break;
                case '2':
                    echo '★★☆☆☆';
                    break;
                case '3':
                    echo '★★★☆☆';
                    break;
                case '4':
                    echo '★★★★☆';
                    break;
                case '5':
                    echo '★★★★★';
                    break;
                default:
                    echo '';
            endswitch;
            ?>
        </em>
    <?php endif; ?>
</li>