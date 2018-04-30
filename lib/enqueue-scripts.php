<?php
/**
 * Enqueue block editor only JavaScript and CSS
 */
function transitionblocks_editor_scripts() {

  $blockPath = '../assets/js/editor.blocks.js';
  $editorStylePath = '../assets/css/blocks.editor.css';

  // Enqueue the bundled block JS file
  wp_enqueue_script(
    'transition-blocks-js',
    plugins_url( $blockPath, __FILE__ ),
    [ 'wp-i18n', 'wp-element', 'wp-blocks', 'wp-components' ],
    filemtime( plugin_dir_path(__FILE__) . $blockPath )
  );

  // Enqueue optional editor only styles
  wp_enqueue_style(
    'transition-blocks-css',
    plugins_url( $editorStylePath, __FILE__),
    [ 'wp-blocks' ],
    filemtime( plugin_dir_path( __FILE__ ) . $editorStylePath )
  );
}

add_action( 'enqueue_block_editor_assets', 'transitionblocks_editor_scripts' );

/**
 * Enqueue front end and editor JavaScript and CSS
 */
function transitionblocks_scripts() {

  $blockPath = '../assets/js/frontend.blocks.js';
  $stylePath = '../assets/css/blocks.style.css';

  if( !is_admin() ) {
    // Enqueue the bundled block JS file
    wp_enqueue_script(
      'transition-blocks-frontend',
      plugins_url( $blockPath, __FILE__ ),
      [],
      filemtime( plugin_dir_path(__FILE__) . $blockPath )
    );
  }

  // Enqueue frontend and editor block styles
  wp_enqueue_style(
    'transition-blocks',
    plugins_url($stylePath, __FILE__),
    [ 'wp-blocks' ],
    filemtime(plugin_dir_path(__FILE__) . $stylePath )
  );
}

add_action('enqueue_block_assets', 'transitionblocks_scripts');
