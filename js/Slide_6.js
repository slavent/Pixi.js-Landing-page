App.managerService.slide_6 = {

	init: function(active) {

		console.log("Slide 6 init");

		slide_container_6 = new PIXI.Container();

		$step_pult.parent().addClass("active");
		this.NavController.setActive();
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

		$step_pult.parent().removeClass("active");
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
			var title = {
					text: "ЗАПОЛНИТЕ\nАНКЕТУ\nНА САЙТЕ",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "Стилисты “Модного приговора” получат Ваши данные,\nопределят Ваш цветотип, тип фигуры, овал лица\nи составят подробную инструкцию преображения!",
					x: renderer.width,
					y: renderer.height / 2 + 200,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 200
				},
				btn_title = {
					text: "ЗАПОЛНИТЬ",
					x: renderer.width / 2 - 280,
					y: -renderer.height,
					x_to: renderer.width / 2 - 280,
					y_to: renderer.height / 2 - 10
				},
				pic = {
					url: "i/s6/notepade.png",
					x: renderer.width / 2 + 300,
					y: -renderer.height,
					x_to: renderer.width / 2 + 300,
					y_to: renderer.height / 2
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
			var title = {
					text: "ПОЛУЧИТЕ\nИМИДЖ-ГАЙД",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "Имидж-гайд придет на Ваш e-mail в формате PDF.\nВы можете его распечатать или читать с экрана\nмобильного устройства.\nВаш личный стилист в кармане!",
					x: renderer.width,
					y: renderer.height / 2 + 130,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 130
				},
				btn_title = {
					text: "ПОЛУЧИТЬ",
					x: renderer.width / 2 + 340,
					y: -renderer.height,
					x_to: renderer.width / 2 + 340,
					y_to: renderer.height / 2 - 75
				},
				pic = {
					url: "i/s6/book.png",
					x: renderer.width / 2 - 300,
					y: -renderer.height,
					x_to: renderer.width / 2 - 300,
					y_to: renderer.height / 2 - 50
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
			var title = {
					text: "УЗНАВАЙТЕ",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "В имидж-гайде Вы найдете описание своего\nцветотипа, типа фигуры и формы лица. Взгляните\nна себя новым взглядом и откройте секреты\nсобственной красоты!",
					x: renderer.width,
					y: renderer.height / 2 + 120,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 120
				},
				btn_title = {
					text: "ЗАКАЗАТЬ",
					x: renderer.width / 2 - 320,
					y: -renderer.height,
					x_to: renderer.width / 2 - 320,
					y_to: renderer.height / 2 + 50
				},
				pic = {
					url: "i/s6/lamp.png",
					x: renderer.width / 2 + 300,
					y: -renderer.height,
					x_to: renderer.width / 2 + 300,
					y_to: renderer.height / 2 - 80
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
			var title = {
					text: "МЕНЯЙТЕСЬ",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "Отправляйтесь в магазин или салон красоты -\nпрактические рекомендации помогут Вам\nс уверенностью профи создавать модные\nи яркие образы.",
					x: renderer.width,
					y: renderer.height / 2 + 120,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 120
				},
				btn_title = {
					text: "ЗАКАЗАТЬ",
					x: renderer.width / 2 + 320,
					y: -renderer.height,
					x_to: renderer.width / 2 + 320,
					y_to: renderer.height / 2 + 50
				},
				pic = {
					url: "i/s6/fen.png",
					x: renderer.width / 2 - 300,
					y: -renderer.height,
					x_to: renderer.width / 2 - 300,
					y_to: renderer.height / 2 - 80
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
			var title = {
					text: "ПРОБУЙТЕ",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "Благодаря имидж-гайду Вы научитесь\nсамостоятельно сочетать аксессуары\nи элементы одежды.",
					x: renderer.width,
					y: renderer.height / 2 + 120,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 120
				},
				btn_title = {
					text: "ЗАКАЗАТЬ",
					x: renderer.width / 2 - 280,
					y: -renderer.height,
					x_to: renderer.width / 2 - 280,
					y_to: renderer.height / 2 - 120
				},
				pic = {
					url: "i/s6/dress.png",
					x: renderer.width / 2 + 300,
					y: -renderer.height,
					x_to: renderer.width / 2 + 300,
					y_to: renderer.height / 2 - 80
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
			var title = {
					text: "ЧУВСТВУЙТЕ",
					x: renderer.width / 2,
					y: -renderer.height,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 - 50
				}, 
				info = {
					text: "Новый имидж – шаг в новую жизнь.\nЧувствуйте перемены, наслаждайтесь собой!",
					x: renderer.width,
					y: renderer.height / 2 + 120,
					x_to: renderer.width / 2,
					y_to: renderer.height / 2 + 120
				},
				btn_title = {
					text: "ЗАКАЗАТЬ",
					x: renderer.width / 2 + 250,
					y: -renderer.height,
					x_to: renderer.width / 2 + 250,
					y_to: renderer.height / 2 - 130
				},
				pic = {
					url: "i/s6/hair.png",
					x: renderer.width / 2 - 250,
					y: -renderer.height,
					x_to: renderer.width / 2 - 250,
					y_to: renderer.height / 2 - 80
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

		vars: {
			spin1_texture: 	null,
			spin1: 			null,
			spin2_texture: 	null,
			spin2: 			null,
			pos: 			0,
			alpha: 			0,
			init: false
		},

		init: function() {
			var vars = this.vars;

			vars.init = true;
			vars.spin1_texture = PIXI.Texture.fromImage("i/s6/spin1.svg");
			vars.spin1 = new PIXI.Sprite(vars.spin1_texture);
			vars.spin2_texture = PIXI.Texture.fromImage("i/s6/spin2.svg");
			vars.spin2 = new PIXI.Sprite(vars.spin2_texture);

			vars.spin1.anchor.set(0.5);
			vars.spin1.position.x = renderer.width / 2 - 5;
			vars.spin1.position.y = renderer.height / 2 + 350;
			vars.spin1.alpha = 0;
			vars.spin1.buttonMode = true;
			vars.spin1.interactive = true;
			vars.spin1.on("click", function() {
				App.SlideController.moveTo(active_slide, ++active_slide);
			});

			vars.spin2.anchor.set(0.5);
			vars.spin2.position.x = renderer.width / 2 - 5;
			vars.spin2.position.y = renderer.height / 2 + 345;
			vars.spin2.alpha = 0;

			slide_container_6.addChild(vars.spin1);
			slide_container_6.addChild(vars.spin2); 
		},

		update: function() {
			var vars = this.vars;

			if(vars.init == true) {
				vars.pos += 0.06;
				vars.spin2.y += Math.sin(vars.pos);
			}

			if( vars.spin1 != null ) {
				if( vars.spin1.alpha < 1 ) vars.spin1.alpha += 0.01;
			}
			
			if( vars.spin2 != null ) {
				if( vars.spin2.alpha < 1 ) vars.spin2.alpha += 0.01;
			}

		},

		destroy: function() {
			var vars = this.vars;

			slide_container_6.removeChild(vars.spin1);
			slide_container_6.removeChild(vars.spin2);
		}

	}

};