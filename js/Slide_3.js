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
				$(this).removeClass("hover");
				App.managerService.slide_3.SceneController.moveTo(prev_scene, active_scene);							
			});

			$hyde_menu.addClass("complete").find(".hyde-menu-item").hover(
				function() {
					if( $(this).hasClass("active") ) return;
					$(this).addClass("hover");
				},
				function() {
					$(this).removeClass("hover");
				}
			);

			$hover.on("click", function() {
				var prev_scene = active_scene;
				active_scene = ind;
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

		moveTo: function(from, to, direction) {
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

			App.managerService.slide_3.NavController.setActive(top_pos, left_pos, direction);
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
				if(event.deltaY < 0) {
					// scroll top
					if( active_scene < 6 ) App.managerService.slide_3.SceneController.moveTo(active_scene, ++active_scene, "next");
					else App.SlideController.moveTo(active_slide, ++active_slide);
				} else {
					// scroll down
					if( active_scene > 1 ) App.managerService.slide_3.SceneController.moveTo(active_scene, --active_scene, "prev");
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

		setActive: function(top, left, direction) {
			if( mobile_version == true ) {
				$hyde_menu.children().removeClass("active").eq(active_scene - 1).addClass("active");
			} else {
				$hover.animate({ "top" : top, "left" : left }, function() {
					console.log("From: " + (active_scene - 1) + ", To: " + active_scene);

					if( direction == "next" ) {

						$hyde_menu.children().removeClass("on-top");
						$hyde_menu.children().addClass("on-top");
						$hyde_menu.children().eq(active_scene).removeClass("on-top");
						$hyde_menu.children().eq(active_scene - 1).removeClass("on-top");
						$hyde_menu.children().removeClass("active").eq(active_scene - 1).addClass("active");

					} else if( direction == "prev" ) {

						$hyde_menu.children().removeClass("on-top");
						$hyde_menu.children().addClass("on-top");
						$hyde_menu.children().eq(active_scene - 1).removeClass("on-top");
						$hyde_menu.children().eq(active_scene - 2).removeClass("on-top");
						$hyde_menu.children().removeClass("active").eq(active_scene - 1).addClass("active");

					}
				});
			}
		}

	},

	elems: {

		menu: {

			init: function() {
				if( mobile_version == true ) $hyde_menu.addClass("active");
				else $hyde_menu.addClass("active").css({ "height" : $(window).height() - $main_menu.height() });
			},

			destroy: function() {
				$hyde_menu.removeClass("active");
			},

			Scene: function(data) {
				// Titles
				var style = {
					font 	: data.titles.font,
				    fill 	: data.titles.fill,
				    align 	: data.titles.align
				},
				title_top = new PIXI.Text(data.titles.title_top.text, style),
				title_down = new PIXI.Text(data.titles.title_down.text, style);

				title_top.x = data.titles.title_top.x;
				title_top.y = data.titles.title_top.y;
				title_top.anchor.set(data.titles.anchor);

				title_down.x = data.titles.title_down.x;
				title_down.y = data.titles.title_down.y;
				title_down.anchor.set(data.titles.anchor);

				// Title's lines
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

				// Photo
				this.texture = PIXI.Texture.fromImage(data.photo.url);
				this.el = new PIXI.Sprite(this.texture);
				this.el.scale.set(data.photo.scale);
				this.el.anchor.set(data.photo.anchor);
				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height * 2;
				this.el.addChild(title_top);
				this.el.addChild(title_down);

				this.el.init = function(element) {
					createjs.Tween.get(element)
						.to({ y: renderer.height / 2 + data.photo.y }, 1000, createjs.Ease.getPowInOut(4));

					createjs.Tween.get(title_top)
						.wait(500)
						.to({ x: data.titles.title_top.x2 }, 1000, createjs.Ease.getPowInOut(4));

					createjs.Tween.get(title_down)
						.wait(500)
						.to({ x: data.titles.title_down.x2 }, 1000, createjs.Ease.getPowInOut(4));

					App.managerService.slide_3.elems.menu["order_btn"].init();
				}

				this.el.destroy = function(element) {
					createjs.Tween.get(title_top)
						.to({ x: data.titles.title_top.x }, 500, createjs.Ease.getPowInOut(4))
						.call(function() {
							this.destroy(true);
						});

					createjs.Tween.get(title_down)
						.to({ x: data.titles.title_down.x }, 500, createjs.Ease.getPowInOut(4))
						.call(function() {
							this.destroy(true);
						});

					createjs.Tween.get(element)
						.wait(200)
						.to({ y: -renderer.height * 2 }, 1000, createjs.Ease.getPowInOut(4))
						.call(function() {
							this.texture.destroy(true, true);
						});

					App.managerService.slide_3.elems.menu["order_btn"].destroy();
				}

				return this.el;
			},

			scene_1: {

				el: null,

				init: function() {
					App.managerService.slide_3.elems.menu.init();
					this.el = new App.managerService.slide_3.elems.menu.Scene(DATA.slide_3.scene_1);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					var deferred = $.Deferred();

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
					this.el = new App.managerService.slide_3.elems.menu.Scene(DATA.slide_3.scene_2);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					var deferred = $.Deferred();

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
					this.el = new App.managerService.slide_3.elems.menu.Scene(DATA.slide_3.scene_3);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					var deferred = $.Deferred();

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
					this.el = new App.managerService.slide_3.elems.menu.Scene(DATA.slide_3.scene_4);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					var deferred = $.Deferred();

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
					this.el = new App.managerService.slide_3.elems.menu.Scene(DATA.slide_3.scene_5);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					var deferred = $.Deferred();

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
					this.el = new App.managerService.slide_3.elems.menu.Scene(DATA.slide_3.scene_6);
					slide_container_3.addChild(this.el);
					this.el.init(this.el);

					var deferred = $.Deferred();

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

					var data = DATA.slide_3.orderBtn,
						style = {
							font 	: data.font,
						    fill 	: data.fill,
						    align 	: data.align
						},
						title = new PIXI.Text(data.text, style);

					title.x = renderer.width / 2 + data.x;
					title.y = data.y;

					this.el = new PIXI.Graphics();
					this.el.lineStyle(0);
					this.el.beginFill(data.circleFill, 1);
					this.el.drawCircle(renderer.width / 2 + data.circleX, data.circleY, data.circleR);
					this.el.endFill();
					this.el.buttonMode = true;
					this.el.interactive = true;
					this.el.on("click", function() {
						App.SlideController.moveTo(active_slide, 7);
						active_slide = 7;
						App.NavController.setActive();
					});

					this.el.addChild(title);
					slide_container_3.addChild(this.el);

					createjs.Tween.get(this.el)
						.to({ y: renderer.height / 2 + 100 }, data.speed, createjs.Ease.getPowInOut(4));

				},

				destroy: function() {
					var data = DATA.slide_3.orderBtn;

					createjs.Tween.get(this.el)
						.to({ y: renderer.height + 200 }, data.speed, createjs.Ease.getPowInOut(4))
						.call(function() {
							this.children[0].destroy(true);
						});
				}

			}

		},

	}

};