<?php
// namespace circlecube\EvansBlockTheme;

if ( ! function_exists( 'evans_block_theme_setup' ) ) :
    /**
     * Sets up theme defaults and registers support for various WordPress features.
     *
     * Note that this function is hooked into the after_setup_theme hook, which runs
     * before the init hook. The init hook is too late for some features, such as indicating
     * support for post thumbnails.
     */
    function evans_block_theme_setup() {
        /**
         * Add default posts and comments RSS feed links to <head>.
         */
        add_theme_support( 'automatic-feed-links' );
 
        /**
         * Enable support for post thumbnails and featured images.
         */
        add_theme_support( 'responsive-embeds' );
        add_theme_support( 'post-thumbnails' );
        add_theme_support( 'editor-styles' );
        add_theme_support( 'wp-block-styles' );
    }
endif;
add_action( 'after_setup_theme', 'evans_block_theme_setup' );
 
/**
 * Enqueue theme scripts and styles.
 */
function evans_block_theme_scripts() {
    // theme scripts
    wp_enqueue_script(
        'evans-block-theme-scripts',
        get_template_directory_uri() . '/build/site-scripts.js',
        null,
        wp_get_theme()->get( 'Version' )
    );
    // theme styles
    wp_enqueue_style(
        'evans-block-theme-styles',
        get_template_directory_uri() . '/build/site-styles.css',
        null,
        wp_get_theme()->get( 'Version' )
    );
}
add_action( 'wp_enqueue_scripts', 'evans_block_theme_scripts' );

function evans_block_theme_editor_assets() {
    // editor scripts
    wp_enqueue_script(
        'evans-block-theme-editor-scripts',
        get_template_directory_uri() . '/build/editor-scripts.js',
        array( 'wp-blocks' ),
        wp_get_theme()->get( 'Version' ) 
    );
    // theme styles
    wp_enqueue_style(
        'evans-block-theme-editor-styles',
        get_template_directory_uri() . '/build/editor-styles.css',
        null,
        wp_get_theme()->get( 'Version' )
    );
}
add_action( 'enqueue_block_editor_assets', 'evans_block_theme_editor_assets' );

/**
 * Adding a new (custom) block category.
 *
 * @param   array $block_categories                                Array of categories for block types.
 * @param   WP_Block_Editor_Context|string $block_editor_context   The current block editor context, or a string defining the context.
 */
function evans_block_theme_add_new_block_category( $block_categories, $block_editor_context ) {
    // Check the context of this filter, return default if not in the post/page block editor.
    // Alternatively, use this check to add custom categories to only the customizer or widget screens.
    if ( ! ( $block_editor_context instanceof WP_Block_Editor_Context ) ) {
        return $block_categories;
    }
 
    // You can add extra validation such as seeing which post type
    // is used to only include categories in some post types.
    // if ( in_array( $block_editor_context->post->post_type, ['post', 'my-post-type'] ) ) { ... }
  
    return array_merge(
        [
            [
                'slug'  => 'evans-block-theme',
                'title' => esc_html__( 'Evan`s Block Theme', 'evans-block-theme' ),
                'icon'  => 'superhero', // Slug of a WordPress Dashicon or custom SVG
            ],
        ],
        $block_categories
    );
}
  
add_filter( 'block_categories_all', 'evans_block_theme_add_new_block_category', 10, 2 );

register_block_style(
    'core/list',
    array(
        'name'         => 'resume_skills',
        'label'        => __( 'Resume Skills', 'evans-block-theme' )
    )
);


require_once get_stylesheet_directory() . '/blocks/index.php';