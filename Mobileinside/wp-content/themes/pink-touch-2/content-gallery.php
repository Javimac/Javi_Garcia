<?php
/**
 * @package Pink Touch 2
 */
?>

<div id="post-<?php the_ID(); ?>" <?php post_class(); ?>>
	<div class="date">
		<a href="<?php the_permalink(); ?>" title="<?php echo esc_attr( sprintf( __( 'Permalink to %s', 'pinktouch' ), the_title_attribute( 'echo=0' ) ) ); ?>" rel="bookmark">
			<?php if ( ! is_singular() && is_sticky() ) : ?>
				<p><b><?php _e( 'Featured', 'pinktouch' ); ?></b></p>
			<?php else : ?>
				<p><span class="day"><?php the_time( 'd' ); ?></span><?php the_time( 'M / Y' ); ?></p>
			<?php endif; ?>
		</a>
	</div>

	<div class="content">
		<?php
			if ( is_single() ) :
				 the_title( '<h1 class="entry-title">', '</h1>' );
			else :
				the_title( '<h1 class="entry-title"><a href="' . esc_url( get_permalink() ) . '" rel="bookmark">', '</a></h1>' );
			endif;
		?>

		<div class="entry-content">
			<?php
				if ( post_password_required() || is_singular() ) :
					the_content( __( 'Continue reading <span class="meta-nav">&rarr;</span>', 'pinktouch' ) );

				else :
					$pattern = get_shortcode_regex();
					preg_match( "/$pattern/s", get_the_content(), $match );
					$atts   = isset( $match[3] ) ? shortcode_parse_atts( $match[3] ) : array();
					$images = isset( $atts['ids'] ) ? explode( ',', $atts['ids'] ) : false;

					if ( ! $images ) :
						$images = get_posts( array(
							'post_parent'      => get_the_ID(),
							'fields'           => 'ids',
							'post_type'        => 'attachment',
							'post_mime_type'   => 'image',
							'orderby'          => 'menu_order',
							'order'            => 'ASC',
							'numberposts'      => 999,
							'suppress_filters' => false
						) );
					endif;

					if ( $images ) :
						$total_images = count( $images );
						$image        = array_shift( $images );
			?>

			<div class="gallery-thumb">
				<a href="<?php the_permalink(); ?>"><?php echo wp_get_attachment_image( $image, 'large' ); ?></a>
			</div><!-- .gallery-thumb -->

			<p class="gallery-info"><em>
				<?php
					printf( _n( 'This gallery contains <a %1$s>%2$s photo</a>.', 'This gallery contains <a %1$s>%2$s photos</a>.', $total_images, 'pinktouch' ),
						'href="' . get_permalink() . '" title="' . esc_attr( sprintf( __( 'Permalink to %s', 'pinktouch' ), the_title_attribute( 'echo=0' ) ) ) . '" rel="bookmark"',
						number_format_i18n( $total_images )
					);
				?>
			</em></p>
			<?php
					endif; // if ( $images )

					the_excerpt();
				endif;

				wp_link_pages( array( 'before' => '<div class="page-link">' . __( 'Pages:', 'pinktouch' ), 'after' => '</div>' ) );
				if ( get_the_author_meta( 'description' ) && is_singular() ) pinktouch_author_info();
			?>
		</div><!-- .entry-content -->
	</div><!-- .content -->

	<?php pinktouch_post_data(); ?>
</div><!-- /.post -->
