<?php

/**
 * Theme setup, support and script/style enqueue
 * 
 */

if ( ! function_exists( 'site_name_scripts_styles' ) ) {
	
	/**
	 * Theme Scripts & Styles.
	 *
	 * @return void
	 */
	function site_name_scripts_styles() {

		// Main Child Theme file enqueue
		wp_enqueue_style('site_name', SITE_NAME_URI . '/style.css', [], SITE_NAME_VERSION);

		// Fonts CDN Enqueue
		// wp_enqueue_style('site_name-google-fonts', 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600;700&family=Poppins:wght@500;600;700&display=swap', [], NULL);
	
		// Enqueue main stylesheet
		wp_enqueue_style('site_name-main', SITE_NAME_URI . '/assets/css/main.css', [], SITE_NAME_VERSION);
				
		// Enqueue Swiper JS
		wp_enqueue_script('swiper', SITE_NAME_URI . '/assets/js/swiper-bundle-min.js', ['jquery'], SITE_NAME_VERSION, true );

		// jQuery iScroll
		wp_enqueue_script('site_name-main', SITE_NAME_URI . '/assets/js/main.js', array( 'jquery' ), SITE_NAME_VERSION, true);

	}
}
add_action( 'wp_enqueue_scripts', 'site_name_scripts_styles', 200 );

function site_name_editor_assets() {
    // Enqueue styles for the editor
    wp_enqueue_style(
        'site_name-editor', SITE_NAME_URI . '/assets/css/editor-stylesheet.css', [], SITE_NAME_VERSION );
}
add_action('enqueue_block_editor_assets', 'site_name_editor_assets');


/**
 * Register sidebars
 * 
 */
if ( ! function_exists( 'site_name_widgets_init' ) ) {
	function site_name_widgets_init() {
		
		// this is just a boilerplate
		/*register_sidebar( array(
			'name'          => __( 'Sidebar Name', 'site_name' ),
			'id'            => 'sidebar-id',
			'description'   => __( 'Some description', 'site_name' ),
			'before_widget' => '<li id="%1$s" class="widget %2$s">',
			'after_widget'  => '</li>',
			'before_title'  => '<h2 class="heading">',
			'after_title'   => '</h2>',
		) );*/
	}
}
//add_action( 'widgets_init', 'site_name_widgets_init' );
