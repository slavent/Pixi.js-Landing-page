(function(window, $) {



	// START: Variables
	window.App = window.App || {};

	var $body = $("body"),
		$footer = $("footer"),
		$main_menu = $(".main-menu"),
		$menu_icon = $(".menu-icon-wrp"),
		$menu_popup = $(".menu-popup"),
		$menu_popup_nav = $(".menu-popup-nav"),
		$menu_close_btn = $(".popup-closebtn"),
		$landing_nav = $(".landing-nav ul"),
		$hyde_menu = $(".hyde-menu"),
		$hover = $(".hyde-menu-hover"),
		$anketa = $(".anketa"),
		$order_btn = $(".order-btn"),

		w_width = $(window).width(),
		w_height = $(window).height(),
		renderer = new PIXI.CanvasRenderer(w_width, w_height, { transparent: true }),
		stage = new PIXI.Container(),

		slide_container_1 = null,
		slide_container_2 = null,
		slide_container_3 = null,
		slide_container_4 = null,
		slide_container_5 = null,
		slide_container_6 = null,
		slide_container_7 = null,
		slide_container_8 = null,

		scroll_top = false,
		scroll_down = true,

		main_timer = null,
		timer_slide_3 = null,

		active_slide = 1,
		step = 0,

		SLIDE_ANIMATION_TIME = 3000;
    // END: Variables



	// Start: App
	App = {

		init: function() {

			createjs.Ticker.setFPS(60);

			$body.append(renderer.view);
			requestAnimationFrame(animate);

		    function animate() {

		    	switch(active_slide) {

		    		case 1: 
		    			App.managerService.slide_1.update();

		    			break;

		    		case 2: 
		    			App.managerService.slide_2.update();
		    			
		    			break;

		    		case 3: 
		    			App.managerService.slide_3.update();
		    			
		    			break;

		    		case 4: 
		    			App.managerService.slide_4.update();
		    			
		    			break;

		    		case 5: 
		    			App.managerService.slide_5.update();
		    			
		    			break;

		    		case 6: 
		    			App.managerService.slide_6.update();
		    			
		    			break;

		    		case 7: 
		    			App.managerService.slide_7.update();
		    			
		    			break;

		    		case 8: 
		    			App.managerService.slide_8.update();
		    			
		    			break;

		    	}

		        renderer.render(stage);
		        requestAnimationFrame(animate);

		    }	

		  	App.bindService();
		  	App.managerService.init();
		  	App.navService(active_slide);

		},

		mousewheelService: {

			init: function(event) {

				// For scroll navigation. If no event, then it's click navigation
				if(event) {
					if(event.originalEvent.wheelDelta < 0) {
						// scroll down
						if( active_slide == 8 ) return;
						if( active_slide < 8 ) active_slide++;
						scroll_down = true;
						scroll_top = false;
					} else {
						// scroll top
						if( active_slide == 1 ) return;
						if( active_slide > 1 ) active_slide--;
						scroll_down = false;
						scroll_top = true;
					}
				}

				function destroySlides() {
					if( slide_container_1 != null ) App.managerService.slide_1.destroy();
					if( slide_container_2 != null ) App.managerService.slide_2.destroy();
					if( slide_container_3 != null ) App.managerService.slide_3.destroy();
					if( slide_container_4 != null ) App.managerService.slide_4.destroy();
					if( slide_container_5 != null ) App.managerService.slide_5.destroy();
					if( slide_container_6 != null ) App.managerService.slide_6.destroy();
					if( slide_container_7 != null ) App.managerService.slide_7.destroy();
					if( slide_container_8 != null ) App.managerService.slide_8.destroy();
				}

				if(active_slide >= 1 && active_slide <= 8) {

					console.log("Active slide: " + active_slide);

					destroySlides();

					switch (active_slide) {

						case 1: 
							if( scroll_top == true ) {
								setTimeout(function() {
									App.managerService.slide_1.init();
								}, 1000);
							}
							break;

						case 2: 
							if( scroll_top == true ) {
								setTimeout(function() {
									App.managerService.slide_2.init();
								}, 1000);
							}
							if( scroll_down == true ) {
								setTimeout(function() {
									App.managerService.slide_2.init();
								}, 500);
							}
							break;

						case 3: 
							if( scroll_top == true ) {
								setTimeout(function() {
									App.managerService.slide_3.init();
								}, 500);
							}
							if( scroll_down == true ) {
								setTimeout(function() {
									App.managerService.slide_3.init();
								}, 500);
							}
							break;

						case 4: 
							if( scroll_top == true ) {
								setTimeout(function() {
									App.managerService.slide_4.init();
								}, 1000);
							}
							if( scroll_down == true ) {
								setTimeout(function() {
									App.managerService.slide_4.init();
								}, 0);
							}
							break;

						case 5: 
							if( scroll_top == true ) {
								setTimeout(function() {
									App.managerService.slide_5.init();
								}, 500);
							}
							if( scroll_down == true ) {
								setTimeout(function() {
									App.managerService.slide_5.init();
								}, 500);
							}
							break;

						case 6: 
							if( scroll_top == true ) {
								setTimeout(function() {
									App.managerService.slide_6.init();
								}, 500);
							}
							if( scroll_down == true ) {
								setTimeout(function() {
									App.managerService.slide_6.init();
								}, 500);
							}
							break;

						case 7: 
							if( scroll_top == true ) {
								setTimeout(function() {
									App.managerService.slide_7.init();
								}, 1000);
							}
							if( scroll_down == true ) {
								setTimeout(function() {
									App.managerService.slide_7.init();
								}, 1000);
							}
							break;
						case 8: 
							if( scroll_down == true ) {
								setTimeout(function() {
									App.managerService.slide_8.init();
								}, 1400);
							}
							break;

					}

					App.navService(active_slide);

				}

		    }

		},

		navService: function(ind) {

			ind--;

			$landing_nav.children().removeClass("landing-nav-item-active");
			$landing_nav.children().eq(ind).addClass("landing-nav-item-active");

			$main_menu.find("a").removeClass("main-menu-link-active");
    		$main_menu.find("li").eq(ind).children().addClass("main-menu-link-active");

		},

		bindService: function() {

			$body.one("mousewheel", App.mousewheelService.init);

			main_timer = setInterval(function() {
				$body.unbind("mousewheel");
				$body.one("mousewheel", App.mousewheelService.init);
			}, SLIDE_ANIMATION_TIME);

			$menu_icon.on("click", function() {
    			$menu_popup.fadeIn();
    			$(this).fadeOut();
    		});

    		$menu_close_btn.on("click", function() {
    			$menu_icon.fadeIn();
    			$menu_popup.hide();
    		});

    		$main_menu.find("li").on("click", function() {
    			active_slide = $(this).index() + 1;
    			if(active_slide == 1) scroll_top = true;

    			App.mousewheelService.init();

    			return false;
    		});

    		$menu_popup_nav.find("li").on("click", function() {
    			active_slide = $(this).index() + 1;
    			$menu_popup.hide();

    			App.mousewheelService.init();

    			return false;
    		});

    		$order_btn.on("click", function() {
    			active_slide = 7;
    			App.mousewheelService.init();
    		});

    		// For Anketa additional plugins
    		$("input").iCheck({
				checkboxClass: "icheckbox_minimal",
				increaseArea: "20%"
			});

		  	$(".anketa-season").on("click", function() {
		  		$(".anketa-season").removeClass("anketa-season_selected");
		  		$(this).addClass("anketa-season_selected");
		  	});

		  	$(".age-range").ionRangeSlider();

	    },

		managerService: {

			init: function() {

				this.slide_1.init();

			},

			slide_1: {

				init: function() {
					console.log("Slide 1 init");

					slide_container_1 = new PIXI.Container();
					slide_container_1.alpha = 0;

					this.elems.slider.init();
					this.elems.logo.init();
					this.elems.title.init();
					this.elems.spinner.init();

					stage.addChild(slide_container_1);

					createjs.Tween.get(slide_container_1)
  						.to({ alpha: 1 }, 500, createjs.Ease.getPowInOut(4))
  						.call(function() {
  							$main_menu.css({ "top" : -70 });
  							$menu_icon.show();
  						});

				},

				destroy: function() {

					console.log("Slide 1 destroy");

					createjs.Tween.get(slide_container_1)
  						.to({ alpha: 0 }, 1000, createjs.Ease.getPowInOut(4))
  						.call(function() {
  							slide_container_1 = null;

  							setTimeout(function() {
		  						$main_menu.css({ "top" : 0 });
		  					}, 1000);
		  					$menu_icon.hide();
		  					$menu_popup.hide();
  						});

				},

				update: function() {
			    	this.elems.spinner.update();
				},

				elems: {

					logo: {

						init: function() {
							var logo_texture = PIXI.Texture.fromImage("i/s1/logo.svg"),
								logo = new PIXI.Sprite(logo_texture);

							logo.anchor.set(0.5);
							logo.position.x = renderer.width / 2;
							logo.position.y = renderer.height / 2;

							slide_container_1.addChild(logo);
						}
					},

					title: {
						init: function() {
							var style = {
									font : '38px HelveticaNeueCyr-Light',
								    fill : '#fff',
								    align : "center",
								    lineHeight : 50,
								    padding : 50
								},
								title = new PIXI.Text("ДОБРО ПОЖАЛОВАТЬ В ЛАБОРАТОРИЮ\nСТИЛЯ «МОДНОГО ПРИГОВОРА»!", style);

							title.x = (renderer.width - title.width) / 2;	
							title.y = ((renderer.height - title.height) / 2) + 180;

							slide_container_1.addChild(title);
						}
					},

					slider: {

						el: null,

						init: function() {

							var data = [
								{ url: "i/s1/slide_1.jpg", x_pos: -25, color: "0xffffff" },
								{ url: "i/s1/slide_2.jpg", x_pos: 0, color: "0xffffff" },
								{ url: "i/s1/slide_3.jpg", x_pos: 25, color: "0xffffff" }
							],
								slides = new PIXI.Container(),
								dotes = new PIXI.Container(),
								slide_ind = 0;

							this.el = dotes;

							var Slide = function(index, url) {
								this.texture = PIXI.Texture.fromImage(url);
								this.sprite = new PIXI.Sprite(this.texture);
								this.sprite.anchor.x = .5;
								this.sprite.anchor.y = .5;
								this.sprite.position.x = renderer.width / 2;
								this.sprite.position.y = renderer.height / 2;
								if( index != data.length - 1 ) this.sprite.alpha = 0;

								return this.sprite;
							};

							for(var i = 0; i < data.length; i++) {
								var slide = new Slide( i, data[i].url );

								slides.addChild(slide);
							}

							slide_container_1.addChild(slides);

							// Navigation
							var Dot = function(index, x_pos, color) {
								var dot = new PIXI.Graphics();
								dot.index = index;
								dot.lineStyle(0);
								dot.beginFill(color, 1);
								dot.drawCircle(0, 20, 5);
								dot.endFill();
								dot.position.x = renderer.width / 2 + x_pos;
								dot.position.y = renderer.height / 2 + 200;
								dot.buttonMode = true;
								dot.interactive = true;
								dot.on("click", function() {
									draw(this.index);
								});

								return dot;
							}

							function draw(index){
								if(index == undefined) index = 0;

								for(var i = 0; i < data.length; i++) {
									if(i == index) {
										var color = "0xff7d7a";
									} else {
										var color = data[i].color;
									}
									var dot = new Dot( i, data[i].x_pos, color );	
								
									dotes.addChild(dot);
								}
							}

							draw();

							slide_container_1.addChild(dotes);

						}

					},

					spinner: {

						vars: {
							spin1_texture: 	null,
							spin2_texture: 	null,
							spin1: 			null,
							spin2: 			null,
							pos: 			0,
							alpha: 			0
						},

						init: function() {
							var vars = this.vars;

							vars.spin1_texture = PIXI.Texture.fromImage("i/s1/spin1.svg");
							vars.spin1 = new PIXI.Sprite(vars.spin1_texture);
							vars.spin2_texture = PIXI.Texture.fromImage("i/s1/spin2.svg");
							vars.spin2 = new PIXI.Sprite(vars.spin2_texture);

							vars.spin1.anchor.set(0.5);
							vars.spin1.position.x = renderer.width / 2 - 5;
							vars.spin1.position.y = renderer.height / 2 + 350;
							vars.spin1.buttonMode = true;
							vars.spin1.interactive = true;
							vars.spin1.on("click", function() {
								active_slide++;
	    						App.mousewheelService.init();
							});

							vars.spin2.anchor.set(0.5);
							vars.spin2.position.x = renderer.width / 2 - 5;
							vars.spin2.position.y = renderer.height / 2 + 345;

							slide_container_1.addChild(vars.spin1);
							slide_container_1.addChild(vars.spin2); 
						},

						update: function() {
							var vars = this.vars;

							vars.pos += 0.06;
		    				vars.spin2.y += Math.sin(vars.pos);
						}

					}

				}

			},

			slide_2: {

				init: function() {
					console.log("Slide 2 init");

					slide_container_2 = new PIXI.Container();

					this.elems.title_1.init();
					this.elems.title_2.init();
					this.elems.title_3.init();
					this.elems.title_4.init();
					this.elems.info.init();
					this.elems.border.init();
					this.elems.arrowDown.init();

					stage.addChild(slide_container_2);

				},

				destroy: function() {

					console.log("Slide 2 destroy");

					this.elems.title_1.destroy();
					this.elems.title_2.destroy();
					this.elems.title_3.destroy();
					this.elems.title_4.destroy();
					this.elems.info.destroy();
					this.elems.border.destroy();
					this.elems.arrowDown.destroy();

					//stage.removeChild(slide_container_2);
					slide_container_2 = null;

				},

				update: function() {

					this.elems.title_1.update();
					this.elems.title_2.update();
					this.elems.title_3.update();
					this.elems.title_4.update();
					this.elems.info.update();
					this.elems.border.update();
					this.elems.arrowDown.update();

				},

				elems: {

					title_1: {

						element: null,
						element_blur: null,

						anim_params: {
							speed: 300,
							init_wait: 900,
							destroy_wait: 200
						},

						init: function() {

							var style = {
									font : '38px HelveticaNeueCyr-Light',
								    fill : '#3c3c3c',
								    align : "center",
								    lineHeight : 40,
								    padding : 50
								};

							this.element_blur = new PIXI.filters.BlurFilter();
							this.element_blur.blurX = 150;

							this.element = new PIXI.Text("ЛУЧШИЕ СТИЛИСТЫ РОССИИ\nПРЕДЛАГАЮТ ВАМ СОЗДАТЬ", style);
							this.element.x = (renderer.width - this.element.width) / 2;	
							this.element.y = -this.element.height;
							//this.element.filters = [this.element_blur];

							slide_container_2.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: (renderer.height / 2 - this.element.height / 2) - 140 }, this.anim_params.speed, createjs.Ease.quadOut());

						},

						update: function() {
							//if( this.element_blur.blur > 0 ) this.element_blur.blur -= 1.4;
							//if( this.element_blur.blur == 0 ) this.element.filters = null;
 						},

 						destroy: function() {
 							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -this.element.height }, this.anim_params.speed, createjs.Ease.quadOut());
 						}

					},

					title_2: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 500,
							destroy_wait: 300
						},

						init: function() {
							var style = {
									font : '52px HelveticaNeueCyr-Light',
								    fill : '#fa6464',
								    align : "center",
								    lineHeight : 50,
								    padding : 50
								};
								
							this.element = new PIXI.Text("ПЕРСОНАЛЬНЫЙ", style);
							this.element.x = (renderer.width - this.element.width) / 2;	
							this.element.y = -this.element.height;
							this.element.resolution = 2;

							slide_container_2.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 60 }, this.anim_params.speed, createjs.Ease.linear());

						},

						update: function() {
							
						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -this.element.height }, this.anim_params.speed, createjs.Ease.linear());
						}

					},

					title_3: {

						element: null,

						anim_params: {
							speed: 500,
							speed2: 200,
							init_wait: 200,
							destroy_wait: 500
						},

						init: function() {
							var style = {
									font : 'bold 100px Plumb-Black',
								    fill : '#fa6464',
								    align : "center",
								    lineHeight : 50,
								    padding : 90
								};

							this.element = new PIXI.Text("ИМИДЖ-ГАЙД", style);
							this.element.x = (renderer.width - this.element.width) / 2;	
							this.element.y = -this.element.height;

							slide_container_2.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) + 80 }, this.anim_params.speed, createjs.Ease.linear())
  								.to({ y: ((renderer.height - this.element.height) / 2) + 20 }, this.anim_params.speed2, createjs.Ease.linear());
						},

						update: function() {
							
						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -this.element.height }, this.anim_params.speed, createjs.Ease.linear());
						}

					},

					title_4: {

						element: null,
						element_blur: null,

						anim_params: {
							speed: 300,
							init_wait: 900,
							destroy_wait: 200
						},

						init: function() {
							var style = {
									font : '38px HelveticaNeueCyr-Light',
								    fill : '#3c3c3c',
								    align : "center",
								    lineHeight : 50,
								    padding : 50
								};

							this.element_blur = new PIXI.filters.BlurFilter();
							this.element_blur.blurX = 150;

							this.element = new PIXI.Text("- ПОДРОБНОЕ РУКОВОДСТВО\nПО ПРЕОБРАЖЕНИЮ", style);
							this.element.x = (renderer.width - this.element.width) / 2;	
							this.element.y = renderer.height;
							//this.element.filters = [this.element_blur];

							slide_container_2.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: (renderer.height / 2 - this.element.height / 2) + 130 }, this.anim_params.speed, createjs.Ease.quadOut());

						},

						update: function() {
							//if( this.element_blur.blur > 0 ) this.element_blur.blur -= 1.3;
							//if( this.element_blur.blur == 0 ) this.element.filters = null;
 						},

 						destroy: function() {
 							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());
 						}

					},

					info: {

						element: null,
						element_blur: null,

						anim_params: {
							speed: 500,
							init_wait: 1100,
						},

						init: function() {
							var style = {
									font : '21px HelveticaNeueCyr-Light',
								    fill : '#fa6464',
								    align : "center",
								    padding : 20
								};


							this.element = new PIXI.Text("Имидж-гайд – это ваша личная книга стиля. Десятки\nкрасочных иллюстраций, детальный разбор вашего\nгардероба и практические советы по улучшению\nвашего образа – все это на страницах\nперсонального имидж-гайда. ", style);
							this.element.x = renderer.width;	
							this.element.y = ((renderer.height - this.element.height) / 2) + 250;

							slide_container_2.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ x: (renderer.width - this.element.width) / 2 }, this.anim_params.speed, createjs.Ease.quadOut());

						},

						update: function() {

						},

						destroy: function() {
							createjs.Tween.get(this.element)
  								.to({ x: renderer.width }, this.anim_params.speed, createjs.Ease.quadOut());
						}

					},

					border: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 1100,
						},

						init: function() {
							this.element = new PIXI.Graphics();

							this.element.lineStyle(3, 0xfa6464, 1);
							this.element.beginFill(0x000000, 0);
							this.element.drawRect( -600 , renderer.height/2 + 150 , 560 , 170);

							slide_container_2.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ x: renderer.width/2 + 320 }, this.anim_params.speed, createjs.Ease.quadOut());
						},

						update: function() {

						},

						destroy: function() {
							createjs.Tween.get(this.element)
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

			},

			slide_3: {

				init: function() {

					console.log("Slide 3 init");

					slide_container_3 = new PIXI.Container();

					App.managerService.slide_3.scroll(step);

					clearInterval(main_timer);

					timer_slide_3 = setInterval(function() {
						$body.unbind("mousewheel");
						$body.one("mousewheel", App.managerService.slide_3.scroll);
					}, 1000);

				},

				scroll: function(event) {

					console.log(step);

					var top_pos = 0,
						left_pos = 0;

					if( step != 6 ) {
						step++;
					} else {
						if(event) {
							if(event.originalEvent.wheelDelta < 0) {
								active_slide++;
							} else {
								active_slide--;
							}
						}
						
						App.mousewheelService.init();

						clearInterval(timer_slide_3);						

						main_timer = setInterval(function() {
							$body.unbind("mousewheel");
							$body.one("mousewheel", App.mousewheelService.init);
						}, SLIDE_ANIMATION_TIME);

						return false;
					}

					switch(step) {
						case 1: 
							top_pos = 0;
							left_pos = 0;

							slide_container_3 = new PIXI.Container();

							App.managerService.slide_3.elems.menu.init();
							App.managerService.slide_3.elems.menu.scene_1.init();

							stage.addChild(slide_container_3);

							break;

						case 2:
							top_pos = 0;
							left_pos = $hyde_menu.children().width();

							App.managerService.slide_3.elems.menu.scene_1.destroy();
							App.managerService.slide_3.elems.menu.scene_2.init();
							break;

						case 3:
							top_pos = $hyde_menu.children().height();
							left_pos = 0;

							App.managerService.slide_3.elems.menu.scene_2.destroy();
							App.managerService.slide_3.elems.menu.scene_3.init();
							break;

						case 4: 
							top_pos = $hyde_menu.children().height();
							left_pos = $hyde_menu.children().width();

							App.managerService.slide_3.elems.menu.scene_3.destroy();
							App.managerService.slide_3.elems.menu.scene_4.init();
							break;

						case 5:
							top_pos = $hyde_menu.children().height() * 2;
							left_pos = 0;

							App.managerService.slide_3.elems.menu.scene_4.destroy();
							App.managerService.slide_3.elems.menu.scene_5.init();
							break;

						case 6:
							top_pos = $hyde_menu.children().height() * 2;
							left_pos = $hyde_menu.children().width();

							App.managerService.slide_3.elems.menu.scene_5.destroy();
							App.managerService.slide_3.elems.menu.scene_6.init();
							break;

					}

					if(App.managerService.slide_3.elems.menu.order_btn.el != null) App.managerService.slide_3.elems.menu.order_btn.destroy();
					App.managerService.slide_3.elems.menu.order_btn.init();

					$hover.animate({ "top" : top_pos, "left" : left_pos }, function() {
						$hyde_menu.children().removeClass("active").eq(step - 1).addClass("active");
					});

				},

				destroy: function() {
					console.log("Slide 3 destroy");

					this.elems.menu.destroy();

					step = 0;

					stage.removeChild(slide_container_3);
					slide_container_3 = null;

				},

				update: function() {

				},

				elems: {

					menu: {

						anim_params: {
							speed: 1000
						},

						init: function() {
							$hyde_menu.addClass("active").css({ "height" : $(window).height() - $main_menu.height() });
						},

						destroy: function() {
							$hyde_menu.removeClass("active");
						},

						Scene: function(url, title_top, title_down) {
							// Titles
							var style = {
									font : "22px PlumbCondensed-Bold",
								    fill : "#000000",
								    align : "center"
								},
								title_top = new PIXI.Text(title_top, style),
								title_down = new PIXI.Text(title_down, style);

							title_top.x = -1000;
							title_top.y = -50;

							title_down.x = 1000;
							title_down.y = 450;

							// Title's lines
							var data_lines = [
								{ color: "0x000000", size: title_top.width - 100, 	x: -15, 						y: 50, pos: "top" },
								{ color: "0x000000", size: title_top.width - 100, 	x: title_top.height + 15, 		y: 50, pos: "top" },
								{ color: "0x000000", size: title_down.width - 100, 	x: -15, 						y: 50, pos: "down" },
								{ color: "0x000000", size: title_down.width - 100, 	x: title_down.height + 15, 		y: 50, pos: "down" },
							];

							var Line = function(color, size, x, y) {
								this.el = new PIXI.Graphics();
								this.el.beginFill(0xffffff);
								this.el.lineStyle(1, color, 1);
								this.el.moveTo(0,0);
								this.el.lineTo(size,0);
								this.el.endFill();
								this.el.position.x = y;
								this.el.position.y = x;

								return this.el;
							};

							for(var i = 0; i < data_lines.length; i++) {
								var line = new Line( data_lines[i].color, data_lines[i].size, data_lines[i].x, data_lines[i].y );

								switch(data_lines[i].pos) {
									case "top":
										title_top.addChild(line);
										break;
									case "down":
										title_down.addChild(line);
										break;
								}
							}

							// Photo
							this.texture = PIXI.Texture.fromImage(url);
							this.el = new PIXI.Sprite(this.texture);
							this.el.position.x = renderer.width / 2;
							this.el.position.y = renderer.height * 2;
							this.el.addChild(title_top);
							this.el.addChild(title_down);

							this.el.init = function(element) {
								createjs.Tween.get(element)
									.to({ y: renderer.height / 2 - 250 }, 1000, createjs.Ease.getPowInOut(4));
								createjs.Tween.get(title_top)
									.wait(500)
									.to({ x: -50 }, 1000, createjs.Ease.getPowInOut(4));
								createjs.Tween.get(title_down)
									.wait(500)
									.to({ x: 350 }, 1000, createjs.Ease.getPowInOut(4));
							}

							this.el.destroy = function(element) {
								createjs.Tween.get(title_top).to({ x: -1000 }, 500, createjs.Ease.getPowInOut(4));
								createjs.Tween.get(title_down).to({ x: 1000 }, 500, createjs.Ease.getPowInOut(4));
								createjs.Tween.get(element)
									.wait(200)
									.to({ y: -renderer.height * 2 }, 1000, createjs.Ease.getPowInOut(4))
	  								.call(function() {
	  									slide_container_3.removeChild(this.el);
	  								});
							}

							return this.el;
						},

						scene_1: {

							el: null,

							init: function() {
								var title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/1/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);
							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						scene_2: {

							el: null,

							init: function() {
								var title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/2/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						scene_3: {

							el: null,

							init: function() {
								var title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/3/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						scene_4: {

							el: null,

							init: function() {
								var title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/4/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						scene_5: {

							el: null,

							init: function() {
								var title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/5/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						scene_6: {

							el: null,

							init: function() {
								var title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/6/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						order_btn: {

							el: null,

							init: function() {

								var style = {
									font : "20px PlumbCondensed-Bold",
								    fill : "#ffffff",
								    align : "center"
								},
									title = new PIXI.Text("ЗАКАЗАТЬ\nИМИДЖ-ГАЙД", style);

								title.x = renderer.width / 2 + 50;
								title.y = -120;

								this.el = new PIXI.Graphics();
								this.el.lineStyle(0);
								this.el.beginFill(0xff7d7a, 1);
								this.el.drawCircle(renderer.width / 2 + 100, -100, 60);
								this.el.endFill();
								this.el.buttonMode = true;
								this.el.interactive = true;
								this.el.on("click", function() {
									step = 6;
									active_slide = 7;
									App.managerService.slide_3.scroll(); // for reset timer
									App.mousewheelService.init();
								});

								this.el.addChild(title);
								slide_container_3.addChild(this.el);

								createjs.Tween.get(this.el)
									.to({ y: renderer.height / 2 }, 1000, createjs.Ease.getPowInOut(4));

							},

							destroy: function() {
								createjs.Tween.get(this.el)
									.to({ y: -1000 }, 1000, createjs.Ease.getPowInOut(4))
									.call(function() {
										this.el = null;
									});
							}

						}

					},

				}

			},

			slide_4: {

				init: function() {

					console.log("Slide 4 init");

					slide_container_4 = new PIXI.Container();

					this.elems.bg.init();
					this.elems.title.init();
					this.elems.info.init();
					this.elems.slider.init();

					stage.addChild(slide_container_4);

				},

				destroy: function() {

					console.log("Slide 4 destroy");

					this.elems.bg.destroy();
					this.elems.title.destroy();
					this.elems.info.destroy();
					this.elems.slider.destroy();

					slide_container_4 = null;

				},

				update: function() {

				},

				elems: {

					bg: {

						anim_params: {
							speed: 300
						},

						el: null,

						init: function() {

							this.el = new PIXI.Graphics();
							this.el.lineStyle(2, 0x0000FF, 0);
							this.el.beginFill(0xff7d7a, 1);
							this.el.drawRect(0, 0, renderer.width, 250);
							this.el.y = renderer.height;

							slide_container_4.addChild(this.el);

							createjs.Tween.get(this.el)
  								.to({ y: renderer.height - 250 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

						},

						destroy: function() {

							createjs.Tween.get(this.el)
  								.to({ y: renderer.height}, this.anim_params.speed, createjs.Ease.getPowInOut(4));

						}

					},

					title: {

						anim_params: {
							speed: 500,
							init_wait: 400,
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

						}

					},

					info: {

						anim_params: {
							speed: 500,
							init_wait: 200,
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

						}

					},

					slider: {

						el: 		null,
						prev_btn: 	null,
						next_btn: 	null,

						init: function() {

							var data = [
								{ url: "i/s4/slide_1.png", title: "Casual", description: "Одежда для настоящих\nметательниц" },
								{ url: "i/s4/slide_2.png", title: "Романтический", description: "Одежда для настоящих\nметательниц" },
								{ url: "i/s4/slide_3.png", title: "Классика", description: "Одежда для настоящих\nметательниц" },
								{ url: "i/s4/slide_1.png", title: "Casual", description: "Одежда для настоящих\nметательниц" },
								{ url: "i/s4/slide_2.png", title: "Романтический", description: "Одежда для настоящих\nметательниц" },
								{ url: "i/s4/slide_3.png", title: "Классика", description: "Одежда для настоящих\nметательниц" }
							],
								slides = new PIXI.Container(),
								slide_ind = 0;

							this.el = slides;
							slides.alpha = 0;

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
								this.sprite.position.y = renderer.height - 400 - 250;
								this.sprite.position.x = (renderer.width / 3 * (index + 1)) - (renderer.width / 6);

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
								.to({ alpha: 1 }, 1000, createjs.Ease.getPowInOut(4));

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
									for(var i = 0; i < slides.children.length; i++) {
										createjs.Tween.get(slides.children[i])
											.to({ x: slides.children[i].position.x + renderer.width / 3 }, 500, createjs.Ease.getPowInOut(4));
									}

									slide_ind--;
								}
							});

							slide_container_4.addChild(prev_btn);

							createjs.Tween.get(prev_btn)
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
									for(var i = 0; i < slides.children.length; i++) {
										createjs.Tween.get(slides.children[i])
											.to({ x: slides.children[i].position.x - renderer.width / 3 }, 500, createjs.Ease.getPowInOut(4));
									}

									slide_ind++;
								}
							});

							slide_container_4.addChild(next_btn);

							createjs.Tween.get(next_btn)
								.to({ x: renderer.width - 100 }, 1000, createjs.Ease.getPowInOut(4));

						},

						destroy: function() {
							var that = this;

							createjs.Tween.get(this.el)
								.to({ alpha: 0 }, 1000, createjs.Ease.getPowInOut(4));

							createjs.Tween.get(this.prev_btn)
								.to({ x: -200 }, 1000, createjs.Ease.getPowInOut(4));

							createjs.Tween.get(this.next_btn)
								.to({ x: renderer.width + 200 }, 1000, createjs.Ease.getPowInOut(4));
						}

					}

				}

			},

			slide_5: {

				init: function(active) {

					console.log("Slide 5 init");

					slide_container_5 = new PIXI.Container();

					this.elems.magazine.init();
					this.elems.title_1.init();
					this.elems.title_2.init();
					this.elems.title_3.init();
					this.elems.title_4.init();
					this.elems.price_1.init();
					this.elems.price_2.init();
					this.elems.price_3.init();
					this.elems.price_4.init();
					this.elems.time_1.init();
					this.elems.time_2.init();
					this.elems.orderBtn.init();

					stage.addChild(slide_container_5);

				},

				destroy: function() {

					console.log("Slide 5 destroy");

					this.elems.magazine.destroy();
					this.elems.title_1.destroy();
					this.elems.title_2.destroy();
					this.elems.title_3.destroy();
					this.elems.title_4.destroy();
					this.elems.price_1.destroy();
					this.elems.price_2.destroy();
					this.elems.price_3.destroy();
					this.elems.price_4.destroy();
					this.elems.time_1.destroy();
					this.elems.time_2.destroy();
					this.elems.orderBtn.destroy();

					slide_container_5 = null;
					//stage.removeChild(slide_container_5);

				},

				update: function() {
					this.elems.orderBtn.update();
				},

				elems: {

					title_1: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 1400,
						},

						init: function() {
							var style = {
									font : '20px Myriad Pro',
								    fill : '#3c3c3c',
								    align : "left",
								    padding : 50
								};

							this.element = new PIXI.Text("Стоимость базовой\nверсии", style);

							this.element.x = (renderer.width - this.element.width) / 2 - 350;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 220 }, this.anim_params.speed, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
  								.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());
						}

					},

					title_2: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 1500,
							destroy_wait: 600
						},

						init: function() {
							var style = {
									font : '20px Myriad Pro',
								    fill : '#3c3c3c'
								};

							this.element = new PIXI.Text("Срок изготовления", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 260;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 230 }, this.anim_params.speed, createjs.Ease.quadOut());	

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());	
						}

					},

					title_3: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 200,
							destroy_wait: 1400
						},

						init: function() {
							var style = {
									font : '14px HelveticaNeueCyr-Light',
								    fill : '#3c3c3c'
								};

							this.element = new PIXI.Text("Стоимость за каждый\nдополнительный", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 175;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) + 220 }, this.anim_params.speed, createjs.Ease.quadOut());	

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());	
						}

					},

					title_4: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 0,
							destroy_wait: 1600
						},

						init: function() {
							var style = {
									font : '14px HelveticaNeueCyr-Light',
								    fill : '#b48264'
								};

							this.element = new PIXI.Text("Стиль, мероприятие или праздник", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 215;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) + 247 }, this.anim_params.speed, createjs.Ease.quadOut());	

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());	
						}

					},

					price_1: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 1200,
							destroy_wait: 200
						},

						init: function() {

							var style = {
									font : '120px Plumb-Black',
								    fill : '#fa6464'
								};

							this.element = new PIXI.Text("2999", style);

							this.element.x = (renderer.width - this.element.width) / 2 - 230;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 225 }, this.anim_params.speed, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());	
						}

					},

					price_2: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 1000,
							destroy_wait: 400
						},

						init: function() {

							var style = {
									font : '60px Plumb-Black',
								    fill : '#fa6464'
								};

							this.element = new PIXI.Text("РУБЛЕЙ", style);

							this.element.x = (renderer.width - this.element.width) / 2 - 270;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 150 }, this.anim_params.speed, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());
						}

					},

					price_3: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 600,
							destroy_wait: 1000
						},

						init: function() {

							var style = {
									font : '80px Plumb-Black',
								    fill : '#fa6464'
								};

							this.element = new PIXI.Text("+999", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 140;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) + 130 },this.anim_params.speed, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -renderer.height },this.anim_params.speed, createjs.Ease.quadOut());
						}

					},

					price_4: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 400,
							destroy_wait: 1200
						},

						init: function() {

							var style = {
									font : '40px Plumb-Black',
								    fill : '#fa6464'
								};

							this.element = new PIXI.Text("РУБЛЕЙ", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 180;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) + 180 }, this.anim_params.speed, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());
						}

					},

					time_1: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 800,
							destroy_wait: 800
						},

						init: function() {

							var style = {
									font : '100px Plumb-Black',
								    fill : '#b48264'
								};

							this.element = new PIXI.Text("3", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 200;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 180 }, this.anim_params.speed, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());
						}

					},

					time_2: {

						element: null,

						anim_params: {
							speed: 500,
							init_wait: 800,
							destroy_wait: 800
						},

						init: function() {

							var style = {
									font : '30px Plumb-Black',
								    fill : '#b48264'
								};

							this.element = new PIXI.Text("РАБОЧИХ\nДНЯ", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 300;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 180 }, this.anim_params.speed, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.quadOut());
						}

					},

					magazine: {

						element: null,

						anim_params: {
							speed: 1000,
							destroy_wait: 1000
						},

						init: function() {

							var texture = PIXI.Texture.fromImage("i/s5/magazine.png");

							this.element = new PIXI.Sprite(texture);

							this.element.anchor.set(0.5);
							this.element.position.x = renderer.width / 2;
							this.element.position.y = renderer.height*2;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
  								.to({ y: renderer.height / 2 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
  								.to({ y: renderer.height*2 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
						}

					},

					orderBtn: {

						init: function() {

							$order_btn.addClass("active");

						},

						destroy: function() {
							
							$order_btn.removeClass("active");

						},

						update: function() {

						}

					}

				}

			},

			slide_6: {

				init: function(active) {

					console.log("Slide 6 init");

					slide_container_6 = new PIXI.Container();

					this.elems.notepade.init();
					this.elems.title.init();
					this.elems.btn.init();
					this.elems.info.init();
					this.elems.spinner.init();

					stage.addChild(slide_container_6);

				},

				destroy: function() {

					console.log("Slide 6 destroy");

					this.elems.notepade.destroy();
					this.elems.title.destroy();
					this.elems.btn.destroy();
					this.elems.info.destroy();
					this.elems.spinner.destroy();

					slide_container_6 = null;
					//stage.removeChild(slide_container_6);

				},

				update: function() {
					this.elems.spinner.update();
				},

				elems: {

					notepade: {

						element: null,

						anim_params: {
							speed: 3000,
							init_wait: 0
						},

						init: function() {

							var texture = PIXI.Texture.fromImage("i/s6/notepade.png");

							this.element = new PIXI.Sprite(texture);
							this.element.anchor.set(0.5);
							this.element.position.x = renderer.width / 2 + 300;
							this.element.position.y = -renderer.height;

							slide_container_6.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
		  						.to({ y: renderer.height / 2 + 40 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));


						},

						destroy: function() {
							createjs.Tween.get(this.element)
		  						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
						}

					},

					title: {

						element: null,

						anim_params: {
							speed: 2000,
							speed2: 1000,
							destroy_wait: 400
						},

						init: function() {

							var style = {
									font : '110px Plumb-Black',
								    fill : '#fa6464',
								    align : "center",
								    lineHeight : 105
								};

							this.element = new PIXI.Text("ЗАПОЛНИТЕ\nАНКЕТУ\nНА САЙТЕ", style);

							this.element.x = (renderer.width - this.element.width) / 2;	
							this.element.y = -renderer.height;

							slide_container_6.addChild(this.element);

							createjs.Tween.get(this.element)
		  						.to({ y: ((renderer.height - this.element.height) / 2) }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
		  						.to({ y: -renderer.height }, this.anim_params.speed2, createjs.Ease.getPowInOut(4));
						}

					},

					btn: {

						element: null,
						element_2: null,

						anim_params: {
							speed: 1000,
							init_wait: 0,
							init_wait2: 200,
							destroy_wait: 60,
							destroy_wait2: 800
						},

						init: function() {

							var texture = PIXI.Texture.fromImage("i/s6/circle.svg");

							this.element = new PIXI.Sprite(texture);
							this.element.anchor.set(0.5);
							this.element.position.x = renderer.width / 2 - 280;
							this.element.position.y = -renderer.height;
							this.element.buttonMode = true;
							this.element.interactive = true;
							this.element.on("click", function() {
								$anketa.fadeIn();
							});


							var style = {
								font : '24px BebasRegular',
							    fill : '#ffffff'
							};

							this.element_2 = new PIXI.Text("ЗАПОЛНИТЬ", style);
							this.element_2.x = (renderer.width - this.element_2.width) / 2 - 235;	
							this.element_2.y = -renderer.height;
							this.element_2.anchor.x = 0.5;
							this.element_2.anchor.y = 0.5;
							this.element_2.rotation = -0.3;

							slide_container_6.addChild(this.element);
							slide_container_6.addChild(this.element_2);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
		  						.to({ y: ((renderer.height - this.element_2.height) / 2) + 42 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

		  					createjs.Tween.get(this.element_2)
								.wait(this.anim_params.init_wait2)
		  						.to({ y: renderer.height / 2 + 30 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
		  						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

		  					createjs.Tween.get(this.element_2)
								.wait(this.anim_params.destroy_wait2)
		  						.to({ y: -renderer.height }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
						}

					},

					info: {

						element: null,
						element_2: null,

						anim_params: {
							speed: 1000,
							init_wait: 600,
							destroy_wait: 0
						},

						init: function() {

							var style = {
								font : '16px HelveticaNeueCyr-Light',
							    fill : '#3c3c3c',
							    align : "center"
							};

							this.element = new PIXI.Text("Стилисты “Модного приговора” получат Ваши данные,\nопределят Ваш цветотип, тип фигуры, овал лица\nи составят подробную инструкцию преображения!", style);

							this.element.x = renderer.width + 10;	
							this.element.y = ((renderer.height - this.element.height) / 2) + 250;

							slide_container_6.addChild(this.element);

							this.element_2 = new PIXI.Graphics();

							this.element_2.lineStyle(3, 0x3c3c3c, 1);
							this.element_2.beginFill(0x000000, 0);
							this.element_2.drawRect( -600 , renderer.height/2 + 200 , 450 , 100);

							slide_container_6.addChild(this.element_2);

							createjs.Tween.get(this.element)
								.wait(this.anim_params.init_wait)
		  						.to({ x: (renderer.width - this.element.width) / 2 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

		  					createjs.Tween.get(this.element_2)
								.wait(this.anim_params.init_wait)
		  						.to({ x: renderer.width/2 + 380 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(this.anim_params.destroy_wait)
		  						.to({ x: renderer.width + 60 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));

		  					createjs.Tween.get(this.element_2)
								.wait(this.anim_params.destroy_wait)
		  						.to({ x: -600 }, this.anim_params.speed, createjs.Ease.getPowInOut(4));
						}

					},

					spinner: {

						vars: {
							spin1_texture: 	null,
							spin1: 			null,
							spin2_texture: 	null,
							spin2: 			null,
							pos: 			0,
							alpha: 			0,
							init: false
						},

						init: function() {
							var vars = this.vars;

							vars.init = true;
							vars.spin1_texture = PIXI.Texture.fromImage("i/s6/spin1.svg");
							vars.spin1 = new PIXI.Sprite(vars.spin1_texture);
							vars.spin2_texture = PIXI.Texture.fromImage("i/s6/spin2.svg");
							vars.spin2 = new PIXI.Sprite(vars.spin2_texture);

							vars.spin1.anchor.set(0.5);
							vars.spin1.position.x = renderer.width / 2 - 5;
							vars.spin1.position.y = renderer.height / 2 + 350;
							vars.spin1.alpha = 0;
							vars.spin1.buttonMode = true;
							vars.spin1.interactive = true;
							vars.spin1.on("click", function() {
								active_slide++;
	    						App.mousewheelService.init();
							});

							vars.spin2.anchor.set(0.5);
							vars.spin2.position.x = renderer.width / 2 - 5;
							vars.spin2.position.y = renderer.height / 2 + 345;
							vars.spin2.alpha = 0;

							slide_container_6.addChild(vars.spin1);
							slide_container_6.addChild(vars.spin2); 
						},

						update: function() {
							var vars = this.vars;

							if(vars.init == true) {
								vars.pos += 0.06;
			    				vars.spin2.y += Math.sin(vars.pos);
							}

							if( vars.spin1 != null ) {
								if( vars.spin1.alpha < 1 ) vars.spin1.alpha += 0.01;
							}
							
							if( vars.spin2 != null ) {
								if( vars.spin2.alpha < 1 ) vars.spin2.alpha += 0.01;
							}

						},

						destroy: function() {
							var vars = this.vars;

							slide_container_6.removeChild(vars.spin1);
							slide_container_6.removeChild(vars.spin2);
						}

					}

				},

			},

			slide_7: {

				init: function() {

					console.log("Slide 7 init");

					slide_container_7 = new PIXI.Container();

					$anketa.fadeIn();

				},

				destroy: function() {

					console.log("Slide 7 destroy");

					$anketa.fadeOut();

					slide_container_7 = null;

				},

				update: function() {

				},

				elems: {

				}

			},

			slide_8: {

				init: function(active) {

					console.log("Slide 8 init");

					slide_container_8 = new PIXI.Container();
					slide_container_8.alpha = 0;

					this.elems.slider.init();
					this.elems.orderBtn.init();
					this.elems.footer.init();

					stage.addChild(slide_container_8);

				},

				destroy: function() {

					console.log("Slide 8 destroy");

					this.elems.orderBtn.destroy();
					this.elems.footer.destroy();

					stage.removeChild(slide_container_8);
					slide_container_8 = null;

				},

				update: function() {

					if( slide_container_8 != null ) {
						if( slide_container_8.alpha < 1 ) slide_container_8.alpha += 0.05;
					}

				},

				elems: {

					slider: {

						init: function() {

							var data = [
								{ url: "i/s8/slide_4.jpg", title: "Восхищенные\nвзгляды!" },
								{ url: "i/s8/slide_3.jpg", title: "Красивый\nдизайн!" },
								{ url: "i/s8/slide_2.jpg", title: "Игоровой\nпроцесс!" },
								{ url: "i/s8/slide_1.jpg", title: "Быстрый\nотклик!" }
							],
								slides = new PIXI.Container(),
								slide_ind = 0;

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
							var prev_btn_texture = PIXI.Texture.fromImage("i/s8/prev.svg");

							prev_btn = new PIXI.Sprite(prev_btn_texture);
							prev_btn.width = 45;
							prev_btn.height = 45;
							prev_btn.x = renderer.width / 2 - 500;
							prev_btn.y = renderer.height / 2;
							prev_btn.buttonMode = true;
							prev_btn.interactive = true;
							prev_btn.on("click", function() {
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

							slide_container_8.addChild(prev_btn);

							// Next btn
							var next_btn_texture = PIXI.Texture.fromImage("i/s8/next.svg");

							next_btn = new PIXI.Sprite(next_btn_texture);
							next_btn.width = 45;
							next_btn.height = 45;
							next_btn.x = renderer.width / 2 + 500;
							next_btn.y = renderer.height / 2;
							next_btn.buttonMode = true;
							next_btn.interactive = true;
							next_btn.on("click", function() {
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

							slide_container_8.addChild(next_btn);
					
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

						}

					},

					footer: {

						element: null,

						init: function() {

							$footer.addClass("active");

						},

						destroy: function() {

							$footer.removeClass("active");

						}
					}

				}

			}
		}

	}
	// END: App



	// START: Web Font
	window.WebFontConfig = {
	    custom: {
	        families: ["HelveticaNeueCyr-Light", "Plumb-Black", "PlumbCondensed-Bold", "FiraSansMedium", "BebasRegular"],
	        urls: ['css/style.css']
	    },
	    active: function() {
	    	App.init();
	    }
	};

	(function() {
	    var wf = document.createElement('script');
	    wf.src = ('https:' === document.location.protocol ? 'https' : 'http') +
	        '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
	    wf.type = 'text/javascript';
	    wf.async = 'true';
	    var s = document.getElementsByTagName('script')[0];
	    s.parentNode.insertBefore(wf, s);
	})();
	// END: Web font



}(this, jQuery));