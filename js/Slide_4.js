App.managerService.slide_4 = {

	update_flag: false,

	init: function() {
		console.log("Slide 4 init");

		slide_container_4 = new PIXI.Container();
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_4);

		return App.promise();
	},

	destroy: function() {
		console.log("Slide 4 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		slide_container_4 = null;
		this.update_flag = false;

		return App.promise();
	},

	update: function() {
		if( this.update_flag == true )
			for (var key in this.elems) this.elems[key].update();
	},

	elems: {

		slider: {

			el 				: null,
			prev_btn 		: null,
			next_btn 		: null,
			slides 			: null,
			slides_info 	: null,

			init: function() {

				var data = DATA.slide_4.slider,
					data_slides = data.slides,
					slide_ind = 0,
					slides = new PIXI.Container(),
					slides_info = new PIXI.Container(),
					params;

				this.slides = slides;
				this.slides_info = slides_info;

				if( renderer.height > 1200 ) {
					params = data.params.big;
				} else if( renderer.height < 900 ) {
					params = data.params.small;
				} else {
					params = data.params.default;
				}

				var Slide_info = function(index, title, description) {

					// Title
					var title_style = {
						font : data.titles.font,
					    fill : data.titles.fill
					};

					this.title = new PIXI.Text(title, title_style);
					this.title.anchor.x = data.titles.anchor;
					this.title.position.y = renderer.height + data.titles.y;
					switch(index) {
						case 0:
							this.title.position.x = renderer.width / 2 - params.margin;
							break;
						case 1:
							this.title.position.x = renderer.width / 2;
							break;
						case 2:
							this.title.position.x = renderer.width / 2 + params.margin;
							break;
						default: 
							this.title.position.x = renderer.width * 2;
							break;
					}

					// Line
					this.line = new PIXI.Graphics();
					this.line.beginFill(0xffffff);
					this.line.lineStyle(1, data.lines.fill, 1);
					this.line.moveTo(0,0);
					this.line.lineTo(data.lines.width ,0);
					this.line.endFill();
					this.line.position.x = data.lines.x - data.lines.width / 2;
					this.line.position.y = data.lines.y;

					// Btn
					var btn_title_style = {
						font : data.btns.font,
					    fill : data.btns.color
					};

					this.btn_title = new PIXI.Text(data.btns.text, btn_title_style);
					this.btn_title.position.x = data.btns.title_x;
					this.btn_title.position.y = data.btns.title_y;
					this.btn_title.anchor.set(data.btns.anchor);

					this.btn = new PIXI.Graphics();
					this.btn.lineStyle(2, data.btns.fill, 1);
					this.btn.beginFill(0xFF00BB, 0);
					this.btn.drawRoundedRect(data.btns.x, data.btns.y, data.btns.width, data.btns.height, data.btns.r);
					this.btn.endFill();
					this.btn.addChild(this.btn_title);
					this.btn.buttonMode = true;
					this.btn.interactive = true;
					this.btn.on("click", function() {
						App.SlideController.moveTo(active_slide, 7);
						active_slide = 7;
						App.NavController.setActive();
					});

					// Description
					var description_style = {
						font : data.description.font,
					    fill : data.description.fill,
					    align: data.description.align
					};

					this.description = new PIXI.Text(description, description_style);
					this.description.position.y = data.description.y;
					this.description.anchor.x = data.description.anchor;

					this.title.addChild(this.line);
					this.title.addChild(this.btn);
					this.title.addChild(this.description);

					return this.title;

				};

				var Slide = function(index, url_photo, url_video) {

					// Video
					this.video_texture = PIXI.Texture.fromVideo(url_video);
					this.video_sprite = new PIXI.Sprite(this.video_texture);
					this.video_sprite.anchor.x = .5;
					this.video_sprite.alpha = 0;
					this.video_sprite.texture.baseTexture.source.loop = true;
					this.video_sprite.buttonMode = true;
					this.video_sprite.interactive = true;

					var source = this.video_sprite.texture.baseTexture.source;
					source.pause();

					this.video_sprite.on("mouseover", function() {
						source.play();

						createjs.Tween.get(this)
							.to({ alpha: 1}, 1000, createjs.Ease.getPowInOut(4));
					});
					this.video_sprite.on("mouseout", function() {
						source.pause();

						createjs.Tween.get(this)
							.to({ alpha: 0}, 1000, createjs.Ease.getPowInOut(4));
					});

					// Photo
					this.texture = PIXI.Texture.fromImage(url_photo);
					this.sprite = new PIXI.Sprite(this.texture);
					this.sprite.texture.baseTexture.source.loop = true;
					this.sprite.scale.x = params.scale;
					this.sprite.scale.y = params.scale;
					this.sprite.anchor.x = 0.5;

					switch(index) {
						case 0:
							this.sprite.position.x = renderer.width / 2 - params.margin;
							break;
						case 1:
							this.sprite.position.x = renderer.width / 2;
							break;
						case 2:
							this.sprite.position.x = renderer.width / 2 + params.margin;
							break;
						default: 
							this.sprite.position.x = renderer.width * 2;
							break;
					}

					this.sprite.addChild(this.video_sprite);

					return this.sprite;

				}

				for(var i = 0; i < data_slides.length; i++) {
					var slide = new Slide( i, data_slides[i].url_photo, data_slides[i].url_video );
					var slide_info = new Slide_info( i, data_slides[i].title, data_slides[i].description );
					
					slides.addChild(slide);
					slides_info.addChild(slide_info);
				}

				slide_container_4.addChild(slides);
				slide_container_4.addChild(slides_info);

				createjs.Tween.get(slides)
						.to({ y: renderer.height - (250 + 700 * params.scale) }, data.speed, createjs.Ease.getPowInOut(4));

				// Prev btn
				var prev_btn_texture = PIXI.Texture.fromImage(data.prevBtn.url),
					prev_btn = new PIXI.Sprite(prev_btn_texture);

				this.prev_btn = prev_btn;

				prev_btn.anchor.set(data.prevBtn.anchor);
				prev_btn.position.x = -200;
				prev_btn.position.y = renderer.height / 2;
				prev_btn.buttonMode = true;
				prev_btn.interactive = true;
				prev_btn.on("click", function() {
					if(slide_ind != 0) {
						createjs.Tween.get(slides.children[slide_ind - 1])
							.to({ x: renderer.width / 2 - 350 }, data.animSpeed, createjs.Ease.getPowInOut(4));

						createjs.Tween.get(slides_info.children[slide_ind - 1])
							.to({ x: renderer.width / 2 - 350 }, data.animSpeed, createjs.Ease.getPowInOut(4));

						for(var i = slide_ind; i < slide_ind + 2; i++) {
							createjs.Tween.get(slides.children[i])
								.to({ x: slides.children[i].position.x + 350 }, data.animSpeed, createjs.Ease.getPowInOut(4));

							createjs.Tween.get(slides_info.children[i])
								.to({ x: slides_info.children[i].position.x + 350 }, data.animSpeed, createjs.Ease.getPowInOut(4));
						}

						createjs.Tween.get(slides.children[slide_ind + 2])
							.to({ x: renderer.width * 2}, data.animSpeed, createjs.Ease.getPowInOut(4));

						createjs.Tween.get(slides_info.children[slide_ind + 2])
							.to({ x: renderer.width * 2}, data.animSpeed, createjs.Ease.getPowInOut(4));

						slide_ind--;
					}
				});

				slide_container_4.addChild(prev_btn);

				createjs.Tween.get(prev_btn)
					.wait(data.prevBtn.init_wait)
					.to({ x: data.prevBtn.x }, data.prevBtn.speed, createjs.Ease.getPowInOut(4));

				// Next btn
				var next_btn_texture = PIXI.Texture.fromImage(data.nextBtn.url),
					next_btn = new PIXI.Sprite(next_btn_texture);

				this.next_btn = next_btn;

				next_btn.anchor.set(data.nextBtn.anchor);
				next_btn.position.x = renderer.width + 100;
				next_btn.position.y = renderer.height / 2;
				next_btn.buttonMode = true;
				next_btn.interactive = true;
				next_btn.on("click", function() {
					if(slide_ind != slides.children.length - 3) {
						createjs.Tween.get(slides.children[slide_ind])
							.to({ x: -renderer.width * 2 }, data.animSpeed, createjs.Ease.getPowInOut(4));

						createjs.Tween.get(slides_info.children[slide_ind])
							.to({ x: -renderer.width * 2 }, data.animSpeed, createjs.Ease.getPowInOut(4));

						for(var i = slide_ind + 1; i < slide_ind + 3; i++) {
							createjs.Tween.get(slides.children[i])
								.to({ x: slides.children[i].position.x - 350 }, data.animSpeed, createjs.Ease.getPowInOut(4));

							createjs.Tween.get(slides_info.children[i])
								.to({ x: slides_info.children[i].position.x - 350 }, data.animSpeed, createjs.Ease.getPowInOut(4));
						}

						createjs.Tween.get(slides.children[slide_ind + 3])
							.to({ x: renderer.width / 2 + 350}, data.animSpeed, createjs.Ease.getPowInOut(4));

						createjs.Tween.get(slides_info.children[slide_ind + 3])
							.to({ x: renderer.width / 2 + 350}, data.animSpeed, createjs.Ease.getPowInOut(4));

						slide_ind++;
					}
				});

				slide_container_4.addChild(next_btn);

				createjs.Tween.get(next_btn)
					.wait(data.nextBtn.init_wait)
					.to({ x: renderer.width - 100 }, data.nextBtn.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				var data = DATA.slide_4.slider;

				createjs.Tween.get(this.slides)
					.to({ y: 2000 }, data.speed, createjs.Ease.getPowInOut(4))
					.call(function() {
						for(var i = 0; i < this.children.length; i++) {
							for(var j = 0; j < this.children[i].children.length; j++) {
								if( j == 4 ) this.children[i].children[j].texture.destroy(); // video
							}

							this.children[i].texture.destroy(true, true);
						}
					});

				createjs.Tween.get(this.prev_btn)
					.to({ x: -200 }, data.prevBtn.speed, createjs.Ease.getPowInOut(4))
					.call(function() {
						this.texture.destroy(true, true);
					});

				createjs.Tween.get(this.next_btn)
					.to({ x: renderer.width + 200 }, data.nextBtn.speed, createjs.Ease.getPowInOut(4))
					.call(function() {
						this.texture.destroy(true, true);
					});
			},

			update: function() {
				var data = DATA.slide_4.slider;

				this.slides.position.y = renderer.height - 250;
				this.prev_btn.position.x = 100;
				this.prev_btn.position.y = renderer.height / 2;
				this.next_btn.position.x = renderer.width - 100;
				this.next_btn.position.y = renderer.height / 2;
			}

		},

		bg: {

			el: null,

			init: function() {
				var data = DATA.slide_4.slider.bg;

				this.el = new PIXI.Graphics();
				this.el.lineStyle(2, 0x0000FF, 0);
				this.el.beginFill(data.fill, 1);
				this.el.drawRect(0, 0, renderer.width, data.height);
				this.el.y = renderer.height * 2;

				slide_container_4.addChildAt(this.el, 1);

				createjs.Tween.get(this.el)
					.to({ y: renderer.height - 250 }, data.speed, createjs.Ease.getPowInOut(4));
			},

			destroy: function() {
				var data = DATA.slide_4.slider.bg;

				createjs.Tween.get(this.el)
					.to({ y: renderer.height * 2 }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {

			}

		},

		title: {

			el: null,

			init: function() {

				var data = DATA.slide_4.title,
					style = {
						font : data.font,
					    fill : data.fill
					};

				this.el = new PIXI.Text(data.text, style);
				this.el.anchor.set(data.anchor);
				this.el.x = renderer.width / 2;
				this.el.y = -100;

				slide_container_4.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: data.y }, data.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				var data = DATA.slide_4.title;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -100 }, data.speed, createjs.Ease.getPowInOut(4))
					.call(function() {
						this.destroy(true);
					});
			},

			update: function() {
				var data = DATA.slide_4.title;

				this.el.x = renderer.width / 2;
				this.el.y = data.y;
			}

		},

		info: {

			el: null,

			init: function() {

				var data = DATA.slide_4.info,
					style = {
						font 	: data.font,
					    fill 	: data. fill,
					    align	: data.align
					};

				this.el = new PIXI.Text(data.text, style);
				this.el.anchor.set(data.anchor);
				this.el.x = renderer.width / 2;
				this.el.y = -100;

				slide_container_4.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
						.to({ y: data.y }, data.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				var data = DATA.slide_4.info;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -100 }, data.speed, createjs.Ease.getPowInOut(4))
					.call(function() {
						this.destroy(true);
					});
			},

			update: function() {
				var data = DATA.slide_4.info;

				this.el.x = renderer.width / 2;
				this.el.y = data.y;
			}

		},

		generator: {

			el: null,

			init: function() {
				var data = DATA.slide_4.generator,
					style = {
						font : data.font,
					    fill : data.color
					};

				this.el = new PIXI.Text(data.text, style);
				this.el.position.x = renderer.width * 2;
				this.el.position.y = data.title_y;
				this.el.anchor.set(data.anchor);

				var btn = new PIXI.Graphics();
				btn.lineStyle(2, data.fill, 1);
				btn.beginFill(0xFF00BB, 0);
				btn.drawRoundedRect(data.x, data.y, data.width, data.height, data.r);
				btn.endFill();
				btn.buttonMode = true;
				btn.interactive = true;
				btn.on("click", function() {
					App.SlideController.moveTo(active_slide, 7);
					active_slide = 7;
					App.NavController.setActive();
				});

				this.el.addChild(btn);
				slide_container_4.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ x: renderer.width - data.title_x }, data.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				var data = DATA.slide_4.generator;

				createjs.Tween.get(this.el)
					.to({ x: renderer.width * 2 }, data.speed, createjs.Ease.getPowInOut(4));

			},

			update: function() {
				var data = DATA.slide_4.generator;

				this.el.position.x = renderer.width / 2 + data.title_x;
				this.el.position.y = renderer.height / 2 + data.title_y;
			}

		}

	}

};