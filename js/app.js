(function(window, $) {

	// SEE http://kuboid.net/games/tween/


	// START: Pixi basic
	window.App = window.App || {};

	var $body = $("body"),
		w_width = $(window).width(),
		w_height = $(window).height(),
		renderer = new PIXI.autoDetectRenderer(w_width, w_height, { transparent: true }),
		stage = new PIXI.Container(),

		slide1 = new PIXI.Container(),
		slide2 = new PIXI.Container(),
		slide3 = new PIXI.Container(),
		slide4 = new PIXI.Container(),
		slide5 = new PIXI.Container();

		slide1.alpha = 0;
		slide2.y = renderer.height,

		update_slide_1 = false,
		update_slide_2 = false,
		update_slide_3 = false,
		update_slide_4 = false,
		update_slide_5 = false;
    // END: Pixi basic



	// Start: App
	App = {

		init: function() {
			$body.append(renderer.view);
			requestAnimationFrame(animate);

		    function animate() {
		    	// Slide 1
		    	if( slide1.alpha < 1 ) slide1.alpha += 0.01;
		    	App.manager.slide_1.spinner.update();
		    	App.manager.slide_1.slider.update();
		    	App.manager.slide_1.update();
		    	App.manager.slide_2.update();

		        renderer.render(stage);
		        requestAnimationFrame(animate);
		    }			

		  	App.binder(1);
		  	App.manager.slide_1.init();
		},

		binder: function(slide_id) {
			var $menu_icon = $(".menu-icon-wrp"),
				$menu_popup = $(".menu-popup"),
				$menu_close_btn = $(".menu-popup-closebtn");

			$menu_icon.on("click", function() {
    			$menu_popup.fadeIn();
    			$(this).fadeOut();
    		});

    		$menu_close_btn.on("click", function() {
    			$menu_icon.fadeIn();
    			$menu_popup.hide();
    		});


    		switch(slide_id) {
    			case 1: 
 					$body.one("mousewheel", function() {
				    	App.manager.slide_2.init();
				    	update_slide_1 = true;
				    	update_slide_2 = true;
				    });
    				break;
    			case 2: 
 					$body.one("mousewheel", function() {
				    	App.manager.slide_3.init();
				    	
				    });
    				break;
    			case 3: 
 					$body.one("mousewheel", function() {
				    	App.manager.slide_4.init();
				    });
    				break;
    			case 4: 
 					$body.one("mousewheel", function() {
				    	App.manager.slide_5.init();
				    });
    				break;
    			case 5: 
 					$body.one("mousewheel", function() {
				    	App.manager.slide_4.init();
				    });
    				break;
    		}	

	    },

		manager: {

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
					if( update_slide_1 == true && slide1.y < renderer.height) slide1.y -= 15 - Math.sin(Math.acos(0.1));
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

						vars.spin1_texture = 	PIXI.Texture.fromImage("i/s1/spin1.svg"),
						vars.spin1 = 			new PIXI.Sprite(vars.spin1_texture),
						vars.spin2_texture = 	PIXI.Texture.fromImage("i/s1/spin2.svg"),
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
					this.arrowDown.init();

					stage.addChild(slide2);
				},

				update: function() {
					if( update_slide_2 == true && slide2.y > 0) slide2.y -= 15 - Math.sin(Math.acos(0.1));
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
							title_4 = new PIXI.Text("-ПОДОБНОЕ РУКОВОДСТВО\nПО ПРЕОБРАЖЕНИЮ", style);

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

				arrowDown: {
					init: function() {

					}
				}

			},

			slide_3: {

				init: function() {

				}

			},

			slide_4: {

				init: function() {

				}

			},

			slide_5: {

				init: function() {

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