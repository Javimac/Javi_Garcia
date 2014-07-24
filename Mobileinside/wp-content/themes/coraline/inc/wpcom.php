<?php
/**
 * WordPress.com-specific functions and definitions.
 * This file is centrally included from `wp-content/mu-plugins/wpcom-theme-compat.php`.
 *
 * @package Coraline
 */

function coraline_wpcom_setup() {
	global $themecolors;

	/**
	 * Check the current color scheme and set the correct themecolors array
	 */
	$options = function_exists( 'coraline_get_theme_options' ) ? coraline_get_theme_options() : array();

	if ( ! isset( $options['color_scheme'] ) )
		$options['color_scheme'] = 'light';

	if ( 'light' == $options['color_scheme'] ) {
		$themecolors = array(
			'bg'     => 'ffffff',
			'border' => 'cccccc',
			'text'   => '333333',
			'link'   => '0060ff',
			'url'    => 'df0000',
		);
	}
	elseif ( 'dark' == $options['color_scheme'] ) {
		$themecolors = array(
			'bg'     => '151515',
			'border' => '333333',
			'text'   => 'bbbbbb',
			'link'   => '80b0ff',
			'url'    => 'e74040',
		);
	}
	elseif ( 'pink' == $options['color_scheme'] ) {
		$themecolors = array(
			'bg'     => 'faccd6',
			'border' => 'c59aa4',
			'text'   => '222222',
			'link'   => 'd6284d',
			'url'    => 'd6284d',
		);
	}
	elseif ( 'purple' == $options['color_scheme'] ) {
		$themecolors = array(
			'bg'     => 'e1ccfa',
			'border' => 'c5b2de',
			'text'   => '333333',
			'link'   => '7728d6',
			'url'    => '7728d6',
		);
	}
	elseif ( 'brown' == $options['color_scheme'] ) {
		$themecolors = array(
			'bg'     => '9a7259',
			'border' => 'b38970',
			'text'   => 'ffecd0',
			'link'   => 'ffd2b7',
			'url'    => 'ffd2b7',
		);
	}
	elseif ( 'red' == $options['color_scheme'] ) {
		$themecolors = array(
			'bg'     => 'a20013',
			'border' => 'b92523',
			'text'   => 'e68d77',
			'link'   => 'ffd2b7',
			'url'    => 'ffd2b7',
		);
	}
	elseif ( 'blue' == $options['color_scheme'] ) {
		$themecolors = array(
			'bg'     => 'ccddfa',
			'border' => 'b2c3de',
			'text'   => '333333',
			'link'   => '2869d6',
			'url'    => '2869d6',
		);
	}
}
add_action( 'after_setup_theme', 'coraline_wpcom_setup' );

//WordPress.com specific styles
function coraline_wpcom_styles() {
	wp_enqueue_style( 'coraline-wpcom', get_template_directory_uri() . '/inc/style-wpcom.css', '20130005' );
}
add_action( 'wp_enqueue_scripts', 'coraline_wpcom_styles' );