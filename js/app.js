(function(window, $) {



	// START: Variables
	window.App = window.App || {};

	var $body = $("body"),
		$preloader = $(".preloader"),
		$footer = $("footer"),
		$main_menu = $(".main-menu"),
		$menu_icon = $(".menu-icon-wrp"),
		$menu_popup = $(".menu-popup"),
		$menu_popup_nav = $(".menu-popup-nav"),
		$menu_close_btn = $(".popup-closebtn"),
		$step_pult = $(".step-pult ul"),
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

		active_slide = 1,
		active_scene = 1,

		slide_3_complete = false,
		slide_6_complete = false,

		SLIDE_ANIMATION_TIME = 2000,
		SCENE_ANIMATION_TIME = 1500;
    // END: Variables



	// Start: App
	App = {

		init: function() {

			createjs.Ticker.setFPS(60);

			$body.append(renderer.view);
			requestAnimationFrame(animate);

		    function animate() {

		    	App.managerService["slide_" + active_slide].update();

		        renderer.render(stage);
		        requestAnimationFrame(animate);

		    }	

		  	App.Binder();
		  	App.SlideController.init();

		},

		SlideController: {

			init: function() {
				App.managerService.slide_1.init().then(function() { App.WheelController.unlockWheel() });
			},

			moveTo: function(from, to) {
				console.log([from, to]);

				App.NavController.setActive();

				if( to == 3 && slide_3_complete == false ) {
					App.managerService["slide_" + from].destroy();
					App.managerService["slide_3"].init();

					return;
				}

				if( to == 6 && slide_6_complete == false ) {
					App.managerService["slide_" + from].destroy();
					App.managerService["slide_6"].init();

					return;
				}

				App.managerService["slide_" + from].destroy();
				App.managerService["slide_" + to].init().then(function() { 
					App.WheelController.unlockWheel();
				});
			}

		},

		WheelController: {

			checkDirection: function(event) {

				if(event) {
					if(event.originalEvent.wheelDelta < 0) {
						// scroll down
						if( active_slide < Object.keys(App.managerService).length ) App.SlideController.moveTo(active_slide, ++active_slide);
						else App.WheelController.unlockWheel();
					} else {
						// scroll top
						if( active_slide > 1 ) App.SlideController.moveTo(active_slide, --active_slide);
						else App.WheelController.unlockWheel();
					}
				}

		    },

		    unlockWheel: function() {
				$body.unbind("mousewheel").one("mousewheel", App.WheelController.checkDirection);
			},

		},

		NavController: {

			setActive: function() {
				$main_menu.find("a").removeClass("main-menu-link-active");
	    		$main_menu.find("li").eq(active_slide - 1).children().addClass("main-menu-link-active");

			}

		},

		Binder: function() {

			$menu_icon.on("click", function() {
    			$menu_popup.fadeIn();
    			$(this).fadeOut();
    		});

    		$menu_close_btn.on("click", function() {
    			$menu_icon.fadeIn();
    			$menu_popup.hide();
    		});

    		$main_menu.find("li").on("click", function() {
    			if( active_slide != $(this).index() + 1 ) {
    				App.SlideController.moveTo(active_slide, $(this).index() + 1);
	    			active_slide = $(this).index() + 1;
	    			App.NavController.setActive();
    			}

    			return false;
    		});

    		$menu_popup_nav.find("li").on("click", function() {
    			$menu_popup.hide();
    			App.SlideController.moveTo(active_slide, $(this).index() + 1);
    			active_slide = $(this).index() + 1;
    			App.NavController.setActive();

    			return false;
    		});

    		$order_btn.on("click", function() {
    			App.SlideController.moveTo(active_slide, 7);
    			active_slide = 7;
    			App.NavController.setActive();
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

			slide_1: {

				init: function() {
					console.log("Slide 1 init");

					var deferred = $.Deferred();

					$preloader.hide();

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

  					setTimeout(function() {
						deferred.resolve();
					}, SLIDE_ANIMATION_TIME);

  					return deferred;

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
					this.elems.slider.update();
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
						slides: null,
						reverse: false,

						init: function() {

							var data = [
								{ url: "i/s1/slide_1.jpg", x_pos: -25, color: "0xffffff" },
								{ url: "i/s1/slide_2.jpg", x_pos: 0, color: "0xffffff" },
								{ url: "i/s1/slide_3.jpg", x_pos: 25, color: "0xffffff" }
							],
								data_length = data.length,
								slides = new PIXI.Container(),
								dotes = new PIXI.Container(),
								slide_ind = 0;

							this.slides = slides;
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

							while(data_length--) {
								var slide = new Slide( data_length, data[data_length].url );

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

									createjs.Tween.get(slides.children[index])
  										.to({ alpha: 1 }, 2000, createjs.Ease.getPowInOut(4));

									for(var i = 0; i < slides.children.length; i++) {
										if(i != index) {
											createjs.Tween.get(slides.children[i])
  												.to({ alpha: 0}, 2000, createjs.Ease.getPowInOut(4));
  										}
									}
								});

								return dot;
							}

							function draw(index){
								for(var i = 0; i < dotes.children.length; i++) {
									dotes.removeChild(dotes.children[i]);
								}

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

						},

						update: function() {

							if( this.slides != null) {
								if( this.reverse == false ) {
									if( this.slides.scale.x < 1.1 ) {
										this.slides.scale.x += 0.00008;
									} else {
										this.reverse = true;
									}
								} else {
									if( this.slides.scale.x > 1 ) {
										this.slides.scale.x -= 0.00008;
									} else {
										this.reverse = false;
									}
								}
								
								if( this.reverse == false ) {
									if( this.slides.scale.y < 1.1 ) {
										this.slides.scale.y += 0.00008;
									} else {
										this.reverse = true;
									}
								} else {
									if( this.slides.scale.y > 1 ) {
										this.slides.scale.y -= 0.00008;
									} else {
										this.reverse = false;
									}
								}
							}

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
	    						App.WheelController.init();
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

					var deferred = $.Deferred();

					slide_container_2 = new PIXI.Container();

					this.elems.title_1.init();
					this.elems.title_2.init();
					this.elems.title_3.init();
					this.elems.title_4.init();
					this.elems.info.init();
					this.elems.border.init();
					this.elems.arrowDown.init();

					stage.addChild(slide_container_2);

					setTimeout(function() {
						deferred.resolve();
					}, SLIDE_ANIMATION_TIME);

					return deferred;

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
					this.SceneController.init();	
					this.NavController.setActive(0, 0);
					this.Binder.init();
					stage.addChild(slide_container_3);	

					if( slide_3_complete == true ) {

						var deferred = $.Deferred();

						setTimeout(function() {
							deferred.resolve();
						}, SLIDE_ANIMATION_TIME);

	  					return deferred;
					}		

				},

				destroy: function() {

					console.log("Slide 3 destroy");

					this.elems.menu.destroy();
					stage.removeChild(slide_container_3);
					slide_container_3 = null;
					if( active_scene == 6 ) slide_3_complete = true;
					active_scene = 1;	

					if( slide_3_complete == false ) {
						var deferred = $.Deferred();
						
						setTimeout(function() {
							deferred.resolve();
						}, SLIDE_ANIMATION_TIME);

	  					return deferred;
					}	

				},

				update: function() {

				},

				Binder: {

					init: function() {
						$hyde_menu.addClass("complete").children().on("click", function() {
							var prev_scene = active_scene;
							active_scene = $(this).index() + 1;
							App.managerService.slide_3.SceneController.moveTo(prev_scene, active_scene);							
						});
					}

				},

				SceneController: {

					init: function() {
						App.managerService.slide_3.elems.menu["scene_1"].init().then(function() { 
							App.managerService.slide_3.WheelController.unlockWheel();
						});
					},

					moveTo: function(from, to) {
						console.log("Scene: " + [from, to]);

						var top_pos = 0,
							left_pos = 0;

						switch(active_scene) {
							case 1: 
								top_pos = 0;
								left_pos = 0;

								break;

							case 2:
								top_pos = 0;
								left_pos = $hyde_menu.children().width();

								break;

							case 3:
								top_pos = $hyde_menu.children().height();
								left_pos = 0;

								break;

							case 4: 
								top_pos = $hyde_menu.children().height();
								left_pos = $hyde_menu.children().width();

								break;

							case 5:
								top_pos = $hyde_menu.children().height() * 2;
								left_pos = 0;

								break;

							case 6:
								top_pos = $hyde_menu.children().height() * 2;
								left_pos = $hyde_menu.children().width();

								break;

						}

						App.managerService.slide_3.NavController.setActive(top_pos, left_pos);
						App.managerService.slide_3.elems.menu["scene_" + from].destroy();
						App.managerService.slide_3.elems.menu["scene_" + to].init().then(function() { 
							App.managerService.slide_3.WheelController.unlockWheel();
						});

					}

				},

				WheelController: {

					checkDirection: function(event) {
						if(event) {
							if(event.originalEvent.wheelDelta < 0) {
								// scroll top
								if( active_scene < 6 ) App.managerService.slide_3.SceneController.moveTo(active_scene, ++active_scene);
								else App.SlideController.moveTo(active_slide, ++active_slide);
							} else {
								// scroll down
								if( active_scene > 1 ) App.managerService.slide_3.SceneController.moveTo(active_scene, --active_scene);
								else App.SlideController.moveTo(active_slide, --active_slide);
							}
						}
					},

					unlockWheel: function() {
						if( slide_3_complete == false ) $body.unbind("mousewheel").one("mousewheel", App.managerService.slide_3.WheelController.checkDirection);
					}

				},

				NavController: {

					setActive: function(top, left) {
						$hover.animate({ "top" : top, "left" : left }, function() {
							$hyde_menu.children().removeClass("active").eq(active_scene - 1).addClass("active");
						});
					}

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
								var deferred = $.Deferred(),
									title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								App.managerService.slide_3.elems.menu.init();
								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/1/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

								setTimeout(function() {
									deferred.resolve();
								}, SCENE_ANIMATION_TIME);

			  					return deferred;
							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						scene_2: {

							el: null,

							init: function() {
								var deferred = $.Deferred(),
									title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/2/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

								setTimeout(function() {
									deferred.resolve();
								}, SCENE_ANIMATION_TIME);

			  					return deferred;

							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						scene_3: {

							el: null,

							init: function() {
								var deferred = $.Deferred(),
									title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/3/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

								setTimeout(function() {
									deferred.resolve();
								}, SCENE_ANIMATION_TIME);

			  					return deferred;

							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						scene_4: {

							el: null,

							init: function() {
								var deferred = $.Deferred(),
									title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/4/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

								setTimeout(function() {
									deferred.resolve();
								}, SCENE_ANIMATION_TIME);

			  					return deferred;

							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						scene_5: {

							el: null,

							init: function() {
								var deferred = $.Deferred(),
									title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/5/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

								setTimeout(function() {
									deferred.resolve();
								}, SCENE_ANIMATION_TIME);

			  					return deferred;

							},

							destroy: function() {
								this.el.destroy(this.el);
							}

						},

						scene_6: {

							el: null,

							init: function() {
								var deferred = $.Deferred(),
									title_top = "ХОТИТЕ ЗНАТЬ, КАКИЕ ЦВЕТА ПОДХОДЯТ ВАМ ИДЕАЛЬНО?\nДЛЯ ВАШЕГО ИМИДЖ-ГАЙДА СПЕЦИАЛИСТ СОСТАВИТ\nПЕРСОНАЛЬНУЮ ЦВЕТОВУЮ КАРТУ ВАШЕЙ ВНЕШНОСТИ!",
									title_down = "ТЕПЕРЬ ВСЯ ОДЕЖДА БУДЕТ ПОДЧЕРКИВАТЬ КРАСОТУ\nВАШИХ ГЛАЗ И НЕЖНЫЙ ОТТЕНОК ВАШЕЙ КОЖИ.";

								this.el = new App.managerService.slide_3.elems.menu.Scene("i/s3/6/wears.jpg", title_top, title_down);
								slide_container_3.addChild(this.el);
								this.el.init(this.el);

								setTimeout(function() {
									deferred.resolve();
								}, SCENE_ANIMATION_TIME);

			  					return deferred;

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
									App.WheelController.init();
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

					var deferred = $.Deferred();

					slide_container_4 = new PIXI.Container();

					this.elems.bg.init();
					this.elems.title.init();
					this.elems.info.init();
					this.elems.slider.init();

					stage.addChild(slide_container_4);

					setTimeout(function() {
						deferred.resolve();
					}, SLIDE_ANIMATION_TIME);

					return deferred;

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
							speed: 500,
							init_wait: 300
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
								.wait(this.anim_params.init_wait)
  								.to({ y: renderer.height}, this.anim_params.speed, createjs.Ease.getPowInOut(4));

						}

					},

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

						}

					},

					slider: {

						el: 		null,
						prev_btn: 	null,
						next_btn: 	null,

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
								slide_ind = 0;

							this.el = slides;
							slides.alpha = 0;
							slides.position.y = renderer.height * 2;

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
								this.sprite.position.y = 0;
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
								.wait(300)
								.to({ alpha: 1, y: renderer.height - 400 - 250 }, 1000, createjs.Ease.getPowInOut(4));

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

					var deferred = $.Deferred();

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

					setTimeout(function() {
						deferred.resolve();
					}, SLIDE_ANIMATION_TIME);

					return deferred;

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

					$step_pult.parent().addClass("active");
					this.NavController.setActive();
					this.SceneController.init();
					this.spinner.init();
					this.Binder.init();

					stage.addChild(slide_container_6);

					if( slide_6_complete == true ) {
						
						$step_pult.parent().addClass("complete");

						var deferred = $.Deferred();

						setTimeout(function() {
							deferred.resolve();
						}, SLIDE_ANIMATION_TIME);

	  					return deferred;
					}

				},

				destroy: function() {

					console.log("Slide 6 destroy");

					$step_pult.parent().removeClass("active");
					this.spinner.destroy();
					App.managerService.slide_6["scene_" + active_scene].destroy();
					if( active_scene == 6 ) slide_6_complete = true;
					active_scene = 1;

					slide_container_6 = null;
					
					if( slide_6_complete == false ) {
						var deferred = $.Deferred();
						
						setTimeout(function() {
							deferred.resolve();
						}, SLIDE_ANIMATION_TIME);

	  					return deferred;
					}	

				},

				update: function() {
					this.spinner.update();
				},

				Binder: {

					init: function() {
						$step_pult.children().on("click", function() {
							App.managerService.slide_6.SceneController.moveTo(active_scene, $(this).index() + 1);
							active_scene = $(this).index() + 1;
							App.managerService.slide_6.NavController.setActive();
						});
					}

				},

				WheelController: {

					checkDirection: function(event) {
						if(event) {
							if(event.originalEvent.wheelDelta < 0) {
								// scroll down
								if( active_scene < 6 ) App.managerService.slide_6.SceneController.moveTo(active_scene, ++active_scene);
								else {
									App.managerService.slide_6["scene_" + active_scene].destroy();
									App.SlideController.moveTo(active_slide, ++active_slide);
								}
							} else {
								// scroll top
								if( active_scene > 1 ) App.managerService.slide_6.SceneController.moveTo(active_scene, --active_scene);
								else {
									App.managerService.slide_6["scene_" + active_scene].destroy();
									App.SlideController.moveTo(active_slide, --active_slide);
								}
							}
						}
					},

					unlockWheel: function() {
						if( slide_6_complete == false ) $body.unbind("mousewheel").one("mousewheel", App.managerService.slide_6.WheelController.checkDirection);
					}

				},

				SceneController: {

					init: function() {
						App.managerService.slide_6["scene_" + active_scene].init().then(function() { 
							App.managerService.slide_6.WheelController.unlockWheel();
						});
					},

					moveTo: function(from, to) {
						console.log([from, to]);

						if( from == to ) return;

						App.managerService.slide_6.NavController.setActive();

						App.managerService.slide_6["scene_" + from].destroy();
						App.managerService.slide_6["scene_" + to].init().then(function() { 
							App.managerService.slide_6.WheelController.unlockWheel();
						});
					}

				},

				NavController: {

					setActive: function() {
						$step_pult.children().removeClass("step-pult-item-active");
						$step_pult.children().eq(active_scene - 1).addClass("step-pult-item-active");
					}

				},

				Scene: function(title, info, btn_title, pic) {

					// pic
					var pic_texture = PIXI.Texture.fromImage(pic.url),
						Pic = new PIXI.Sprite(pic_texture);
					Pic.anchor.set(0.5);
					Pic.position.x = pic.x;
					Pic.position.y = pic.y;

					// title
					var style = {
							font : '110px Plumb-Black',
						    fill : '#fa6464',
						    align : "center",
						    padding : 20,
						    lineHeight : 105
						},
						Title = new PIXI.Text(title.text, style);
					Title.x = title.x;	
					Title.y = title.y;
					Title.anchor.x = .5;
					Title.anchor.y = .5;

  					// info
  					var style = {
						font : '16px HelveticaNeueCyr-Light',
					    fill : '#3c3c3c',
					    align : "center"
					},
						Info = new PIXI.Text(info.text, style);
					Info.x = info.x;	
					Info.y = info.y;

					var Border = new PIXI.Graphics();
					Border.lineStyle(3, 0x3c3c3c, 1);
					Border.beginFill(0x000000, 0);
					Border.drawRect( 0, 0, Info.width + 40, Info.height + 40 );
					Border.position.x = -info.x;
					Border.position.y = info.y - 17;

  					// btn
  					var btn_texture = PIXI.Texture.fromImage("i/s6/circle.svg"),
						Btn = new PIXI.Sprite(btn_texture);
					Btn.anchor.set(0.5);
					Btn.position.x = btn_title.x;
					Btn.position.y = btn_title.y;
					Btn.buttonMode = true;
					Btn.interactive = true;
					Btn.on("click", function() {
						App.SlideController.moveTo(active_slide, 7);
		    			active_slide = 7;
		    			App.NavController.setActive();
					});

					var style = {
						font : '24px BebasRegular',
					    fill : '#ffffff'
					},
						Btn_title = new PIXI.Text(btn_title.text, style);
					
					Btn_title.x = btn_title.x;	
					Btn_title.y = btn_title.y;
					Btn_title.anchor.set(0.5);
					Btn_title.rotation = -0.3;


					var scene = new PIXI.Container();
					scene.addChild(Pic);
					scene.addChild(Title);
					scene.addChild(Info);
					scene.addChild(Border);
					scene.addChild(Btn);
					scene.addChild(Btn_title);


  					scene.init = function() {
  						// pic
  						createjs.Tween.get(Pic)
  							.to({ y: pic.y_to }, 3000, createjs.Ease.getPowInOut(4));

  						// title 
  						createjs.Tween.get(Title)
							.to({ y: title.y_to }, 2000, createjs.Ease.getPowInOut(4));

  						// info 
  						createjs.Tween.get(Info)
							.wait(600)
	  						.to({ x: info.x_to - Info.width/2 }, 1000, createjs.Ease.getPowInOut(4));

	  					createjs.Tween.get(Border)
							.wait(600)
	  						.to({ x: info.x_to - Border.width/2}, 1000, createjs.Ease.getPowInOut(4));

  						// btn
  						createjs.Tween.get(Btn)
							.wait(0)
	  						.to({ y: btn_title.y_to }, 1000, createjs.Ease.getPowInOut(4));

	  					createjs.Tween.get(Btn_title)
							.wait(200)
	  						.to({ y: btn_title.y_to }, 1000, createjs.Ease.getPowInOut(4));
  					};

  					scene.destroy = function() {
  						// pic
  						createjs.Tween.get(Pic)
		  						.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

		  				// title
		  				createjs.Tween.get(Title)
	  						.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

	  					// info 
	  					createjs.Tween.get(Info)
	  						.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

	  					createjs.Tween.get(Border)
	  						.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

	  					// btn 
	  					createjs.Tween.get(Btn)
	  						.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));

	  					createjs.Tween.get(Btn_title)
	  						.to({ y: renderer.height*2 }, 1000, createjs.Ease.getPowInOut(4));
  					};

					return scene;
				},

				scene_1: {

					el: null,

					init: function() {
						var title = {
								text: "ЗАПОЛНИТЕ\nАНКЕТУ\nНА САЙТЕ",
								x: renderer.width / 2,
								y: -renderer.height,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 - 50
							}, 
							info = {
								text: "Стилисты “Модного приговора” получат Ваши данные,\nопределят Ваш цветотип, тип фигуры, овал лица\nи составят подробную инструкцию преображения!",
								x: renderer.width,
								y: renderer.height / 2 + 200,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 + 200
							},
							btn_title = {
								text: "ЗАПОЛНИТЬ",
								x: renderer.width / 2 - 280,
								y: -renderer.height,
								x_to: renderer.width / 2 - 280,
								y_to: renderer.height / 2 - 10
							},
							pic = {
								url: "i/s6/notepade.png",
								x: renderer.width / 2 + 300,
								y: -renderer.height,
								x_to: renderer.width / 2 + 300,
								y_to: renderer.height / 2
							},
							scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

						this.el = scene;
						slide_container_6.addChild(scene);
						scene.init();

						var deferred = $.Deferred();

						setTimeout(function() {
							deferred.resolve();
						}, SLIDE_ANIMATION_TIME);

	  					return deferred;
					},

					destroy: function() {
						this.el.destroy();
					}

				},

				scene_2: {

					el: null,

					init: function() {
						var title = {
								text: "ПОЛУЧИТЕ\nИМИДЖ-ГАЙД",
								x: renderer.width / 2,
								y: -renderer.height,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 - 50
							}, 
							info = {
								text: "Имидж-гайд придет на Ваш e-mail в формате PDF.\nВы можете его распечатать или читать с экрана\nмобильного устройства.\nВаш личный стилист в кармане!",
								x: renderer.width,
								y: renderer.height / 2 + 130,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 + 130
							},
							btn_title = {
								text: "ПОЛУЧИТЬ",
								x: renderer.width / 2 + 340,
								y: -renderer.height,
								x_to: renderer.width / 2 + 340,
								y_to: renderer.height / 2 - 75
							},
							pic = {
								url: "i/s6/book.png",
								x: renderer.width / 2 - 300,
								y: -renderer.height,
								x_to: renderer.width / 2 - 300,
								y_to: renderer.height / 2 - 50
							},
							scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

						this.el = scene;
						slide_container_6.addChild(scene);
						scene.init();

						var deferred = $.Deferred();

						setTimeout(function() {
							deferred.resolve();
						}, SLIDE_ANIMATION_TIME);

	  					return deferred;
					},

					destroy: function() {
						this.el.destroy();
					}

				},

				scene_3: {

					el: null,

					init: function() {
						var title = {
								text: "УЗНАВАЙТЕ",
								x: renderer.width / 2,
								y: -renderer.height,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 - 50
							}, 
							info = {
								text: "В имидж-гайде Вы найдете описание своего\nцветотипа, типа фигуры и формы лица. Взгляните\nна себя новым взглядом и откройте секреты\nсобственной красоты!",
								x: renderer.width,
								y: renderer.height / 2 + 120,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 + 120
							},
							btn_title = {
								text: "ЗАКАЗАТЬ",
								x: renderer.width / 2 - 320,
								y: -renderer.height,
								x_to: renderer.width / 2 - 320,
								y_to: renderer.height / 2 + 50
							},
							pic = {
								url: "i/s6/lamp.png",
								x: renderer.width / 2 + 300,
								y: -renderer.height,
								x_to: renderer.width / 2 + 300,
								y_to: renderer.height / 2 - 80
							},
							scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

						this.el = scene;
						slide_container_6.addChild(scene);
						scene.init();

						var deferred = $.Deferred();

						setTimeout(function() {
							deferred.resolve();
						}, SLIDE_ANIMATION_TIME);

	  					return deferred;
					},

					destroy: function() {
						this.el.destroy();
					}

				},

				scene_4: {

					el: null,

					init: function() {
						var title = {
								text: "МЕНЯЙТЕСЬ",
								x: renderer.width / 2,
								y: -renderer.height,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 - 50
							}, 
							info = {
								text: "Отправляйтесь в магазин или салон красоты -\nпрактические рекомендации помогут Вам\nс уверенностью профи создавать модные\nи яркие образы.",
								x: renderer.width,
								y: renderer.height / 2 + 120,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 + 120
							},
							btn_title = {
								text: "ЗАКАЗАТЬ",
								x: renderer.width / 2 + 320,
								y: -renderer.height,
								x_to: renderer.width / 2 + 320,
								y_to: renderer.height / 2 + 50
							},
							pic = {
								url: "i/s6/fen.png",
								x: renderer.width / 2 - 300,
								y: -renderer.height,
								x_to: renderer.width / 2 - 300,
								y_to: renderer.height / 2 - 80
							},
							scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

						this.el = scene;
						slide_container_6.addChild(scene);
						scene.init();

						var deferred = $.Deferred();

						setTimeout(function() {
							deferred.resolve();
						}, SLIDE_ANIMATION_TIME);

	  					return deferred;
					},

					destroy: function() {
						this.el.destroy();
					}

				},

				scene_5: {

					el: null,

					init: function() {
						var title = {
								text: "ПРОБУЙТЕ",
								x: renderer.width / 2,
								y: -renderer.height,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 - 50
							}, 
							info = {
								text: "Благодаря имидж-гайду Вы научитесь\nсамостоятельно сочетать аксессуары\nи элементы одежды.",
								x: renderer.width,
								y: renderer.height / 2 + 120,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 + 120
							},
							btn_title = {
								text: "ЗАКАЗАТЬ",
								x: renderer.width / 2 - 280,
								y: -renderer.height,
								x_to: renderer.width / 2 - 280,
								y_to: renderer.height / 2 - 120
							},
							pic = {
								url: "i/s6/dress.png",
								x: renderer.width / 2 + 300,
								y: -renderer.height,
								x_to: renderer.width / 2 + 300,
								y_to: renderer.height / 2 - 80
							},
							scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

						this.el = scene;
						slide_container_6.addChild(scene);
						scene.init();

						var deferred = $.Deferred();

						setTimeout(function() {
							deferred.resolve();
						}, SLIDE_ANIMATION_TIME);

	  					return deferred;
					},

					destroy: function() {
						this.el.destroy();
					}

				},

				scene_6: {

					el: null,

					init: function() {
						var title = {
								text: "ЧУВСТВУЙТЕ",
								x: renderer.width / 2,
								y: -renderer.height,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 - 50
							}, 
							info = {
								text: "Новый имидж – шаг в новую жизнь.\nЧувствуйте перемены, наслаждайтесь собой!",
								x: renderer.width,
								y: renderer.height / 2 + 120,
								x_to: renderer.width / 2,
								y_to: renderer.height / 2 + 120
							},
							btn_title = {
								text: "ЗАКАЗАТЬ",
								x: renderer.width / 2 + 250,
								y: -renderer.height,
								x_to: renderer.width / 2 + 250,
								y_to: renderer.height / 2 - 130
							},
							pic = {
								url: "i/s6/hair.png",
								x: renderer.width / 2 - 250,
								y: -renderer.height,
								x_to: renderer.width / 2 - 250,
								y_to: renderer.height / 2 - 80
							},
							scene = new App.managerService.slide_6.Scene(title, info, btn_title, pic);

						this.el = scene;
						slide_container_6.addChild(scene);
						scene.init();

						var deferred = $.Deferred();

						setTimeout(function() {
							deferred.resolve();
						}, SLIDE_ANIMATION_TIME);

	  					return deferred;
					},

					destroy: function() {
						this.el.destroy();
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
    						App.WheelController.init();
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

			slide_7: {

				init: function() {

					console.log("Slide 7 init");

					var deferred = $.Deferred();

					slide_container_7 = new PIXI.Container();

					$anketa.fadeIn(function() {
						var row = $anketa.find(".anketa-row"),
							delay = 100;

						row.each(function() {
							var that = $(this);

							setTimeout(function() {
								that.animate({ "opacity" : 1 }, 500);
							}, delay);

							delay += 100;
						});
					});

					setTimeout(function() {
						deferred.resolve();
					}, SLIDE_ANIMATION_TIME);

					return deferred;

				},

				destroy: function() {

					console.log("Slide 7 destroy");

					$anketa.fadeOut(function() {
						$(this).find(".anketa-row").css({ "opacity" : 0 });
					});

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

					var deferred = $.Deferred();

					slide_container_8 = new PIXI.Container();
					slide_container_8.alpha = 0;

					this.elems.slider.init();
					this.elems.orderBtn.init();
					this.elems.footer.init();

					stage.addChild(slide_container_8);

					setTimeout(function() {
						deferred.resolve();
					}, SLIDE_ANIMATION_TIME);

					return deferred;

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