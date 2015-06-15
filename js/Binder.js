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

	// For Anketa
	$("input").iCheck({
		checkboxClass: "icheckbox_minimal",
		increaseArea: "20%"
	});

  	$(".anketa-season").on("click", function() {
  		$(".anketa-season").removeClass("anketa-season_selected");
  		$(this).addClass("anketa-season_selected");
  	});

  	$(".age-range").ionRangeSlider();

  	$(".selectize").selectize();

};