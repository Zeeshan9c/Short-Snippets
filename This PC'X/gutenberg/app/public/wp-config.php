<?php
/**
 * The base configuration for WordPress
 *
 * The wp-config.php creation script uses this file during the installation.
 * You don't have to use the web site, you can copy this file to "wp-config.php"
 * and fill in the values.
 *
 * This file contains the following configurations:
 *
 * * Database settings
 * * Secret keys
 * * Database table prefix
 * * Localized language
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Database settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define( 'DB_NAME', 'local' );

/** Database username */
define( 'DB_USER', 'root' );

/** Database password */
define( 'DB_PASSWORD', 'root' );

/** Database hostname */
define( 'DB_HOST', 'localhost' );

/** Database charset to use in creating database tables. */
define( 'DB_CHARSET', 'utf8' );

/** The database collate type. Don't change this if in doubt. */
define( 'DB_COLLATE', '' );

/**#@+
 * Authentication unique keys and salts.
 *
 * Change these to different unique phrases! You can generate these using
 * the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}.
 *
 * You can change these at any point in time to invalidate all existing cookies.
 * This will force all users to have to log in again.
 *
 * @since 2.6.0
 */


/**#@-*/

/**
 * WordPress database table prefix.
 *
 * You can have multiple installations in one database if you give each
 * a unique prefix. Only numbers, letters, and underscores please!
 */
$table_prefix = 'wp_';


/* Add any custom values between this line and the "stop editing" line. */



/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 *
 * For information on other constants that can be used for debugging,
 * visit the documentation.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
if ( ! defined( 'WP_DEBUG' ) ) {
	define( 'WP_DEBUG', false );
}


define('AUTH_KEY',         'ybHNlFJvO7yEg8P8ppb+hnJW6RFjCAgkFwTnFGs1n9FMA0yaxj4tkyzStB//YNK7SdU2dSyK7wI++cqQo6mPvg==');
define('SECURE_AUTH_KEY',  'SZS1vxdBi9r5dOmfQYqITMyxs8P9BYpzI1SX5l+crgLwtkTc2cRlqLDAHzhoOEfoW4ho0KY9nuqTG0liGjUSVQ==');
define('LOGGED_IN_KEY',    'AAUzHSLVjGLMIE9T/GY20SVUnBLM7tXmtHOmJn+tF+jPrgMr24DcTZQyJEXpQQhzCPZ8lfSVpfjDYyB9TtDh6w==');
define('NONCE_KEY',        'dLe55pEpNVc9kyi7zHvtwHDiN+j2rq/0jm+lCra75B2v4vJXpjPwuI6s7nj5kPOFCq0739Wsn6PqjExFva7CaA==');
define('AUTH_SALT',        'XGWN2ohsL5gDDnum8jkUl8fYWwOt97Si3FrAAjXuPtPl40A69kF2ae0hYYSvvu9vaOK53RlpG8j/3CGztcACVQ==');
define('SECURE_AUTH_SALT', 'uoCPWFYrJoLLQ6mj3w8a62UWHwMM9iIvYhsI3dBjYzqdI0FPPQn9QvfAAFzCM1O+PFdm1aNLdWeDr1EcnaysMg==');
define('LOGGED_IN_SALT',   'OBr8E0nbdoQTjTP90JFOlXrS/GaVVuDQhgrprIq5x6/9vJHJyn4g+LtIjd9SSHw6VNtutcRFmeBd3Hbf4+ltiw==');
define('NONCE_SALT',       'YlP0Ibc7FKryCw4dHQL2eZwHdsngIESdJd7FO4YkEEcHSNs/9b5e1i66/UtW/nM6syBWAf+dQjMNw6mwZpPO3A==');
define( 'WP_ENVIRONMENT_TYPE', 'local' );
/* That's all, stop editing! Happy publishing. */

/** Absolute path to the WordPress directory. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Sets up WordPress vars and included files. */
require_once ABSPATH . 'wp-settings.php';
