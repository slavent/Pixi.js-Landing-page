(function(window, $) {



	// START: Variables
	window.App = window.App || {};

	var $body = $("body"),
		$footer = $("footer"),
		$main_menu = $(".main-menu"),
		$menu_icon = $(".menu-icon-wrp"),
		$menu_popup = $(".menu-popup"),
		$menu_close_btn = $(".menu-popup-closebtn"),
		$landing_nav = $(".landing-nav ul"),

		w_width = $(window).width(),
		w_height = $(window).height(),
		renderer = new PIXI.autoDetectRenderer(w_width, w_height, { transparent: true }),
		stage = new PIXI.Container(),

		slide1 = new PIXI.Container(),
		slide2 = new PIXI.Container(),
		slide3 = new PIXI.Container(),
		slide4 = new PIXI.Container(),
		slide5 = new PIXI.Container(),
		slide6 = new PIXI.Container(),
		slide7 = new PIXI.Container(),

		update_slide = false,
		active_slide = 1;
    // END: Variables



	// Start: App
	App = {

		init: function() {

			$body.append(renderer.view);
			requestAnimationFrame(animate);

		    function animate() {

		    	// Render for Slide 1
		    	if( slide1.alpha < 1 ) slide1.alpha += 0.01;
		    	App.manager.slide_1.spinner.update();
		    	App.manager.slide_1.slider.update();

		    	// Render for Slide 2

		    	// Render for Slide 3

		    	// Render for Slide 4

		    	// Render for Slide 5
		    	App.manager.slide_5.spinner.update();

		    	// Render for Slide 6

		    	// Render for Slide 7

		    	TWEEN.update();

		        renderer.render(stage);
		        requestAnimationFrame(animate);

		    }			

		    App.initParams();
		  	App.binder();
		  	App.initLandingNav(active_slide);
		  	App.manager.init();

		},

		initScroll: {

			scroll: function(event) {

				// Detect direction of scroll
				var ind,
					start_pos = active_slide;

				if(event.originalEvent.wheelDelta < 0) {
					ind = -active_slide;
					if(active_slide < 7) active_slide++;
				} else {
					ind = -active_slide + 2;
					if(active_slide >= 1) active_slide--;
				}

				if(active_slide >= 1 && active_slide <= 7) {

	    			var tween = new TWEEN.Tween({ x: 0, y:  -(start_pos-1) * renderer.height, rotation: 0 })
						.to({ x: 0, y: ind * renderer.height, rotation: 90 }, 1000)
						.easing( TWEEN.Easing.Cubic.InOut )
						.onUpdate(function() {
							stage.y = this.y;
						}).start();

					// Show menu
					if(active_slide != 1) {
						setTimeout(function() {
							$main_menu.fadeIn(300);
						}, 1500);
					} else {
						$main_menu.fadeOut();
					}

					// Show footer
					if(active_slide == 7) {
						$footer.fadeIn();
					} else {
						$footer.fadeOut();
					}
			    	
			    	App.initLandingNav(active_slide);

				}

				console.log(active_slide);

		    }

		},

		initParams: function() {

			slide1.alpha = 0;
			slide2.y = renderer.height;
			slide3.y = 2 * renderer.height;
			slide4.y = 3 * renderer.height;
			slide5.y = 4 * renderer.height;
			slide6.y = 5 * renderer.height;
			slide7.y = 6 * renderer.height;

		},

		initLandingNav: function(ind) {

			ind--;
			$landing_nav.children().removeClass("landing-nav-item-active");
			$landing_nav.children().eq(ind).addClass("landing-nav-item-active");

		},

		binder: function() {

			$body.on("mousewheel", $.debounce(200, true, App.initScroll.scroll));

			$landing_nav.children().each(function() {
    			$(this).on("click", function() {
    				var ind = $(this).index() + 1;

    				App.initScroll.scroll(ind);
    			});
    		});

			$menu_icon.on("click", function() {
    			$menu_popup.fadeIn();
    			$(this).fadeOut();
    		});

    		$menu_close_btn.on("click", function() {
    			$menu_icon.fadeIn();
    			$menu_popup.hide();
    		});

    		$main_menu.children().on("click", function() {
    			var ind = $(this).index();
    			slide_id = ind;

    			return false;
    		});

	    },

		manager: {

			init: function() {
				this.slide_1.init();
			  	this.slide_2.init();
			  	this.slide_3.init();
			  	this.slide_4.init();
			  	this.slide_5.init();
			  	this.slide_6.init();
			  	this.slide_7.init();
			},

			slide_1: {

				init: function() {
					console.log("Slide 1 init");

					this.slider.init();
					this.logo.init();
					this.title.init();
					this.spinner.init();

					stage.addChild(slide1);
				},

				update: function() {
					
				},

				logo: {
					init: function() {
						var logo_texture = PIXI.Texture.fromImage("i/s1/logo.svg"),
							logo = new PIXI.Sprite(logo_texture);

						logo.anchor.set(0.5);
						logo.position.x = renderer.width / 2;
						logo.position.y = renderer.height / 2;

						slide1.addChild(logo);
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

						slide1.addChild(title);
					}
				},

				slider: {
					vars: {
						slide1_texture: 	null,
						slide1_sprite: 		null,
						slide2_texture: 	null,
						slide2_sprite: 		null,
						slide3_texture: 	null,
						slide3_sprite: 		null,
						next: 				0
					},

					init: function() {
						this.makeSlide1();
						this.makeSlide2();
						this.makeSlide3();
						this.makeNav();
					},

					update: function() {
						var vars = this.vars;

						switch(vars.next) {
							case 1: 
								if( vars.slide1_sprite.alpha < 1 ) vars.slide1_sprite.alpha += 0.01;
								if( vars.slide2_sprite.alpha > 0 ) vars.slide2_sprite.alpha -= 0.01;
								if( vars.slide3_sprite.alpha > 0 ) vars.slide3_sprite.alpha -= 0.01;
								break;

							case 2: 
								if( vars.slide1_sprite.alpha > 0 ) vars.slide1_sprite.alpha -= 0.01;
								if( vars.slide2_sprite.alpha < 1 ) vars.slide2_sprite.alpha += 0.01;
								if( vars.slide3_sprite.alpha > 0 ) vars.slide3_sprite.alpha -= 0.01;
								break;

							case 3: 
								if( vars.slide1_sprite.alpha > 0 ) vars.slide1_sprite.alpha -= 0.01;
								if( vars.slide2_sprite.alpha > 0 ) vars.slide2_sprite.alpha -= 0.01;
								if( vars.slide3_sprite.alpha < 1 ) vars.slide3_sprite.alpha += 0.01;
								break;
						}
					},

					makeSlide1: function() {
						var vars = this.vars;

						vars.slide1_texture = PIXI.Texture.fromVideo("i/s1/slide_1.mp4");
						vars.slide1_sprite = new PIXI.Sprite(vars.slide1_texture);
						vars.slide1_sprite.width = renderer.width;
						vars.slide1_sprite.height = renderer.height;
						slide1.addChild(vars.slide1_sprite);
					},

					makeSlide2: function() {
						vars = this.vars;

						vars.slide2_texture = PIXI.Texture.fromImage("i/s1/slide_2.jpg");
						vars.slide2_sprite = new PIXI.Sprite(vars.slide2_texture);
						vars.slide2_sprite.width = renderer.width;
						vars.slide2_sprite.height = renderer.height;
						vars.slide2_sprite.alpha = 0;
						slide1.addChild(vars.slide2_sprite);
					},

					makeSlide3: function() {
						vars = this.vars;

						vars.slide3_texture = PIXI.Texture.fromImage("i/s1/slide_3.jpg");
						vars.slide3_sprite = new PIXI.Sprite(vars.slide3_texture);
						vars.slide3_sprite.width = renderer.width;
						vars.slide3_sprite.height = renderer.height;
						vars.slide3_sprite.alpha = 0;
						slide1.addChild(vars.slide3_sprite);
					},

					makeNav: function() {
						var dot1_texture = PIXI.Texture.fromImage("i/s1/dot_active.svg"),
							dot1 = new PIXI.Sprite(dot1_texture),
							dot2_texture = PIXI.Texture.fromImage("i/s1/dot.svg");
							dot2 = new PIXI.Sprite(dot2_texture),
							dot3_texture = PIXI.Texture.fromImage("i/s1/dot.svg");
							dot3 = new PIXI.Sprite(dot3_texture)
							vars = this.vars;

						dot1.anchor.set(0.5);
						dot1.position.x = renderer.width / 2 - 25;
						dot1.position.y = renderer.height / 2 + 200;
						dot1.buttonMode = true;
						dot1.interactive = true;
						dot1.on("click", function() {
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
							this.texture = PIXI.Texture.fromImage("i/s1/dot_active.svg");
							dot1.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
							dot2.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
							vars.next = 3;
						});

						slide1.addChild(dot1);
						slide1.addChild(dot2);
						slide1.addChild(dot3);
					}

				},

				spinner: {
					vars: {
						spin1_texture: 	null,
						spin1: 			null,
						spin2_texture: 	null,
						spin2: 			null,
						pos: 			0,
						alpha: 			0
					},

					init: function() {
						var vars = this.vars;

						vars.spin1_texture = 	PIXI.Texture.fromImage("i/s1/spin1.svg");
						vars.spin1 = 			new PIXI.Sprite(vars.spin1_texture);
						vars.spin2_texture = 	PIXI.Texture.fromImage("i/s1/spin2.svg");
						vars.spin2 = 			new PIXI.Sprite(vars.spin2_texture);

						vars.spin1.anchor.set(0.5);
						vars.spin1.position.x = renderer.width / 2 - 5;
						vars.spin1.position.y = renderer.height / 2 + 350;
						vars.spin1.buttonMode = true;
						vars.spin1.interactive = true;

						vars.spin2.anchor.set(0.5);
						vars.spin2.position.x = renderer.width / 2 - 5;
						vars.spin2.position.y = renderer.height / 2 + 345;
						vars.spin2.buttonMode = true;
						vars.spin2.interactive = true;

						slide1.addChild(vars.spin1);
						slide1.addChild(vars.spin2); 
					},

					update: function() {
						var vars = this.vars;

						vars.pos += 0.06;
	    				vars.spin2.y += Math.sin(vars.pos);
	    				//vars.spin2.alpha += Math.sin(0.003);
					}

				}
			},

			slide_2: {

				init: function() {
					console.log("Slide 2 init");

					this.title_1.init();
					this.title_2.init();
					this.title_3.init();
					this.title_4.init();
					this.info.init();
					this.border.init();
					this.arrowDown.init();

					stage.addChild(slide2);
				},

				update: function() {
					
				},

				title_1: {

					init: function() {
						var style = {
								font : '38px HelveticaNeueCyr-Light',
							    fill : '#3c3c3c',
							    align : "center",
							    lineHeight : 40,
							    padding : 50
							},
							title_1 = new PIXI.Text("ЛУЧШИЕ СТИЛИСТЫ РОССИИ\nПРЕДЛАГАЮТ ВАМ СОЗДАТЬ", style);

						title_1.x = (renderer.width - title_1.width) / 2;	
						title_1.y = ((renderer.height - title_1.height) / 2) - 140;

						slide2.addChild(title_1);
					}

				},

				title_2: {

					init: function() {
						var style = {
								font : '52px HelveticaNeueCyr-Light',
							    fill : '#fa6464',
							    align : "center",
							    lineHeight : 50,
							    padding : 50
							},
							title_2 = new PIXI.Text("ПЕРСОНАЛЬНЫЙ", style);

						title_2.x = (renderer.width - title_2.width) / 2;	
						title_2.y = ((renderer.height - title_2.height) / 2) - 60;

						slide2.addChild(title_2);
					}

				},

				title_3: {

					init: function() {
						var style = {
								font : 'bold 100px Plumb-Black',
							    fill : '#fa6464',
							    align : "center",
							    lineHeight : 50,
							    padding : 90
							},
							title_3 = new PIXI.Text("ИМИДЖ-ГАЙД", style);

						title_3.x = (renderer.width - title_3.width) / 2;	
						title_3.y = ((renderer.height - title_3.height) / 2) + 20;

						slide2.addChild(title_3);
					}

				},

				title_4: {

					init: function() {
						var style = {
								font : '38px HelveticaNeueCyr-Light',
							    fill : '#000',
							    align : "center",
							    lineHeight : 50,
							    padding : 50
							},
							title_4 = new PIXI.Text("- ПОДОБНОЕ РУКОВОДСТВО\nПО ПРЕОБРАЖЕНИЮ", style);

						title_4.x = (renderer.width - title_4.width) / 2;	
						title_4.y = ((renderer.height - title_4.height) / 2) + 130;

						slide2.addChild(title_4);
					}

				},

				info: {

					init: function() {
						var style = {
								font : '21px HelveticaNeueCyr-Light',
							    fill : '#fa6464',
							    align : "center",
							    padding : 20
							},
							title = new PIXI.Text("Имидж-гайд – это ваша личная книга стиля. Десятки\nкрасочных иллюстраций, детальный разбор вашего\nгардероба и практические советы по улучшению\nвашего образа – все это на страницах\nперсонального имидж-гайда. ", style);

						title.x = (renderer.width - title.width) / 2;	
						title.y = ((renderer.height - title.height) / 2) + 250;

						slide2.addChild(title);
					}

				},

				border: {

					init: function() {
						var graphics = new PIXI.Graphics();

						graphics.lineStyle(3, 0xfa6464, 1);
						graphics.beginFill(0x000000, 0);
						graphics.drawRect( renderer.width/2 - 280 , renderer.height/2 + 150 , 560 , 170);

						slide2.addChild(graphics);
					}

				},

				arrowDown: {

					init: function() {

					}

				}

			},

			slide_3: {

				init: function() {
					console.log("Slide 3 init");

					stage.addChild(slide3);
				},

				update: function() {

				},

			},

			slide_4: {

				init: function() {
					console.log("Slide 4 init");

					this.magazine.init();
					this.titles.init();
					this.prices.init();
					this.time.init();
					this.orderBtn.init();

					stage.addChild(slide4);
				},

				update: function() {

				},

				titles: {

					init: function() {

						(function() {
							var style = {
								font : '20px Myriad Pro',
							    fill : '#3c3c3c',
							    align : "left",
							    padding : 50
							},
							title = new PIXI.Text("Стоимость базовой\nверсии", style);

							title.x = (renderer.width - title.width) / 2 - 300;	
							title.y = ((renderer.height - title.height) / 2) - 170;

							slide4.addChild(title);
						}());

						(function() {
							var style = {
								font : '20px Myriad Pro',
							    fill : '#3c3c3c'
							},
							title = new PIXI.Text("Срок изготовления", style);

							title.x = (renderer.width - title.width) / 2 + 210;	
							title.y = ((renderer.height - title.height) / 2) - 180;

							slide4.addChild(title);
						}());

						(function() {
							var style = {
								font : '14px HelveticaNeueCyr-Light',
							    fill : '#3c3c3c'
							},
							title = new PIXI.Text("Стоимость за каждый\nдополнительный", style);

							title.x = (renderer.width - title.width) / 2 + 125;	
							title.y = ((renderer.height - title.height) / 2) + 170;

							slide4.addChild(title);
						}());

						(function() {
							var style = {
								font : '14px HelveticaNeueCyr-Light',
							    fill : '#b48264'
							},
							title = new PIXI.Text("Стиль, мероприятие или праздник", style);

							title.x = (renderer.width - title.width) / 2 + 165;	
							title.y = ((renderer.height - title.height) / 2) + 197;

							slide4.addChild(title);
						}());
					}

				},

				prices: {

					init: function() {

						(function() {
							var style = {
								font : '120px Plumb-Black',
							    fill : '#fa6464'
							},
							title = new PIXI.Text("2999", style);

							title.x = (renderer.width - title.width) / 2 - 180;	
							title.y = ((renderer.height - title.height) / 2) - 175;

							slide4.addChild(title);
						}());

						(function() {
							var style = {
								font : '60px Plumb-Black',
							    fill : '#fa6464'
							},
							title = new PIXI.Text("РУБЛЕЙ", style);

							title.x = (renderer.width - title.width) / 2 - 220;	
							title.y = ((renderer.height - title.height) / 2) - 100;

							slide4.addChild(title);
						}());

						(function() {
							var style = {
								font : '80px Plumb-Black',
							    fill : '#fa6464'
							},
							title = new PIXI.Text("+999", style);

							title.x = (renderer.width - title.width) / 2 + 90;	
							title.y = ((renderer.height - title.height) / 2) + 80;

							slide4.addChild(title);
						}());

						(function() {
							var style = {
								font : '40px Plumb-Black',
							    fill : '#fa6464'
							},
							title = new PIXI.Text("РУБЛЕЙ", style);

							title.x = (renderer.width - title.width) / 2 + 130;	
							title.y = ((renderer.height - title.height) / 2) + 130;

							slide4.addChild(title);
						}());

					}

				},

				time: {

					init: function() {

						(function() {
							var style = {
								font : '100px Plumb-Black',
							    fill : '#b48264'
							},
							title = new PIXI.Text("3", style);

							title.x = (renderer.width - title.width) / 2 + 150;	
							title.y = ((renderer.height - title.height) / 2) - 130;

							slide4.addChild(title);
						}());

						(function() {
							var style = {
								font : '30px Plumb-Black',
							    fill : '#b48264'
							},
							title = new PIXI.Text("РАБОЧИХ\nДНЯ", style);

							title.x = (renderer.width - title.width) / 2 + 250;	
							title.y = ((renderer.height - title.height) / 2) - 130;

							slide4.addChild(title);
						}());

					}

				},

				magazine: {

					init: function() {

						var magazine_texture = PIXI.Texture.fromImage("i/s4/magazine.png"),
							magazine = new PIXI.Sprite(magazine_texture);

						magazine.anchor.set(0.5);
						magazine.position.x = renderer.width / 2;
						magazine.position.y = renderer.height / 2;

						slide4.addChild(magazine);

					}

				},

				orderBtn: {

					init: function() {

						(function() {
							var style = {
								font : '14px HelveticaNeueCyr-Light',
							    fill : '#fa6464'
							},
							title = new PIXI.Text("Заказать", style);

							title.x = (renderer.width - title.width) / 2;	
							title.y = ((renderer.height - title.height) / 2) + 260;

							slide4.addChild(title);
						}());

						var graphics = new PIXI.Graphics();

						graphics.lineStyle(1, 0xfa6464, 1);
						graphics.beginFill(0xFF00BB, 0);
						graphics.drawRoundedRect(renderer.width/2-50, renderer.height/2+245, 100, 30, 1);
						graphics.endFill();

						slide4.addChild(graphics);

					}

				}

			},

			slide_5: {

				init: function() {
					console.log("Slide 5 init");

					this.notepade.init();
					this.title.init();
					this.btn.init();
					this.info.init();
					this.spinner.init();

					stage.addChild(slide5);
				},

				update: function() {

				}, 

				notepade: {

					init: function() {
						var notepade_texture = PIXI.Texture.fromImage("i/s5/notepade.png"),
							notepade = new PIXI.Sprite(notepade_texture);

						notepade.anchor.set(0.5);
						notepade.position.x = renderer.width / 2 + 300;
						notepade.position.y = renderer.height / 2 + 40;

						slide5.addChild(notepade);
					}

				},

				title: {

					init: function() {

						(function() {
							var style = {
								font : '110px Plumb-Black',
							    fill : '#fa6464',
							    align : "center",
							    lineHeight : 105
							},
							title = new PIXI.Text("ЗАПОЛНИТЕ\nАНКЕТУ\nНА САЙТЕ", style);

							title.x = (renderer.width - title.width) / 2;	
							title.y = ((renderer.height - title.height) / 2);

							slide5.addChild(title);
						}());

					}

				},

				btn: {

					init: function() {

						(function() {
							var graphics = new PIXI.Graphics();

							graphics.lineStyle(0);
							graphics.beginFill(0x3c3c3c, 1);
							graphics.drawCircle(renderer.width/2 - 280, renderer.height/2 + 30, 60);
							graphics.endFill();							

							var style = {
								font : '16px HelveticaNeueCyr-Light',
							    fill : '#ffffff'
							},
							title = new PIXI.Text("ЗАПОЛНИТЬ", style);

							title.x = (renderer.width - title.width) / 2 - 230;	
							title.y = ((renderer.height - title.height) / 2) + 40;
							title.anchor.x = 0.5;
							title.anchor.y = 0.5;
							title.rotation = -0.3;

							graphics.addChild(title);
							slide5.addChild(graphics);
						}());

					}

				},

				info: {

					init: function() {

						(function() {
							var style = {
								font : '16px HelveticaNeueCyr-Light',
							    fill : '#3c3c3c',
							    align : "center"
							},
							title = new PIXI.Text("Стилисты “Модного приговора” получат Ваши данные,\nопределят Ваш цветотип, тип фигуры, овал лица\nи составят подробную инструкцию преображения!", style);

							title.x = (renderer.width - title.width) / 2;	
							title.y = ((renderer.height - title.height) / 2) + 250;

							slide5.addChild(title);
						}());

						var graphics = new PIXI.Graphics();

						graphics.lineStyle(3, 0x3c3c3c, 1);
						graphics.beginFill(0x000000, 0);
						graphics.drawRect( renderer.width/2 - 225 , renderer.height/2 + 200 , 450 , 100);

						slide5.addChild(graphics);

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
						vars.spin1_texture = 	PIXI.Texture.fromImage("i/s5/spin1.svg");
						vars.spin1 = 			new PIXI.Sprite(vars.spin1_texture);
						vars.spin2_texture = 	PIXI.Texture.fromImage("i/s5/spin2.svg");
						vars.spin2 = 			new PIXI.Sprite(vars.spin2_texture);

						vars.spin1.anchor.set(0.5);
						vars.spin1.position.x = renderer.width / 2 - 5;
						vars.spin1.position.y = renderer.height / 2 + 350;
						vars.spin1.buttonMode = true;
						vars.spin1.interactive = true;

						vars.spin2.anchor.set(0.5);
						vars.spin2.position.x = renderer.width / 2 - 5;
						vars.spin2.position.y = renderer.height / 2 + 345;
						vars.spin2.buttonMode = true;
						vars.spin2.interactive = true;

						slide5.addChild(vars.spin1);
						slide5.addChild(vars.spin2); 
					},

					update: function() {
						var vars = this.vars;

						if(vars.init == true) {
							vars.pos += 0.06;
		    				vars.spin2.y += Math.sin(vars.pos);
		    				//vars.spin2.alpha += Math.sin(0.003);
						}

					}

				}

			},

			slide_6: {

				init: function() {
					console.log("Slide 6 init");

					stage.addChild(slide6);
				},

				update: function() {

				}

			},

			slide_7: {

				init: function() {
					console.log("Slide 7 init");

					this.slider.init();
					this.orderBtn.init();
					this.footer.init();

					stage.addChild(slide7);
				},

				update: function() {

				},

				slider: {

					init: function() {

					}

				},

				orderBtn: {

					init: function() {

					}

				},

				footer: {

					init: function() {

					}

				}

			}
		}

	}
	// END: App



	// START: Web Font
	window.WebFontConfig = {
	    custom: {
	        families: ["HelveticaNeueCyr-Light", "Plumb-Black"],
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