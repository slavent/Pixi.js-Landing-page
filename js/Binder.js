App.Binder = function() {

	$(window).resize($.debounce(500, function() {
		console.log("resize");

		w_width = $(window).width();
        w_height = $(window).height();
        renderer.resize(w_width, w_height);
	}));

	$menu_icon.on("click", function() {
		$menu_popup.fadeIn();
		$(this).fadeOut();
	});

	$menu_close_btn.on("click", function() {
		$menu_icon.fadeIn();
		$menu_popup.hide();
	});

	$main_menu.find("li").on("click", function() {
		if( active_slide != $(this).index() + 1 ) {
			App.SlideController.moveTo(active_slide, $(this).index() + 1);
			active_slide = $(this).index() + 1;
			App.NavController.setActive();
		}

		return false;
	});

	$menu_popup_nav.find("li").on("click", function() {
		$menu_popup.hide();
		App.SlideController.moveTo(active_slide, $(this).index() + 1);
		active_slide = $(this).index() + 1;
		App.NavController.setActive();

		return false;
	});

	$order_btn.on("click", function() {
		App.SlideController.moveTo(active_slide, 7);
		active_slide = 7;
		App.NavController.setActive();
	});

	// ------- START: FOR ANKETA ELEMENTS -------- 
	/* START: Checkbox */
	$(".icheckbox_minimal").iCheck({
		checkboxClass: "icheckbox_minimal",
		increaseArea: "20%"
	});

	$(".icheckbox_minimal").on('ifChecked', function(event){
		$(".agree").val("true");
	});

	$(".icheckbox_minimal").on('ifUnchecked', function(event){
		$(".agree").val("");
	});
	/* END: Checkbox */

	/* START: Season */
  	$(".anketa-season").on("click", function() {
  		$(".anketa-season").removeClass("anketa-season_selected");
  		$(this).addClass("anketa-season_selected");
  		$(".season").val($(this).text());
  	});
  	/* END: Season */

  	/* START: Carousel image */
  	$(".carousel-item-subtitle").on("click", function() {
  		var values 		= $(".images").val(),
  			current_val = $(this).text(),

  			$images 	= $(".images"),
  			$list 		= $(".anketa-choice-list");

  		if( !$(this).hasClass("active") ) {
  			$(this).addClass("active");

  			if( values == "" ) values = current_val;
  			else values = values + "," + current_val;

  			$images.val(values);
  			$list.append("<li class=anketa-choice-item>" + current_val + "<div class=anketa-choice-del></div></li>");
  		} else {
  			$(this).removeClass("active");

  			values = values.replace(current_val + ",", "");
  			values = values.replace(current_val, "");
  			$images.val(values);

  			$list.children().each(function() {
  				if( $(this).text() == current_val ) $(this).remove();
  			});
  		}
  	});

  	$(".anketa-choice-del").on("click", function() {
  		$(this).parent().remove();
  	});
  	/* END: Carousel image */

  	/* START: Range */
  	$(".age-range").ionRangeSlider();
  	$(".irs-single").css({ "left" : "6%" });
  	/* END: Range */

  	/* START: Selects */
  	var $selects = $(".selectize").selectize();

  	$(".selectize").on("item_add", function(value, $item) {
  		console.log($(this), value);
  	});
  	/* END: Selects */

  	/* START: Load btns */
  	var load_btns = [ "#upload-btn-1", "#upload-btn-2",  "#upload-btn-3",  "#upload-btn-4",  "#upload-btn-5",  "#upload-btn-6",  "#upload-btn-7",  "#upload-btn-8" ];

  	for(var i = 0; i < load_btns.length; i++) {

  		var uploader = new ss.SimpleUpload({
			button 			: 	load_btns[i],
			url 			: 	"file_upload.php",
			name			: 	"uploadfile",
			hoverClass		: 	"hover",
			focusClass		: 	"focus",
			responseType	: 	"json",
			startXHR: function(filename, size) {
				var $photos = $(".photos"),
					values 	= $photos.val();

				if( values == "" ) values = filename;
  				else values = values + "," + filename;

				$photos.val(values);
			},
			onSubmit: function() {

			},
			onComplete: function() {
				
			},
			onError: function() {

			}
		});
  	}
  	/* END: Load btns */

  	/* START: Order delete */
  	$(".order-del").on("click", function() {
  		$(this).parent().slideUp(function() {
  			$(this).remove();
  		});
  	});
  	/* END: Order delete */
  	// -------- END: FOR ANKETA ELEMENTS --------

};