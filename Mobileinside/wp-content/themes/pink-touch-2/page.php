<?php
/**
 * @package Pink Touch 2
 */

get_header();

while ( have_posts() ) :
	the_post();

	get_template_part( 'content' );

	comments_template();
endwhile;

get_footer();
