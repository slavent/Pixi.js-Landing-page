App.managerService.slide_2 = {

	update_flag: false,

	init: function() {
		console.log("Slide 2 init");

		slide_container_2 = new PIXI.Container();
		for (var key in this.elems) this.elems[key].init();
		stage.addChild(slide_container_2);

		return App.promise();
	},

	destroy: function() {
		console.log("Slide 2 destroy");

		for (var key in this.elems) this.elems[key].destroy();
		this.update_flag = false;
		slide_container_2 = null;

		return App.promise();
	},

	update: function() {
		if( this.update_flag == true )
			for (var key in this.elems) this.elems[key].update();
	},

	elems: {

		title_1: {

			el: null,

			init: function() {
				var data 	= DATA.slide_2.title_1,
					style 	= {
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
					.to({ y: -this.el.height }, data.speed, createjs.Ease.quadOut());
			}

		},

		title_2: {

			el: null,

			init: function() {
				var data 	= DATA.slide_2.title_2,
					style 	= {
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
					.to({ y: -this.el.height }, data.speed, createjs.Ease.linear());
			}

		},

		title_3: {

			el: null,

			init: function() {
				var data 	= DATA.slide_2.title_3,
					style 	= {
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
					.to({ y: -this.el.height }, data.speed, createjs.Ease.linear());
			}

		},

		title_4: {

			el: null,

			init: function() {
				var data 	= DATA.slide_2.title_4,
					style 	= {
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
					.to({ y: renderer.height + 200 }, data.speed, createjs.Ease.quadOut());
			}

		},

		info: {

			el: null,

			init: function() {
				var data 	= DATA.slide_2.info,
					border 	= new PIXI.Graphics(),
					style 	= {
								font 	: data.text.font,
								fill 	: data.text.fill,
								align 	: data.text.align,
								padding : data.text.padding
							};					

				this.el = new PIXI.Text(data.text.text, style);
				this.el.x = (renderer.width - this.el.width) / 2 + data.text.x;	
				this.el.y = renderer.height + 200;

				border.lineStyle(data.border.borderWidth, data.border.fill, 1);
				border.beginFill(0x000000, 0);
				border.drawRect(data.border.x, data.border.y, this.el.width + 40, this.el.height);

				this.el.addChild(border);
				slide_container_2.addChild(this.el);

				createjs.Tween.get(this.el)
					.wait(data.text.init_wait)
					.to({ y: ((renderer.height - this.el.height) / 2) + data.text.y }, data.text.speed, createjs.Ease.quadOut());
			},

			update: function() {
				var data = DATA.slide_2.info;

				this.el.x = (renderer.width - this.el.width) / 2 + data.text.x;
			},

			destroy: function() {
				var data = DATA.slide_2.info;

				createjs.Tween.get(this.el)
					.to({ y: renderer.height + 200 }, data.text.speed, createjs.Ease.quadOut());
			}

		}

	}

};