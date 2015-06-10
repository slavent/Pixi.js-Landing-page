App.SwipeController = {

	lockSwipe: function() {
		
		$$("body").off("swipeUp");
		$$("body").off("swipeDown");

	},

	unlockSwipe: function() {
		
		$$("body").on("swipeUp", function() {
			if( active_slide < Object.keys(App.managerService).length ) App.SlideController.moveTo(active_slide, ++active_slide);
			else App.SwipeController.unlockSwipe();
		});

		$$("body").on("swipeDown", function() {
			if( active_slide > 1 ) App.SlideController.moveTo(active_slide, --active_slide);
			else App.SwipeController.unlockSwipe();
		});

	}

};