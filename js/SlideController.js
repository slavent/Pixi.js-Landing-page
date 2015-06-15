App.SlideController = {

	init: function() {
		App.managerService.slide_1.init().then(function() { 
			App.WheelController.unlockWheel();
			App.SwipeController.unlockSwipe();
		});
	},

	moveTo: function(from, to) {
		console.log([from, to]);

		App.NavController.setActive();
		App.SwipeController.lockSwipe();

		if( to == 3 && slide_3_complete == false ) {
			App.managerService["slide_" + from].destroy();
			App.managerService["slide_3"].init();

			return;
		}

		if( to == 6 && slide_6_complete == false ) {
			App.managerService["slide_" + from].destroy();
			App.managerService["slide_6"].init();

			return;
		}

		if( to == 7 && slide_7_complete == false ) {
			App.managerService["slide_" + from].destroy();
			App.managerService["slide_7"].init();

			return;
		}

		App.managerService["slide_" + from].destroy();
		App.managerService["slide_" + to].init().then(function() { 
			App.WheelController.unlockWheel();
			App.SwipeController.unlockSwipe();
		});
	}

};