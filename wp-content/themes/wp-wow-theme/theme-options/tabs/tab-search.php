<?php
    /**
* @package WOW WordPress 
* @subpackage Theme by Nguyen Pham
* https://baonguyenyam.github.io/cv
* @since 2021
*/

// -> START layout
    Redux::setSection( $opt_name, array(
        'title' => __( 'Search Box', 'wow-theme-options' ),
        'icon'  => 'bi bi-search',
        'id'         => 'lift-theme-search',
	));
	
	
	Redux::setSection( $opt_name, array(
		'title' => __( 'Search Form (global)', 'wow-theme-options' ),
        'id'         => 'lift-theme-search-layout',
        'subsection' => true,
		'fields'     => array(
            array(
				'id'       => 'lift-theme-search-type',
                'type'     => 'select',
                'title'    => __( 'Search Layout', 'wow-theme-options' ),
                'options' => array(
					'normal' => 'Normal', 
					'liner' => 'Liner',
					'block' => 'Block', 
					'full' => 'Full width', 
					), 
				'default' => 'normal'
            ),
			array(
				'id'       => 'lift-theme-search-layout-label',
                'type'     => 'switch',
                'title'    => __( 'Display Label', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-layout-icon',
                'type'     => 'switch',
                'title'    => __( 'Display Icon', 'wow-theme-options' ),
                'default'  => 1,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-layout-text',
                'type'     => 'switch',
                'title'    => __( 'Display Label', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-layout-placeholder',
                'type'     => 'switch',
                'title'    => __( 'Display Placeholder', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-layout-text-value',
                'type'     => 'text',
                'title'    => __( 'Label Text', 'wow-theme-options' ),
                'default'  => 'Search:',
            ),
			array(
				'id'       => 'lift-theme-search-layout-placeholder-value',
                'type'     => 'text',
                'title'    => __( 'Placeholder Text', 'wow-theme-options' ),
                'default'  => 'e.g: lift',
            ),
		),
    ) );

    Redux::setSection( $opt_name, array(
		'title' => __( 'Search Form Widget', 'wow-theme-options' ),
        'id'         => 'lift-theme-search-widget-widget-layout',
        'subsection' => true,
		'fields'     => array(
            array(
				'id'       => 'lift-theme-search-widget-type',
                'type'     => 'select',
                'title'    => __( 'Search Layout', 'wow-theme-options' ),
                'options' => array(
					'normal' => 'Normal', 
					'liner' => 'Liner',
					'block' => 'Block', 
					'full' => 'Full width', 
					), 
				'default' => 'normal'
            ),
			array(
				'id'       => 'lift-theme-search-widget-layout-label',
                'type'     => 'switch',
                'title'    => __( 'Display Label', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-widget-layout-icon',
                'type'     => 'switch',
                'title'    => __( 'Display Icon', 'wow-theme-options' ),
                'default'  => 1,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-widget-layout-text',
                'type'     => 'switch',
                'title'    => __( 'Display Label', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-widget-layout-placeholder',
                'type'     => 'switch',
                'title'    => __( 'Display Placeholder', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-widget-layout-text-value',
                'type'     => 'text',
                'title'    => __( 'Label Text', 'wow-theme-options' ),
                'default'  => 'Search:',
            ),
			array(
				'id'       => 'lift-theme-search-widget-layout-placeholder-value',
                'type'     => 'text',
                'title'    => __( 'Placeholder Text', 'wow-theme-options' ),
                'default'  => 'e.g: lift',
            ),
		),
    ) );

    Redux::setSection( $opt_name, array(
		'title' => __( 'Search Form Header', 'wow-theme-options' ),
        'id'         => 'lift-theme-search-header-layout',
        'subsection' => true,
		'fields'     => array(
            array(
				'id'       => 'lift-theme-header-search',
                'type'     => 'switch',
                'title'    => __( 'Header Search', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
            array(
				'id'       => 'lift-theme-header-search-sticky',
                'type'     => 'switch',
                // 'required' => array(
                //     'lift-theme-header-menu-toggle', '!=', 'keep',
                // ),
                'required' => array(
                    array('lift-theme-header-search', '!=', '0'),
                    array('lift-theme-header-menu-toggle', '!=', 'keep'),
                ),
                'title'    => __( 'Header Search Sticky', 'wow-theme-options' ),
                'default'  => 1,
                'on'       => 'On',
                'off'      => 'Off',
            ),
            array(
				'id'       => 'lift-theme-header-search-type',
                'type'     => 'select',
                'title'    => __( 'Header Search Layout', 'wow-theme-options' ),
                'required' => array(
                    array('lift-theme-header-search', '!=', '0'),
                ),
                'options' => array(
					'normal' => 'Normal', 
					'toggle' => 'Toggle',
					'float' => 'Float', 
					'full' => 'Full Screen', 
					), 
				'default' => 'float'
            ),
			array(
				'id'       => 'lift-theme-header-search-align',
                'type'     => 'button_set',
				'required' => array(
                    array('lift-theme-header-search', '!=', '0'),
                    array('lift-theme-header-menu-toggle', '!=', 'all'),
                ),
				'title'    => __( 'Header Search Align', 'wow-theme-options' ),
				'options' => array(
					'left' => 'Left', 
					'right' => 'Right', 
					), 
				'default' => 'right'
            ),
            
			array(
				'id'       => 'lift-theme-search-header-layout-label',
                'type'     => 'switch',
                'required' => array(
                    'lift-theme-header-search', '!=', '0',
                ),
                'title'    => __( 'Display Label', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-header-layout-icon',
                'type'     => 'switch',
                'required' => array(
                    'lift-theme-header-search', '!=', '0',
                ),
                'title'    => __( 'Display Icon', 'wow-theme-options' ),
                'default'  => 1,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-header-layout-text',
                'type'     => 'switch',
                'required' => array(
                    'lift-theme-header-search', '!=', '0',
                ),
                'title'    => __( 'Display Label', 'wow-theme-options' ),
                'default'  => 0,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-header-layout-placeholder',
                'type'     => 'switch',
                'required' => array(
                    'lift-theme-header-search', '!=', '0',
                ),
                'title'    => __( 'Display Placeholder', 'wow-theme-options' ),
                'default'  => 1,
                'on'       => 'On',
                'off'      => 'Off',
            ),
			array(
				'id'       => 'lift-theme-search-header-layout-text-value',
                'type'     => 'text',
                'required' => array(
                    'lift-theme-header-search', '!=', '0',
                ),
                'title'    => __( 'Label Text', 'wow-theme-options' ),
                'default'  => 'Search:',
            ),
			array(
				'id'       => 'lift-theme-search-header-layout-placeholder-value',
                'type'     => 'text',
                'required' => array(
                    'lift-theme-header-search', '!=', '0',
                ),
                'title'    => __( 'Placeholder Text', 'wow-theme-options' ),
                'default'  => 'e.g: lift',
            ),
		),
    ) );
