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
		if( slide_container_8 != null ) {
			if( slide_container_8.alpha < 1 ) slide_container_8.alpha += 0.05;
		}
		for (var key in this.elems) this.elems[key].update();
	},

	elems: {

		slider: {

			slides: null,
			next_btn: null,
			prev_btn: null,

			init: function() {

				var data = [
					{ url: "i/s8/slide_4.jpg", title: "Восхищенные\nвзгляды!" },
					{ url: "i/s8/slide_3.jpg", title: "Красивый\nдизайн!" },
					{ url: "i/s8/slide_2.jpg", title: "Игоровой\nпроцесс!" },
					{ url: "i/s8/slide_1.jpg", title: "Быстрый\nотклик!" }
				],
					slides = new PIXI.Container(),
					slide_ind = 0;

				this.slides = slides;

				var Slide = function(index, url, title) {
					// Photo
					this.texture = PIXI.Texture.fromImage(url);
					this.sprite = new PIXI.Sprite(this.texture);
					this.sprite.anchor.x = .5;
					this.sprite.anchor.y = .5;
					this.sprite.position.x = renderer.width / 2;
					this.sprite.position.y = renderer.height / 2;
					if( index != data.length - 1 ) this.sprite.alpha = 0;

					// Title
					var style = {
							font : '65px FiraSansRegular',
						    fill : '#fff',
						    lineHeight: 65,
						    padding: 10,
						    align : "center"
						};

					this.title = new PIXI.Text(title, style);
					this.title.anchor.x = .5;
					this.title.anchor.y = .5;
					this.title.x = 0;
					this.title.y = 0;

					this.sprite.addChild(this.title);

					return this.sprite;
				};

				for(var i = 0; i < data.length; i++) {
					var slide = new Slide( i, data[i].url, data[i].title );

					slides.addChild(slide);
				}

				slide_container_8.addChild(slides);

				slide_ind = slides.children.length - 1;

				// Prev btn
				var prev_btn_texture = PIXI.Texture.fromImage("i/s8/prev.png");

				this.prev_btn = new PIXI.Sprite(prev_btn_texture);
				this.prev_btn.width = 45;
				this.prev_btn.height = 45;
				this.prev_btn.x = 150;
				this.prev_btn.y = renderer.height / 2;
				this.prev_btn.buttonMode = true;
				this.prev_btn.interactive = true;
				this.prev_btn.on("click", function() {
					if( slide_ind <= slides.children.length - 1 ) {
						createjs.Tween.get(slides.children[slide_ind])
							.to({ alpha: 0 }, 1000, createjs.Ease.getPowInOut(4));

						if(slide_ind == slides.children.length - 1) {
							slide_ind = -1;
						}

						createjs.Tween.get(slides.children[++slide_ind])
							.to({ alpha: 1 }, 1000, createjs.Ease.getPowInOut(4));
					}
				});

				slide_container_8.addChild(this.prev_btn);

				// Next btn
				var next_btn_texture = PIXI.Texture.fromImage("i/s8/next.png");

				this.next_btn = new PIXI.Sprite(next_btn_texture);
				this.next_btn.width = 45;
				this.next_btn.height = 45;
				this.next_btn.x = renderer.width - 150;
				this.next_btn.y = renderer.height / 2;
				this.next_btn.buttonMode = true;
				this.next_btn.interactive = true;
				this.next_btn.on("click", function() {
					console.log(slide_ind, slides.children.length);
					if( slide_ind >= 0 ) {						
						createjs.Tween.get(slides.children[slide_ind])
							.to({ alpha: 0 }, 1000, createjs.Ease.getPowInOut(4));

						if(slide_ind == 0) {
							slide_ind = slides.children.length;
						}

						createjs.Tween.get(slides.children[--slide_ind])
							.to({ alpha: 1 }, 1000, createjs.Ease.getPowInOut(4));
					} else {
						slide_ind = 0;
					}
				});

				slide_container_8.addChild(this.next_btn);
		
			},

			update: function() {
				for(var i = 0; i < this.slides.children.length; i++) {
					this.slides.children[i].position.x = renderer.width / 2;
					this.slides.children[i].position.y = renderer.height / 2;
				}

				this.prev_btn.x = 150;
				this.prev_btn.y = renderer.height / 2;
				this.next_btn.x = renderer.width - 150;
				this.next_btn.y = renderer.height / 2;
			},

			destroy: function() {

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