// START: Variables
window.App = window.App || {};

var $body 				= $("body"),
	$preloader 			= $(".preloader"),
	$footer 			= $("footer"),
	$main_menu 			= $(".main-menu"),
	$menu_icon 			= $(".menu-icon-wrp"),
	$menu_popup 		= $(".menu-popup"),
	$menu_popup_nav 	= $(".menu-popup-nav"),
	$menu_close_btn 	= $(".popup-closebtn"),
	$step_pult 			= $(".step-pult ul"),
	$hyde_menu 			= $(".hyde-menu"),
	$hover 				= $(".hyde-menu-hover"),
	$cart 				= $(".cart"),
	$anketa 			= $(".anketa"),
	$anketa_btn 		= $(".anketa-btn"),
	$anketa_error 		= $(".anketa-error"),
	$anketa_pay_systems = $(".anketa-payment-systems"),
	$order_btn 			= $(".order-btn"),

	w_width 	= $(window).width(),
	w_height 	= $(window).height(),
	renderer 	= new PIXI.autoDetectRenderer(w_width, w_height, { transparent: true }),
	stage 		= new PIXI.Container(),

	slide_container_1 = null,
	slide_container_2 = null,
	slide_container_3 = null,
	slide_container_4 = null,
	slide_container_5 = null,
	slide_container_6 = null,
	slide_container_7 = null,
	slide_container_8 = null,

	DATA = {},

	active_slide = 1,
	active_scene = 1,

	slide_3_complete = false,
	slide_6_complete = false,
	slide_7_complete = false,

	mobile_version = false;
// END: Variables



// Start: App
App.init = function() {
	createjs.Ticker.setFPS(60);
	$body.append(renderer.view);
	requestAnimationFrame(animate);

    function animate() {
    	App.managerService["slide_" + active_slide].update();

        renderer.render(stage);
        requestAnimationFrame(animate);
    }	

    if( $(window).width() <= 1000 ) mobile_version = true;

    var url;
    if( mobile_version == true ) url = "data/data_for_mobile.json";
    else url = "data/data_for_desktop.json";

   	$.getJSON(url)
    	.success(function(data) {
    		DATA = data;
			App.Binder();
			App.SlideController.init();
    	})
		.fail(function() {
			console.log("FAIL: Can't get json data");
		});
};

App.promise = function() {
	var deferred = $.Deferred(),
		that = this;

	setTimeout(function() {
		deferred.resolve();
		that.update_flag = true;
	}, 2000);

	return deferred;
};

App.clearCache = function() {
	for (var key in PIXI.utils.BaseTextureCache) PIXI.utils.BaseTextureCache[key].destroy();
};
// END: App



// START: Web Font
window.WebFontConfig = {
    custom: {
        families: ["HelveticaNeueCyr-Light", "HelveticaNeueCyr-Thin", "HelveticaNeueCyr-Bold", "Plumb-Black", "PlumbCondensed-Bold", "FiraSansMedium", "BebasRegular"],
        urls: ['build/css/build.css']
    },
    active: function() {
    	App.init();
    }
};

(function() {
    var wf = document.createElement('script');
    wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
})();
// END: Web font