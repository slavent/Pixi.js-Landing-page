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
		if( this.update_flag == true )
			for (var key in this.elems) this.elems[key].update();
	},

	elems: {

		slider: {

			el: null,
			slides: null,
			reverse: false,

			init: function() {

				var data = DATA.slide_1.slider.slides,
					data_length = data.length,

					dot_data = DATA.slide_1.slider.dotes,
					dot_data_length = dot_data.length,

					slides = new PIXI.Container(),
					dotes = new PIXI.Container(),

					slide_ind = 0;

				this.slides = slides;
				this.el = dotes;

				var Slide = function(index, url, anchor, scale) {
					this.texture = PIXI.Texture.fromImage(url);
					this.sprite = new PIXI.Sprite(this.texture);
					this.sprite.anchor.set(anchor);
					this.sprite.scale.set(scale);
					this.sprite.position.x = renderer.width / 2;
					this.sprite.position.y = renderer.height / 2; 
					return this.sprite;
				};

				while(data_length--) {
					var slide = new Slide( data_length, data[data_length].url, data[data_length].anchor, data[data_length].scale );
					slides.addChild(slide);
				}

				slide_container_1.addChild(slides);

				// Navigation
				var Dot = function(index, x_pos, y_pos, r, fill) {
					var dot = new PIXI.Graphics();
					dot.index = index;
					dot.lineStyle(0);
					dot.beginFill(fill, 1);
					dot.drawCircle(0, 20, r);
					dot.x_pos = x_pos;
					dot.y_pos = y_pos;
					dot.position.x = renderer.width / 2 + x_pos;
					dot.position.y = renderer.height / 2 + y_pos;
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

					for(var i = 0; i < dot_data_length; i++) {
						var color;

						if(i == index) color = dot_data[i].fill_active;
						else color = dot_data[i].fill;

						var dot = new Dot( i, dot_data[i].x, dot_data[i].y, dot_data[i].r, color );	
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
					this.el.children[i].position.x = renderer.width / 2 + this.el.children[i].x_pos;
					this.el.children[i].position.y = renderer.height / 2 + this.el.children[i].y_pos;
				}

			}

		},

		logo: {

			el: null,

			init: function() {
				var data = DATA.slide_1.logo,
					texture = PIXI.Texture.fromImage(data.url);
				this.el = new PIXI.Sprite(texture);
				this.el.anchor.set(data.anchor);
				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height / 2 + data.y;
				this.el.scale.set(data.scale);

				slide_container_1.addChild(this.el);
			},

			update: function() {
				var data = DATA.slide_1.logo;

				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height / 2 + data.y;
			}

		},

		title: {

			el: null,

			init: function() {
				var data = DATA.slide_1.title,
					style = {
						font 		: data.font,
					    fill 		: data.fill,
					    align 		: data.align,
					    lineHeight 	: data.lineHeight,
					    padding 	: data.padding
					};

				this.el = new PIXI.Text(data.text, style);
				this.el.x = (renderer.width - this.el.width) / 2;
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;

				slide_container_1.addChild(this.el);
			},

			update: function() {	
				var data = DATA.slide_1.title;

				this.el.x = (renderer.width - this.el.width) / 2;
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;
			}

		},

		spinner: {

			el_1: null,
			el_2: null,
			step: 0,

			init: function() {
				var data = DATA.slide_1.spinner,
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
				slide_container_1.addChild(this.el_1); 
			},

			update: function() {
				var data = DATA.slide_1.spinner;

				this.step += 0.06;
				this.el_1.position.x = renderer.width / 2 + data.x;
				this.el_1.position.y = renderer.height / 2 + data.y;
				this.el_2.position.y += Math.sin(this.step);
			}

		}

	}

};