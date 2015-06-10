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
		if( this.update_flag == true ) {
			for (var key in this.elems) this.elems[key].update();
		}
	},

	elems: {

		title_1: {

			el: null,

			anim_params: {
				speed: 300,
				init_wait: 900,
				destroy_wait: 200
			},

			init: function() {

				if( mobile_version == true ) {
					var style = {
						font : '48px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};

					this.el = new PIXI.Text("ЛУЧШИЕ СТИЛИСТЫ РОССИИ\nПРЕДЛАГАЮТ ВАМ СОЗДАТЬ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: (renderer.height / 2 - this.el.height / 2) - 340 }, this.anim_params.speed, createjs.Ease.quadOut());
				} else {
					var style = {
						font : '38px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};

					this.el = new PIXI.Text("ЛУЧШИЕ СТИЛИСТЫ РОССИИ\nПРЕДЛАГАЮТ ВАМ СОЗДАТЬ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: (renderer.height / 2 - this.el.height / 2) - 140 }, this.anim_params.speed, createjs.Ease.quadOut());
				}

			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;
				},

				destroy: function() {
					createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -this.el.height }, this.anim_params.speed, createjs.Ease.quadOut());
				}

		},

		title_2: {

			el: null,

			anim_params: {
				speed: 500,
				init_wait: 500,
				destroy_wait: 300
			},

			init: function() {
				if( mobile_version == true ) {
					var style = {
						font : '65px HelveticaNeueCyr-Light',
					    fill : '#fa6464',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};
					
					this.el = new PIXI.Text("ПЕРСОНАЛЬНЫЙ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;
					this.el.resolution = 2;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: ((renderer.height - this.el.height) / 2) - 250 }, this.anim_params.speed, createjs.Ease.linear());
				} else {
					var style = {
						font : '52px HelveticaNeueCyr-Light',
					    fill : '#fa6464',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};
					
					this.el = new PIXI.Text("ПЕРСОНАЛЬНЫЙ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;
					this.el.resolution = 2;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: ((renderer.height - this.el.height) / 2) - 60 }, this.anim_params.speed, createjs.Ease.linear());
				}

			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;
			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -this.el.height }, this.anim_params.speed, createjs.Ease.linear());
			}

		},

		title_3: {

			el: null,

			anim_params: {
				speed: 500,
				speed2: 200,
				init_wait: 200,
				destroy_wait: 500
			},

			init: function() {
				if( mobile_version == true ) {
					var style = {
						font : 'bold 125px Plumb-Black',
					    fill : '#fa6464',
					    align : "center",
					    lineHeight : 50,
					    padding : 90
					};

					this.el = new PIXI.Text("ИМИДЖ-ГАЙД", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: ((renderer.height - this.el.height) / 2) - 80 }, this.anim_params.speed, createjs.Ease.linear())
							.to({ y: ((renderer.height - this.el.height) / 2) - 160 }, this.anim_params.speed2, createjs.Ease.linear());
				} else {
					var style = {
						font : 'bold 100px Plumb-Black',
					    fill : '#fa6464',
					    align : "center",
					    lineHeight : 50,
					    padding : 90
					};

					this.el = new PIXI.Text("ИМИДЖ-ГАЙД", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = -this.el.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: ((renderer.height - this.el.height) / 2) + 80 }, this.anim_params.speed, createjs.Ease.linear())
							.to({ y: ((renderer.height - this.el.height) / 2) + 20 }, this.anim_params.speed2, createjs.Ease.linear());
				}
			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;	
			},

			destroy: function() {
				createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: -this.el.height }, this.anim_params.speed, createjs.Ease.linear());
			}

		},

		title_4: {

			el: null,

			anim_params: {
				speed: 300,
				init_wait: 900,
				destroy_wait: 200
			},

			init: function() {
				if( mobile_version == true ){
					var style = {
						font : '48px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};

					this.el = new PIXI.Text("- ПОДРОБНОЕ РУКОВОДСТВО\nПО ПРЕОБРАЖЕНИЮ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = renderer.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: (renderer.height / 2 - this.el.height / 2) - 20 }, this.anim_params.speed, createjs.Ease.quadOut());
				} else {
					var style = {
						font : '38px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c',
					    align : "center",
					    lineHeight : 50,
					    padding : 50
					};

					this.el = new PIXI.Text("- ПОДРОБНОЕ РУКОВОДСТВО\nПО ПРЕОБРАЖЕНИЮ", style);
					this.el.x = (renderer.width - this.el.width) / 2;	
					this.el.y = renderer.height;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ y: (renderer.height / 2 - this.el.height / 2) + 130 }, this.anim_params.speed, createjs.Ease.quadOut());
				}

			},

			update: function() {
				this.el.x = (renderer.width - this.el.width) / 2;	
				},

				destroy: function() {
					createjs.Tween.get(this.el)
					.wait(this.anim_params.destroy_wait)
						.to({ y: renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());
				}

		},

		info: {

			el: null,

			anim_params: {
				speed: 500,
				init_wait: 1100,
			},

			init: function() {
				if( mobile_version == true ) {
					var style = {
						font : '40px HelveticaNeueCyr-Light',
					    fill : '#fa6464',
					    align : "center",
					    padding : 20
					};


					this.el = new PIXI.Text("Имидж-гайд – это ваша\nличная книга стиля. Десятки\nкрасочных иллюстраций,\nдетальный разбор вашего\nгардероба и практические\nсоветы по улучшению\nвашего образа – все это на\nстраницах персонального\nимидж-гайда. ", style);
					this.el.x = renderer.width;	
					this.el.y = ((renderer.height - this.el.height) / 2) + 310;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ x: (renderer.width - this.el.width) / 2 + 20 }, this.anim_params.speed, createjs.Ease.quadOut());
				} else {
					var style = {
						font : '21px HelveticaNeueCyr-Light',
					    fill : '#fa6464',
					    align : "center",
					    padding : 20
					};


					this.el = new PIXI.Text("Имидж-гайд – это ваша личная книга стиля. Десятки\nкрасочных иллюстраций, детальный разбор вашего\nгардероба и практические советы по улучшению\nвашего образа – все это на страницах\nперсонального имидж-гайда. ", style);
					this.el.x = renderer.width;	
					this.el.y = ((renderer.height - this.el.height) / 2) + 250;

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ x: (renderer.width - this.el.width) / 2 }, this.anim_params.speed, createjs.Ease.quadOut());
				}

			},

			update: function() {
				if( mobile_version == true ) this.el.x = (renderer.width - this.el.width) / 2 + 20;
				else this.el.x = (renderer.width - this.el.width) / 2;
			},

			destroy: function() {
				createjs.Tween.get(this.el)
						.to({ x: renderer.width }, this.anim_params.speed, createjs.Ease.quadOut());
			}

		},

		border: {

			el: null,

			anim_params: {
				speed: 500,
				init_wait: 1100,
			},

			init: function() {
				if( mobile_version == true ) {
					this.el = new PIXI.Graphics();

					this.el.lineStyle(6, 0xfa6464, 1);
					this.el.beginFill(0x000000, 0);
					this.el.drawRect( -600 , renderer.height/2 + 50 , 590 , 490);

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ x: renderer.width/2 + 320 }, this.anim_params.speed, createjs.Ease.quadOut());
				} else {
					this.el = new PIXI.Graphics();

					this.el.lineStyle(3, 0xfa6464, 1);
					this.el.beginFill(0x000000, 0);
					this.el.drawRect( -600 , renderer.height/2 + 150 , 560 , 170);

					slide_container_2.addChild(this.el);

					createjs.Tween.get(this.el)
						.wait(this.anim_params.init_wait)
							.to({ x: renderer.width/2 + 320 }, this.anim_params.speed, createjs.Ease.quadOut());
				}
			},

			update: function() {
				this.el.x = renderer.width/2 + 320;
			},

			destroy: function() {
				createjs.Tween.get(this.el)
						.to({ x: -560 }, this.anim_params.speed, createjs.Ease.quadOut());
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