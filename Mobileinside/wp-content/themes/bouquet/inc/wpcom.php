<?php
/**
 * WordPress.com-specific functions and definitions.
 *
 * @package Bouquet
 * @since Bouquet 1.2
 */

/**
* Set a default theme color array.
*
* @global array $themecolors
*/
function bouquet_wpcom_setup() {
	global $themecolors;

	switch ( bouquet_current_floral_scheme() ) {
		case 'forget-me-not':
			$themecolors = array(
				'bg'     => 'edf6fe',
				'border' => '5175b3',
				'text'   => '333333',
				'link'   => '123b66',
				'url'    => '123b66',
			);
			break;
		case 'tiger-lily':
			$themecolors = array(
				'bg'     => 'f9e4d8',
				'border' => 'f9cdb5',
				'text'   => '333333',
				'link'   => 'ca4d11',
				'url'    => 'ca4d11',
			);
			break;
		default:
			$themecolors = array(
				'bg'     => 'ffebf2',
				'border' => 'e7d9b9',
				'text'   => '333333',
				'link'   => 'bb5974',
				'url'    => 'bb5974',
			);
	}
}
add_action( 'after_setup_theme', 'bouquet_wpcom_setup' );

/**
 * Dequeue font styles when Typekit is active.
 *
 * We don't want to enqueue the font scripts if the blog
 * has WP.com Custom Design and is using a 'Headings' font.
 */
function bouquet_dequeue_fonts() {
	if ( class_exists( 'TypekitData' ) && class_exists( 'CustomDesign' ) && CustomDesign::is_upgrade_active() ) {
		$customfonts = TypekitData::get( 'families' );

		if ( $customfonts && $customfonts['headings']['id'] )
			wp_dequeue_style( 'sorts mill goudy' );
	}
}
add_action( 'wp_enqueue_scripts', 'bouquet_dequeue_fonts' );
