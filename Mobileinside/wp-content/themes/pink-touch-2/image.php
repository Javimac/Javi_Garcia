<?php
/**
 * @package Pink Touch 2
 */

get_header();

while ( have_posts() ) : the_post(); ?>

<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="date">
		<p><span class="day"><?php the_time( 'd' ); ?></span><?php the_time( 'M / Y' ); ?></p>
	</div>

	<div class="content">
		<h1 class="entry-title">
			<?php
				printf( __( '<a href="%1$s" title="Return to %2$s" rel="bookmark">%2$s</a>' ),
					get_permalink( $post->post_parent ),
					get_the_title( $post->post_parent )
				);
			?>
		</h1>

		<div class="entry-content">
			<div class="entry-attachment">
				<div class="attachment">
					<?php pinktouch_the_attached_image(); ?>
				</div><!-- .attachment -->

				<?php if ( has_excerpt() ) : ?>
				<div class="entry-caption">
					<?php the_excerpt(); ?>
				</div>
				<?php endif; ?>
			</div><!-- .entry-attachment -->

			<?php
				the_content();
				wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'pinktouch' ), 'after' => '</div>' ) );
			?>

			<div class="pagination clearfix">
				<span class="older"><?php previous_image_link( false, __( '&larr; Previous' , 'pinktouch' ) ); ?></span>
				<span class="newer"><?php next_image_link( false, __( 'Next &rarr;' , 'pinktouch' ) ); ?></span>
			</div><!-- .pagination -->

		</div>
	</div>

	<div class="info">
		<?php
			$metadata = wp_get_attachment_metadata();
			printf( __( '<p class="attachment-meta"><span class="meta-prep meta-prep-entry-date">Published</span> at <a href="%1$s" title="Link to full-size image">%2$s &times; %3$s</a> in <a href="%4$s" title="Return to %5$s" rel="gallery">%5$s</a></p>', 'pinktouch' ),
				wp_get_attachment_url(),
				$metadata['width'],
				$metadata['height'],
				get_permalink( $post->post_parent ),
				get_the_title( $post->post_parent )
			);

			the_tags( __( '<p class="tag-list">Tags: ', 'pinktouch' ), ', ', '</p>' );
		?>

		<p>
			<span class="permalink"><a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'pinktouch' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark"><?php _e( 'Permalink', 'pinktouch' ); ?></a></span>
			<span class="notes"><?php comments_popup_link( __( 'Leave a comment', 'pinktouch' ), __( '1 Comment', 'pinktouch' ), __( '% Comments', 'pinktouch' ) ); ?></span>
		</p>
		<?php edit_post_link( __( 'Edit', 'pinktouch' ), '<p>', '</p>' ); ?>
	</div>
</div><!-- /.post -->

<?php
comments_template();

endwhile; // end of the loop.

get_footer();
