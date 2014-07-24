== Changelog ==

= 1.3 - June 30 2014 =
* Updated theme description.

= 1.3 - Jul 09 2013 =
* Moved away from using deprecated functions.
* Avoids a PHP notice and check if a gallery exists before using it.
* Updated .pot file.

= 1.2 - May 22 2013 =
* Use a filter to modify the output of wp_title().
* Enqueue scripts and styles via callback.
* Use get_posts() in content-gallery.php instead of get_children() to get image attachments.
* Add forward compat with 3.6 and new post formats functionality.

= 1.1 - Nov 05 2012 =
* Add trailing slashes to URLs in comment header.
* Move functions for grabbing bits of content into a new file, for separation and organization.
* Clean out unused functions.
* Escaping fixes; make sure attribute escaping occurs after printing.
* Updates for the "audio" post format, remove outdated code from js/audio-player.js, use core version of swfobject and list as a dependency of js/audio-player.js, remove unneeded jQuery dependency.
* PNG and JPG image compression.
* Add Jetpack compatibility file.
* Remove loading of $locale.php.
* Add a check is_ssl() to define a protocol for Google fonts in order to ensure it's available for both protocols.
* New HiDPi-ready screenshot.png file at 600x450.