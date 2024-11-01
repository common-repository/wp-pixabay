var wppb_imgs = {};
var wppb_selected = new Array();
var wppb_opened = false;
var wppb_current = '';
var wppb_width_small = '630px';
var wppb_width_big = '930px';
var wppb_height = '610px';

jQuery( document ).ready( function( $ ) {
	$( 'body' ).on( 'click touch', '#wppb_search', function() {
		wppb_show_images( 1 );
	} );

	$( 'body' ).on( 'click touch', '.wppb_btn', function() {
		var eid = $( this ).attr( 'data-editor' );
		$( '#wppb_eid' ).val( eid );

		if ( wppb_opened ) {
			$.colorbox( {
				width: wppb_width_big,
				height: wppb_height,
				inline: true,
				href: '#wppb_area',
				scrolling: false,
				fixed: true
			} );
		} else {
			$.colorbox( {
				width: wppb_width_small,
				height: wppb_height,
				inline: true,
				href: '#wppb_area',
				scrolling: false,
				fixed: true
			} );
		}
	} );

	$( 'body' ).on( 'click touch', '#wppb_page a', function() {
		$( '#wppb_page' ).html( '' );
		wppb_show_images( $( this ).attr( 'rel' ) );
	} );

	$( 'body' ).on( 'change', '#wppb_page_select', function() {
		wppb_show_images( $( this ).val() );
	} );

	$( 'body' ).on( 'click touch', '#wppb_insert', function() {
		for ( var i = 0; i < wppb_selected.length; i ++ ) {
			var insert = '';
			var align = '';
			var align2 = '';
			var eid = $( '#wppb_eid' ).val();
			if ( $( '#wppb_align' ).val() != '' ) {
				align = ' align="' + wppb_esc_html( $( '#wppb_align' ).val() ) + '"';
				align2 = ' class="' + wppb_esc_html( $( '#wppb_align' ).val() ) + '"';
			}
			var sid = wppb_selected[i];
			if ( wppb_imgs[sid].img_caption != '' ) {
				insert = '[caption id="" ' + align + ']';
			}
			if ( $( '#wppb_link' ).val() == 1 ) {
				insert += '<a href="' + wppb_esc_html( wppb_imgs[sid].img_site ) + '" title="' + wppb_esc_html( wppb_imgs[sid].img_title ) + '"';
			}
			if ( $( '#wppb_link' ).val() == 2 ) {
				insert += '<a href="' + wppb_esc_html( wppb_imgs[sid].img_full ) + '" title="' + wppb_esc_html( wppb_imgs[sid].img_title ) + '"';
			}
			if ( (
				     $( '#wppb_link' ).val() != 0
			     ) && $( '#wppb_blank' ).is( ':checked' ) ) {
				insert += ' target="_blank"';
			}
			if ( (
				     $( '#wppb_link' ).val() != 0
			     ) && $( '#wppb_nofollow' ).is( ':checked' ) ) {
				insert += ' rel="nofollow"';
			}
			if ( $( '#wppb_link' ).val() != 0 ) {
				insert += '>';
			}
			insert += '<img ' + align2 + ' src="' + wppb_esc_html( wppb_imgs[sid].img_full ) + '" width="' + wppb_esc_html( wppb_imgs[sid].img_width.toString() ) + '" height="' + wppb_esc_html( wppb_imgs[sid].img_height.toString() ) + '" title="' + wppb_esc_html( wppb_imgs[sid].img_title ) + '" alt="' + wppb_esc_html( wppb_imgs[sid].img_title ) + '"/>';
			if ( $( '#wppb_link' ).val() != 0 ) {
				insert += '</a>';
			}
			if ( wppb_imgs[sid].img_caption != '' ) {
				insert += ' ' + wppb_esc_html( wppb_imgs[sid].img_caption ) + '[/caption]';
			}
			insert += '\n';
			if ( ! tinyMCE.activeEditor || tinyMCE.activeEditor.isHidden() ) {
				wppb_insert_caret( eid, insert );
			} else {
				tinyMCE.activeEditor.execCommand( 'mceInsertContent', 0, insert );
			}
		}
		$.colorbox.close();
	} );

	$( 'body' ).on( 'click touch', '#wppb_featured', function() {
		var url = $( '#wppb_url' ).val();
		var title = $( '#wppb_title' ).val();
		var caption = $( '#wppb_caption' ).val();

		$( '.wppb_featured_url' ).val( url );
		$( '.wppb_featured_title' ).val( title );
		$( '.wppb_featured_caption' ).val( caption );

		//fix for pexels
		$( '.wppx_featured_url' ).val( url );
		$( '.wppx_featured_title' ).val( title );
		$( '.wppx_featured_caption' ).val( caption );

		$( '#postimagediv div.inside img' ).remove();
		$( '#postimagediv div.inside' ).prepend( '<img src="' + url + '" width="270"/>' );
		$.colorbox.close();
	} );

	$( 'body' ).on( 'click touch', '#remove-post-thumbnail', function() {
		$( '.wppb_featured_url' ).val( '' );
		//fix for pexels
		$( '.wppx_featured_url' ).val( '' );
	} );

	$( 'body' ).on( 'click touch', '.wppb_item_overlay', function( event ) {
		var checkbox = $( this ).parent().find( ':checkbox' );
		var checkbox_id = $( this ).attr( 'rel' );

		$.colorbox.resize( {width: wppb_width_big, height: wppb_height} );
		wppb_opened = true;
		wppb_current = checkbox_id;

		if ( event.ctrlKey ) {

			if ( ! checkbox.is( ':checked' ) ) {
				wppb_selected.push( checkbox_id );
			} else {
				wppb_selected.splice( wppb_selected.indexOf( checkbox_id ), 1 );
			}

			checkbox.attr( 'checked', ! checkbox.is( ':checked' ) );
		} else {
			if ( ! checkbox.is( ':checked' ) ) {
				wppb_selected = [checkbox_id];
				$( '#wppb_area' ).find( 'input:checkbox' ).removeAttr( 'checked' );
				checkbox.attr( 'checked', ! checkbox.is( ':checked' ) );
			}
		}

		$( '#wppb_use-image' ).show();
		$( '#wppb_title' ).val( wppb_imgs[checkbox_id].img_title );
		$( '#wppb_caption' ).val( wppb_imgs[checkbox_id].img_caption );
		$( '#wppb_width' ).val( wppb_imgs[checkbox_id].img_width );
		$( '#wppb_height' ).val( wppb_imgs[checkbox_id].img_height );
		$( '#wppb_url' ).val( wppb_imgs[checkbox_id].img_full );
		$( '#wppb_view' ).html( '<img src="' + wppb_imgs[checkbox_id].img_full + '"/>' );
		$( '#wppb_error' ).html( '' );

		// add count
		jQuery( '#wppb_insert span' ).html( '(' + wppb_selected.length + ')' );
		jQuery( '#wppb_save span' ).html( '(' + wppb_selected.length + ')' );
		jQuery( '#wppb_save_only span' ).html( ' (' + wppb_selected.length + ')' );
	} );

	$( 'body' ).on( 'change', '#wppb_title', function() {
		wppb_change_value( wppb_current, 'img_title', $( this ).val() );
	} );

	$( 'body' ).on( 'change', '#wppb_caption', function() {
		wppb_change_value( wppb_current, 'img_caption', $( this ).val() );
	} );

	$( 'body' ).on( 'change', '#wppb_width', function() {
		wppb_change_value( wppb_current, 'img_width', $( this ).val() );
	} );

	$( 'body' ).on( 'change', '#wppb_height', function() {
		wppb_change_value( wppb_current, 'img_height', $( this ).val() );
	} );
} );

function wppb_show_images( page ) {
	if ( jQuery( '#wppb_input' ).val() == '' ) {
		alert( 'Please enter keyword to search!' );
	} else {
		var wppb_url = '';
		var wppb_key = wppb_vars.wppb_key;
		var wppb_number = 12;
		var wppb_hires = jQuery( '#wppb_hires' ).val();
		if ( wppb_hires != 'no' ) {
			wppb_url = `https://pixabay.com/api/?response_group=high_resolution&key=${wppb_key}&lang=${jQuery( '#wppb_language' ).val()}&category=${jQuery( '#wppb_category' ).val()}&image_type=${jQuery( '#wppb_type' ).val()}&orientation=${jQuery( '#wppb_orientation' ).val()}&editors_choice=${jQuery( '#wppb_editorchoice' ).val()}&order=${jQuery( '#wppb_order' ).val()}&safesearch=${jQuery( '#wppb_safesearch' ).val()}&q=${encodeURIComponent( jQuery( '#wppb_input' ).val() )}&per_page=${wppb_number}&page=${page}`;
		} else {
			wppb_url = "https://pixabay.com/api/?key=" + wppb_key + "&lang=" + jQuery( '#wppb_language' ).val() + "&category=" + jQuery( '#wppb_category' ).val() + "&image_type=" + jQuery( '#wppb_type' ).val() + "&orientation=" + jQuery( '#wppb_orientation' ).val() + "&editors_choice=" + jQuery( '#wppb_editorchoice' ).val() + "&order=" + jQuery( '#wppb_order' ).val() + "&safesearch=" + jQuery( '#wppb_safesearch' ).val() + "&q=" + encodeURIComponent( jQuery( '#wppb_input' ).val() ) + "&per_page=" + wppb_number + "&page=" + page;
		}
		jQuery( '#wppb_search' ).addClass( 'loading' );
		jQuery( '#wppb_container' ).html( '' );
		jQuery( '#wppb_page' ).html( '' );
		jQuery.ajax( {
			url: wppb_url,
			dataType: 'jsonp',
			success: function( data ) {
				jQuery( '#wppb_search' ).removeClass( 'loading' );
				if ( data.totalHits > 0 ) {
					for ( var i = 0; i < data.hits.length; i ++ ) {
						img_id = data.hits[i].id;
						img_ext = data.hits[i].webformatURL.split( '.' ).pop().toUpperCase().substring( 0, 4 );
						img_thumb = data.hits[i].previewURL;
						if ( data.hits[i].hasOwnProperty( 'pageURL' ) ) {
							img_site = data.hits[i].pageURL;
						} else {
							img_site = 'https://pixabay.com';
						}
						if ( data.hits[i].hasOwnProperty( 'tags' ) ) {
							img_title = String( data.hits[i].tags );
						} else if ( data.hits[i].hasOwnProperty( 'user' ) ) {
							img_title = data.hits[i].user + ' (CC0), Pixabay';
						} else {
							img_title = '';
						}
						if ( data.hits[i].hasOwnProperty( 'user' ) ) {
							img_caption = data.hits[i].user + ' (CC0), Pixabay';
						} else {
							img_caption = '';
						}

						img_full = data.hits[i].webformatURL;
						img_width = data.hits[i].webformatWidth;
						img_height = data.hits[i].webformatHeight;

						if ( (
							     wppb_hires == 'large'
						     ) && data.hits[i].hasOwnProperty( 'largeImageURL' ) ) {
							img_id = data.hits[i].id_hash;
							img_full = data.hits[i].largeImageURL;
							img_width = 1280;
							img_height = '';
							img_site = 'https://pixabay.com/goto/' + img_id;
						}

						if ( (
							     wppb_hires == 'fullhd'
						     ) && data.hits[i].hasOwnProperty( 'fullHDURL' ) ) {
							img_id = data.hits[i].id_hash;
							img_full = data.hits[i].fullHDURL;
							img_width = 1920;
							img_height = '';
							img_site = 'https://pixabay.com/goto/' + img_id;
						}

						if ( (
							     wppb_hires == 'original'
						     ) && data.hits[i].hasOwnProperty( 'imageURL' ) ) {
							img_id = data.hits[i].id_hash;
							img_full = data.hits[i].imageURL;
							img_width = data.hits[i].imageWidth;
							img_height = data.hits[i].imageHeight;
							img_site = 'https://pixabay.com/goto/' + img_id;
						}
						if ( img_height != '' ) {
							jQuery( '#wppb_container' ).append( '<div class="wppb_item" bg="' + img_thumb + '"><div class="wppb_item_overlay" rel="' + img_id + '"></div><div class="wppb_check"><input type="checkbox" value="' + img_id + '"/></div><span>' +
							                                    img_ext + ' | ' + img_width + ' x ' + img_height + '</span></div>' );
						} else {
							jQuery( '#wppb_container' ).append( '<div class="wppb_item" bg="' + img_thumb + '"><div class="wppb_item_overlay" rel="' + img_id + '"></div><div class="wppb_check"><input type="checkbox" value="' + img_id + '"/></div><span>' +
							                                    img_ext + ' | ' + img_width + '</span></div>' );
						}
						wppb_imgs[img_id] = {
							img_ext: img_ext,
							img_site: img_site,
							img_thumb: img_thumb,
							img_full: img_full,
							img_width: img_width,
							img_height: img_height,
							img_title: img_title,
							img_caption: img_caption
						};
					}

					jQuery( '.wppb_item' ).each( function() {
						imageUrl = jQuery( this ).attr( 'bg' );
						jQuery( this ).css( 'background-image', 'url(' + imageUrl + ')' );
					} );

					var vpages = "About " + data.totalHits + " results / Pages: ";

					if ( (
						     data.totalHits / wppb_number + 1
					     ) < 10 ) {
						for ( var j = 1; j < data.totalHits / wppb_number + 1; j ++ ) {
							vpages += '<a href="javascript: void (0);" rel="' + j + '" title="Page ' + j + '">' + j + '</a> ';
						}
					} else {
						vpages += '<select id="wppb_page_select" class="wppb_page_select">';
						for ( var j = 1; j < data.totalHits / wppb_number + 1; j ++ ) {
							vpages += '<option value="' + j + '"';
							if ( j == page ) {
								vpages += ' selected';
							}
							vpages += '>' + j + '</option> ';
						}
						vpages += '</select>';
					}

					jQuery( '#wppb_page' ).html( vpages );
				} else {
					jQuery( '#wppb_container' ).html( 'No result! Please try again!' );
					jQuery( '#wppb_page' ).html( '' );
				}
			}
		} );
	}
}

function wppb_is_url( str ) {
	var pattern = new RegExp( '^(https?:\\/\\/)?' + // protocol
	                          '((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.?)+[a-z]{2,}|' + // domain name
	                          '((\\d{1,3}\\.){3}\\d{1,3}))' + // OR ip (v4) address
	                          '(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*' + // port and path
	                          '(\\?[;&a-z\\d%_.~+=-]*)?' + // query string
	                          '(\\#[-a-z\\d_]*)?$', 'i' ); // fragment locator
	return pattern.test( str );
}

function wppb_change_value( img_id, img_field, img_value ) {
	wppb_imgs[img_id][img_field] = img_value;
}

function wppb_insert_caret( areaId, text ) {
	var txtarea = document.getElementById( areaId );
	var scrollPos = txtarea.scrollTop;
	var strPos = 0;
	var br = (
		(
			txtarea.selectionStart || txtarea.selectionStart == '0'
		) ?
			"ff" : (
				document.selection ? "ie" : false
			)
	);
	if ( br == "ie" ) {
		txtarea.focus();
		var range = document.selection.createRange();
		range.moveStart( 'character', - txtarea.value.length );
		strPos = range.text.length;
	}
	else if ( br == "ff" ) {
		strPos = txtarea.selectionStart;
	}

	var front = (
		txtarea.value
	).substring( 0, strPos );
	var back = (
		txtarea.value
	).substring( strPos, txtarea.value.length );
	txtarea.value = front + text + back;
	strPos = strPos + text.length;
	if ( br == "ie" ) {
		txtarea.focus();
		var range = document.selection.createRange();
		range.moveStart( 'character', - txtarea.value.length );
		range.moveStart( 'character', strPos );
		range.moveEnd( 'character', 0 );
		range.select();
	}
	else if ( br == "ff" ) {
		txtarea.selectionStart = strPos;
		txtarea.selectionEnd = strPos;
		txtarea.focus();
	}
	txtarea.scrollTop = scrollPos;
}

function wppb_esc_html( html ) {
	var fn = function( tag ) {
		var charsToReplace = {
			'&': '&amp;',
			'<': '&lt;',
			'>': '&gt;',
			'"': '&#34;'
		};
		return charsToReplace[tag] || tag;
	}
	if ( typeof html !== 'string' ) {
		return '';
	} else {
		return html.replace( /[&<>"]/g, fn );
	}
}
