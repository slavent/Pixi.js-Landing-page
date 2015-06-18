App.managerService.slide_8 = {

	init: function(active) {
		console.log("Slide 8 init");

		slide_container_8 = new PIXI.Container();
		slide_container_8.alpha = 0;
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_8);

		var deferred = $.Deferred();

		setTimeout(function() {
			deferred.resolve();
		}, SLIDE_ANIMATION_TIME_8);

		return deferred;
	},

	destroy: function() {
		console.log("Slide 8 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		stage.removeChild(slide_container_8);
		slide_container_8 = null;
	},

	update: function() {
		if( slide_container_8 != null )
			if( slide_container_8.alpha < 1 ) slide_container_8.alpha += 0.05;

		for (var key in this.elems) this.elems[key].update();
	},

	elems: {

		slider: {

			slides: null,
			next_btn: null,
			prev_btn: null,

			init: function() {
				var	data = DATA.slide_8.slider,
					data_slides = data.slides,
					slides = new PIXI.Container(),
					slide_ind = 0;

				this.slides = slides;

				var Slide = function(index, url, title) {
					// Photo
					this.texture = PIXI.Texture.fromImage(url);
					this.sprite = new PIXI.Sprite(this.texture);
					this.sprite.anchor.set(data.anchor);
					this.sprite.position.x = renderer.width / 2;
					this.sprite.position.y = renderer.height / 2;
					if( index != data_slides.length - 1 ) this.sprite.alpha = 0;

					// Title
					var style = {
							font 		: data.titles.font,
						    fill 		: data.titles.fill,
						    lineHeight 	: data.titles.lineHeight,
						    padding 	: data.titles.padding,
						    align 		: data.titles.align
						};

					this.title = new PIXI.Text(title, style);
					this.title.anchor.set(data.titles.anchor);
					this.title.x = data.titles.x;
					this.title.y = data.titles.y;

					this.sprite.addChild(this.title);

					return this.sprite;
				};

				for(var i = 0; i < data_slides.length; i++) {
					var slide = new Slide( i, data_slides[i].url, data_slides[i].title );

					slides.addChild(slide);
				}

				slide_container_8.addChild(slides);

				slide_ind = slides.children.length - 1;

				// Prev btn
				var prev_btn_texture = PIXI.Texture.fromImage(data.prevBtn.url);

				this.prev_btn = new PIXI.Sprite(prev_btn_texture);
				this.prev_btn.width = data.prevBtn.width;
				this.prev_btn.height = data.prevBtn.height;
				this.prev_btn.x = data.prevBtn;
				this.prev_btn.y = renderer.height / 2;
				this.prev_btn.buttonMode = true;
				this.prev_btn.interactive = true;
				this.prev_btn.on("click", function() {
					if( slide_ind <= slides.children.length - 1 ) {
						createjs.Tween.get(slides.children[slide_ind])
							.to({ alpha: 0 }, data.animSpeed, createjs.Ease.getPowInOut(4));

						if(slide_ind == slides.children.length - 1) {
							slide_ind = -1;
						}

						createjs.Tween.get(slides.children[++slide_ind])
							.to({ alpha: 1 }, data.animSpeed, createjs.Ease.getPowInOut(4));
					}
				});

				slide_container_8.addChild(this.prev_btn);

				// Next btn
				var next_btn_texture = PIXI.Texture.fromImage(data.nextBtn.url);

				this.next_btn = new PIXI.Sprite(next_btn_texture);
				this.next_btn.width = data.nextBtn.width;
				this.next_btn.height = data.nextBtn.height;
				this.next_btn.x = renderer.width + data.nextBtn.x;
				this.next_btn.y = renderer.height / 2;
				this.next_btn.buttonMode = true;
				this.next_btn.interactive = true;
				this.next_btn.on("click", function() {
					console.log(slide_ind, slides.children.length);
					if( slide_ind >= 0 ) {						
						createjs.Tween.get(slides.children[slide_ind])
							.to({ alpha: 0 }, data.animSpeed, createjs.Ease.getPowInOut(4));

						if(slide_ind == 0) {
							slide_ind = slides.children.length;
						}

						createjs.Tween.get(slides.children[--slide_ind])
							.to({ alpha: 1 }, data.animSpeed, createjs.Ease.getPowInOut(4));
					} else {
						slide_ind = 0;
					}
				});

				slide_container_8.addChild(this.next_btn);
			},

			update: function() {
				var data = DATA.slide_8.slider;

				for(var i = 0; i < this.slides.children.length; i++) {
					this.slides.children[i].position.x = renderer.width / 2;
					this.slides.children[i].position.y = renderer.height / 2;
				}

				this.prev_btn.x = data.prevBtn.x;
				this.prev_btn.y = renderer.height / 2;
				this.next_btn.x = renderer.width + data.nextBtn.x;
				this.next_btn.y = renderer.height / 2;
			},

			destroy: function() {
				this.prev_btn.texture.destroy(true, true);
				this.next_btn.texture.destroy(true, true);

				for(var i = 0; i < this.slides.children.length; i++) {
					this.slides.children[i].texture.destroy(true, true);
				}
			}

		},

		orderBtn: {

			init: function() {

				$order_btn.addClass("active").addClass("white");

			},

			destroy: function() {

				$order_btn.removeClass("active").removeClass("white");

			},

			update: function() {

			}

		},

		footer: {

			init: function() {

				$footer.addClass("active");

			},

			destroy: function() {

				$footer.removeClass("active");

			},

			update: function() {

			}

		}

	}

};