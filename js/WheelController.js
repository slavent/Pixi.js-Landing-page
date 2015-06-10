App.WheelController = {

	checkDirection: function(event) {

		if(event) {
			if(event.originalEvent.wheelDelta < 0) {
				// scroll down
				if( active_slide < Object.keys(App.managerService).length ) App.SlideController.moveTo(active_slide, ++active_slide);
				else App.WheelController.unlockWheel();
			} else {
				// scroll top
				if( active_slide > 1 ) App.SlideController.moveTo(active_slide, --active_slide);
				else App.WheelController.unlockWheel();
			}
		}

    },

    unlockWheel: function() {
		$body.unbind("mousewheel").one("mousewheel", App.WheelController.checkDirection);
	},

};