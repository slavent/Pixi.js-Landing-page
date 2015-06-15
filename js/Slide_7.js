App.managerService.slide_7 = {

	init: function() {
		console.log("Slide 7 init");

		var data = DATA.slide_7;

		var deferred = $.Deferred();

		slide_container_7 = new PIXI.Container();

		$anketa.fadeIn(function() {
			var row = $anketa.find(".anketa-row"),
				delay = data.delay;

			row.each(function() {
				var that = $(this);

				setTimeout(function() {
					that.animate({ "opacity" : 1 }, data.speed);
				}, delay);

				delay += data.delay;
			});
		});

		setTimeout(function() {
			deferred.resolve();
		}, SLIDE_ANIMATION_TIME_7);

		return deferred;
	},

	destroy: function() {
		console.log("Slide 7 destroy");

		$anketa.fadeOut(function() {
			$(this).find(".anketa-row").css({ "opacity" : 0 });
		});

		slide_container_7 = null;
	},

	update: function() {

	}
};