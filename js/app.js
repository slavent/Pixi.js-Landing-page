(function(window, $) {



	// START: Variables
	window.App = window.App || {};

	var $body = $("body"),
		$footer = $("footer"),
		$main_menu = $(".main-menu"),
		$menu_icon = $(".menu-icon-wrp"),
		$menu_popup = $(".menu-popup"),
		$menu_popup_nav = $(".menu-popup-nav"),
		$menu_close_btn = $(".menu-popup-closebtn"),
		$landing_nav = $(".landing-nav ul"),

		w_width = $(window).width(),
		w_height = $(window).height(),
		renderer = new PIXI.autoDetectRenderer(w_width, w_height, { transparent: true }),
		stage = new PIXI.Container(),

		slide_container_1 = null,
		slide_container_2 = null,
		slide_container_3 = null,
		slide_container_4 = null,
		slide_container_5 = null,
		slide_container_6 = null,
		slide_container_7 = null,
		slide_container_8 = null,

		active_slide = 1;
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
		    			App.manager.slide_1.update();

		    			break;

		    		case 2: 
		    			App.manager.slide_2.update();
		    			
		    			break;

		    		case 3: 
		    			App.manager.slide_3.update();
		    			
		    			break;

		    		case 4: 
		    			App.manager.slide_4.update();
		    			
		    			break;

		    		case 5: 
		    			App.manager.slide_5.update();
		    			
		    			break;

		    		case 6: 
		    			App.manager.slide_6.update();
		    			
		    			break;

		    		case 7: 
		    			App.manager.slide_7.update();
		    			
		    			break;

		    		case 8: 
		    			App.manager.slide_8.update();
		    			
		    			break;

		    	}

		        renderer.render(stage);
		        requestAnimationFrame(animate);

		    }			

		    App.initPult();
		  	App.binder();
		  	App.manager.init();
		  	App.initNav(active_slide);

		},

		initScroll: {

			scroll: function(event) {

				// For scroll navigation
				if(event.originalEvent.wheelDelta < 0) {
					// scroll down
					active_slide++;
				} else {
					// scroll top
					active_slide--;
				}

				if(active_slide >= 1 && active_slide <= 7) {

					switch (active_slide) {

						case 1: 
							setTimeout(function() {
								App.manager.slide_1.init();
							}, 2000);
							App.manager.slide_2.destroy();
							break;

						case 2: 
							App.manager.slide_1.destroy();
							App.manager.slide_2.init();
							break;

						case 3: 
							App.manager.slide_2.destroy();
							setTimeout(function() {
								App.manager.slide_3.init();
							}, 2000);
							break;

						case 4: 
							App.manager.slide_3.destroy();
							setTimeout(function() {
								App.manager.slide_4.init();
							}, 2000);
							break;

						case 5: 
							App.manager.slide_4.destroy();
							setTimeout(function() {
								App.manager.slide_5.init();
							}, 2000);
							break;

						case 6: 
							App.manager.slide_5.destroy();
							setTimeout(function() {
								App.manager.slide_6.init();
							}, 2000);
							break;

						case 7: 
							App.manager.slide_6.destroy();
							setTimeout(function() {
								App.manager.slide_7.init();
							}, 2000);
							break;

						case 8: 
							App.manager.slide_7.destroy();
							setTimeout(function() {
								App.manager.slide_8.init();
							}, 2000);
							break;

					}

					App.initNav(active_slide);

				}

		    }

		},

		initPult: function() {

			setTimeout(function() {
				$landing_nav.parent().css({ "right" : "30px" });
			}, 3000);

		},

		initNav: function(ind) {

			ind--;
			$landing_nav.children().removeClass("landing-nav-item-active");
			$landing_nav.children().eq(ind).addClass("landing-nav-item-active");

			$main_menu.find("a").removeClass("main-menu-link-active");
    		$main_menu.find("li").eq(ind).children().addClass("main-menu-link-active");

		},

		binder: function() {

			$body.on("mousewheel", $.debounce(200, true, App.initScroll.scroll));

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
    			App.initScroll.scroll();

    			return false;
    		});

    		$menu_popup_nav.find("li").on("click", function() {
    			active_slide = $(this).index() + 1;
    			App.initScroll.scroll();
    			$menu_popup.hide();

    			return false;
    		});

	    },

		manager: {

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
  						.to({ alpha: 1 }, 500, createjs.Ease.getPowInOut(4));

				},

				destroy: function() {

					console.log("Slide 1 destroy");

					createjs.Tween.get(slide_container_1)
  						.to({ alpha: 0 }, 1000, createjs.Ease.getPowInOut(4))
  						.call(function() {
  							stage.removeChild(slide_container_1);
  						});

				},

				update: function() {
			    	this.elems.spinner.update();
			    	this.elems.slider.update();
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
						vars: {
							slide_container_1_texture: 	null,
							slide_container_1_sprite: 		null,
							slide_container_2_texture: 	null,
							slide_container_2_sprite: 		null,
							slide_container_3_texture: 	null,
							slide_container_3_sprite: 		null,
							dot1_texture: 		null,
							dot1: 				null,
							dot2_texture: 		null,
							dot2: 				null,
							dot3_texture: 		null,
							dot4: 				null,
							timer: 				null,
							next: 				0
						},

						init: function() {
							var vars = this.vars;

							this.makeslide_container_1();
							this.makeslide_container_2();
							this.makeslide_container_3();
							this.makeNav();

							vars.timer = setInterval(function() {
								if( vars.next == 3 ) {
									vars.next = 1;
								} else {
									vars.next++;
								}
							}, 7000);
						},

						update: function() {
							var vars = this.vars;

							switch(vars.next) {
								case 1: 
									if( vars.slide_container_1_sprite.alpha < 1 ) vars.slide_container_1_sprite.alpha += 0.01;
									if( vars.slide_container_2_sprite.alpha > 0 ) vars.slide_container_2_sprite.alpha -= 0.01;
									if( vars.slide_container_3_sprite.alpha > 0 ) vars.slide_container_3_sprite.alpha -= 0.01;
									break;

								case 2: 
									if( vars.slide_container_1_sprite.alpha > 0 ) vars.slide_container_1_sprite.alpha -= 0.01;
									if( vars.slide_container_2_sprite.alpha < 1 ) vars.slide_container_2_sprite.alpha += 0.01;
									if( vars.slide_container_3_sprite.alpha > 0 ) vars.slide_container_3_sprite.alpha -= 0.01;
									break;

								case 3: 
									if( vars.slide_container_1_sprite.alpha > 0 ) vars.slide_container_1_sprite.alpha -= 0.01;
									if( vars.slide_container_2_sprite.alpha > 0 ) vars.slide_container_2_sprite.alpha -= 0.01;
									if( vars.slide_container_3_sprite.alpha < 1 ) vars.slide_container_3_sprite.alpha += 0.01;
									break;
							}
						},

						makeslide_container_1: function() {
							var vars = this.vars;

							// vars.slide_container_1_texture = PIXI.Texture.fromVideo("i/s1/slide_1.mp4");
							vars.slide_container_1_texture = PIXI.Texture.fromImage("i/s1/slide_2.jpg");
							vars.slide_container_1_sprite = new PIXI.Sprite(vars.slide_container_1_texture);
							vars.slide_container_1_sprite.width = renderer.width;
							vars.slide_container_1_sprite.height = renderer.height;
							slide_container_1.addChild(vars.slide_container_1_sprite);
						},

						makeslide_container_2: function() {
							var vars = this.vars;

							vars.slide_container_2_texture = PIXI.Texture.fromImage("i/s1/slide_2.jpg");
							vars.slide_container_2_sprite = new PIXI.Sprite(vars.slide_container_2_texture);
							vars.slide_container_2_sprite.width = renderer.width;
							vars.slide_container_2_sprite.height = renderer.height;
							vars.slide_container_2_sprite.alpha = 0;
							slide_container_1.addChild(vars.slide_container_2_sprite);
						},

						makeslide_container_3: function() {
							var vars = this.vars;

							vars.slide_container_3_texture = PIXI.Texture.fromImage("i/s1/slide_3.jpg");
							vars.slide_container_3_sprite = new PIXI.Sprite(vars.slide_container_3_texture);
							vars.slide_container_3_sprite.width = renderer.width;
							vars.slide_container_3_sprite.height = renderer.height;
							vars.slide_container_3_sprite.alpha = 0;
							slide_container_1.addChild(vars.slide_container_3_sprite);
						},

						makeNav: function() {
							var vars = this.vars;

							dot1_texture = PIXI.Texture.fromImage("i/s1/dot_active.svg");
							dot1 = new PIXI.Sprite(dot1_texture);
							dot2_texture = PIXI.Texture.fromImage("i/s1/dot.svg");
							dot2 = new PIXI.Sprite(dot2_texture);
							dot3_texture = PIXI.Texture.fromImage("i/s1/dot.svg");
							dot3 = new PIXI.Sprite(dot3_texture);
								

							dot1.anchor.set(0.5);
							dot1.position.x = renderer.width / 2 - 25;
							dot1.position.y = renderer.height / 2 + 200;
							dot1.buttonMode = true;
							dot1.interactive = true;
							dot1.on("click", function() {
								clearInterval(vars.timer);
								this.texture = PIXI.Texture.fromImage("i/s1/dot_active.svg");
								dot2.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
								dot3.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
								vars.next = 1;
							});

							dot2.anchor.set(0.5);
							dot2.position.x = renderer.width / 2 - 5;
							dot2.position.y = renderer.height / 2 + 200;
							dot2.buttonMode = true;
							dot2.interactive = true;
							dot2.on("click", function() {
								clearInterval(vars.timer);
								this.texture = PIXI.Texture.fromImage("i/s1/dot_active.svg");
								dot1.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
								dot3.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
								vars.next = 2;
							});

							dot3.anchor.set(0.5);
							dot3.position.x = renderer.width / 2 + 15;
							dot3.position.y = renderer.height / 2 + 200;
							dot3.buttonMode = true;
							dot3.interactive = true;
							dot3.on("click", function() {
								clearInterval(vars.timer);
								this.texture = PIXI.Texture.fromImage("i/s1/dot_active.svg");
								dot1.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
								dot2.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
								vars.next = 3;
							});

							slide_container_1.addChild(dot1);
							slide_container_1.addChild(dot2);
							slide_container_1.addChild(dot3);
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
	    						App.initScroll.scroll();
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
								.wait(2000)
  								.to({ y: (renderer.height / 2 - this.element.height / 2) - 130 }, 300, createjs.Ease.quadOut());

						},

						update: function() {
							//if( this.element_blur.blur > 0 ) this.element_blur.blur -= 1.4;
							//if( this.element_blur.blur == 0 ) this.element.filters = null;
 						},

 						destroy: function() {
 							createjs.Tween.get(this.element)
								.wait(500)
  								.to({ y: -this.element.height }, 300, createjs.Ease.quadOut());
 						}

					},

					title_2: {

						element: null,

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
								.wait(1200)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 60 }, 500, createjs.Ease.linear());

						},

						update: function() {
							
						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(1000)
  								.to({ y: -this.element.height }, 500, createjs.Ease.linear());
						}

					},

					title_3: {

						element: null,

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
								.wait(1000)
  								.to({ y: ((renderer.height - this.element.height) / 2) + 80 }, 500, createjs.Ease.linear())
  								.to({ y: ((renderer.height - this.element.height) / 2) + 20 }, 200, createjs.Ease.linear());
						},

						update: function() {
							
						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(1200)
  								.to({ y: -this.element.height }, 500, createjs.Ease.linear());
						}

					},

					title_4: {

						element: null,
						element_blur: null,

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
								.wait(2000)
  								.to({ y: (renderer.height / 2 - this.element.height / 2) + 130 }, 300, createjs.Ease.quadOut());

						},

						update: function() {
							//if( this.element_blur.blur > 0 ) this.element_blur.blur -= 1.3;
							//if( this.element_blur.blur == 0 ) this.element.filters = null;
 						},

 						destroy: function() {
 							createjs.Tween.get(this.element)
								.wait(500)
  								.to({ y: renderer.height }, 300, createjs.Ease.quadOut());
 						}

					},

					info: {

						element: null,
						element_blur: null,

						init: function() {
							var style = {
									font : '21px HelveticaNeueCyr-Light',
								    fill : '#fa6464',
								    align : "center",
								    padding : 20
								};

							this.element_blur = new PIXI.filters.BlurFilter();
							this.element_blur.blur = 0;

							this.element = new PIXI.Text("Имидж-гайд – это ваша личная книга стиля. Десятки\nкрасочных иллюстраций, детальный разбор вашего\nгардероба и практические советы по улучшению\nвашего образа – все это на страницах\nперсонального имидж-гайда. ", style);
							this.element.x = renderer.width;	
							this.element.y = ((renderer.height - this.element.height) / 2) + 250;
							this.element.filters = [this.element_blur];
							this.element.resolution = 2;

							slide_container_2.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(2500)
  								.to({ x: (renderer.width - this.element.width) / 2 }, 500, createjs.Ease.quadOut());

						},

						update: function() {

						},

						destroy: function() {
							createjs.Tween.get(this.element)
  								.to({ x: renderer.width }, 500, createjs.Ease.quadOut());
						}

					},

					border: {

						element: null,

						init: function() {
							this.element = new PIXI.Graphics();

							this.element.lineStyle(3, 0xfa6464, 1);
							this.element.beginFill(0x000000, 0);
							this.element.drawRect( -600 , renderer.height/2 + 150 , 560 , 170);

							slide_container_2.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(2500)
  								.to({ x: renderer.width/2 + 320 }, 500, createjs.Ease.quadOut());
						},

						update: function() {

						},

						destroy: function() {
							createjs.Tween.get(this.element)
  								.to({ x: -560 }, 500, createjs.Ease.quadOut());
						}

					},

					arrowDown: {

						element: null,

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

					this.elems.menu.init();
					this.elems.pic.init();
					this.elems.btn.init();
					this.elems.title_1.init();
					this.elems.title_2.init();

					stage.addChild(slide_container_3);

				},

				destroy: function() {

					console.log("Slide 3 destroy");

					this.elems.menu.destroy();
					this.elems.pic.destroy();
					this.elems.btn.destroy();
					this.elems.title_1.destroy();
					this.elems.title_2.destroy();

					//stage.removeChild(slide_container_3);

				},

				update: function() {

				},

				elems: {

					menu: {

						element: null,

						init: function() {

							var boxes = [
								{ url: "http://lorempixel.com/400/400/", x: 0, y: 0, width: 0, height: 0, symbol: "Р" },
								{ url: "http://lorempixel.com/400/400/", x: 0, y: 0, width: 0, height: 0, symbol: "Т" },
								{ url: "http://lorempixel.com/400/400/", x: 0, y: 0, width: 0, height: 0, symbol: "С" },
								{ url: "http://lorempixel.com/400/400/", x: 0, y: 0, width: 0, height: 0, symbol: "Ц" },
								{ url: "http://lorempixel.com/400/400/", x: 0, y: 0, width: 0, height: 0, symbol: "М" },
								{ url: "http://lorempixel.com/400/400/", x: 0, y: 0, width: 0, height: 0, symbol: "П" }
							],
								hover_box = new PIXI.Graphics();

							hover_box.lineStyle(1, 0xfa6464, 0);
							hover_box.beginFill(0xfa6464, 0.9);
							hover_box.drawRect(0, 0, renderer.height / 3, renderer.height / 3);

							function moveHoverBox(x, y) {
								createjs.Tween.get(hover_box)
  									.to({ x: x , y: y }, 500, createjs.Ease.getPowInOut(4));
							}

							this.element = new PIXI.Container();
							this.element.y = -renderer.height;

							var that_element = this.element;
							for(var i = 0; i < boxes.length; i++) {

								var box_texture = PIXI.Texture.fromImage(boxes[i].url),
									box = new PIXI.Sprite(box_texture),
									style = {
										font : '90px Myriad Pro',
									    fill : '#3c3c3c',
									    align : "center"
									},
									symbol = new PIXI.Text(boxes[i].symbol, style),
									symbol_border = new PIXI.Graphics();

								symbol.position.x = (renderer.height / 3) / 2;
								symbol.position.y = (renderer.height / 3) / 2 - 80;

								symbol_border.lineStyle(3, 0x3c3c3c, 1);
								symbol_border.beginFill(0xfa6464, 0);
								symbol_border.drawRect( (renderer.height / 3) / 2 - 20 , (renderer.height / 3) / 2 - 85 , 100 , 100 );

								box.addChild(symbol_border);
								box.addChild(symbol);

								box.height = renderer.height / 3;
								box.width = renderer.height / 3;

								if( i % 2 ) {
									box.position.x = renderer.height / 3;
								} else {
									box.position.x = 0;
								}

								switch(i) {
									case 0: 
										box.position.y = 0;
										break;

									case 1: 
										box.position.y = 0;
										break;

									case 2: 
										box.position.y = (renderer.height / 3);
										break;

									case 3:
										box.position.y = (renderer.height / 3);
										break;

									case 4: 
										box.position.y = (renderer.height / 3) * 2;
										break;

									case 5:
										box.position.y = (renderer.height / 3) * 2;
										break;
								}
								
								box.buttonMode = true;
								box.interactive = true;
								box.on("mouseover", function() {
									moveHoverBox( this.position.x, this.position.y );
								});

								that_element.addChild(box);

							}

							this.element.addChild(hover_box);
							slide_container_3.addChild(this.element);


							createjs.Tween.get(this.element)
  								.to({ y: 0 }, 500, createjs.Ease.getPowInOut(4));

						},

						update: function() {

						},

						destroy: function() {
							createjs.Tween.get(this.element)
  								.to({ y: -renderer.height }, 500, createjs.Ease.getPowInOut(4));
						}

					},

					pic: {

						element: null,

						init: function() {

						},

						update: function() {

						},

						destroy: function() {

						}

					},

					btn: {

						element: null,

						init: function() {

						},

						update: function() {

						},

						destroy: function() {

						}

					},

					title_1: {

						element: null,

						init: function() {

						},

						update: function() {

						},

						destroy: function() {

						}

					},

					title_2: {

						element: null,

						init: function() {

						},

						update: function() {

						},

						destroy: function() {

						}

					}

				}

			},

			slide_4: {

				init: function() {

					console.log("Slide 4 init");

				},

				destroy: function() {

					console.log("Slide 4 destroy");

				},

				update: function() {

				},

				elems: {

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

					//stage.removeChild(slide_container_5);

				},

				update: function() {
					this.elems.orderBtn.update();
				},

				elems: {

					title_1: {

						element: null,

						init: function() {
							var style = {
									font : '20px Myriad Pro',
								    fill : '#3c3c3c',
								    align : "left",
								    padding : 50
								};

							this.element = new PIXI.Text("Стоимость базовой\nверсии", style);

							this.element.x = (renderer.width - this.element.width) / 2 - 300;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(2000)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 170 }, 500, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
  								.to({ y: -renderer.height }, 500, createjs.Ease.quadOut());
						}

					},

					title_2: {

						element: null,

						init: function() {
							var style = {
									font : '20px Myriad Pro',
								    fill : '#3c3c3c'
								};

							this.element = new PIXI.Text("Срок изготовления", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 210;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(1500)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 180 }, 500, createjs.Ease.quadOut());	

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(500)
  								.to({ y: -renderer.height }, 500, createjs.Ease.quadOut());	
						}

					},

					title_3: {

						element: null,

						init: function() {
							var style = {
									font : '14px HelveticaNeueCyr-Light',
								    fill : '#3c3c3c'
								};

							this.element = new PIXI.Text("Стоимость за каждый\nдополнительный", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 125;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(700)
  								.to({ y: ((renderer.height - this.element.height) / 2) + 170 }, 500, createjs.Ease.quadOut());	

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(1400)
  								.to({ y: -renderer.height }, 500, createjs.Ease.quadOut());	
						}

					},

					title_4: {

						element: null,

						init: function() {
							var style = {
									font : '14px HelveticaNeueCyr-Light',
								    fill : '#b48264'
								};

							this.element = new PIXI.Text("Стиль, мероприятие или праздник", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 165;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(500)
  								.to({ y: ((renderer.height - this.element.height) / 2) + 197 }, 500, createjs.Ease.quadOut());	

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(1600)
  								.to({ y: -renderer.height }, 500, createjs.Ease.quadOut());	
						}

					},

					price_1: {

						element: null,

						init: function() {

							var style = {
									font : '120px Plumb-Black',
								    fill : '#fa6464'
								};

							this.element = new PIXI.Text("2999", style);

							this.element.x = (renderer.width - this.element.width) / 2 - 180;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(1700)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 175 }, 500, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(300)
  								.to({ y: -renderer.height }, 500, createjs.Ease.quadOut());	
						}

					},

					price_2: {

						element: null,

						init: function() {

							var style = {
									font : '60px Plumb-Black',
								    fill : '#fa6464'
								};

							this.element = new PIXI.Text("РУБЛЕЙ", style);

							this.element.x = (renderer.width - this.element.width) / 2 - 220;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(1700)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 100 }, 500, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(300)
  								.to({ y: -renderer.height }, 500, createjs.Ease.quadOut());
						}

					},

					price_3: {

						element: null,

						init: function() {

							var style = {
									font : '80px Plumb-Black',
								    fill : '#fa6464'
								};

							this.element = new PIXI.Text("+999", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 90;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(1000)
  								.to({ y: ((renderer.height - this.element.height) / 2) + 80 }, 500, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(1000)
  								.to({ y: -renderer.height }, 500, createjs.Ease.quadOut());
						}

					},

					price_4: {

						element: null,

						init: function() {

							var style = {
									font : '40px Plumb-Black',
								    fill : '#fa6464'
								};

							this.element = new PIXI.Text("РУБЛЕЙ", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 130;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(1000)
  								.to({ y: ((renderer.height - this.element.height) / 2) + 130 }, 500, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(1000)
  								.to({ y: -renderer.height }, 500, createjs.Ease.quadOut());
						}

					},

					time_1: {

						element: null,

						init: function() {

							var style = {
									font : '100px Plumb-Black',
								    fill : '#b48264'
								};

							this.element = new PIXI.Text("3", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 150;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(1300)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 130 }, 500, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(700)
  								.to({ y: -renderer.height }, 500, createjs.Ease.quadOut());
						}

					},

					time_2: {

						element: null,

						init: function() {

							var style = {
									font : '30px Plumb-Black',
								    fill : '#b48264'
								};

							this.element = new PIXI.Text("РАБОЧИХ\nДНЯ", style);

							this.element.x = (renderer.width - this.element.width) / 2 + 250;	
							this.element.y = -renderer.height;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(1300)
  								.to({ y: ((renderer.height - this.element.height) / 2) - 130 }, 500, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(700)
  								.to({ y: -renderer.height }, 500, createjs.Ease.quadOut());
						}

					},

					magazine: {

						element: null,

						init: function() {

							var texture = PIXI.Texture.fromImage("i/s4/magazine.png");

							this.element = new PIXI.Sprite(texture);

							this.element.anchor.set(0.5);
							this.element.position.x = renderer.width / 2;
							this.element.position.y = renderer.height*2;

							slide_container_5.addChild(this.element);

							createjs.Tween.get(this.element)
  								.to({ y: renderer.height / 2 }, 500, createjs.Ease.quadOut());

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(1300)
  								.to({ y: renderer.height*2 }, 500, createjs.Ease.quadOut());
						}

					},

					orderBtn: {

						element: null,
						element_2: null,

						init: function() {

							var style = {
								font : '14px FiraSansRegular',
							    fill : '#fa6464'
							};

							this.element = new PIXI.Text("Заказать", style);

							this.element.x = (renderer.width - this.element.width) / 2;	
							this.element.y = ((renderer.height - this.element.height) / 2) + 260;
							this.element.alpha = 0;

							slide_container_5.addChild(this.element);

							this.element_2 = new PIXI.Graphics();

							this.element_2.lineStyle(1, 0xfa6464, 1);
							this.element_2.beginFill(0xFF00BB, 0);
							this.element_2.drawRoundedRect(renderer.width/2-50, renderer.height/2+245, 100, 30, 1);
							this.element_2.endFill();
							this.element_2.alpha = 0;

							slide_container_5.addChild(this.element_2);

						},

						destroy: function() {
							this.element.alpha = 0;
							this.element_2.alpha = 0;
						},

						update: function() {
							if( this.element != null ) {
								if(this.element.alpha < 1) this.element.alpha += 0.005;
							}

							if( this.element_2 != null ) {
								if(this.element_2.alpha < 1) this.element_2.alpha += 0.005;
							}
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

					//stage.removeChild(slide_container_6);

				},

				update: function() {

				},

				elems: {

					notepade: {

						element: null,

						init: function() {

							var texture = PIXI.Texture.fromImage("i/s5/notepade.png");

							this.element = new PIXI.Sprite(texture);
							this.element.anchor.set(0.5);
							this.element.position.x = renderer.width / 2 + 300;
							this.element.position.y = -renderer.height;

							slide_container_6.addChild(this.element);

							createjs.Tween.get(this.element)
								.wait(1500)
		  						.to({ y: renderer.height / 2 + 40 }, 3000, createjs.Ease.getPowInOut(4));


						},

						destroy: function() {
							createjs.Tween.get(this.element)
		  						.to({ y: -renderer.height }, 3000, createjs.Ease.getPowInOut(4));
						}

					},

					title: {

						element: null,

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
		  						.to({ y: ((renderer.height - this.element.height) / 2) }, 3000, createjs.Ease.getPowInOut(4));

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(1000)
		  						.to({ y: -renderer.height }, 1000, createjs.Ease.getPowInOut(4));
						}

					},

					btn: {

						element: null,
						element_2: null,

						init: function() {

							var texture = PIXI.Texture.fromImage("i/s5/circle.svg");

							this.element = new PIXI.Sprite(texture);
							this.element.anchor.set(0.5);
							this.element.position.x = renderer.width / 2 - 280;
							this.element.position.y = -renderer.height;
							this.element.buttonMode = true;
							this.element.interactive = true;
							this.element.on("click", function() {
								active_slide = 7;
								App.initScroll.scroll();
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
								.wait(500)
		  						.to({ y: ((renderer.height - this.element_2.height) / 2) + 42 }, 1000, createjs.Ease.getPowInOut(4));

		  					createjs.Tween.get(this.element_2)
								.wait(700)
		  						.to({ y: renderer.height / 2 + 30 }, 1000, createjs.Ease.getPowInOut(4));

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(700)
		  						.to({ y: -renderer.height }, 1000, createjs.Ease.getPowInOut(4));

		  					createjs.Tween.get(this.element_2)
								.wait(1000)
		  						.to({ y: -renderer.height }, 1000, createjs.Ease.getPowInOut(4));
						}

					},

					info: {

						element: null,
						element_2: null,

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
								.wait(1500)
		  						.to({ x: (renderer.width - this.element.width) / 2 }, 1000, createjs.Ease.getPowInOut(4));

		  					createjs.Tween.get(this.element_2)
								.wait(1500)
		  						.to({ x: renderer.width/2 + 380 }, 1000, createjs.Ease.getPowInOut(4));

						},

						destroy: function() {
							createjs.Tween.get(this.element)
								.wait(1000)
		  						.to({ x: renderer.width + 60 }, 1000, createjs.Ease.getPowInOut(4));

		  					createjs.Tween.get(this.element_2)
								.wait(1000)
		  						.to({ x: -600 }, 1000, createjs.Ease.getPowInOut(4));
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
							vars.spin1_texture = PIXI.Texture.fromImage("i/s5/spin1.svg");
							vars.spin1 = new PIXI.Sprite(vars.spin1_texture);
							vars.spin2_texture = PIXI.Texture.fromImage("i/s5/spin2.svg");
							vars.spin2 = new PIXI.Sprite(vars.spin2_texture);

							vars.spin1.anchor.set(0.5);
							vars.spin1.position.x = renderer.width / 2 - 5;
							vars.spin1.position.y = renderer.height / 2 + 350;
							vars.spin1.buttonMode = true;
							vars.spin1.interactive = true;
							vars.spin1.on("click", function() {
								active_slide++;
	    						App.initScroll.scroll();
							});

							vars.spin2.anchor.set(0.5);
							vars.spin2.position.x = renderer.width / 2 - 5;
							vars.spin2.position.y = renderer.height / 2 + 345;

							slide_container_6.addChild(vars.spin1);
							slide_container_6.addChild(vars.spin2); 
						},

						destroy: function() {
							var vars = this.vars;

							if(vars.init == true) {
								vars.pos += 0.06;
			    				vars.spin2.y += Math.sin(vars.pos);
			    				//vars.spin2.alpha += Math.sin(0.003);
							}

						}

					}

				},

			},

			slide_7: {

				init: function(active) {

					console.log("Slide 7 init");

					slide_container_7 = new PIXI.Container();

					stage.addChild(slide_container_7);

				},

				destroy: function() {

					console.log("Slide 7 destroy");

					stage.removeChild(slide_container_7);

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

					this.elems.slider.init();
					this.elems.orderBtn.init();
					this.elems.footer.init();

					stage.addChild(slide_container_8);

				},

				destroy: function() {

					console.log("Slide 8 destroy");

					stage.removeChild(slide_container_8);

				},

				update: function() {

					this.elems.slider.update();
					this.elems.orderBtn.update();
					this.elems.footer.update();

				},

				elems: {

					slider: {

						vars: {
							slide_container_1_texture: 	null,
							slide_container_1_sprite: 		null,
							slide_container_2_texture: 	null,
							slide_container_2_sprite: 		null,
							slide_container_3_texture: 	null,
							slide_container_3_sprite: 		null,
							active: 				1,
							next_btn_texture: 	null,
							next_btn_sprite: 	null,
							prev_btn_texture: 	null,
							prev_btn_sprite: 	null
						},

						init: function() {
							this.makeslide_container_1();
							this.makeslide_container_2();
							this.makeslide_container_3();
							this.makeNav();
						},

						update: function() {
							var vars = this.vars;

							switch(vars.active) {
								case 1: 
									if( vars.slide_container_1_sprite.alpha < 1 ) vars.slide_container_1_sprite.alpha += 0.01;
									if( vars.slide_container_2_sprite.alpha > 0 ) vars.slide_container_2_sprite.alpha -= 0.01;
									if( vars.slide_container_3_sprite.alpha > 0 ) vars.slide_container_3_sprite.alpha -= 0.01;
									break;

								case 2: 
									if( vars.slide_container_1_sprite.alpha > 0 ) vars.slide_container_1_sprite.alpha -= 0.01;
									if( vars.slide_container_2_sprite.alpha < 1 ) vars.slide_container_2_sprite.alpha += 0.01;
									if( vars.slide_container_3_sprite.alpha > 0 ) vars.slide_container_3_sprite.alpha -= 0.01;
									break;

								case 3: 
									if( vars.slide_container_1_sprite.alpha > 0 ) vars.slide_container_1_sprite.alpha -= 0.01;
									if( vars.slide_container_2_sprite.alpha > 0 ) vars.slide_container_2_sprite.alpha -= 0.01;
									if( vars.slide_container_3_sprite.alpha < 1 ) vars.slide_container_3_sprite.alpha += 0.01;
									break;
							}
						},

						makeslide_container_1: function() {
							var vars = this.vars;

							vars.slide_container_1_texture = PIXI.Texture.fromImage("i/s1/slide_2.jpg");
							vars.slide_container_1_sprite = new PIXI.Sprite(vars.slide_container_1_texture);
							vars.slide_container_1_sprite.width = renderer.width;
							vars.slide_container_1_sprite.height = renderer.height;
							slide_container_8.addChild(vars.slide_container_1_sprite);

							var style = {
									font : '65px FiraSansRegular',
								    fill : '#fff',
								    lineHeight: 65,
								    padding: 10,
								    align : "center"
								},
								title = new PIXI.Text("Восхищенные\nвзгляды!", style);

							title.x = (renderer.width - title.width) / 2;	
							title.y = ((renderer.height - title.height) / 2);

							slide_container_8.addChild(title);
						},

						makeslide_container_2: function() {
							vars = this.vars;

							vars.slide_container_2_texture = PIXI.Texture.fromImage("i/s1/slide_2.jpg");
							vars.slide_container_2_sprite = new PIXI.Sprite(vars.slide_container_2_texture);
							vars.slide_container_2_sprite.width = renderer.width;
							vars.slide_container_2_sprite.height = renderer.height;
							vars.slide_container_2_sprite.alpha = 0;
							slide_container_8.addChild(vars.slide_container_2_sprite);

							var style = {
									font : '65px FiraSansRegular',
								    fill : '#fff',
								    lineHeight: 65,
								    padding: 10,
								    align : "center"
								},
								title = new PIXI.Text("Восхищенные\nвзгляды!", style);

							title.x = (renderer.width - title.width) / 2;	
							title.y = ((renderer.height - title.height) / 2);

							slide_container_8.addChild(title);
						},

						makeslide_container_3: function() {
							vars = this.vars;

							vars.slide_container_3_texture = PIXI.Texture.fromImage("i/s1/slide_3.jpg");
							vars.slide_container_3_sprite = new PIXI.Sprite(vars.slide_container_3_texture);
							vars.slide_container_3_sprite.width = renderer.width;
							vars.slide_container_3_sprite.height = renderer.height;
							vars.slide_container_3_sprite.alpha = 0;
							slide_container_8.addChild(vars.slide_container_3_sprite);

							var style = {
									font : '65px FiraSansRegular',
								    fill : '#fff',
								    lineHeight: 65,
								    padding: 10,
								    align : "center"
								},
								title = new PIXI.Text("Восхищенные\nвзгляды!", style);

							title.x = (renderer.width - title.width) / 2;	
							title.y = ((renderer.height - title.height) / 2);

							slide_container_8.addChild(title);
						},

						makeNav: function() {
							vars = this.vars;

							vars.prev_btn_texture = PIXI.Texture.fromImage("i/s7/nav_btn.svg");
							vars.prev_btn_sprite = new PIXI.Sprite(vars.prev_btn_texture);
							vars.prev_btn_sprite.width = 45;
							vars.prev_btn_sprite.height = 45;
							vars.prev_btn_sprite.x = renderer.width / 2 - 500;
							vars.prev_btn_sprite.y = renderer.height / 2;
							vars.prev_btn_sprite.buttonMode = true;
							vars.prev_btn_sprite.interactive = true;
							vars.prev_btn_sprite.on("click", function() {
								if(vars.active > 1) vars.active--;
							});

							slide_container_8.addChild(vars.prev_btn_sprite);						

							vars.next_btn_texture = PIXI.Texture.fromImage("i/s7/nav_btn.svg");
							vars.next_btn_sprite = new PIXI.Sprite(vars.next_btn_texture);
							vars.next_btn_sprite.width = 45;
							vars.next_btn_sprite.height = 45;
							vars.next_btn_sprite.x = renderer.width / 2 + 500;
							vars.next_btn_sprite.y = renderer.height / 2 + 20;
							vars.next_btn_sprite.anchor.x = 0.5; 
							vars.next_btn_sprite.anchor.y = 0.5; 
							vars.next_btn_sprite.rotation = 3.14159265;
							vars.next_btn_sprite.buttonMode = true;
							vars.next_btn_sprite.interactive = true;
							vars.next_btn_sprite.on("click", function() {
								if(vars.active < 3) vars.active++;
							});

							slide_container_8.addChild(vars.next_btn_sprite);
						}

					},

					orderBtn: {

						element: null,
						element_2: null,

						init: function() {

							var style = {
									font : '14px FiraSansRegular',
								    fill : '#fff',
								    align : "center"
								};

							this.element = new PIXI.Text("Заказать", style);
							this.element.x = (renderer.width - this.element.width) / 2;	
							this.element.y = ((renderer.height - this.element.height) / 2) + 260;


							this.element_2 = new PIXI.Graphics();

							this.element_2.lineStyle(1, 0xffffff, 1);
							this.element_2.beginFill(0xffffff, 0);
							this.element_2.drawRoundedRect(renderer.width/2-50, renderer.height/2+245, 100, 30, 1);
							this.element_2.endFill();

							slide_container_8.addChild(this.element);
							slide_container_8.addChild(this.element_2);

						},

						update: function() {

						}

					},

					footer: {

						element: null,

						init: function() {

						},

						update: function() {

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
	        families: ["HelveticaNeueCyr-Light", "Plumb-Black", "FiraSansMedium", "BebasRegular"],
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