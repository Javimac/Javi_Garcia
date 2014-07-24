<?php
/**
 * @package Pink Touch 2
 */

get_header();

if ( have_posts() ) : the_post(); ?>

	<?php if ( is_archive() ) : ?>
	<div class="page-header">
		<h1 class="page-title">
		<?php
			if ( is_day() ) :
				printf( __( 'Daily Archives: %s', 'pinktouch' ), '<span>' . get_the_date() . '</span>' );
			elseif ( is_month() ) :
				printf( __( 'Monthly Archives: %s', 'pinktouch' ), '<span>' . get_the_date( 'F Y' ) . '</span>' );
			elseif ( is_year() ) :
				printf( __( 'Yearly Archives: %s', 'pinktouch' ), '<span>' . get_the_date( 'Y' ) . '</span>' );
			elseif ( is_tag() ) :
				printf( __( 'Tag Archives: %s', 'pinktouch' ), '<span>' . single_tag_title( '', false ) . '</span>' );
			elseif ( is_author() ) :
				printf( __( 'Posted by: %s', 'pinktouch' ), '<span>' . get_the_author() . '</span>' );
			elseif ( is_category() ) :
				printf( __( 'Category Archives: %s', 'pinktouch' ), '<span>' . single_cat_title( '', false ) . '</span>' );
			else :
				_e( 'Archives', 'pinktouch' );
			endif;
		?>
		</h1>

		<?php
			$term_description = term_description();
			if ( ! empty( $term_description ) ) :
				printf( '<div class="archive-meta">%s</div>', $term_description );
			endif;
		?>

	</div>
	<?php endif; ?>

	<?php if ( is_search() ) : ?>
	<div class="page-header">
		<h1 class="page-title"><?php printf( __( 'Search Results for: %s', 'pinktouch' ), '<span>' . get_search_query() . '</span>' ); ?></h1>
	</div>
	<?php endif; ?>

	<?php rewind_posts(); ?>

	<div id="posts-wrapper">
		<?php
			while ( have_posts() ) :
				the_post();

				get_template_part( 'content', get_post_format() );
			endwhile;

			pinktouch_content_nav();
		?>
	</div><!-- #post-wrapper -->

<?php else : ?>

	<div class="page-header">
		<h1 class="page-title"><?php _e( 'Nothing Found.', 'pinktouch' ); ?></h1>
	</div>

	<div class="hentry error404 clearfix">
		<div class="content">
			<p><?php _e( 'Apologies, but no results were found for the requested archive. Perhaps searching will help find a related post.', 'pinktouch' ); ?></p>
			<?php get_search_form(); ?>
		</div>
	</div><!-- /.hentry .error404 -->

<?php endif;

get_footer();
