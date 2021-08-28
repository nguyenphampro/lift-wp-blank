<?php
    /**
* @package LIFT Creations 
* @subpackage Theme by Nguyen Pham
* https://baonguyenyam.github.io/cv
* @since 2021
*/

// -> START layout
    Redux::setSection( $opt_name, array(
        'title' => __( 'Pages', 'wow-theme-options' ),
        'icon'  => 'bi bi-layout-text-sidebar',
        'id'         => 'lift-theme-page',
	));

    Redux::setSection( $opt_name, array(
		'title'      => __( 'Page Functionality', 'wow-theme-options' ),
		'id'         => 'lift-theme-page-style-function',
        'subsection' => true,
		'fields'     => array(
            array(
				'id'       => 'lift-theme-page-style-content-thumbnail',
                'type'     => 'switch',
                'title'    => __( 'Display Page Thumbnail', 'wow-theme-options' ),
                'subtitle' => __( 'Using this will remove the post thumbnail on your single post page.', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),			
            array(
				'id'       => 'lift-theme-page-style-breadcrumb',
                'type'     => 'switch',
                'title'    => __( 'Display Page Breadcrumb', 'wow-theme-options' ),
                'subtitle' => __( 'Using this will remove the breadcrumb on your single post page.', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),	
            array(
				'id'       => 'lift-theme-page-style-content-title',
                'type'     => 'switch',
                'title'    => __( 'Display Page Title', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),			
		),
    ) );

    
