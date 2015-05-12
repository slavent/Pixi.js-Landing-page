(function(window, $) {

	// START: Pixi basic
	var App = window.App || {};

	var $body = $("body"),
		w_width = $(window).width(),
		w_height = $(window).height(),
		renderer = new PIXI.autoDetectRenderer(w_width, w_height, { transparent: true }),
		stage = new PIXI.Container(),

		// Slide 1
		s1_logo,
		s1_logo_texture,
		s1_title,
		s1_texture,
		s1_videoSprite,
		s1_dot1_texture,
		s1_dot2_texture,
		s1_dot3_texture,
		s1_dot1,
		s1_dot2,
		s1_dot3,
		s1_count = 0;

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
	    		s1_count += 0.06;
	    		spin2.y += Math.sin(s1_count);

		        renderer.render(stage);
		        requestAnimationFrame(animate);
		    }			

		  	App.bindEvents(1);
		  	App.manager.slide_1();
		},

		bindEvents: function(slide_id) {

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

    		$(".menu-icon-wrp").on("click", function() {
    			$(".menu-popup, .menu-popup-closebtn").fadeIn();
    			$(this).fadeOut();
    		});

    		$(".menu-popup-closebtn").on("click", function() {
    			$(".menu-icon-wrp").fadeIn();
    			$(this).fadeOut();
    			$(".menu-popup").fadeOut();
    		});

	    },

		manager: {

			slide_1: function() {
				console.log("Slide 1 start");

				// Video
				s1_texture = PIXI.Texture.fromVideo("http://alexapokrashenko.com/wp-content/themes/alexa/video.mp4");
				s1_videoSprite = new PIXI.Sprite(s1_texture);
				s1_videoSprite.width = renderer.width;
				s1_videoSprite.height = renderer.height;
				stage.addChild(s1_videoSprite, function() {
					App.bindEvents(2);
				});

				// Logo
				s1_logo_texture = PIXI.Texture.fromImage("i/s1/logo.svg");
				s1_logo = new PIXI.Sprite(s1_logo_texture);
				s1_logo.anchor.set(0.5);
				s1_logo.position.x = renderer.width / 2;
				s1_logo.position.y = renderer.height / 2;
				stage.addChild(s1_logo);

				// Title
				var style = {
					font : '38px HelveticaNeueCyr-Light',
				    fill : '#fff',
				    align : "center",
				    lineHeight : 50,
				    padding : 50
				};
				s1_title = new PIXI.Text("ДОБРО ПОЖАЛОВАТЬ В ЛАБОРАТОРИЮ\nСТИЛЯ «МОДНОГО ПРИГОВОРА»!", style);
				s1_title.x = (renderer.width - s1_title.width) / 2;	
				s1_title.y = ((renderer.height - s1_title.height) / 2) + 180;
				stage.addChild(s1_title);

				// Slider nav
				s1_dot1_texture = PIXI.Texture.fromImage("i/s1/dot.svg");
				s1_dot1 = new PIXI.Sprite(s1_dot1_texture);
				s1_dot1.anchor.set(0.5);
				s1_dot1.position.x = renderer.width / 2 - 25;
				s1_dot1.position.y = renderer.height / 2 + 200;
				s1_dot1.buttonMode = true;
				s1_dot1.interactive = true;
				s1_dot1.on("click", function() {
					this.texture = PIXI.Texture.fromImage("i/s1/dot_active.svg");
					s1_dot2.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
					s1_dot3.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
				});
				stage.addChild(s1_dot1);

				s1_dot2_texture = PIXI.Texture.fromImage("i/s1/dot.svg");
				s1_dot2 = new PIXI.Sprite(s1_dot2_texture);
				s1_dot2.anchor.set(0.5);
				s1_dot2.position.x = renderer.width / 2 - 5;
				s1_dot2.position.y = renderer.height / 2 + 200;
				s1_dot2.buttonMode = true;
				s1_dot2.interactive = true;
				s1_dot2.on("click", function() {
					this.texture = PIXI.Texture.fromImage("i/s1/dot_active.svg");
					s1_dot1.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
					s1_dot3.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
				});
				stage.addChild(s1_dot2);

				s1_dot3_texture = PIXI.Texture.fromImage("i/s1/dot.svg");
				s1_dot3 = new PIXI.Sprite(s1_dot3_texture);
				s1_dot3.anchor.set(0.5);
				s1_dot3.position.x = renderer.width / 2 + 15;
				s1_dot3.position.y = renderer.height / 2 + 200;
				s1_dot3.buttonMode = true;
				s1_dot3.interactive = true;
				s1_dot3.on("click", function() {
					this.texture = PIXI.Texture.fromImage("i/s1/dot_active.svg");
					s1_dot1.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
					s1_dot2.texture = PIXI.Texture.fromImage("i/s1/dot.svg");
				});
				stage.addChild(s1_dot3);

				// Spinner
				spin1_texture = PIXI.Texture.fromImage("i/s1/spin1.svg");
				spin1 = new PIXI.Sprite(spin1_texture);
				spin1.anchor.set(0.5);
				spin1.position.x = renderer.width / 2 - 5;
				spin1.position.y = renderer.height / 2 + 350;
				spin1.buttonMode = true;
				spin1.interactive = true;
				stage.addChild(spin1);

				spin2_texture = PIXI.Texture.fromImage("i/s1/spin2.svg");
				spin2 = new PIXI.Sprite(spin2_texture);
				spin2.anchor.set(0.5);
				spin2.position.x = renderer.width / 2 - 5;
				spin2.position.y = renderer.height / 2 + 345;
				spin2.buttonMode = true;
				spin2.interactive = true;
				stage.addChild(spin2);

				console.log();
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