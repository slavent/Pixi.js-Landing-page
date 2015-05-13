(function(window, $) {

	// START: Pixi basic
	var App = window.App || {};

	var $body = $("body"),
		w_width = $(window).width(),
		w_height = $(window).height(),
		renderer = new PIXI.autoDetectRenderer(w_width, w_height, { transparent: true }),
		stage = new PIXI.Container();

		stage.alpha = 0;
    // END: Pixi basic



    // START: Web Font
	window.WebFontConfig = {
	    custom: {
	        families: ["HelveticaNeueCyr-Light"],
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



	// Start: App
	App = {

		init: function() {
			$body.append(renderer.view);
			requestAnimationFrame(animate);

		    function animate() {
		    	// Slide 1
		    	if( stage.alpha < 1 ) stage.alpha += 0.01;
		    	App.manager.slide_1.spinner.update();
		    	App.manager.slide_1.slider.update();

		        renderer.render(stage);
		        requestAnimationFrame(animate);
		    }			

		  	App.bindEvents(1);
		  	App.manager.slide_1.init();
		},

		bindEvents: function(slide_id) {
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
				    	App.manager.slide_2();
				    });
    				break;
    			case 2: 
 					$body.one("mousewheel", function() {
				    	App.manager.slide_3();
				    });
    				break;
    			case 3: 
 					$body.one("mousewheel", function() {
				    	App.manager.slide_4();
				    });
    				break;
    			case 4: 
 					$body.one("mousewheel", function() {
				    	App.manager.slide_5();
				    });
    				break;
    			case 5: 
 					$body.one("mousewheel", function() {
				    	App.manager.slide_4();
				    });
    				break;
    		}	

	    },

		manager: {

			slide_1: {

				init: function() {
					this.slider.init();
					this.logo.init();
					this.title.init();
					this.spinner.init();
				},

				logo: {
					init: function() {
						var logo_texture = PIXI.Texture.fromImage("i/s1/logo.svg"),
							logo = new PIXI.Sprite(logo_texture);

						logo.anchor.set(0.5);
						logo.position.x = renderer.width / 2;
						logo.position.y = renderer.height / 2;

						stage.addChild(logo);
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

						stage.addChild(title);
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
						stage.addChild(vars.slide1_sprite);
					},

					makeSlide2: function() {
						vars = this.vars;

						vars.slide2_texture = PIXI.Texture.fromImage("i/s1/slide_2.jpg");
						vars.slide2_sprite = new PIXI.Sprite(vars.slide2_texture);
						vars.slide2_sprite.alpha = 0;
						stage.addChild(vars.slide2_sprite);
					},

					makeSlide3: function() {
						vars = this.vars;

						vars.slide3_texture = PIXI.Texture.fromImage("i/s1/slide_3.jpg");
						vars.slide3_sprite = new PIXI.Sprite(vars.slide3_texture);
						vars.slide3_sprite.alpha = 0;
						stage.addChild(vars.slide3_sprite);
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

						stage.addChild(dot1);
						stage.addChild(dot2);
						stage.addChild(dot3);
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

						stage.addChild(vars.spin1);
						stage.addChild(vars.spin2); 
					},

					update: function() {
						var vars = this.vars;

						vars.pos += 0.06;
	    				vars.spin2.y += Math.sin(vars.pos);
	    				//vars.spin2.alpha += Math.sin(0.003);
					}

				}
			},

			slide_2: function() {
				console.log("Slide 2 start");

				App.bindEvents(3);
			},

			slide_3: function() {
				console.log("Slide 3 start");

				App.bindEvents(4);
			},

			slide_4: function() {
				console.log("Slide 4 start");

				App.bindEvents(5);
			},

			slide_5: function() {
				console.log("Slide 5 start");

				App.bindEvents(4);
			}

		}

	}
	// END: App

}(this, jQuery));