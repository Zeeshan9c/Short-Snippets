<?php

/**
 * Contains all the shortcodes
 * 
 */


if ( ! function_exists('site_name_current_year_shortcode') ) {
	/**
	 * Get the current year.
	 *
	 * @return string
	 */
	function site_name_current_year_shortcode() {
		return date( "Y" );
	}
}
add_shortcode( 'site_name_current_year', 'site_name_current_year_shortcode' );

