App.managerService.slide_7 = {

	init: function() {
		console.log("Slide 7 init");

		slide_container_7 = new PIXI.Container();

		$body.unbind("mousewheel");
		$anketa.show();
		$cart.fadeIn();
		this.Binder.init();
		this.NavController.init();
		this.SceneController.init();
		this.BtnController.setValue();

		if( slide_7_complete == true ) {
			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_7);

			return deferred;
		}
	},

	destroy: function() {
		console.log("Slide 7 destroy");

		$cart.fadeOut();
		$anketa.hide();
		this.NavController.destroy();
		this.Binder.destroy();
		this.BtnController.destroy();

		if( active_scene == 7 ) slide_7_complete = true;
		active_scene = 1;

		slide_container_7 = null;

		if( slide_7_complete == false ) {
			var deferred = $.Deferred();
			
			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_7);

			return deferred;
		}
	},

	update: function() {

	},

	Binder: {

		init: function() {
			$anketa_btn.on("click", App.managerService.slide_7.SceneController.moveTo);
		},

		destroy: function() {
			$anketa_btn.unbind("click");
		}

	},

	SceneController: {

		init: function() {
			App.managerService.slide_7["scene_1"].init();
		},

		moveTo: function() {
			if( App.managerService.slide_7.ValidateController.validate() == false ) {
				return;
			}

			var from = active_scene,
				to   = ++active_scene;

			if( active_scene > 7 ) {
				App.managerService.slide_7["scene_7"].destroy();
				App.SlideController.moveTo(active_slide, ++active_slide);

				return;
			}

			App.managerService.slide_7.NavController.setActive();
			App.managerService.slide_7.BtnController.setValue();
			App.managerService.slide_7["scene_" + from].destroy();
			App.managerService.slide_7["scene_" + to].init();
		}

	},

	NavController: {

		init: function() {
			var that = this;

			setTimeout(function() {
				$step_pult
					.html("")
					.parent()
					.addClass("active");

				for(var i = 0; i < 7; i++) {
					$step_pult.append("<li class=step-pult-item>" + (i + 1) + "</li>");
				}

				that.setActive();
			}, 2000);
		},

		destroy: function() {
			$step_pult.parent().removeClass("active");
		},

		setActive: function() {
			$step_pult.children().removeClass("step-pult-item-active");
			$step_pult.children().eq(active_scene - 1).addClass("step-pult-item-active");
		}

	},

	BtnController: {

		setValue: function() {
			var btn_values = {
				s1: "Далее",
				s2: "Далее",
				s3: "Далее",
				s4: "Далее",
				s5: "Заказать",
				s6: "Перейти к оплате",
				s7: "Вернуться на главную"
			}
				btn_width = null;

			$anketa_btn.hide().html(btn_values["s" + active_scene]).fadeIn();
			btn_width = $anketa_btn.width();
			$anketa_btn.css({ "marginLeft" : -btn_width/2 });
		},

		destroy: function() {
			$anketa_btn.html("");
		}

	},

	ValidateController: {

		validate: function() {
			var anketa_data = {
				s1: {
					name	: { val: null, errorText: "Представьтесь пожалуйста" },
					email	: { val: null, errorText: "Не указан email" },
					tel 	: { val: null, errorText: "Не указан телефон" },
					age 	: { val: null, errorText: "Не указан возраст" },
					season 	: { val: null, errorText: "Не выбран сезон" },
					agree 	: { val: null, errorText: "Необходимо принять условия пользовательского соглашения" }				
				},
				s2: {
					growth	: { val: null, errorText: "Не указан рост" }, 
					weight 	: { val: null, errorText: "Не указан вес" }, 
					v_1 	: { val: null, errorText: "Не указан объем бюста" }, 
					v_2 	: { val: null, errorText: "Не указан объем талии" }, 
					v_3 	: { val: null, errorText: "Не указан объем бедер" }, 
					size 	: { val: null, errorText: "Не указан размер одежды" }, 
					type 	: { val: null, errorText: "Не указан тип внешности" }, 
					color_1 : { val: null, errorText: "Не указан цвет глаз" }, 
					color_2 : { val: null, errorText: "Не указан цвет волос" }, 
					color_3 : { val: null, errorText: "Не указан цвет кожи" }
 				},
				s3: {
					images	: { val: null, errorText: "Не был выбран ни один образ" }
				},
				s4: {
					photos	: { val: null, errorText: "Необходимо загрузить фотографии" }
				},
				s5: {
					input_1 : { val: null, errorText: "Укажите ваши пожелания" },
					input_2 : { val: null, errorText: "Укажите причину вашего обращения к стилистам" }
				}
			};

			for( i in anketa_data["s" + active_scene] ) {
				if( anketa_data.s1[i].val == null ) {
					App.managerService.slide_7.ErrorController.showError( anketa_data.s1[i].errorText );
					return false;
				}
			}
		}

	},

	ErrorController: {

		showError: function(e) {
			$anketa_error.html(e).fadeIn();
		},

		hideError: function() {
			$anketa_error.hide();
		}

	},

	scene_1: {

		init: function() {
			var data = DATA.slide_7;

			$anketa.find(".anketa-scene-1").fadeIn(function() {
				var row = $anketa.find(".anketa-row"),
					delay = data.delay;

				row.each(function() {
					var that = $(this);

					setTimeout(function() {
						that.animate({ "opacity" : 1 }, data.speed);
					}, delay);

					delay += data.delay;
				});
			});

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-1").hide();
		}

	},

	scene_2: {

		init: function() {
			$anketa.find(".anketa-scene-2").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-2").hide();
		}

	},

	scene_3: {

		init: function() {
			$anketa.find(".anketa-scene-3").fadeIn();

			/* START: Slider */
			function Slider($el) {
				this.$el 			= $el;
				this.$wrp 			= this.$el.find(".carousel-wrp");
				this.$slides 		= this.$wrp.children();
				this.$prev_btn 		= this.$el.find(".carousel-prevbtn");
				this.$next_btn 		= this.$el.find(".carousel-nextbtn");
				this.$toggle_btn 	= this.$el.prev().children(),

				this.s_margin_left 	= parseInt( this.$slides.eq(0).css("marginLeft") );
				this.s_margin_right = parseInt( this.$slides.eq(0).css("marginRight") );
				this.s_width		= parseInt( this.$slides.eq(0).width() );
			}

			Slider.prototype.bind = function() {
				var that 		= this,
					word_show 	= "Показать",
					word_hide 	= "Скрыть";

				that.$prev_btn.on("click", { ctx: that, dir: "prev" }, that.move);
				that.$next_btn.on("click", { ctx: that, dir: "next" }, that.move);

				that.$toggle_btn.on("click", function() {
					if( $(this).hasClass("active") ) {
						$(this).removeClass("active").html(word_hide);
						that.$wrp.parents(".carousel-row").slideDown();
					} else {
						$(this).addClass("active").html(word_show);
						that.$wrp.parents(".carousel-row").slideUp();
					}
				})
			};

			Slider.prototype.move = function(event) {
				var that = event.data.ctx,
					dir  = event.data.dir,
					val = -1 * (that.s_width + that.s_margin_right);

				switch(dir) {
					case "prev": 
							that.$wrp.prepend(that.$slides.last().css({ "marginLeft" : val }));
							that.$slides = that.$wrp.children();
							that.$slides.eq(0).animate({ "marginLeft" : that.s_margin_left, "marginRight" : this.s_margin_right });
						break;
					case "next":
							that.$slides.eq(0).animate({ "marginLeft" : val }, function() {
								that.$wrp.append($(this).css({ "marginLeft" : that.s_margin_left, "marginRight" : this.s_margin_right }));
								that.$slides = that.$wrp.children();
							});
						break;
				}
			};

			Slider.prototype.init = function() {
				this.bind();
			};

			var slider_1 = new Slider($(".carousel-row-1")).init(),
				slider_2 = new Slider($(".carousel-row-2")).init(),
				slider_3 = new Slider($(".carousel-row-3")).init();
			/* END: Slider */

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-3").hide();
		}

	},

	scene_4: {

		init: function() {
			$anketa.find(".anketa-scene-4").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-4").hide();	
		}

	},

	scene_5: {

		init: function() {
			$anketa.find(".anketa-scene-5").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-5").hide();
		}

	},

	scene_6: {

		init: function() {
			$anketa.find(".anketa-scene-6").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-6").hide();
		}

	},

	scene_7: {

		init: function() {
			$anketa.find(".anketa-scene-7").fadeIn();

			var deferred = $.Deferred();

			setTimeout(function() {
				deferred.resolve();
			}, SLIDE_ANIMATION_TIME_6);

			return deferred;
		},

		destroy: function() {
			$anketa.find(".anketa-scene-7").hide();
		}

	}

};