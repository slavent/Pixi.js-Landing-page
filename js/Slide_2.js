App.managerService.slide_2 = {

	update_flag: false,

	init: function() {
		console.log("Slide 2 init");

		slide_container_2 = new PIXI.Container();
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_2);

		var deferred = $.Deferred(),
			that = this;

		setTimeout(function() {
			deferred.resolve();
			that.update_flag = true;
		}, SLIDE_ANIMATION_TIME_2);

		return deferred;
	},

	destroy: function() {
		console.log("Slide 2 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		this.update_flag = false;
		slide_container_2 = null;
	},

	update: function() {
		if( this.update_flag == true )
			for (var key in this.elems) this.elems[key].update();
	},

	elems: {

		title_1: {

			el: null,

			init: function() {
				var data = DATA.slide_2.title_1,
					style = {
						font 		: data.font,
					    fill 		: data.fill,
					    align 		: data.align,
					    lineHeight 	: data.lineHeight,
					    padding 	: data.padding
					};

				this.el = new PIXI.Text(data.text, style);
				this.el.x = (renderer.width - this.el.width) / 2;	
				this.el.y = -this.el.height;

				slide_container_2.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: (renderer.height / 2 - this.el.height / 2) + data.y }, data.speed, createjs.Ease.quadOut());

			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;
			},

			destroy: function() {
				var data = DATA.slide_2.title_1;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -this.el.height }, data.speed, createjs.Ease.quadOut())
					.call(function() {
						this.destroy();
					});
			}

		},

		title_2: {

			el: null,

			init: function() {
				var data = DATA.slide_2.title_2,
					style = {
						font 		: data.font,
					    fill 		: data.fill,
					    align 		: data.align,
					    lineHeight 	: data.lineHeight,
					    padding 	: data.padding
					};
				
				this.el = new PIXI.Text(data.text, style);
				this.el.x = (renderer.width - this.el.width) / 2;	
				this.el.y = -this.el.height;
				this.el.resolution = 2;

				slide_container_2.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) + data.y }, data.speed, createjs.Ease.linear());
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;
			},

			destroy: function() {
				var data = DATA.slide_2.title_2;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -this.el.height }, data.speed, createjs.Ease.linear())
					.call(function() {
						this.destroy();
					});
			}

		},

		title_3: {

			el: null,

			init: function() {
				var data = DATA.slide_2.title_3,
					style = {
						font 		: data.font,
					    fill 		: data.fill,
					    align 		: data.align,
					    lineHeight 	: data.lineHeight,
					    padding 	: data.padding
					};

				this.el = new PIXI.Text(data.text, style);
				this.el.x = (renderer.width - this.el.width) / 2;	
				this.el.y = -this.el.height;

				slide_container_2.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
						.to({ y: ((renderer.height - this.el.height) / 2) + data.x1 }, data.speed, createjs.Ease.linear())
						.to({ y: ((renderer.height - this.el.height) / 2) + data.x2 }, data.speed2, createjs.Ease.linear());
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;	
			},

			destroy: function() {
				var data = DATA.slide_2.title_3;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: -this.el.height }, data.speed, createjs.Ease.linear())
					.call(function() {
						this.destroy();
					});
			}

		},

		title_4: {

			el: null,

			init: function() {
				var data = DATA.slide_2.title_4,
					style = {
						font 		: data.font,
					    fill 		: data.fill,
					    align 		: data.align,
					    lineHeight 	: data.lineHeight,
					    padding 	: data.padding
					};

				this.el = new PIXI.Text(data.text, style);
				this.el.x = (renderer.width - this.el.width) / 2;	
				this.el.y = renderer.height;

				slide_container_2.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ y: (renderer.height / 2 - this.el.height / 2) + data.y }, data.speed, createjs.Ease.quadOut());
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;	
			},

			destroy: function() {
				var data = DATA.slide_2.title_4;

				createjs.Tween.get(this.el)
					.wait(data.destroy_wait)
					.to({ y: renderer.height + 200 }, data.speed, createjs.Ease.quadOut())
					.call(function() {
						this.destroy();
					});
			}

		},

		info: {

			el: null,

			init: function() {
				var data = DATA.slide_2.info,
					style = {
						font 	: data.font,
					    fill 	: data.fill,
					    align 	: data.align,
					    padding : data.padding
					};


				this.el = new PIXI.Text(data.text, style);
				this.el.x = renderer.width;	
				this.el.y = ((renderer.height - this.el.height) / 2) + data.y;

				slide_container_2.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ x: (renderer.width - this.el.width) / 2 + data.x }, data.speed, createjs.Ease.quadOut());
			},

			update: function() {
				var data = DATA.slide_2.info;

				this.el.x = (renderer.width - this.el.width) / 2 + data.x
			},

			destroy: function() {
				var data = DATA.slide_2.info;

				createjs.Tween.get(this.el)
					.to({ x: renderer.width }, data.speed, createjs.Ease.quadOut())
					.call(function() {
						this.destroy();
					});
			}

		},

		border: {

			el: null,

			init: function() {
				var data = DATA.slide_2.border;

				this.el = new PIXI.Graphics();
				this.el.lineStyle(data.borderWidth, data.fill, 1);
				this.el.beginFill(0x000000, 0);
				this.el.drawRect(-600 , renderer.height/2 + data.y , data.width , data.height);

				slide_container_2.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.init_wait)
					.to({ x: renderer.width/2 + data.x }, data.speed, createjs.Ease.quadOut());
			},

			update: function() {
				var data = DATA.slide_2.border;

				this.el.x = renderer.width/2 + data.x;
			},

			destroy: function() {
				var data = DATA.slide_2.border;

				createjs.Tween.get(this.el)
					.to({ x: -560 }, data.speed, createjs.Ease.quadOut());
			}

		},

		arrowDown: {

			element: null,

			anim_params: {
				speed: 300,
				init_wait: 2000,
				destroy_wait: 500
			},

			init: function() {

			},

			update: function() {

			},

			destroy: function() {

			}

		}

	}

};