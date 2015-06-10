App.managerService.slide_7 = {

	init: function() {
		console.log("Slide 7 init");

		var deferred = $.Deferred();

		slide_container_7 = new PIXI.Container();

		$anketa.fadeIn(function() {
			var row = $anketa.find(".anketa-row"),
				delay = 100;

			row.each(function() {
				var that = $(this);

				setTimeout(function() {
					that.animate({ "opacity" : 1 }, 500);
				}, delay);

				delay += 100;
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

	},

	elems: {

	}

};