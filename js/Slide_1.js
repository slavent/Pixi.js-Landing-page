App.managerService.slide_1 = {

	update_flag: false,

	init: function() {
		console.log("Slide 1 init");

		$preloader.hide();
		slide_container_1 = new PIXI.Container();
		slide_container_1.alpha = 0;
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_1);

		createjs.Tween.get(slide_container_1)
				.to({ alpha: 1 }, 500, createjs.Ease.getPowInOut(4))
				.call(function() {
					$main_menu.css({ "top" : -70 });
					$menu_icon.show();
				});

			var deferred = $.Deferred(),
				that = this;

			setTimeout(function() {
			deferred.resolve();
			that.update_flag = true;
		}, SLIDE_ANIMATION_TIME_1);

			return deferred;
	},

	destroy: function() {
		console.log("Slide 1 destroy");

		createjs.Tween.get(slide_container_1)
				.to({ alpha: 0 }, 1000, createjs.Ease.getPowInOut(4))
				.call(function() {
					slide_container_1 = null;

					setTimeout(function() {
						if( mobile_version != true ) $main_menu.css({ "top" : 0 });
					}, 1000);

					if( mobile_version == true ) $menu_icon.addClass("red");
					else $menu_icon.hide();

					$menu_popup.hide();
				});

			this.update_flag = false;
	},

	update: function() {
		if( this.update_flag == true ) {
			for (var key in this.elems) this.elems[key].update();
		}
	},

	elems: {

		slider: {

			el: null,
			slides: null,
			reverse: false,

			init: function() {

				var data = [
					{ url: "i/s1/slide_1.jpg", x_pos: -25, color: "0xffffff" },
					{ url: "i/s1/slide_2.jpg", x_pos: 0, color: "0xffffff" },
					{ url: "i/s1/slide_3.jpg", x_pos: 25, color: "0xffffff" }
				],
					data_length = data.length,
					slides = new PIXI.Container(),
					dotes = new PIXI.Container(),
					slide_ind = 0;

				this.slides = slides;
				this.el = dotes;

				var Slide = function(index, url) {
					this.texture = PIXI.Texture.fromImage(url);
					this.sprite = new PIXI.Sprite(this.texture);
					this.sprite.anchor.x = .5;
					this.sprite.anchor.y = .5;
					this.sprite.position.x = renderer.width / 2;
					this.sprite.position.y = renderer.height / 2;
					if( mobile_version == true ) this.sprite.scale.set(1.2); 
					if( index != data.length - 1 ) this.sprite.alpha = 0;

					return this.sprite;
				};

				while(data_length--) {
					var slide = new Slide( data_length, data[data_length].url );

					slides.addChild(slide);
				}

				slide_container_1.addChild(slides);

				// Navigation
				var Dot = function(index, x_pos, color) {
					var dot = new PIXI.Graphics();
					dot.index = index;
					dot.lineStyle(0);
					dot.beginFill(color, 1);
					if( mobile_version == true ) {
						dot.drawCircle(0, 20, 10);
						dot.x_pos = x_pos * 2;
						dot.position.x = renderer.width / 2 + dot.x_pos;
						dot.position.y = renderer.height / 2 + 420;
					} else {
						dot.drawCircle(0, 20, 5);
						dot.x_pos = x_pos;
						dot.position.x = renderer.width / 2 + dot.x_pos;
						dot.position.y = renderer.height / 2 + 200;
					}
					dot.endFill();
					dot.buttonMode = true;
					dot.interactive = true;
					dot.on("click", function() {
						draw(this.index);

						createjs.Tween.get(slides.children[index])
								.to({ alpha: 1 }, 2000, createjs.Ease.getPowInOut(4));

						for(var i = 0; i < slides.children.length; i++) {
							if(i != index) {
								createjs.Tween.get(slides.children[i])
										.to({ alpha: 0}, 2000, createjs.Ease.getPowInOut(4));
								}
						}
					});

					return dot;
				}

				function draw(index){
					for(var i = 0; i < dotes.children.length; i++) {
						dotes.removeChild(dotes.children[i]);
					}

					if(index == undefined) index = 0;

					for(var i = 0; i < data.length; i++) {
						if(i == index) {
							var color = "0xff7d7a";
						} else {
							var color = data[i].color;
						}
						var dot = new Dot( i, data[i].x_pos, color );	
					
						dotes.addChild(dot);
					}
				}

				draw();

				slide_container_1.addChild(dotes);

			},

			update: function() {

				if( this.slides != null) {
					if( this.reverse == false ) {
						if( this.slides.scale.x < 1.1 ) {
							this.slides.scale.x += 0.00008;
						} else {
							this.reverse = true;
						}
					} else {
						if( this.slides.scale.x > 1 ) {
							this.slides.scale.x -= 0.00008;
						} else {
							this.reverse = false;
						}
					}
					
					if( this.reverse == false ) {
						if( this.slides.scale.y < 1.1 ) {
							this.slides.scale.y += 0.00008;
						} else {
							this.reverse = true;
						}
					} else {
						if( this.slides.scale.y > 1 ) {
							this.slides.scale.y -= 0.00008;
						} else {
							this.reverse = false;
						}
					}
				}

				// on resize 
				// slides
				for(var i = 0; i < this.slides.children.length; i++) {
					this.slides.children[i].position.x = renderer.width / 2;
					this.slides.children[i].position.y = renderer.height / 2;
				}

				// dotes
				for(var i = 0; i < this.el.children.length; i++) {
					if( mobile_version == true ) {
						this.el.children[i].position.x = renderer.width / 2 + this.el.children[i].x_pos;
						this.el.children[i].position.y = renderer.height / 2 + 420;
					} else {
						this.el.children[i].position.x = renderer.width / 2 + this.el.children[i].x_pos;
						this.el.children[i].position.y = renderer.height / 2 + 200;
					}
				}

			}

		},

		logo: {

			el: null,

			init: function() {
				var logo_texture = PIXI.Texture.fromImage("i/s1/logo_main.svg");
				this.el = new PIXI.Sprite(logo_texture);
				this.el.anchor.set(0.5);
				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height / 2;
				if( mobile_version == true ) {
					this.el.position.y = renderer.height / 2 - 50;
					this.el.scale.x = 1;
					this.el.scale.y = 1;
				} else {
					this.el.scale.x = .45;
					this.el.scale.y = .45;
				}

				slide_container_1.addChild(this.el);
			},

			update: function() {
				if( mobile_version == true ) {
					this.el.position.x = renderer.width / 2;
					this.el.position.y = renderer.height / 2 - 50;
				} else {
					this.el.position.x = renderer.width / 2;
					this.el.position.y = renderer.height / 2;
				}
			}

		},

		title: {

			el: null,

			init: function() {
				if( mobile_version == true ) {
					var style = {
						font : '65px HelveticaNeueCyr-Light',
					    fill : '#fff',
					    align : "center",
					    padding : 50
					};
					
					this.el = new PIXI.Text("ДОБРО ПОЖАЛОВАТЬ\nВ ЛАБОРАТОРИЮ СТИЛЯ\n«МОДНОГО ПРИГОВОРА»!", style);
					this.el.x = (renderer.width - this.el.width) / 2;
					this.el.y = ((renderer.height - this.el.height) / 2) + 310;
				} else {
					var style = {
						font : '38px HelveticaNeueCyr-Light',
					    fill : '#fff',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};

					this.el = new PIXI.Text("ДОБРО ПОЖАЛОВАТЬ В ЛАБОРАТОРИЮ\nСТИЛЯ «МОДНОГО ПРИГОВОРА»!", style);
					this.el.x = (renderer.width - this.el.width) / 2;
					this.el.y = ((renderer.height - this.el.height) / 2) + 180;
				}

				slide_container_1.addChild(this.el);
			},

			update: function() {
				// on resize							
				if( mobile_version == true ) {
					this.el.x = (renderer.width - this.el.width) / 2;
					this.el.y = ((renderer.height - this.el.height) / 2) + 310;
				} else {
					this.el.x = (renderer.width - this.el.width) / 2;
					this.el.y = ((renderer.height - this.el.height) / 2) + 180;
				}
			}

		},

		spinner: {

			el_1: null,
			el_2: null,
			step: 0,

			init: function() {
				var texture_1 = PIXI.Texture.fromImage("i/s1/spin1.svg"),
					texture_2 = PIXI.Texture.fromImage("i/s1/spin2.svg");

				this.el_1 = new PIXI.Sprite(texture_1);
				this.el_1.anchor.set(0.5);
				this.el_1.buttonMode = true;
				this.el_1.interactive = true;
				this.el_1.on("click", function() {
					App.SlideController.moveTo(active_slide, ++active_slide);
				});

				this.el_2 = new PIXI.Sprite(texture_2);
				this.el_2.anchor.set(0.5);

				if( mobile_version == true ) {
					this.el_1.position.x = renderer.width / 2 - 5;
					this.el_1.position.y = renderer.height / 2 + 600;
				} else {
					this.el_1.position.x = renderer.width / 2 - 5;
					this.el_1.position.y = renderer.height / 2 + 350;
				}

				this.el_1.addChild(this.el_2);
				slide_container_1.addChild(this.el_1); 
			},

			update: function() {
				this.step += 0.06;

				if( mobile_version == true ) {
					this.el_1.position.x = renderer.width / 2 - 5;
					this.el_1.position.y = renderer.height / 2 + 600;
					this.el_2.position.y += Math.sin(this.step);
				} else {
					this.el_1.position.x = renderer.width / 2 - 5;
					this.el_1.position.y = renderer.height / 2 + 350;
					this.el_2.position.y += Math.sin(this.step);
				}
			}

		}

	}

};