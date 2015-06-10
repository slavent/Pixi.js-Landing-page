App.managerService.slide_3 = {

	init: function() {

		console.log("Slide 3 init");

		slide_container_3 = new PIXI.Container();	
		this.SceneController.init();	
		this.NavController.setActive(0, 0);
		this.Binder.init();
		stage.addChild(slide_container_3);	

		if( slide_3_complete == true ) {

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_3);

				return deferred;
		}		

	},

	destroy: function() {

		console.log("Slide 3 destroy");

		this.elems.menu.destroy();
		stage.removeChild(slide_container_3);
		slide_container_3 = null;
		if( active_scene == 6 ) slide_3_complete = true;
		active_scene = 1;	

		if( slide_3_complete == false ) {
			var deferred = $.Deferred();
			
			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_3);

				return deferred;
		}	

	},

	update: function() {

	},

	Binder: {

		init: function() {
			$hyde_menu.addClass("complete").find(".hyde-menu-item").on("click", function() {
				var prev_scene = active_scene;
				active_scene = $(this).index() + 1;
				App.managerService.slide_3.SceneController.moveTo(prev_scene, active_scene);							
			});
		}

	},

	SceneController: {

		init: function() {
			App.managerService.slide_3.elems.menu["scene_1"].init().then(function() { 
				App.managerService.slide_3.WheelController.unlockWheel();
				App.managerService.slide_3.SwipeController.unlockSwipe();
			});
		},

		moveTo: function(from, to) {
			console.log("Scene: " + [from, to]);

			App.managerService.slide_3.SwipeController.lockSwipe();

			if( from == to ) return;

			var top_pos = 0,
				left_pos = 0;

			switch(active_scene) {
				case 1: 
					top_pos = 0;
					left_pos = 0;

					break;

				case 2:
					top_pos = 0;
					left_pos = $hyde_menu.children().width();

					break;

				case 3:
					top_pos = $hyde_menu.children().height();
					left_pos = 0;

					break;

				case 4: 
					top_pos = $hyde_menu.children().height();
					left_pos = $hyde_menu.children().width();

					break;

				case 5:
					top_pos = $hyde_menu.children().height() * 2;
					left_pos = 0;

					break;

				case 6:
					top_pos = $hyde_menu.children().height() * 2;
					left_pos = $hyde_menu.children().width();

					break;

			}

			App.managerService.slide_3.NavController.setActive(top_pos, left_pos);
			App.managerService.slide_3.elems.menu["scene_" + from].destroy();
			App.managerService.slide_3.elems.menu["scene_" + to].init().then(function() { 
				App.managerService.slide_3.WheelController.unlockWheel();
				App.managerService.slide_3.SwipeController.unlockSwipe();
			});

		}

	},

	WheelController: {

		checkDirection: function(event) {
			if(event) {
				if(event.originalEvent.wheelDelta < 0) {
					// scroll top
					if( active_scene < 6 ) App.managerService.slide_3.SceneController.moveTo(active_scene, ++active_scene);
					else App.SlideController.moveTo(active_slide, ++active_slide);
				} else {
					// scroll down
					if( active_scene > 1 ) App.managerService.slide_3.SceneController.moveTo(active_scene, --active_scene);
					else App.SlideController.moveTo(active_slide, --active_slide);
				}
			}
		},

		unlockWheel: function() {
			if( slide_3_complete == false ) $body.unbind("mousewheel").one("mousewheel", App.managerService.slide_3.WheelController.checkDirection);
		}

	},

	SwipeController: {

		lockSwipe: function() {
			
			$$("body").off("swipeUp");
			$$("body").off("swipeDown");

		},

		unlockSwipe: function() {
			
			$$("body").on("swipeUp", function() {
				if( active_scene < 6 ) App.managerService.slide_3.SceneController.moveTo(active_scene, ++active_scene);
				else App.SlideController.moveTo(active_slide, ++active_slide);
			});

			$$("body").on("swipeDown", function() {
				if( active_scene > 1 ) App.managerService.slide_3.SceneController.moveTo(active_scene, --active_scene);
				else App.SlideController.moveTo(active_slide, --active_slide);
			});

		}

	},

	NavController: {

		setActive: function(top, left) {
			if( mobile_version == true ) {
				$hyde_menu.children().removeClass("active").eq(active_scene - 1).addClass("active");
			} else {
				$hover.animate({ "top" : top, "left" : left }, function() {
					$hyde_menu.children().removeClass("active").eq(active_scene - 1).addClass("active");
				});
			}
		}

	},

	elems: {

		menu: {

			anim_params: {
				speed: 1000
			},

			init: function() {
				if( mobile_version == true ) $hyde_menu.addClass("active");
				else $hyde_menu.addClass("active").css({ "height" : $(window).height() - $main_menu.height() });
			},

			destroy: function() {
				$hyde_menu.removeClass("active");
			},

			Scene: function(url, title_top, title_down) {
				// Titles
				if( mobile_version == true ) {
					var style = {
						font : "35px PlumbCondensed-Bold",
					    fill : "#000000",
					    align : "center"
					},
					title_top = new PIXI.Text(title_top, style),
					title_down = new PIXI.Text(title_down, style);

					title_top.x = -1000;
					title_top.y = -300;
					title_top.anchor.set(0.5);

					title_down.x = 1000;
					title_down.y = 300;
					title_down.anchor.set(0.5);
				} else {
					var style = {
						font : "22px PlumbCondensed-Bold",
					    fill : "#000000",
					    align : "center"
					},
					title_top = new PIXI.Text(title_top, style),
					title_down = new PIXI.Text(title_down, style);

					title_top.x = -1000;
					title_top.y = -50;

					title_down.x = 1000;
					title_down.y = 450;
				}

				// Title's lines
				if( mobile_version == true ) {
					var data_lines = [
						{ color: "0x000000", size: title_top.width - 100, 	x: -15, 						y: 50, pos: "top" },
						{ color: "0x000000", size: title_top.width - 100, 	x: title_top.height + 15, 		y: 50, pos: "top" },
						{ color: "0x000000", size: title_down.width - 100, 	x: -15, 						y: 50, pos: "down" },
						{ color: "0x000000", size: title_down.width - 100, 	x: title_down.height + 15, 		y: 50, pos: "down" },
					];

					var Line = function(color, size, x, y) {
						this.el = new PIXI.Graphics();
						this.el.beginFill(0xffffff);
						this.el.lineStyle(3, color, 1);
						this.el.moveTo(0,0);
						this.el.lineTo(size,0);
						this.el.endFill();
						this.el.position.x = y;
						this.el.position.y = x;

						return this.el;
					};

					/*for(var i = 0; i < data_lines.length; i++) {
						var line = new Line( data_lines[i].color, data_lines[i].size, data_lines[i].x, data_lines[i].y );

						switch(data_lines[i].pos) {
							case "top":
								title_top.addChild(line);
								break;
							case "down":
								title_down.addChild(line);
								break;
						}
					}*/
				} else {
					var data_lines = [
						{ color: "0x000000", size: title_top.width - 100, 	x: -15, 						y: 50, pos: "top" },
						{ color: "0x000000", size: title_top.width - 100, 	x: title_top.height + 15, 		y: 50, pos: "top" },
						{ color: "0x000000", size: title_down.width - 100, 	x: -15, 						y: 50, pos: "down" },
						{ color: "0x000000", size: title_down.width - 100, 	x: title_down.height + 15, 		y: 50, pos: "down" },
					];

					var Line = function(color, size, x, y) {
						this.el = new PIXI.Graphics();
						this.el.beginFill(0xffffff);
						this.el.lineStyle(1, color, 1);
						this.el.moveTo(0,0);
						this.el.lineTo(size,0);
						this.el.endFill();
						this.el.position.x = y;
						this.el.position.y = x;

						return this.el;
					};

					for(var i = 0; i < data_lines.length; i++) {
						var line = new Line( data_lines[i].color, data_lines[i].size, data_lines[i].x, data_lines[i].y );

						switch(data_lines[i].pos) {
							case "top":
								title_top.addChild(line);
								break;
							case "down":
								title_down.addChild(line);
								break;
						}
					}
				}

				// Photo
				if( mobile_version == true ) {
					this.texture = PIXI.Texture.fromImage(url);
					this.el = new PIXI.Sprite(this.texture);
					this.el.scale.set(1.2);
					this.el.anchor.set(0.5);
					this.el.position.x = renderer.width / 2;
					this.el.position.y = renderer.height * 2;
					this.el.addChild(title_top);
					this.el.addChild(title_down);
				} else {
					this.texture = PIXI.Texture.fromImage(url);
					this.el = new PIXI.Sprite(this.texture);
					this.el.position.x = renderer.width / 2;
					this.el.position.y = renderer.height * 2;
					this.el.addChild(title_top);
					this.el.addChild(title_down);
				}

				this.el.init = function(element) {
					if( mobile_version == true ) {
						createjs.Tween.get(element)
							.to({ y: renderer.height / 2 + 250 }, 1000, createjs.Ease.getPowInOut(4));
						createjs.Tween.get(title_top)
							.wait(500)
							.to({ x: 0 }, 1000, createjs.Ease.getPowInOut(4));
						createjs.Tween.get(title_down)
							.wait(500)
							.to({ x: 0 }, 1000, createjs.Ease.getPowInOut(4));
					} else {
						createjs.Tween.get(element)
							.to({ y: renderer.height / 2 - 250 }, 1000, createjs.Ease.getPowInOut(4));
						createjs.Tween.get(title_top)
							.wait(500)
							.to({ x: -50 }, 1000, createjs.Ease.getPowInOut(4));
						createjs.Tween.get(title_down)
							.wait(500)
							.to({ x: 350 }, 1000, createjs.Ease.getPowInOut(4));
					}
				}

				this.el.destroy = function(element) {
					createjs.Tween.get(title_top).to({ x: -1000 }, 500, createjs.Ease.getPowInOut(4));
					createjs.Tween.get(title_down).to({ x: 1000 }, 500, createjs.Ease.getPowInOut(4));
					createjs.Tween.get(element)
						.wait(200)
						.to({ y: -renderer.height * 2 }, 1000, createjs.Ease.getPowInOut(4))
							.call(function() {
								slide_container_3.removeChild(this.el);
							});
				}

				return this.el;
			},

			scene_1: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					App.managerService.slide_3.elems.menu.init();
					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/1/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;
				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			scene_2: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/2/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;

				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			scene_3: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/3/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;

				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			scene_4: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/4/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;

				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			scene_5: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/5/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;

				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			scene_6: {

				el: null,

				init: function() {
					var deferred = $.Deferred(),
						title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
						title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

					this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/6/wears.jpg", title_top, title_down);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					setTimeout(function() {
						deferred.resolve();
					}, SCENE_ANIMATION_TIME);

  					return deferred;

				},

				destroy: function() {
					this.el.destroy(this.el);
				}

			},

			order_btn: {

				el: null,

				init: function() {

					var style = {
						font : "20px PlumbCondensed-Bold",
					    fill : "#ffffff",
					    align : "center"
					},
						title = new PIXI.Text("ЗАКАЗАТЬ\nИМИДЖ-ГАЙД", style);

					title.x = renderer.width / 2 + 50;
					title.y = -120;

					this.el = new PIXI.Graphics();
					this.el.lineStyle(0);
					this.el.beginFill(0xff7d7a, 1);
					this.el.drawCircle(renderer.width / 2 + 100, -100, 60);
					this.el.endFill();
					this.el.buttonMode = true;
					this.el.interactive = true;
					this.el.on("click", function() {
						step = 6;
						active_slide = 7;
						App.managerService.slide_3.scroll(); // for reset timer
						App.WheelController.init();
					});

					this.el.addChild(title);
					slide_container_3.addChild(this.el);

					createjs.Tween.get(this.el)
						.to({ y: renderer.height / 2 }, 1000, createjs.Ease.getPowInOut(4));

				},

				destroy: function() {
					createjs.Tween.get(this.el)
						.to({ y: -1000 }, 1000, createjs.Ease.getPowInOut(4))
						.call(function() {
							this.el = null;
						});
				}

			}

		},

	}

};