App.managerService.slide_5 = {

	update_flag: false,

	init: function(active) {
		console.log("Slide 5 init");

		slide_container_5 = new PIXI.Container();
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_5);

		return App.promise();
	},

	destroy: function() {
		console.log("Slide 5 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		this.update_flag = false;
		slide_container_5 = null;

		return App.promise();
	},

	update: function() {
		if( this.update_flag == true )
			for (var key in this.elems) this.elems[key].update();
	},

	elems: {

		magazine: {

			el: null,

			init: function() {
				var data = DATA.slide_5.magazine,
					texture = PIXI.Texture.fromImage(data.url);

				this.el = new PIXI.Sprite(texture);

				this.el.anchor.set(data.anchor);
				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height * 2;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.to({ y: renderer.height / 2 }, data.speed, createjs.Ease.getPowInOut(4));
			},

			destroy: function() {
				var data = DATA.slide_5.magazine;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: renderer.height * 2 }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height / 2;
			}

		},

		orderBtn: {

			init: function() {
				var data = DATA.slide_5.orderBtn;

				setTimeout(function() {
					$order_btn.addClass("active");
				}, data.init_wait);

			},

			destroy: function() {
				
				$order_btn.removeClass("active");

			},

			update: function() {

			}

		},

		title_1: {

			el: null,

			init: function() {
				var data = DATA.slide_5.title_1,
					style = {
						font 	: data.font,
					    fill 	: data.fill,
					    align 	: data.align,
					    padding : data.padding
					};

				this.el = new PIXI.Text(data.text, style);

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				var data = DATA.slide_5.title_1;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -renderer.height }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				var data = DATA.slide_5.title_1;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;
			}

		},

		title_2: {

			el: null,

			init: function() {
				var data = DATA.slide_5.title_2,
					style = {
						font : data.font,
					    fill : data.fill
					};

				this.el = new PIXI.Text(data.text, style);

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.getPowInOut(4));	

			},

			destroy: function() {
				var data = DATA.slide_5.title_2;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -renderer.height }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				var data = DATA.slide_5.title_2;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;
			}

		},

		title_3: {

			el: null,

			init: function() {
				var data = DATA.slide_5.title_3,
					style = {
						font : data.font,
					    fill : data.fill
					};

				this.el = new PIXI.Text(data.text, style);

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.getPowInOut(4));	

			},

			destroy: function() {
				var data = DATA.slide_5.title_3;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -renderer.height }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				var data = DATA.slide_5.title_3;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;
			}

		},

		title_4: {

			el: null,

			init: function() {
				var data = DATA.slide_5.title_4,
					style = {
						font : data.font,
					    fill : data.fill
					};

				this.el = new PIXI.Text(data.text, style);

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.getPowInOut(4));	

			},

			destroy: function() {
				var data = DATA.slide_5.title_4;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -renderer.height }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				var data = DATA.slide_5.title_4;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;
			}

		},

		price_1: {

			el: null,

			init: function() {
				var data = DATA.slide_5.price_1,
					style = {
						font : data.font,
					    fill : data.fill
					};

				this.el = new PIXI.Text(data.text, style);

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.getPowInOut(4));
			},

			destroy: function() {
				var data = DATA.slide_5.price_1;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -renderer.height }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				var data = DATA.slide_5.price_1;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;
			}

		},

		price_2: {

			el: null,

			init: function() {
				var data = DATA.slide_5.price_2,
					style = {
						font : data.font,
					    fill : data.fill
					};

				this.el = new PIXI.Text(data.text, style);

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.getPowInOut(4));
			},

			destroy: function() {
				var data = DATA.slide_5.price_2;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -renderer.height }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				var data = DATA.slide_5.price_2;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;
			}

		},

		price_3: {

			el: null,

			init: function() {
				var data = DATA.slide_5.price_3,
					style = {
						font : data.font,
					    fill : data.fill
					};

				this.el = new PIXI.Text(data.text, style);

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.getPowInOut(4));
			},

			destroy: function() {
				var data = DATA.slide_5.price_3;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -renderer.height }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				var data = DATA.slide_5.price_3;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;
			}

		},

		price_4: {

			el: null,

			init: function() {
				var data = DATA.slide_5.price_4,
					style = {
						font : data.font,
					    fill : data.fill
					};

				this.el = new PIXI.Text(data.text, style);

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.getPowInOut(4));
			},

			destroy: function() {
				var data = DATA.slide_5.price_4;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -renderer.height }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				var data = DATA.slide_5.price_4;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;
			}

		},

		time_1: {

			el: null,

			init: function() {
				var data = DATA.slide_5.time_1,
					style = {
						font : data.font,
					    fill : data.fill
					};

				this.el = new PIXI.Text(data.text, style);

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.getPowInOut(4));
			},

			destroy: function() {
				var data = DATA.slide_5.time_1;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -renderer.height }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				var data = DATA.slide_5.time_1;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;
			}

		},

		time_2: {

			el: null,

			init: function() {
				var data = DATA.slide_5.time_2,
					style = {
						font : data.font,
					    fill : data.fill
					};

				this.el = new PIXI.Text(data.text, style);

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.getPowInOut(4));
			},

			destroy: function() {
				var data = DATA.slide_5.time_2;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -renderer.height }, data.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				var data = DATA.slide_5.time_2;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x;	
				this.el.y = (renderer.height - this.el.height) / 2 + data.y;
			}

		}

	}

};