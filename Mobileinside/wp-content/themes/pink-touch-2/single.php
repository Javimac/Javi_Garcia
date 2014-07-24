<?php
/**
 * @package Pink Touch 2
 */

get_header();

if ( have_posts() ) :
	while ( have_posts() ) :
		the_post();

		get_template_part( 'content', get_post_format() );
?>

	<div class="pagination">
		<p class="clearfix">
			<?php
				previous_post_link( '%link', __( '<span class="older"><span class="meta-nav">&larr;</span> Previous post</span>', 'pinktouch' ) );
				next_post_link( '%link', __( '<span class="newer">Next post <span class="meta-nav">&rarr;</span></span>', 'pinktouch' ) );
			?>
		</p>
	</div>

	<?php
		comments_template();

	endwhile;
endif;

get_footer();
