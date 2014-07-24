( function( $ ) {

	var video = $( '.video-wrapper embed, .video-wrapper iframe, .video-wrapper object' );

	video.each( function() {

		$( this )
			// jQuery .data does not work on object/embed elements
			.attr( 'data-ratio', this.height / this.width )
			.attr( 'data-width', this.width )
			.attr( 'data-height', this.height );

	} );

	function videoResponsive() {

		video.each( function() {

			var wrapper = $( this ),
			    wrapperWidth = wrapper.attr( 'data-width' ),
			    wrapperHeight = wrapper.attr( 'data-height' ),
			    wrapperRatio = wrapper.attr( 'data-ratio' ),
			    featuredContent = wrapper.closest( '.featured-content' ),
			    hentry = wrapper.closest( '.hentry' );

			if ( featuredContent.length ) {
				var containerWidth = featuredContent.width();
			} else {
				var containerWidth = hentry.width();
			}

			wrapper
				.removeAttr( 'height' )
				.removeAttr( 'width' );


			if ( wrapperWidth > containerWidth ) {

				wrapper
					.width( containerWidth )
					.height( containerWidth * wrapperRatio );

			} else {

				wrapper
					.width( wrapperWidth )
					.height( wrapperHeight );

			}

		} );

	}

	videoResponsive();

	$( window ).load( videoResponsive ).resize( _.debounce( videoResponsive, 100 ) );

} )( jQuery );
