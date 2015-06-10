App.managerService.slide_5 = {

	update_flag: false,

	init: function(active) {
		console.log("Slide 5 init");

		slide_container_5 = new PIXI.Container();
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_5);

		var deferred = $.Deferred(),
			that = this;

		setTimeout(function() {
			deferred.resolve();
			that.update_flag = true;
		}, SLIDE_ANIMATION_TIME_5);

		return deferred;
	},

	destroy: function() {
		console.log("Slide 5 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		this.update_flag = false;
		slide_container_5 = null;
	},

	update: function() {
		if( this.update_flag == true ) {
			for (var key in this.elems) this.elems[key].update();
		}
	},

	elems: {

		magazine: {

			el: null,

			anim_params: {
				speed: 2000,
				destroy_wait: 0
			},

			init: function() {

				var texture = PIXI.Texture.fromImage("i/s5/magazine.png");

				this.el = new PIXI.Sprite(texture);

				this.el.anchor.set(0.5);
				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height * 2;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
						.to({ y: renderer.height / 2 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: renderer.height * 2 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.position.x = renderer.width / 2;
				this.el.position.y = renderer.height / 2;
			}

		},

		orderBtn: {

			init: function() {

				setTimeout(function() {
					$order_btn.addClass("active");
				}, 1000);

			},

			destroy: function() {
				
				$order_btn.removeClass("active");

			},

			update: function() {

			}

		},

		title_1: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {
				var style = {
						font : '20px Myriad Pro',
					    fill : '#3c3c3c',
					    align : "left",
					    padding : 50
					};

				this.el = new PIXI.Text("Стоимость базовой\nверсии", style);

				this.el.x = (renderer.width - this.el.width) / 2 - 350;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 220 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 - 350;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 220;
			}

		},

		title_2: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {
				var style = {
						font : '20px Myriad Pro',
					    fill : '#3c3c3c'
					};

				this.el = new PIXI.Text("Срок изготовления", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 260;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 230 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 260;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 230;
			}

		},

		title_3: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {
				var style = {
						font : '14px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c'
					};

				this.el = new PIXI.Text("Стоимость за каждый\nдополнительный", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 175;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) + 220 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 175;	
				this.el.y = ((renderer.height - this.el.height) / 2) + 220;
			}

		},

		title_4: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {
				var style = {
						font : '14px HelveticaNeueCyr-Light',
					    fill : '#b48264'
					};

				this.el = new PIXI.Text("Стиль, мероприятие или праздник", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 215;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) + 247 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 215;	
				this.el.y = ((renderer.height - this.el.height) / 2) + 247;
			}

		},

		price_1: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '120px Plumb-Black',
					    fill : '#fa6464'
					};

				this.el = new PIXI.Text("2999", style);

				this.el.x = (renderer.width - this.el.width) / 2 - 230;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 225 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));	
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 - 230;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 225;
			}

		},

		price_2: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '60px Plumb-Black',
					    fill : '#fa6464'
					};

				this.el = new PIXI.Text("РУБЛЕЙ", style);

				this.el.x = (renderer.width - this.el.width) / 2 - 270;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 150 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 - 270;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 150;
			}

		},

		price_3: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '80px Plumb-Black',
					    fill : '#fa6464'
					};

				this.el = new PIXI.Text("+999", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 140;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) + 130 },this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height },this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 140;	
				this.el.y = ((renderer.height - this.el.height) / 2) + 130;
			}

		},

		price_4: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '40px Plumb-Black',
					    fill : '#fa6464'
					};

				this.el = new PIXI.Text("РУБЛЕЙ", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 180;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) + 180 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 180;	
				this.el.y = ((renderer.height - this.el.height) / 2) + 180;
			}

		},

		time_1: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '100px Plumb-Black',
					    fill : '#b48264'
					};

				this.el = new PIXI.Text("3", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 200;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 180 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 200;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 180;
			}

		},

		time_2: {

			el: null,

			anim_params: {
				speed: 2000,
				init_wait: 500,
				destroy_wait: 0
			},

			init: function() {

				var style = {
						font : '30px Plumb-Black',
					    fill : '#b48264'
					};

				this.el = new PIXI.Text("РАБОЧИХ\nДНЯ", style);

				this.el.x = (renderer.width - this.el.width) / 2 + 300;	
				this.el.y = -renderer.height;

				slide_container_5.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(this.anim_params.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) - 180 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2 + 300;	
				this.el.y = ((renderer.height - this.el.height) / 2) - 180;
			}

		}

	}

};