App.managerService.slide_7 = {

	init: function() {
		console.log("Slide 7 init");

		slide_container_7 = new PIXI.Container();

		$anketa.show();
		this.Binder.init();
		this.NavController.init();
		this.SceneController.init();

		if( slide_7_complete == true ) {
			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		}
	},

	destroy: function() {
		console.log("Slide 7 destroy");

		$anketa.hide();

		if( active_scene == 7 ) slide_7_complete = true;
		active_scene = 1;

		slide_container_7 = null;

		if( slide_7_complete == false ) {
			var deferred = $.Deferred();
			
			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_7);

			return deferred;
		}
	},

	update: function() {

	},

	Binder: {

		init: function() {

		}

	},

	SceneController: {

		init: function() {
			App.managerService.slide_7["scene_1"].init().then(function() { 
				App.managerService.slide_7.WheelController.unlockWheel();
				App.managerService.slide_7.SwipeController.unlockSwipe();
			});
		},

		moveTo: function(from, to) {
			console.log([from, to]);

			App.managerService.slide_7.SwipeController.lockSwipe();

			if( from == to ) return;

			App.managerService.slide_7.NavController.setActive();

			App.managerService.slide_7["scene_" + from].destroy();
			App.managerService.slide_7["scene_" + to].init().then(function() { 
				App.managerService.slide_7.WheelController.unlockWheel();
				App.managerService.slide_7.SwipeController.unlockSwipe();
			});
		}

	},

	WheelController: {

		checkDirection: function(event) {
			if(event) {
				if(event.originalEvent.wheelDelta < 0) {
					// scroll down
					if( active_scene < 7 ) App.managerService.slide_7.SceneController.moveTo(active_scene, ++active_scene);
					else {
						App.managerService.slide_7["scene_" + active_scene].destroy();
						App.SlideController.moveTo(active_slide, ++active_slide);
					}
				} else {
					// scroll top
					if( active_scene > 1 ) App.managerService.slide_7.SceneController.moveTo(active_scene, --active_scene);
					else {
						App.managerService.slide_7["scene_" + active_scene].destroy();
						App.SlideController.moveTo(active_slide, --active_slide);
					}
				}
			}
		},

		unlockWheel: function() {
			if( slide_7_complete == false ) $body.unbind("mousewheel").one("mousewheel", App.managerService.slide_7.WheelController.checkDirection);
		}

	},

	SwipeController: {

		lockSwipe: function() {
			$$("body").off("swipeUp");
			$$("body").off("swipeDown");
		},

		unlockSwipe: function() {
			$$("body").on("swipeUp", function() {
				if( active_scene < 7 ) App.managerService.slide_7.SceneController.moveTo(active_scene, ++active_scene);
				else {
					App.managerService.slide_7["scene_" + active_scene].destroy();
					App.SlideController.moveTo(active_slide, ++active_slide);
				}
			});

			$$("body").on("swipeDown", function() {
				if( active_scene > 1 ) App.managerService.slide_7.SceneController.moveTo(active_scene, --active_scene);
				else {
					App.managerService.slide_7["scene_" + active_scene].destroy();
					App.SlideController.moveTo(active_slide, --active_slide);
				}
			});
		}

	},

	NavController: {

		init: function() {
			var that = this;

			setTimeout(function() {
				$step_pult
					.html("")
					.parent()
					.addClass("active");

				for(var i = 0; i < 7; i++) {
					$step_pult.append("<li class=step-pult-item>" + (i + 1) + "</li>");
				}

				that.setActive();
			}, 2000);
		},

		destroy: function() {
			$step_pult.parent().removeClass("active");
		},

		setActive: function() {
			$step_pult.children().removeClass("step-pult-item-active");
			$step_pult.children().eq(active_scene - 1).addClass("step-pult-item-active");
		}

	},

	scene_1: {

		init: function() {
			var data = DATA.slide_7;

			$anketa.find(".anketa-scene-1").fadeIn(function() {
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

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-1").hide(function() {
				$(this).find(".anketa-row").css({ "opacity" : 0 });
			});
		}

	},

	scene_2: {

		init: function() {
			$anketa.find(".anketa-scene-2").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-2").hide();
		}

	},

	scene_3: {

		init: function() {
			$anketa.find(".anketa-scene-3").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-3").hide();
		}

	},

	scene_4: {

		init: function() {
			$anketa.find(".anketa-scene-4").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-4").hide();	
		}

	},

	scene_5: {

		init: function() {
			$anketa.find(".anketa-scene-5").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-5").hide();
		}

	},

	scene_6: {

		init: function() {
			$anketa.find(".anketa-scene-6").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-6").hide();
		}

	},

	scene_7: {

		init: function() {
			$anketa.find(".anketa-scene-7").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-7").hide();
		}

	}

};