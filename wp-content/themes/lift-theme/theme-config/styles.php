<?php
/**
 * Enqueue styles.
 *
 * @since LIFT 2021
 *
 * @return void
 */
function lift_styles() {
	// Note, the is_IE global variable is defined by WordPress and is used
	// to detect if the current browser is internet explorer.
	global $is_IE, $wp_scripts, $lift_theme;

	$header_css = '';
	$footer_css = '';
	$layout_css = '';
	$global_css = '';

	// LAYOUT 
	$layout_value['layout_size'] = $lift_theme['lift-theme-layout-size'];
	$layout_value['layout_size_value'] = $lift_theme['lift-theme-layout-size-value'];
	if($layout_value['layout_size']) {
		$layout_css .= "#content.lift-content{max-width: ".$layout_value['layout_size_value']."px; margin: auto auto}";
	}
	// HEADER  
	$header_value['header_size'] = $lift_theme['lift-theme-header-layout-size'];
	$header_value['header_size_value'] = $lift_theme['lift-theme-header-layout-size-value'];
	if($header_value['header_size']){
		$header_css .= "#content.lift-header{max-width: ".$header_value['header_size_value']."px; margin: auto auto}";
	}
	// FOOTER 
	$footer_value['footer_size'] = $lift_theme['lift-theme-footer-layout-size'];
	$footer_value['footer_size_value'] = $lift_theme['lift-theme-footer-layout-size-value'];
	$footer_value['footer_fixed'] = $lift_theme['lift-theme-footer-layout-fixed'];
	if($footer_value['footer_size']) {
		$footer_css .= "#footer.lift-footer{max-width: ".$footer_value['footer_size_value']."px; margin: auto auto}";
	}
	if($footer_value['footer_fixed']) {
		$footer_css .= "html,body {height: 100%;}.lift-wrapper{flex-direction: column;height: 100%;display:flex}#content.lift-content{flex-shrink: 0}#footer.lift-footer {margin-top: auto}";
	}

	// BACKTOTOP
	$global_value['global_backtotop'] = $lift_theme['lift-theme-global-function-backtotop-spacing'];
	if($global_value['global_backtotop']) {
		$global_css .= '#backtotop{right:'.$global_value['global_backtotop']['right'].';bottom:'.$global_value['global_backtotop']['bottom'].'}';
	}

	/////////////////////////////////////////////////////////

	// LAYOUT 
	$theme_value['theme_style'] = $lift_theme['lift-theme-global-style-theme'];

	// RTL styles.
	wp_style_add_data( 'lift-assets-style', 'rtl', 'replace' );

	// Styles.
	wp_enqueue_style(
		'lift-assets-core-style', 
		get_template_directory_uri() . '/dist/css/lift.css', 
		array(), 
		wp_get_theme()->get( 'Version' ), 'all' 
	);
	wp_enqueue_style(
		'lift-assets-main-style', 
		get_template_directory_uri() . '/dist/css/main.css', 
		array(), 
		wp_get_theme()->get( 'Version' ), 'all' 
	);
	// THEME SKIN
	if ( $theme_value['theme_style'] === 'modern' ) {
		wp_enqueue_style(
			'lift-assets-theme-custom', 
			get_template_directory_uri() . '/dist/css/theme-modern.css', 
			array(), 
			wp_get_theme()->get( 'Version' ), 'all' 
		);
	} else if ( $theme_value['theme_style'] === 'material' ) {
		wp_enqueue_style(
			'lift-assets-theme-custom', 
			get_template_directory_uri() . '/dist/css/theme-material.css', 
			array(), 
			wp_get_theme()->get( 'Version' ), 'all' 
		);
	} else if ( $theme_value['theme_style'] === 'monokai' ) {
		wp_enqueue_style(
			'lift-assets-theme-custom', 
			get_template_directory_uri() . '/dist/css/theme-monokai.css', 
			array(), 
			wp_get_theme()->get( 'Version' ), 'all' 
		);
	}
	// FOR COMPILER ONLY 
	// wp_enqueue_style(
	// 	'lift-assets-export-style', 
	// 	get_template_directory_uri() . '/dist/css/export.css', 
	// 	array(), 
	// 	wp_get_theme()->get( 'Version' ), 'all' 
	// );
	wp_add_inline_style( 'lift-assets-theme-custom', 
		$global_css . 
		$layout_css . 
		$header_css . 
		$footer_css 
	);

	wp_enqueue_style(
		'lift-assets-theme-style', 
		get_template_directory_uri() . '/dist/css/theme.css', 
		array(), 
		wp_get_theme()->get( 'Version' ), 'all' 
	);
	wp_enqueue_style(
		'lift-assets-style-style', 
		get_template_directory_uri() . '/dist/css/style.css', 
		array(), 
		wp_get_theme()->get( 'Version' ), 'all' 
	);

	// Print.
	wp_enqueue_style(
		'lift-assets-print-style', 
		get_template_directory_uri() . '/dist/css/print.css', 
		array(), 
		wp_get_theme()->get( 'Version' ), 'print' 
	);

	// Threaded comment reply styles.
	if ( is_singular() && comments_open() && get_option( 'thread_comments' ) ) {
		wp_enqueue_script( 'comment-reply' );
	}
}
add_action( 'wp_enqueue_scripts', 'lift_styles' , 999999 );

function lift_admin_styles() {
	// Styles.
	wp_enqueue_style(
		'lift-assets-icon-style', 
		get_template_directory_uri() . '/admin/css/bootstrap-icons.css', 
		array(), 
		wp_get_theme()->get( 'Version' ), 'all' 
	);
	wp_enqueue_style(
		'lift-assets-main-style', 
		get_template_directory_uri() . '/admin/css/dist/admin.min.css', 
		array(), 
		wp_get_theme()->get( 'Version' ), 'all' 
	);
	wp_enqueue_style(
		'lift-assets-prism-style', 
		get_template_directory_uri() . '/admin/css/prism.css', 
		array(), 
		wp_get_theme()->get( 'Version' ), 'all' 
	);
}

add_action( 'admin_enqueue_scripts', 'lift_admin_styles' );
