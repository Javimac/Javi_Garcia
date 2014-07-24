<?php
/**
 * WordPress.com-specific functions and definitions
 * This file is centrally included from `wp-content/mu-plugins/wpcom-theme-compat.php`.
 *
 * @package Sundance
 */

/**
 * Adds support for wp.com-specific theme functions
 */
function sundance_add_wpcom_support() {
	global $themecolors;

	/**
	 * Set a default theme color array for WP.com.
	 *
	 * @global array $themecolors
	 */
	if ( ! isset( $themecolors ) ) {
		$themecolors = array(
			'bg'     => 'eeebf2',
			'border' => 'b3b3b3',
			'text'   => '3c3d47',
			'link'   => '267172',
			'url'    => '267172',
		);
	}

	// Add print stylesheet.
	add_theme_support( 'print-style' );

}
add_action( 'after_setup_theme', 'sundance_add_wpcom_support' );

// Dequeue the font script if the blog has WP.com Custom Design.
function sundance_dequeue_fonts() {
	if ( class_exists( 'TypekitData' ) && class_exists( 'CustomDesign' ) ) {
		if ( CustomDesign::is_upgrade_active() ) {
			$customfonts = TypekitData::get( 'families' );

			if ( ! $customfonts )
				return;

			$site_title = $customfonts['site-title'];
			$headings = $customfonts['headings'];

			if ( $site_title['id'] && $headings['id'] ) {
				wp_dequeue_style( 'sundance-droid-serif' );
			}
		}
	}
}
add_action( 'wp_enqueue_scripts', 'sundance_dequeue_fonts' );

//WordPress.com specific styles
function sundance_wpcom_styles() {
	wp_enqueue_style( 'sundance-wpcom', get_template_directory_uri() . '/inc/style-wpcom.css', '080113' );
}
add_action( 'wp_enqueue_scripts', 'sundance_wpcom_styles' );