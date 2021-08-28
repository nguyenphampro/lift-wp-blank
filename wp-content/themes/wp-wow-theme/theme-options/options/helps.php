<?php
/**
* @package WOW WordPress 
* @subpackage Theme by Nguyen Pham
* https://baonguyenyam.github.io/cv
* @since 2021
*/

    $tabs = array(
        array(
            'id'      => 'lift-help-tab-1',
            'title'   => __( 'Visit us on GitHub', 'wow-theme-options' ),
            'content' => __( '<p>Visit us on GitHub: <a href="//github.com/nguyen-wp/" target="_blank">github.com/nguyen-wp/</a></p>', 'wow-theme-options' )
        ),
        array(
            'id'      => 'lift-help-tab-2',
            'title'   => __( 'Documentation', 'wow-theme-options' ),
            'content' => __( '<p>For full documentation on this field, visit: <a href="//github.com/nguyen-wp/lift-theme/" target="_blank">github.com/nguyen-wp/lift-theme/</a></p>', 'wow-theme-options' )
        )
    );
    Redux::setHelpTab( $opt_name, $tabs );

    // Set the help sidebar
    $content = __( '<p>The LIFT WordPress theme for your website is easy to use to install. This WordPress theme made for the WOW WordPress.</p>', 'wow-theme-options' );
    Redux::setHelpSidebar( $opt_name, $content );

