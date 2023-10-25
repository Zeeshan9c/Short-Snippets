<?php
/**
 * Theme functions and definitions
 *
 * @package SITE_NAME
 */


if ( ! defined( 'ABSPATH' ) ) {
	exit; // Exit if accessed directly.
}

if ( ! defined('SITE_NAME_VERSION') ) {
	define( 'SITE_NAME_VERSION', '1.0.0' );
}
if ( ! defined('CUSTOMTHEME_TEXTDOMAIN') ) {
	define( 'CUSTOMTHEME_TEXTDOMAIN', 'site_name' );
}

if ( ! defined('SITE_NAME_URI') ) {
	define( 'SITE_NAME_URI', get_stylesheet_directory_uri() );
}

if ( ! defined('SITE_NAME_DIR') ) {
	define( 'SITE_NAME_DIR', get_stylesheet_directory() );
}

if ( ! defined('SITE_NAME_INC_DIR') ) {
	define( 'SITE_NAME_INC_DIR', SITE_NAME_DIR . '/includes' );
}


// General functions
require_once SITE_NAME_INC_DIR . '/general-functions.php';

// Theme setup and script/style enqueue
require_once SITE_NAME_INC_DIR . '/theme.php';

// WP actions/filters
require_once SITE_NAME_INC_DIR . '/wp-hooks.php';

// Functions/Hooks related to ACF
require_once SITE_NAME_INC_DIR . '/acf.php';

// AJAX functions
require_once SITE_NAME_INC_DIR . '/ajax.php';

// Gravity Forms Hooks
require_once SITE_NAME_INC_DIR . '/gform.php';

// Contains all the shortcodes
require_once SITE_NAME_INC_DIR . '/shortcodes.php';
