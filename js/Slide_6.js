App.managerService.slide_6 = {

	init: function(active) {

		console.log("Slide 6 init");

		slide_container_6 = new PIXI.Container();

		this.NavController.init();
		this.SceneController.init();
		this.spinner.init();
		this.Binder.init();

		stage.addChild(slide_container_6);

		if( slide_6_complete == true ) {
			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		}

	},

	destroy: function() {

		console.log("Slide 6 destroy");

		this.NavController.destroy();
		this.spinner.destroy();
		App.managerService.slide_6["scene_" + active_scene].destroy();
		if( active_scene == 6 ) slide_6_complete = true;
		active_scene = 1;

		slide_container_6 = null;
		
		if( slide_6_complete == false ) {
			var deferred = $.Deferred();
			
			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		}	

	},

	update: function() {
		this.spinner.update();
	},

	Binder: {

		init: function() {
			$step_pult.children().on("click", function() {
				App.managerService.slide_6.SceneController.moveTo(active_scene, $(this).index() + 1);
				active_scene = $(this).index() + 1;
				App.managerService.slide_6.NavController.setActive();
			});
		}

	},

	SceneController: {

		init: function() {
			App.managerService.slide_6["scene_" + active_scene].init().then(function() { 
				App.managerService.slide_6.WheelController.unlockWheel();
				App.managerService.slide_6.SwipeController.unlockSwipe();
			});
		},

		moveTo: function(from, to) {
			console.log([from, to]);

			App.managerService.slide_6.SwipeController.lockSwipe();

			if( from == to ) return;

			App.managerService.slide_6.NavController.setActive();

			App.managerService.slide_6["scene_" + from].destroy();
			App.managerService.slide_6["scene_" + to].init().then(function() { 
				App.managerService.slide_6.WheelController.unlockWheel();
				App.managerService.slide_6.SwipeController.unlockSwipe();
			});
		}

	},

	WheelController: {

		checkDirection: function(event) {
			if(event) {
				if(event.originalEvent.wheelDelta < 0) {
					// scroll down
					if( active_scene < 6 ) App.managerService.slide_6.SceneController.moveTo(active_scene, ++active_scene);
					else {
						App.managerService.slide_6["scene_" + active_scene].destroy();
						App.SlideController.moveTo(active_slide, ++active_slide);
					}
				} else {
					// scroll top
					if( active_scene > 1 ) App.managerService.slide_6.SceneController.moveTo(active_scene, --active_scene);
					else {
						App.managerService.slide_6["scene_" + active_scene].destroy();
						App.SlideController.moveTo(active_slide, --active_slide);
					}
				}
			}
		},

		unlockWheel: function() {
			if( slide_6_complete == false ) $body.unbind("mousewheel").one("mousewheel", App.managerService.slide_6.WheelController.checkDirection);
		}

	},

	SwipeController: {

		lockSwipe: function() {
			$$("body").off("swipeUp");
			$$("body").off("swipeDown");
		},

		unlockSwipe: function() {
			$$("body").on("swipeUp", function() {
				if( active_scene < 6 ) App.managerService.slide_6.SceneController.moveTo(active_scene, ++active_scene);
				else {
					App.managerService.slide_6["scene_" + active_scene].destroy();
					App.SlideController.moveTo(active_slide, ++active_slide);
				}
			});

			$$("body").on("swipeDown", function() {
				if( active_scene > 1 ) App.managerService.slide_6.SceneController.moveTo(active_scene, --active_scene);
				else {
					App.managerService.slide_6["scene_" + active_scene].destroy();
					App.SlideController.moveTo(active_slide, --active_slide);
				}
			});
		}

	},

	NavController: {

		init: function() {
			$step_pult
				.html("")
				.parent()
				.addClass("active");

			for(var i = 0; i < 6; i++) {
				$step_pult.append("<li class=step-pult-item>" + (i + 1) + "</li>");
			}

			this.setActive();
		},

		destroy: function() {
			$step_pult.parent().removeClass("active");
		},

		setActive: function() {
			$step_pult.children().removeClass("step-pult-item-active");
			$step_pult.children().eq(active_scene - 1).addClass("step-pult-item-active");
		}

	},

	Scene: function(title, info, btn_title, pic) {

		// pic
		var pic_texture = PIXI.Texture.fromImage(pic.url),
			Pic = new PIXI.Sprite(pic_texture);
		Pic.anchor.set(0.5);
		Pic.position.x = pic.x;
		Pic.position.y = pic.y;

		// title
		var style = {
				font : '110px Plumb-Black',
			    fill : '#fa6464',
			    align : "center",
			    padding : 20,
			    lineHeight : 105
			},
			Title = new PIXI.Text(title.text, style);
		Title.x = title.x;	
		Title.y = title.y;
		Title.anchor.x = .5;
		Title.anchor.y = .5;

			// info
			var style = {
			font : '16px HelveticaNeueCyr-Light',
		    fill : '#3c3c3c',
		    align : "center"
		},
			Info = new PIXI.Text(info.text, style);
		Info.x = info.x;	
		Info.y = info.y;

		var Border = new PIXI.Graphics();
		Border.lineStyle(3, 0x3c3c3c, 1);
		Border.beginFill(0x000000, 0);
		Border.drawRect( 0, 0, Info.width + 40, Info.height + 40 );
		Border.position.x = -info.x;
		Border.position.y = info.y - 17;

			// btn
			var btn_texture = PIXI.Texture.fromImage("i/s6/circle.svg"),
			Btn = new PIXI.Sprite(btn_texture);
		Btn.anchor.set(0.5);
		Btn.position.x = btn_title.x;
		Btn.position.y = btn_title.y;
		Btn.buttonMode = true;
		Btn.interactive = true;
		Btn.on("click", function() {
			App.SlideController.moveTo(active_slide, 7);
			active_slide = 7;
			App.NavController.setActive();
		});

		var style = {
			font : '24px BebasRegular',
		    fill : '#ffffff'
		},
			Btn_title = new PIXI.Text(btn_title.text, style);
		
		Btn_title.x = btn_title.x;	
		Btn_title.y = btn_title.y;
		Btn_title.anchor.set(0.5);
		Btn_title.rotation = -0.3;


		var scene = new PIXI.Container();
		scene.addChild(Pic);
		scene.addChild(Title);
		scene.addChild(Info);
		scene.addChild(Border);
		scene.addChild(Btn);
		scene.addChild(Btn_title);


			scene.init = function() {
				// pic
				createjs.Tween.get(Pic)
					.to({ y: pic.y_to }, 3000, createjs.Ease.getPowInOut(4));

				// title 
				createjs.Tween.get(Title)
				.to({ y: title.y_to }, 2000, createjs.Ease.getPowInOut(4));

				// info 
				createjs.Tween.get(Info)
				.wait(600)
					.to({ x: info.x_to - Info.width/2 }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(Border)
				.wait(600)
					.to({ x: info.x_to - Border.width/2}, 1000, createjs.Ease.getPowInOut(4));

				// btn
				createjs.Tween.get(Btn)
				.wait(0)
					.to({ y: btn_title.y_to }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(Btn_title)
				.wait(200)
					.to({ y: btn_title.y_to }, 1000, createjs.Ease.getPowInOut(4));
			};

			scene.destroy = function() {
				// pic
				createjs.Tween.get(Pic)
						.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

				// title
				createjs.Tween.get(Title)
					.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

				// info 
				createjs.Tween.get(Info)
					.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(Border)
					.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

				// btn 
				createjs.Tween.get(Btn)
					.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(Btn_title)
					.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));
			};

		return scene;
	},

	scene_1: {

		el: null,

		init: function() {
			var data = DATA.slide_6.scene_1,
				title = {
					text: data.title.text,
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.title.x,
					y_to: renderer.height / 2 + data.title.y
				}, 
				info = {
					text: data.info.text,
					x: renderer.width,
					y: renderer.height / 2 + data.info.y,
					x_to: renderer.width / 2 + data.info.x,
					y_to: renderer.height / 2 + data.info.y
				},
				btn_title = {
					text: data.btn_title.text,
					x: renderer.width / 2 + data.btn_title.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.btn_title.x,
					y_to: renderer.height / 2 + data.btn_title.y
				},
				pic = {
					url: data.pic.url,
					x: renderer.width / 2 + data.pic.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.pic.x,
					y_to: renderer.height / 2 + data.pic.y
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	scene_2: {

		el: null,

		init: function() {
			var data = DATA.slide_6.scene_2,
				title = {
					text: data.title.text,
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.title.x,
					y_to: renderer.height / 2 + data.title.y
				}, 
				info = {
					text: data.info.text,
					x: renderer.width,
					y: renderer.height / 2 + data.info.y,
					x_to: renderer.width / 2 + data.info.x,
					y_to: renderer.height / 2 + data.info.y
				},
				btn_title = {
					text: data.btn_title.text,
					x: renderer.width / 2 + data.btn_title.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.btn_title.x,
					y_to: renderer.height / 2 + data.btn_title.y
				},
				pic = {
					url: data.pic.url,
					x: renderer.width / 2 + data.pic.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.pic.x,
					y_to: renderer.height / 2 + data.pic.y
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	scene_3: {

		el: null,

		init: function() {
			var data = DATA.slide_6.scene_3,
				title = {
					text: data.title.text,
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.title.x,
					y_to: renderer.height / 2 + data.title.y
				}, 
				info = {
					text: data.info.text,
					x: renderer.width,
					y: renderer.height / 2 + data.info.y,
					x_to: renderer.width / 2 + data.info.x,
					y_to: renderer.height / 2 + data.info.y
				},
				btn_title = {
					text: data.btn_title.text,
					x: renderer.width / 2 + data.btn_title.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.btn_title.x,
					y_to: renderer.height / 2 + data.btn_title.y
				},
				pic = {
					url: data.pic.url,
					x: renderer.width / 2 + data.pic.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.pic.x,
					y_to: renderer.height / 2 + data.pic.y
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	scene_4: {

		el: null,

		init: function() {
			var data = DATA.slide_6.scene_4,
				title = {
					text: data.title.text,
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.title.x,
					y_to: renderer.height / 2 + data.title.y
				}, 
				info = {
					text: data.info.text,
					x: renderer.width,
					y: renderer.height / 2 + data.info.y,
					x_to: renderer.width / 2 + data.info.x,
					y_to: renderer.height / 2 + data.info.y
				},
				btn_title = {
					text: data.btn_title.text,
					x: renderer.width / 2 + data.btn_title.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.btn_title.x,
					y_to: renderer.height / 2 + data.btn_title.y
				},
				pic = {
					url: data.pic.url,
					x: renderer.width / 2 + data.pic.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.pic.x,
					y_to: renderer.height / 2 + data.pic.y
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	scene_5: {

		el: null,

		init: function() {
			var data = DATA.slide_6.scene_5,
				title = {
					text: data.title.text,
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.title.x,
					y_to: renderer.height / 2 + data.title.y
				}, 
				info = {
					text: data.info.text,
					x: renderer.width,
					y: renderer.height / 2 + data.info.y,
					x_to: renderer.width / 2 + data.info.x,
					y_to: renderer.height / 2 + data.info.y
				},
				btn_title = {
					text: data.btn_title.text,
					x: renderer.width / 2 + data.btn_title.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.btn_title.x,
					y_to: renderer.height / 2 + data.btn_title.y
				},
				pic = {
					url: data.pic.url,
					x: renderer.width / 2 + data.pic.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.pic.x,
					y_to: renderer.height / 2 + data.pic.y
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	scene_6: {

		el: null,

		init: function() {
			var data = DATA.slide_6.scene_6,
				title = {
					text: data.title.text,
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.title.x,
					y_to: renderer.height / 2 + data.title.y
				}, 
				info = {
					text: data.info.text,
					x: renderer.width,
					y: renderer.height / 2 + data.info.y,
					x_to: renderer.width / 2 + data.info.x,
					y_to: renderer.height / 2 + data.info.y
				},
				btn_title = {
					text: data.btn_title.text,
					x: renderer.width / 2 + data.btn_title.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.btn_title.x,
					y_to: renderer.height / 2 + data.btn_title.y
				},
				pic = {
					url: data.pic.url,
					x: renderer.width / 2 + data.pic.x,
					y: -renderer.height,
					x_to: renderer.width / 2 + data.pic.x,
					y_to: renderer.height / 2 + data.pic.y
				},
				scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

			this.el = scene;
			slide_container_6.addChild(scene);
			scene.init();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

				return deferred;
		},

		destroy: function() {
			this.el.destroy();
		}

	},

	spinner: {

		el_1: null,
		el_2: null,
		step: 0,

		init: function() {
			var data = DATA.slide_6.spinner,
				texture_1 = PIXI.Texture.fromImage(data.url_1),
				texture_2 = PIXI.Texture.fromImage(data.url_2);

			this.el_1 = new PIXI.Sprite(texture_1);
			this.el_1.anchor.set(data.anchor);
			this.el_1.buttonMode = true;
			this.el_1.interactive = true;
			this.el_1.position.x = renderer.width / 2 + data.x;
			this.el_1.position.y = renderer.height / 2 + data.y;
			this.el_1.on("click", function() {
				App.SlideController.moveTo(active_slide, ++active_slide);
			});

			this.el_2 = new PIXI.Sprite(texture_2);
			this.el_2.anchor.set(data.anchor);

			this.el_1.addChild(this.el_2);
			slide_container_6.addChild(this.el_1); 
		},

		update: function() {
			var data = DATA.slide_6.spinner;

			this.step += 0.06;
			this.el_1.position.x = renderer.width / 2 + data.x;
			this.el_1.position.y = renderer.height / 2 + data.y;
			this.el_2.position.y += Math.sin(this.step);

		},

		destroy: function() {
			slide_container_6.removeChild(this.el_1);
			slide_container_6.removeChild(this.el_2);
		}

	}

};