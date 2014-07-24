<?php
/**
 * The base configurations of the WordPress.
 *
 * This file has the following configurations: MySQL settings, Table Prefix,
 * Secret Keys, WordPress Language, and ABSPATH. You can find more information
 * by visiting {@link http://codex.wordpress.org/Editing_wp-config.php Editing
 * wp-config.php} Codex page. You can get the MySQL settings from your web host.
 *
 * This file is used by the wp-config.php creation script during the
 * installation. You don't have to use the web site, you can just copy this file
 * to "wp-config.php" and fill in the values.
 *
 * @package WordPress
 */

// ** MySQL settings - You can get this info from your web host ** //
/** The name of the database for WordPress */
define('DB_NAME', 'mobileinside_es_2');

/** MySQL database username */
define('DB_USER', 'mobileinsidees2');

/** MySQL database password */
define('DB_PASSWORD', '^-sB!HtD');

/** MySQL hostname */
define('DB_HOST', 'mysql.mobileinside.es');

/** Database Charset to use in creating database tables. */
define('DB_CHARSET', 'utf8');

/** The Database Collate type. Don't change this if in doubt. */
define('DB_COLLATE', '');

/**#@+
 * Authentication Unique Keys and Salts.
 *
 * Change these to different unique phrases!
 * You can generate these using the {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org secret-key service}
 * You can change these at any point in time to invalidate all existing cookies. This will force all users to have to log in again.
 *
 * @since 2.6.0
 */
define('AUTH_KEY',         'ozFsU;Xh1wvH+fK3L::!Gk@1DEWs/SRFza@RMt/4`/u/Hy4mBnQtA:1;bV`$Ru&(');
define('SECURE_AUTH_KEY',  '15i9M^Fx(w(vY;3#_|DY&nC2H!achQHlGR8x7nt6oqI~$h5dLBzj9Y+:"ed3OKag');
define('LOGGED_IN_KEY',    'fu~_Wjw&GQXE^?v/FR;D#K76cnYv1fBAUSkca*psy3t`$Pgme/dRGqdbo3lxtf8+');
define('NONCE_KEY',        'wb_AVOgogS*&jkoBIW$WC(rK_@G!y"N|31Lh:PZQ+z3HaLpQ|*XV#djhDg~wH7+$');
define('AUTH_SALT',        '+dZk6KOE?7_iPo|UDfY%Jpq5*ZuB`Z*!iyxKZq#h4GvSHj^0!%Mt#LJ?RDJBWB^l');
define('SECURE_AUTH_SALT', '$Fb!/ahT)7872vXNT"rrE"i**olN2Bj07L@BqpCNfmucr5DW7YYy!OPKnE(0(%UF');
define('LOGGED_IN_SALT',   '7HR/8GU5hEm*9POgULBAz?LwWb:9ojgzO0/hmgbCW4_e$#aMrZ7gS$zi@Yf?qW|m');
define('NONCE_SALT',       'UQ^1QZsu|yA@1b3*Iy&m`w/Tz&hM|q^qZP#(gY(/s!51V?Dgq"6jV;|ZQp;(jbq5');

/**#@-*/

/**
 * WordPress Database Table prefix.
 *
 * You can have multiple installations in one database if you give each a unique
 * prefix. Only numbers, letters, and underscores please!
 */
$table_prefix  = 'wp_nwrnvn_';

/**
 * Limits total Post Revisions saved per Post/Page.
 * Change or comment this line out if you would like to increase or remove the limit.
 */
define('WP_POST_REVISIONS',  10);

/**
 * WordPress Localized Language, defaults to English.
 *
 * Change this to localize WordPress. A corresponding MO file for the chosen
 * language must be installed to wp-content/languages. For example, install
 * de_DE.mo to wp-content/languages and set WPLANG to 'de_DE' to enable German
 * language support.
 */
define('WPLANG', '');

/**
 * For developers: WordPress debugging mode.
 *
 * Change this to true to enable the display of notices during development.
 * It is strongly recommended that plugin and theme developers use WP_DEBUG
 * in their development environments.
 */
define('WP_DEBUG', false);

/* That's all, stop editing! Happy blogging. */

/** Absolute path to the WordPress directory. */
if ( !defined('ABSPATH') )
	define('ABSPATH', dirname(__FILE__) . '/');

/** Sets up WordPress vars and included files. */
require_once(ABSPATH . 'wp-settings.php');

