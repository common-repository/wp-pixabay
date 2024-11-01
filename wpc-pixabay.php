<?php
/*
  Plugin Name: WPC Pixabay
  Plugin URI: https://wpclever.net/
  Description: WPC Pixabay helps you search millions of free photos, vectors and art illustrations from https://pixabay.com then insert into content or set as featured image very quickly.
  Version: 3.1.4
  Author: WPClever.net
  Author URI: https://wpclever.net
  Text Domain: wppb
  Domain Path: /languages/
  Requires at least: 4.0
  Tested up to: 5.4
 */

defined( 'ABSPATH' ) || exit;

! defined( 'WPPB_VERSION' ) && define( 'WPPB_VERSION', '3.1.4' );
! defined( 'WPPB_URI' ) && define( 'WPPB_URI', plugin_dir_url( __FILE__ ) );
! defined( 'WPPB_REVIEWS' ) && define( 'WPPB_REVIEWS', 'https://wordpress.org/support/plugin/wp-pixabay/reviews/?filter=5' );
! defined( 'WPPB_CHANGELOG' ) && define( 'WPPB_CHANGELOG', 'https://wordpress.org/plugins/wp-pixabay/#developers' );
! defined( 'WPPB_DISCUSSION' ) && define( 'WPPB_DISCUSSION', 'https://wordpress.org/support/plugin/wp-pixabay' );
! defined( 'WPC_URI' ) && define( 'WPC_URI', WPPB_URI );

include( 'includes/wpc-menu.php' );
include( 'includes/wpc-dashboard.php' );

if ( ! class_exists( 'WPCleverWppb' ) ) {
	class WPCleverWppb {
		function __construct() {
			add_action( 'plugins_loaded', array( $this, 'wppb_load_textdomain' ) );
			add_action( 'admin_menu', array( $this, 'wppb_menu' ) );
			add_action( 'admin_enqueue_scripts', array( $this, 'wppb_load_scripts' ) );
			add_filter( 'plugin_action_links', array( $this, 'wppb_action_links' ), 99, 2 );
			add_filter( 'plugin_row_meta', array( $this, 'wppb_row_meta' ), 99, 2 );
			add_action( 'wp_ajax_wppb_upload', array( $this, 'wppb_process_ajax' ) );
			add_action( 'wp_ajax_nopriv_wppb_upload', array( $this, 'wppb_process_ajax' ) );
			add_action( 'media_buttons', array( $this, 'wppb_add_button' ) );
			add_action( 'save_post', array( $this, 'wppb_save_post_data' ), 10, 3 );
			add_action( 'admin_footer', array( $this, 'wppb_area_content' ) );

			// gutenberg
			add_action( 'enqueue_block_editor_assets', [ $this, 'enqueue_editor_assets' ] );

			// media tabs
			add_filter( 'media_upload_tabs', array( $this, 'wppb_media_upload_tabs' ) );
			add_action( 'media_upload_wppb', array( $this, 'wppb_media_upload_iframe' ) );
		}

		function wppb_load_textdomain() {
			load_plugin_textdomain( 'wppb', false, basename( dirname( __FILE__ ) ) . '/languages/' );
		}

		function wppb_menu() {
			add_submenu_page( 'upload.php', esc_html__( 'WPC Pixabay', 'wppb' ), esc_html__( 'WPC Pixabay', 'wppb' ), 'manage_options', 'media-wppb', array(
				&$this,
				'wppb_menu_media'
			) );
			add_submenu_page( 'wpclever', esc_html__( 'WPC Pixabay', 'wppb' ), esc_html__( 'Pixabay', 'wppb' ), 'manage_options', 'wpclever-wppb', array(
				&$this,
				'wppb_menu_pages'
			) );
		}

		function enqueue_editor_assets() {
			wp_enqueue_style( 'wppb-css-editor', plugin_dir_url( __FILE__ ) . 'assets/css/editor.css' );
			wp_enqueue_script( 'wppb-gutenberg', plugin_dir_url( __FILE__ ) . 'assets/js/editor.js', [
				'wp-plugins',
				'wp-element',
				'wp-edit-post',
				'wp-i18n',
				'wp-api-request',
				'wp-data',
				'wp-components',
				'wp-blocks',
				'wp-editor',
				'wp-compose',
			] );
			wp_localize_script( 'wppb-gutenberg', 'WPPB', [
				'wppb_key' => get_option( 'wppb_key' ) != '' ? get_option( 'wppb_key' ) : '1498928-f190b376157b831824bdfb89b',
			] );
		}

		function wppb_media_upload_tabs( $tabs ) {
			$tabs['wppb'] = esc_html__( 'Pixabay', 'wppb' );

			return ( $tabs );
		}

		function wppb_media_upload_iframe() {
			return wp_iframe( array( $this, 'wppb_media_upload_content' ) );
		}

		function wppb_media_upload_content() {
			media_upload_header();
			$this->wppb_area();
		}

		function wppb_menu_media() {
			?>
			<div class="wppb_media_container">
				<div class="wppb_header">
					<h1><?php echo esc_html__( 'WPC Pixabay', 'wppb' ); ?>
						<span><?php esc_html_e( 'You can search & save the image(s) to Media Library.', 'wppb' ); ?></span>
					</h1>
				</div>
				<?php $this->wppb_area(); ?>
			</div>
			<?php
		}

		function wppb_menu_pages() {
			$page_slug  = 'wpclever-wppb';
			$active_tab = isset( $_GET['tab'] ) ? $_GET['tab'] : 'how';
			?>
			<div class="wpclever_settings_page wrap">
				<h1 class="wpclever_settings_page_title"><?php echo esc_html__( 'WPC Pixabay', 'wppb' ) . ' ' . WPPB_VERSION; ?></h1>
				<div class="wpclever_settings_page_desc about-text">
					<p>
						<?php printf( esc_html__( 'Thank you for using our plugin! If you are satisfied, please reward it a full five-star %s rating.', 'wppb' ), '<span style="color:#ffb900">&#9733;&#9733;&#9733;&#9733;&#9733;</span>' ); ?>
						<br/>
						<a href="<?php echo esc_url( WPPB_REVIEWS ); ?>"
						   target="_blank"><?php esc_html_e( 'Reviews', 'wppb' ); ?></a> | <a
							href="<?php echo esc_url( WPPB_CHANGELOG ); ?>"
							target="_blank"><?php esc_html_e( 'Changelog', 'wppb' ); ?></a>
						| <a href="<?php echo esc_url( WPPB_DISCUSSION ); ?>"
						     target="_blank"><?php esc_html_e( 'Discussion', 'wppb' ); ?></a>
					</p>
				</div>
				<div class="wpclever_settings_page_nav">
					<h2 class="nav-tab-wrapper">
						<a href="?page=<?php echo $page_slug; ?>&amp;tab=how"
						   class="nav-tab <?php echo $active_tab == 'how' ? 'nav-tab-active' : ''; ?>">
							<?php esc_html_e( 'How to use?', 'wppb' ); ?>
						</a>
						<a href="?page=<?php echo $page_slug; ?>&amp;tab=settings"
						   class="nav-tab <?php echo $active_tab == 'settings' ? 'nav-tab-active' : ''; ?>"><?php esc_html_e( 'Settings', 'wppb' ); ?></a>
						<a href="?page=<?php echo $page_slug; ?>&amp;tab=premium"
						   class="nav-tab <?php echo $active_tab == 'premium' ? 'nav-tab-active' : ''; ?>"><?php esc_html_e( 'Premium Version', 'wppb' ); ?></a>
					</h2>
				</div>
				<div class="wpclever_settings_page_content">
					<?php if ( $active_tab == 'how' ) { ?>
						<div class="wpclever_settings_page_content_text">
							<p>1. Press the "Pixabay" button above editor</p>
							<p><img src="<?php echo WPPB_URI; ?>assets/images/how-01.jpg"/></p>

							<p>2. Type any key to search</p>
							<p><img src="<?php echo WPPB_URI; ?>assets/images/how-02.jpg"/></p>

							<p>3. Choose the photo as you want then insert or set featured</p>
							<p><img src="<?php echo WPPB_URI; ?>assets/images/how-03.jpg"/></p>
						</div>
					<?php } elseif ( $active_tab == 'settings' ) { ?>
						<form method="post" action="options.php" novalidate="novalidate">
							<?php wp_nonce_field( 'update-options' ) ?>
							<table class="form-table">
								<tr>
									<th scope="row"><label for="wppb_key">Pixabay API Key</label></th>
									<td>
										<input name="wppb_key" type="text" id="wppb_key"
										       value="<?php echo get_option( 'wppb_key' ); ?>"/> <span
											class="description">
											Just need to fill your key when the default not work.
										</span>
									</td>
								</tr>
								<tr>
									<th>How to get Pixabay API Key?</th>
									<td>
										Step 1: Go to
										<a href="https://pixabay.com"
										   target="_blank">https://pixabay.com</a> and create new account (verify via
										email required).
										<br/><br/>
										Step 2: Login with your account and go to
										<a href="https://pixabay.com/api/docs/#api_key"
										   target="_blank">https://pixabay.com/api/docs/#api_key</a>
										then you can see the key.
										<br/><br/>
										<img src="<?php echo plugin_dir_url( __FILE__ ); ?>assets/images/how-04.jpg"/>
									</td>
								</tr>
								<tr class="submit">
									<th colspan="2">
										<input type="hidden" name="action" value="update"/>
										<input type="hidden" name="page_options" value="wppb_key"/>
										<input type="submit" name="submit" id="submit" class="button button-primary"
										       value="Save Changes"/>
									</th>
								</tr>
							</table>
						</form>
					<?php } elseif ( $active_tab == 'premium' ) { ?>
						<div class="wpclever_settings_page_content_text">
							<p>Get the Premium Version just $29! <a
									href="https://wpclever.net/downloads/wp-pixabay?utm_source=pro&utm_medium=wppb&utm_campaign=wporg"
									target="_blank">https://wpclever.net/downloads/wp-pixabay</a>
							</p>
							<p><strong>Extra features for Premium Version:</strong></p>
							<ul style="margin-bottom: 0">
								<li>- Upload image(s) to Media Library.</li>
								<li>- Get lifetime update & premium support.</li>
							</ul>
						</div>
					<?php } ?>
				</div>
			</div>
			<?php
		}

		function wppb_load_scripts() {
			wp_enqueue_script( 'colorbox', plugin_dir_url( __FILE__ ) . 'assets/js/jquery.colorbox.js', array( 'jquery' ) );
			wp_enqueue_style( 'colorbox', plugin_dir_url( __FILE__ ) . 'assets/css/colorbox.css' );
			wp_enqueue_style( 'wppb', plugin_dir_url( __FILE__ ) . 'assets/css/backend.css' );
			wp_enqueue_script( 'wppb', plugin_dir_url( __FILE__ ) . 'assets/js/backend.js', array( 'jquery' ), WPPB_VERSION, true );
			wp_localize_script( 'wppb', 'wppb_vars', array(
				'wppb_key'       => ( get_option( 'wppb_key' ) != '' ? get_option( 'wppb_key' ) : '1498928-f190b376157b831824bdfb89b' ),
				'wppb_url'       => admin_url( 'admin-ajax.php' ),
				'wppb_media_url' => admin_url( 'upload.php' ),
				'wppb_nonce'     => wp_create_nonce( 'wppb_nonce' )
			) );
		}

		function wppb_action_links( $links, $file ) {
			static $plugin;
			if ( ! isset( $plugin ) ) {
				$plugin = plugin_basename( __FILE__ );
			}
			if ( $plugin == $file ) {
				$settings_link = '<a href="' . admin_url( 'admin.php?page=wpclever-wppb&tab=settings' ) . '">' . esc_html__( 'Settings', 'wppb' ) . '</a>';
				$links[]       = '<a href="' . admin_url( 'admin.php?page=wpclever-wppb&tab=premium' ) . '">' . esc_html__( 'Premium Version', 'wppb' ) . '</a>';
				array_unshift( $links, $settings_link );
			}

			return (array) $links;
		}

		function wppb_row_meta( $links, $file ) {
			static $plugin;
			if ( ! isset( $plugin ) ) {
				$plugin = plugin_basename( __FILE__ );
			}
			if ( $plugin == $file ) {
				$row_meta = array(
					'support' => '<a href="https://wpclever.net/support?utm_source=support&utm_medium=wppb&utm_campaign=wporg" target="_blank">' . esc_html__( 'Premium support', 'wppb' ) . '</a>',
				);

				return array_merge( $links, $row_meta );
			}

			return (array) $links;
		}

		function wppb_process_ajax() {
			if ( ! isset( $_POST['nonce'] ) || ! wp_verify_nonce( $_POST['nonce'], 'wppb_nonce' ) ) {
				die( 'Permissions check failed' );
			}

			$file_url  = esc_url( $_POST['imgurl'] );
			$title     = esc_html( $_POST['imgtitle'] );
			$caption   = esc_html( $_POST['imgcaption'] );
			$file_name = esc_html( $_POST['imgfilename'] );
			$post_id   = esc_html( $_POST['postid'] );

			$this->wppb_save_image( $file_url, $title, $file_name, $post_id, $caption );
			die();
		}

		function wppb_add_button( $editor_id ) {
			echo ' <a href="#wppb_popup" id="wppb_btn" data-editor="' . $editor_id . '" class="wppb_btn button add_media" title="Pixabay">Pixabay</a><input type="hidden" class="wppb_featured_url" name="wppb_featured_url" value="" /><input type="hidden" class="wppb_featured_title" name="wppb_featured_title" value="" /><input type="hidden" class="wppb_featured_caption" name="wppb_featured_caption" value="" /> ';
		}

		function wppb_save_post_data( $post_id, $post ) {
			if ( isset( $post->post_status ) && 'auto-draft' == $post->post_status ) {
				return;
			}

			if ( wp_is_post_revision( $post_id ) ) {
				return;
			}

			if ( ! empty( $_POST['wppb_featured_url'] ) ) {
				if ( strstr( $_SERVER['REQUEST_URI'], 'wp-admin/post-new.php' ) || strstr( $_SERVER['REQUEST_URI'], 'wp-admin/post.php' ) ) {
					if ( 'page' == $_POST['post_type'] ) {
						if ( ! current_user_can( 'edit_page', $post_id ) ) {
							return;
						}
					} else {
						if ( ! current_user_can( 'edit_post', $post_id ) ) {
							return;
						}
					}

					$file_url = sanitize_text_field( $_POST['wppb_featured_url'] );
					$title    = sanitize_text_field( $_POST['wppb_featured_title'] );
					$caption  = sanitize_text_field( $_POST['wppb_featured_caption'] );

					$this->wppb_save_image( $file_url, $title, '0', $post_id, $caption, true );
				}
			}
		}

		static function wppb_save_image( $file_url, $title = null, $file_name = null, $post_id = null, $caption = null, $featured = false ) {
			if ( ! function_exists( 'media_handle_upload' ) ) {
				require_once( ABSPATH . 'wp-admin/includes/image.php' );
				require_once( ABSPATH . 'wp-admin/includes/file.php' );
				require_once( ABSPATH . 'wp-admin/includes/media.php' );
			}

			$post_data = array(
				'post_title'   => $title,
				'post_excerpt' => $caption,
			);

			$filename = pathinfo( $file_url, PATHINFO_FILENAME );

			if ( ( $file_name == '1' ) && ( $title != '' ) ) {
				$filename = sanitize_title( $title );
			}

			@set_time_limit( 300 );

			if ( ! empty( $file_url ) ) {
				$tmp                    = download_url( $file_url );
				$ext                    = pathinfo( $file_url, PATHINFO_EXTENSION );
				$file_array['name']     = $filename . '.' . $ext;
				$file_array['tmp_name'] = $tmp;

				if ( is_wp_error( $tmp ) ) {
					@unlink( $file_array['tmp_name'] );
					$file_array['tmp_name'] = '';
				}

				$thumb_id = media_handle_sideload( $file_array, $post_id, $desc = null, $post_data );

				if ( is_wp_error( $thumb_id ) ) {
					@unlink( $file_array['tmp_name'] );

					return $thumb_id;
				} else {
					do_action( 'wppb_save_image', $thumb_id, $post_data );

					if ( $featured ) {
						set_post_thumbnail( $post_id, $thumb_id );
					} else {
						echo wp_get_attachment_url( $thumb_id );
					}
				}
			}
		}

		function wppb_area_content() {
			?>
			<div style='display:none'>
				<?php $this->wppb_area( true ); ?>
			</div>
			<?php
		}

		public function wppb_area( $full = false ) {
			?>
			<div id="wppb_area" class="wppb_area">
				<div class="wppb_area_content">
					<div class="wppb_area_content_col wppb_area_content_left">
						<div class="wppb_area_content_col_inner">
							<div class="wppb_area_content_col_top">
								<select name="wppb_language" id="wppb_language" class="wppb_select">
									<option value="en"><?php esc_html_e( 'Language', 'wppb' ); ?></option>
									<option value="cs">cs</option>
									<option value="da">da</option>
									<option value="de">de</option>
									<option value="en">en</option>
									<option value="es">es</option>
									<option value="fr">fr</option>
									<option value="id">id</option>
									<option value="it">it</option>
									<option value="hu">hu</option>
									<option value="nl">nl</option>
									<option value="no">no</option>
									<option value="pl">pl</option>
									<option value="pt">pt</option>
									<option value="ro">ro</option>
									<option value="sk">sk</option>
									<option value="fi">fi</option>
									<option value="sv">sv</option>
									<option value="tr">tr</option>
									<option value="vi">vi</option>
									<option value="bg">bg</option>
									<option value="ru">ru</option>
									<option value="el">el</option>
									<option value="ja">ja</option>
									<option value="ko">ko</option>
									<option value="zh">zh</option>
								</select>
								<select name="wppb_category" id="wppb_category" class="wppb_select">
									<option value="all"><?php esc_html_e( 'Category', 'wppb' ); ?></option>
									<option value="all">all</option>
									<option value="fashion">fashion</option>
									<option value="nature">nature</option>
									<option value="backgrounds">backgrounds</option>
									<option value="science">science</option>
									<option value="education">education</option>
									<option value="people">people</option>
									<option value="feelings">feelings</option>
									<option value="religion">religion</option>
									<option value="health">health</option>
									<option value="places">places</option>
									<option value="animals">animals</option>
									<option value="industry">industry</option>
									<option value="food">food</option>
									<option value="computer">computer</option>
									<option value="sports">sports</option>
									<option value="transportation">transportation</option>
									<option value="travel">travel</option>
									<option value="buildings">buildings</option>
									<option value="business">business</option>
									<option value="music">music</option>
								</select>
								<select name="wppb_type" id="wppb_type" class="wppb_select">
									<option value="all"><?php esc_html_e( 'Type', 'wppb' ); ?></option>
									<option value="all">all</option>
									<option value="photo">photo</option>
									<option value="illustration">illustration</option>
									<option value="vector">vector</option>
								</select>
								<select name="wppb_orientation" id="wppb_orientation" class="wppb_select">
									<option value="all"><?php esc_html_e( 'Orientation', 'wppb' ); ?></option>
									<option value="horizontal">horizontal</option>
									<option value="vertical">vertical</option>
								</select>
								<select name="wppb_editorchoice" id="wppb_editorchoice"
								        class="wppb_select">
									<option
										value="false"><?php esc_html_e( 'EditorsChoice', 'wppb' ); ?></option>
									<option value="true">true</option>
									<option value="false">false</option>
								</select>
								<select name="wppb_order" id="wppb_order" class="wppb_select">
									<option value="popular"><?php esc_html_e( 'Order', 'wppb' ); ?></option>
									<option value="popular">popular</option>
									<option value="latest">latest</option>
								</select>

								<select name="wppb_safesearch" id="wppb_safesearch" class="wppb_select">
									<option value="false"><?php esc_html_e( 'SafeSearch', 'wppb' ); ?></option>
									<option value="true">true</option>
									<option value="false">false</option>
								</select>


								<select name="wppb_hires" id="wppb_hires" class="wppb_select">
									<option value="no"><?php esc_html_e( 'High-res', 'wppb' ); ?></option>
									<option value="no">no</option>
									<option value="large">large</option>
									<option value="fullhd">fullhd</option>
									<option value="original">original</option>
								</select>


								<input type="text" id="wppb_input" name="wppb_input" value=""
								       class="wppb_input wppb_input-normal"
								       placeholder="<?php esc_html_e( 'keyword', 'wppb' ); ?>"/>


								<input type="button" id="wppb_search" class="wppb_button"
								       value="<?php esc_html_e( 'Search', 'wppb' ); ?>"/>

							</div>
							<div class="wppb_area_content_col_mid">
								<div id="wppb_container" class="wppb_container"></div>
							</div>
							<div class="wppb_area_content_col_bot">
								<div id="wppb_page" class="wppb_page"></div>
							</div>
						</div>
					</div>
					<div class="wppb_area_content_col wppb_area_content_right">
						<div id="wppb_use_image" class="wppb_area_content_right_inner wppb_area_content_col_inner">
							<div class="wppb_area_content_col_mid">
								<div id="wppb_view"></div>
								<div class="wppb_item_info">
									<div><?php esc_html_e( 'Title', 'wppb' ); ?></div>
									<div>
										<input type="text" id="wppb_title" value=""
										       class="wppb_input"/>
									</div>
								</div>
								<div class="wppb_item_info">
									<div><?php esc_html_e( 'Caption', 'wppb' ); ?></div>
									<div>
											<textarea id="wppb_caption" name="wppb_caption"
											          class="wppb_textarea"></textarea>
									</div>
								</div>
								<div class="wppb_item_info">
									<div><?php esc_html_e( 'File name', 'wppb' ); ?>
									</div>
									<div>
										<select name="wppb_filename" id="wppb_filename" class="wppb_select">
											<option
												value="0"><?php esc_html_e( 'Keep original file name', 'wppb' ); ?>
											</option>
											<option
												value="1"><?php esc_html_e( 'Generate from title', 'wppb' ); ?>
											</option>
										</select>
									</div>
								</div>
								<?php if ( $full ) { ?>
									<div class="wppb_item_info">
										<div><?php esc_html_e( 'Size', 'wppb' ); ?></div>
										<div>
											<input type="number" id="wppb_width" value="0"
											       class="wppb_input wppb_input_small"
											       placeholder="<?php esc_html_e( 'width', 'wppb' ); ?>"/>
											<input
												type="number" id="wppb_height" value="0"
												class="wppb_input wppb_input_small"
												placeholder="<?php esc_html_e( 'height', 'wppb' ); ?>"/>
										</div>
									</div>
									<div class="wppb_item_info">
										<div><?php esc_html_e( 'Alignment', 'wppb' ); ?>
										</div>
										<div>
											<select name="wppb_align" id="wppb_align" class="wppb_select">
												<option
													value="alignnone"><?php esc_html_e( 'None', 'wppb' ); ?>
												</option>
												<option
													value="alignleft"><?php esc_html_e( 'Left', 'wppb' ); ?>
												</option>
												<option
													value="alignright"><?php esc_html_e( 'Right', 'wppb' ); ?>
												</option>
												<option
													value="aligncenter"><?php esc_html_e( 'Center', 'wppb' ); ?>
												</option>
											</select>
										</div>
									</div>
									<div class="wppb_item_info">
										<div><?php esc_html_e( 'Link to', 'wppb' ); ?></div>
										<div>
											<select name="wppb_link" id="wppb_link" class="wppb_select">
												<option
													value="0"><?php esc_html_e( 'None', 'wppb' ); ?></option>
												<option
													value="1"><?php esc_html_e( 'Original site', 'wppb' ); ?></option>
												<option
													value="2"><?php esc_html_e( 'Original image', 'wppb' ); ?></option>
											</select>
										</div>
									</div>
									<div class="wppb_item_info">
										<div>&nbsp;</div>
										<div>
											<input name="wppb_blank" id="wppb_blank" type="checkbox"
											       class="wppb_checkbox"/> <?php esc_html_e( 'Open new windows', 'wppb' ); ?>
										</div>
									</div>
									<div class="wppb_item_info">
										<div>&nbsp;</div>
										<div>
											<input name="wppb_nofollow" id="wppb_nofollow"
											       type="checkbox"
											       class="wppb_checkbox"/> <?php esc_html_e( 'Rel nofollow', 'wppb' ); ?>
										</div>
									</div>
								<?php } ?>
							</div>
							<div class="wppb_area_content_col_bot">
								<div class="wppb_notice">
                                        <span class="wppb_loading_text" id="wppb_loading_text"
                                              style="display:none"><?php esc_html_e( 'Saving to Media Library...', 'wppb' ); ?></span>
									<span id="wppb_error"></span>
								</div>
								<?php if ( $full ) { ?>
									<div class="wppb_actions">
										<div>
											<input type="hidden" id="wppb_url" value=""/>
											<input type="hidden" id="wppb_eid" value=""/>
											<button id="wppb_insert"><?php esc_html_e( 'Insert', 'wppb' ); ?>
												<span></span></button>
										</div>
										<div>
											<a href="https://wpclever.net/downloads/wp-pixabay?utm_source=pro&utm_medium=wppb&utm_campaign=wporg"
											   target="_blank"
											   onclick="return confirm('This feature only available in Premium Version!\nBuy it now? Just $29')">
												<button id="wppb_save" class="disable">
													<?php esc_html_e( 'Save&Insert', 'wppb' ); ?><span></span>
												</button>
											</a>
										</div>
										<div>
											<input type="button" id="wppb_featured" class="wppb_button"
											       value="<?php esc_html_e( 'Featured', 'wppb' ); ?>"/>
										</div>
									</div>
								<?php } else { ?>
									<div class="wppb_actions one_button">
										<div>
											<a href="https://wpclever.net/downloads/wp-pixabay?utm_source=pro&utm_medium=wppb&utm_campaign=wporg"
											   target="_blank"
											   onclick="return confirm('This feature only available in Premium Version!\nBuy it now? Just $29')">
												<button id="wppb_save_only" class="disable">
													<?php esc_html_e( 'Save to Media Library', 'wppb' ); ?><span></span>
												</button>
											</a>
										</div>
									</div>
								<?php } ?>
							</div>
						</div>
					</div>
				</div>
			</div>
			<?php
		}
	}

	new WPCleverWppb();
}
