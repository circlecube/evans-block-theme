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

// Bail early if no headline.
if ( empty( $args['attributes']['headline'] ) ) {
	return;
}

// destructure attributes
$className   = isset( $args['attributes']['className'] ) ? $args['attributes']['className'] : '';
$label       = isset( $args['attributes']['label'] ) ? $args['attributes']['label'] : '';
$headline    = isset( $args['attributes']['headline'] ) ? $args['attributes']['headline'] : '';
$description = isset( $args['attributes']['description'] ) ? $args['attributes']['description'] : '';
$talk_link   = isset( $args['attributes']['talk_link'] ) ? $args['attributes']['talk_link'] : '';
$slide_link  = isset( $args['attributes']['slide_link'] ) ? $args['attributes']['slide_link'] : '';
$video_link  = isset( $args['attributes']['video_link'] ) ? $args['attributes']['video_link'] : '';
$image       = isset( $args['attributes']['image']['url'] ) ? $args['attributes']['image']['url'] : '';


$allowed_html = array(
	'br'     => array(),
	'p'      => array(),
	'strong' => array(),
	'em'     => array(),
);
?>
<div 
    id="<?php echo sanitize_title( $label ); ?>"
    class="block-talk <?php echo esc_attr( $className ); ?>"
>
	<div class="block-talk-inner">
		<?php if ( ! empty( $label ) ) : ?>
			<span class="block-talk-label">
				<?php echo esc_html( $label ); ?>
			</span>
		<?php endif; ?>


        <div class="block-talk-content">
            <?php if ( ! empty( $headline ) ) : ?>
                <h2 class="block-talk-title">
                    <?php echo esc_html( $headline ); ?>
                </h2>
            <?php endif; ?>
            <?php if ( ! empty( $description ) ) : ?>
                <div class="block-talk-desc">
                    <p><?php echo wp_kses( $description, $allowed_html ); ?></p>
                </div>
            <?php endif; ?>
            <div class="block-talk-links">
                <div role="group" class="block-talk-button-group">
                    <?php if ( ! empty( $talk_link ) && ! empty( $talk_link['url'] )  ) : ?>
                        <a 
                            class="block-talk-button is-primary has-text has-icon"
                            href="<?php echo esc_url($talk_link['url']); ?>"
                            title="View Talk Details"
                            target="_blank"
                        >
                            <span class="dashicon dashicons dashicons-nametag"></span>
                            <?php echo wp_kses( $talk_link['title'], $allowed_html ); ?>
                        </a>
                    <?php endif; ?>
                    <?php if ( ! empty( $slide_link ) && ! empty( $slide_link['url'] ) ) : ?>
                        <a 
                            class="block-talk-button is-primary has-text has-icon"
                            href="<?php echo esc_url( $slide_link['url'] ); ?>"
                            title="View Talk Slides"
                            target="_blank"
                        >
                            <span class="dashicon dashicons dashicons-media-interactive"></span>    
                            <?php echo wp_kses( $slide_link['title'], $allowed_html ); ?>
                        </a>
                    <?php endif; ?>
                    <?php if ( ! empty( $video_link ) && ! empty( $video_link['url'] )  ) : ?>
                        <a 
                            class="block-talk-button is-primary has-text has-icon"
                            href="<?php echo esc_url( $video_link['url'] ); ?>"
                            title="View Talk Recording"
                            target="_blank"
                        >
                            <span class="dashicon dashicons dashicons-format-video"></span>    
                            <?php echo wp_kses( $video_link['title'], $allowed_html ); ?>
                        </a>
                    <?php endif; ?>
                </div>
            </div>
        </div>

        <div class="block-talk-image-wrap">
            <?php if ( ! empty( $image ) ) : ?>
                <img
                    alt="<?php esc_attr( $headline ); ?> talk thumbnail"
                    class="block-talk-image"
                    src="<?php echo esc_url( $image ); ?>"
                />
            <?php else: ?>
                <span class="block-talk-image dashicon dashicons dashicons-megaphone"></span>
            <?php endif; ?>
        </div>

	</div>
</div>