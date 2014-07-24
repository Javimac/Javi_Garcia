<?php
/**
 * @package Pink Touch 2
 */
?>
<form method="get" id="searchfield" action="<?php echo esc_url( home_url( '/' ) ); ?>">
	<input name="s" type="text" placeholder="<?php esc_attr_e( 'Search', 'pinktouch' ); ?>" value="<?php echo esc_attr( get_search_query() ); ?>" />
</form>
