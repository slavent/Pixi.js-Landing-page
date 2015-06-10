App.managerService.slide_4 = {

	update_flag: false,

	init: function() {
		console.log("Slide 4 init");

		slide_container_4 = new PIXI.Container();
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_4);

		var deferred = $.Deferred(),
			that = this;

		setTimeout(function() {
			deferred.resolve();
			that.update_flag = true;
		}, SLIDE_ANIMATION_TIME_4);

		return deferred;
	},

	destroy: function() {
		console.log("Slide 4 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		slide_container_4 = null;
		this.update_flag = false;
	},

	update: function() {
		if( this.update_flag == true ) {
			for (var key in this.elems) this.elems[key].update();
		}
	},

	elems: {

		title: {

			anim_params: {
				speed: 500,
				init_wait: 1700,
				destroy_wait: 200
			},

			el: null,

			init: function() {

				var style = {
						font : "30px HelveticaNeueCyr-Light",
					    fill : "#ff7d7a"
					};

				this.el = new PIXI.Text("Выберите стиль", style);
				this.el.anchor.x = .5;
				this.el.anchor.y = .5;
				this.el.x = renderer.width / 2;
				this.el.y = -100;

				slide_container_4.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: 120 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {

				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -100 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			update: function() {
				this.el.x = renderer.width / 2;
				this.el.y = 120;
			}

		},

		info: {

			anim_params: {
				speed: 500,
				init_wait: 1500,
				destroy_wait: 400
			},

			el: null,

			init: function() {

				var style = {
						font : "16px HelveticaNeueCyr-Light",
					    fill : "#3c3c3c",
					    align: "center"
					};

				this.el = new PIXI.Text("Хотите стать более женственной, спортивной, строгой или утонченной? Специально\nдля вас, учитывая особенности вашей внешности, профессиональные стилисты\nсоставят пять комплектов одежды в выбранном стиле.", style);
				this.el.anchor.x = .5;
				this.el.anchor.y = .5;
				this.el.x = renderer.width / 2;
				this.el.y = -100;

				slide_container_4.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: 180 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {

				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -100 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			update: function() {
				this.el.x = renderer.width / 2;
				this.el.y = 180;
			}

		},

		slider: {

			el: 		null,
			prev_btn: 	null,
			next_btn: 	null,
			slides: null,

			init: function() {

				var data = [
					{ url: "i/s4/slide_1.png", title: "Casual", description: "Одежда для настоящих\nмечтательниц" },
					{ url: "i/s4/slide_2.png", title: "Романтический", description: "Одежда для настоящих\nмечтательниц" },
					{ url: "i/s4/slide_3.png", title: "Классика", description: "Одежда для настоящих\nмечтательниц" },
					{ url: "i/s4/slide_1.png", title: "Casual", description: "Одежда для настоящих\nмечтательниц" },
					{ url: "i/s4/slide_2.png", title: "Романтический", description: "Одежда для настоящих\nметчательниц" },
					{ url: "i/s4/slide_3.png", title: "Классика", description: "Одежда для настоящих\nмечтательниц" }
				],
					slides = new PIXI.Container(),
					slide_ind = 0,
					slide_scale = 1;

				this.slides = slides;
				slides.alpha = 0;
				slides = new PIXI.Graphics();
				slides.lineStyle(2, 0x0000FF, 0);
				slides.beginFill(0xff7d7a, 1);
				slides.drawRect(0, 0, renderer.width, 250);
				slides.y = renderer.height * 2;

				this.el = slides;

				var Slide = function(index, url, title, description) {

					// Title
					var title_style = {
						font : "30px HelveticaNeueCyr-Light",
					    fill : "#ffffff"
					};

					this.title = new PIXI.Text(title, title_style);
					this.title.position.y = 430;
					this.title.anchor.x = .5;

					// Line
					this.line = new PIXI.Graphics();
					this.line.beginFill(0xffffff);
					this.line.lineStyle(1, 0xffffff, 1);
					this.line.moveTo(0,0);
					this.line.lineTo(100,0);
					this.line.endFill();
					this.line.position.x = -50;
					this.line.position.y = 475;

					// Description
					var description_style = {
						font : "16px HelveticaNeueCyr-Light",
					    fill : "#ffffff",
					    align: "center"
					};

					this.description = new PIXI.Text(description, description_style);
					this.description.position.y = 485;
					this.description.anchor.x = .5;

					// Photo
					this.texture = PIXI.Texture.fromImage(url);
					this.sprite = new PIXI.Sprite(this.texture);
					this.sprite.anchor.x = .5;
					this.sprite.position.y = renderer.height / 2;
					this.sprite.scale.x = slide_scale;
					this.sprite.scale.y = slide_scale;
					switch(index) {
						case 0:
							this.sprite.position.x = renderer.width / 2 - 350;
							break;
						case 1:
							this.sprite.position.x = renderer.width / 2;
							break;
						case 2:
							this.sprite.position.x = renderer.width / 2 + 350;
							break;
						default: 
							this.sprite.position.x = renderer.width * 2;
							break;
					}

					if( renderer.height < 900 ) {
						slide_scale = 0.7;
						this.sprite.scale.x = slide_scale;
						this.sprite.scale.y = slide_scale;
					}

					this.sprite.addChild(this.title);
					this.sprite.addChild(this.line);
					this.sprite.addChild(this.description);

					return this.sprite;

				}

				for(var i = 0; i < data.length; i++) {
					var slide = new Slide( i, data[i].url, data[i].title, data[i].description );
					
					slides.addChild(slide);
				}

				slide_container_4.addChild(slides);

				createjs.Tween.get(slides)
					.to({ alpha: 1, y: renderer.height - 250 }, 1000, createjs.Ease.getPowInOut(4))
					.call(function() {
						for(var i = 0; i < slides.children.length; i++) {
							createjs.Tween.get(slides.children[i])
								.to({ y: -400 * slide_scale }, 1000, createjs.Ease.getPowInOut(4));
						}
					});

				// Prev btn
				var prev_btn_texture = PIXI.Texture.fromImage("i/s4/prev.png"),
					prev_btn = new PIXI.Sprite(prev_btn_texture);

				this.prev_btn = prev_btn;

				prev_btn.anchor.x = .5;
				prev_btn.anchor.y = .5;
				prev_btn.position.x = -200;
				prev_btn.position.y = renderer.height / 2;
				prev_btn.buttonMode = true;
				prev_btn.interactive = true;
				prev_btn.on("click", function() {
					if(slide_ind != 0) {
						createjs.Tween.get(slides.children[slide_ind - 1])
								.to({ x: renderer.width / 2 - 350 }, 800, createjs.Ease.getPowInOut(4));

						for(var i = slide_ind; i < slide_ind + 2; i++) {
							createjs.Tween.get(slides.children[i])
								.to({ x: slides.children[i].position.x + 350 }, 800, createjs.Ease.getPowInOut(4));
						}

						createjs.Tween.get(slides.children[slide_ind + 2])
								.to({ x: renderer.width * 2}, 800, createjs.Ease.getPowInOut(4));

						slide_ind--;
					}
				});

				slide_container_4.addChild(prev_btn);

				createjs.Tween.get(prev_btn)
					.wait(1200)
					.to({ x: 100 }, 1000, createjs.Ease.getPowInOut(4));

				// Next btn
				var next_btn_texture = PIXI.Texture.fromImage("i/s4/next.png"),
					next_btn = new PIXI.Sprite(next_btn_texture);

				this.next_btn = next_btn;

				next_btn.anchor.x = .5;
				next_btn.anchor.y = .5;
				next_btn.position.x = renderer.width + 100;
				next_btn.position.y = renderer.height / 2;
				next_btn.buttonMode = true;
				next_btn.interactive = true;
				next_btn.on("click", function() {
					if(slide_ind != slides.children.length - 3) {
						createjs.Tween.get(slides.children[slide_ind])
								.to({ x: -renderer.width * 2 }, 800, createjs.Ease.getPowInOut(4));

						for(var i = slide_ind + 1; i < slide_ind + 3; i++) {
							createjs.Tween.get(slides.children[i])
								.to({ x: slides.children[i].position.x - 350 }, 800, createjs.Ease.getPowInOut(4));
						}

						createjs.Tween.get(slides.children[slide_ind + 3])
								.to({ x: renderer.width / 2 + 350}, 800, createjs.Ease.getPowInOut(4));

						slide_ind++;
					}
				});

				slide_container_4.addChild(next_btn);

				createjs.Tween.get(next_btn)
					.wait(1200)
					.to({ x: renderer.width - 100 }, 1000, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.to({ y: 2000 }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(this.prev_btn)
					.to({ x: -200 }, 1000, createjs.Ease.getPowInOut(4));

				createjs.Tween.get(this.next_btn)
					.to({ x: renderer.width + 200 }, 1000, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.slides.position.y = renderer.height - 250;
				this.prev_btn.position.x = 100;
				this.prev_btn.position.y = renderer.height / 2;
				this.next_btn.position.x = renderer.width - 100;
				this.next_btn.position.y = renderer.height / 2;
			}

		}

	}

};