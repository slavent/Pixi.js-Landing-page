App.NavController = {

	setActive: function() {
		$main_menu.find("a").removeClass("main-menu-link-active");
		$main_menu.find("li").eq(active_slide - 1).children().addClass("main-menu-link-active");

	}

};