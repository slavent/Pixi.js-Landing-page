(function(window, $) {

	// START: Pixi basic
	var App = window.App || {};

	var $body = $("body"),
		w_width = $(window).width(),
		w_height = $(window).height(),
		renderer = new PIXI.autoDetectRenderer(w_width, w_height, { transparent: true }),
		stage = new PIXI.Container();
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
		    	App.manager.slide_1.spinner.update();

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
					this.video.init();
					this.logo.init();
					this.title.init();
					this.slider.init();
					this.spinner.init();
				},

				video: {
					init: function() {
						var texture = PIXI.Texture.fromVideo("video.mp4"),
							videoSprite = new PIXI.Sprite(texture);

						videoSprite.width = renderer.width;
						videoSprite.height = renderer.height;

						stage.addChild(videoSprite, function() {
							App.bindEvents(2);
						});
					}
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

					init: function() {
						this.makeNav();
					},

					makeNav: function() {
						var dot1_texture = PIXI.Texture.fromImage("i/s1/dot_active.svg"),
							dot1 = new PIXI.Sprite(dot1_texture),
							dot2_texture = PIXI.Texture.fromImage("i/s1/dot.svg");
							dot2 = new PIXI.Sprite(dot2_texture),
							dot3_texture = PIXI.Texture.fromImage("i/s1/dot.svg");
							dot3 = new PIXI.Sprite(dot3_texture);

						dot1.anchor.set(0.5);
						dot1.position.x = renderer.width / 2 - 25;
						dot1.position.y = renderer.height / 2 + 200;
						dot1.buttonMode = true;
						dot1.interactive = true;

						dot1.on("click", function() {
							this.texture = PIXI.Texture.fromImage("i/s1/dot_active.svg");
							dot2.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
							dot3.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
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
						});

						stage.addChild(dot1);
						stage.addChild(dot2);
						stage.addChild(dot3);
					}	

				},

				spinner: {
					vars: {
						spin1_texture: 	null,
						spin1: 			null,
						spin2_texture: 	null,
						spin2: 			null,
						count: 			0
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
						this.vars.count += 0.06;
	    				this.vars.spin2.y += Math.sin(this.vars.count);
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