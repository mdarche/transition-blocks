<?php
/**
 * Plugin Name: Transition Blocks
 * Plugin URI: https://transitionblocks.com
 * Description: A plugin containing example blocks for developers.
 * Text Domain: transition-blocks
 * Domain Path: /languages
 * Author: Mike Darche
 * Author URI: https://twitter.com/mdarshay
 * Version: 1.0.0
 * License: GPL2+
 * License URI: http://www.gnu.org/licenses/gpl-2.0.txt
 *
 * @package TRANSITIONBLOCKS
 */

//  Exit if accessed directly.
defined('ABSPATH') || exit;

// Enqueue JS and CSS
include( plugin_dir_path( __FILE__ ) . 'lib/enqueue-scripts.php');
