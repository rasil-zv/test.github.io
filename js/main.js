$(function() {

			/* navigation */ 
			$('.js_mainMenu__link').on('click', function(e){
							e.preventDefault();
							$('.mainMenu__sub:not(this)').fadeOut(300);
							$(this).next().fadeToggle(500);
			});
			$('.mainMenu__sub').on('mouseleave', function(){
							$(this).fadeOut(500);
			});


		 /* section.answer */ 
			$('.activeAnswer__list:first').attr('style', 'display: block' );

			$('.answerItem__link').on('click', function(e){
							e.preventDefault();
							$(this).next().slideDown(300);
							$(this).addClass('activeAnswer__link').parent().addClass('activeAnswer');
			});

			$('.closeAnswer').on('click', function(e){
								e.preventDefault();
								$(this).parents('.answerItem').removeClass('activeAnswer');
								$(this).parent().removeAttr('style').prev().removeClass('activeAnswer__link');
			});


			/* section.portfolio  - slider */ 
			$('.portfolioSlider').slick({
								slidesToShow: 3,
								slidesToScroll: 1
			});


			/* div.map */ 
			ymaps.ready(init);
   var myMap,
   				myPlacemark;

   function init(){     
       myMap = new ymaps.Map("map", {
           center: [55.71566483, 37.68286770],
           zoom: 16,
           controls: []
       });

       myMap.controls.add('zoomControl');

       myMap.behaviors.disable([
       		'drag',
       		'scrollZoom'
       ]);

       myPlacemark = new ymaps.Placemark([55.71564180, 37.68311009], { 
				       	balloonContentHeader: 'Полиграфия от А до Я',
       	    balloonContentBody: 'Широкоформатная печать под заказ!',
       	    balloonContentFooter: '<b>Email: 7292554@mail.ru <br> Телефон: +7 (495) 241-96-37</b>',
       	    hintContent: 'Москва, м. Дубровка ул. Шарикоподшипниковская, д. 13 '
       }, {
       					iconLayout: 'default#image',
       					iconImageHref: '../img/map/icon-pin.png',
       					iconImageSize: [29, 43],
       					iconImageOffset: [-10, -42]
       });

       myMap.geoObjects.add(myPlacemark);
   }


   /* Smooth scroll */ 
   $('.js_questionLink').on('click', function(e){
   				e.preventDefault();

   				var currentBlock = $(this).attr('href'),
   								cuttentBlockOffset = $(currentBlock).offset().top;
   				
   				$('html, body').animate({
   								scrollTop: cuttentBlockOffset
   				}, 1200);

   });

});