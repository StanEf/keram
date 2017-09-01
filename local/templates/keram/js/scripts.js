
    var recalc=function(){
        if($('.menu-block-inner').css('float')=='left'){
            var max_height=Math.max($('.menu-block-inner').eq(0).find('.row').height(),$('.menu-block-inner').eq(1).find('.row').height())+15;
            $('.menu-block-inner').eq(0).height(max_height);
            $('.menu-block-inner').eq(1).height(max_height);
            var max_height1=Math.max($('.menu-block-inner').eq(2).find('.row').height(),$('.menu-block-inner').eq(3).find('.row').height());
            $('.menu-block-inner').eq(2).height(max_height1);
            $('.menu-block-inner').eq(3).height(max_height1);
        }
//        $('.menu-block-inner').each(function(){
//            
//            if($(this).index() % 2 == 0){
//                if($(this).find('.row').height()>max_height2) max_height2=$(this).find('.row').height();
//            $('.menu-block-inner').height(max_height);
//
//            }else{
//                if($(this).find('.row').height()>max_height) max_height=$(this).find('.row').height();
//            $('.menu-block-inner').height(max_height);
//            }
//        });       
    }

    var ofcet=function(){
        var offset = $('.news-section .carousel .carousel-inner .item.active img').height();
        $('.news-section .carousel .carousel-indicators').css('top',(offset-40)+'px');
        $('.news-section .carousel .carousel-control').css('top',(offset-55)+'px');
        $('#subnav .nav-menu li>a').css('font-size','');
        if(!$('.tabsearch:visible').length){
            $('#tab-search').removeClass('collapse in');
        }else{
            $('#tab-search .srch-term').css('max-width','');
        }
        console.log(offset);
    }
    
    var slideInner=function(){
        if($(window).width()<1200&&$(window).width()>360){
            var k=$(window).width()/$('.item.active .carousel-image img').width();
            $('.carousel-image').css('height',($('.carousel-image').height()*k)+'px');
        }else{
            $('.carousel-image').css('height','');
        }

        if(!$('.inner-slider').hasClass('fulscreen-slider')){
            //var rozn=$('.item.active .carousel-image img').height()-$('.item.active .carousel-image').height();
            //if(rozn>0) 
            $('.item .carousel-image img').css('margin-top','-'+($('.item.active .carousel-image .container').height()+25)+'px');
        }else{
            $('.item .carousel-image').height($(window).height());
        }
        if(($('#content-wrapper').height()+$('footer').height())>$(window).height()){
            $('footer').css('position','relative');
        }else{
            $('footer').css('position','absolute');
        }
        console.log($(window).height()+' <==> '+($('#content-wrapper').height()+$('footer').height()));

        //var fh=$('footer').outerHeight(true);
        //$('#content-wrapper').css('padding-bottom',$('footer').outerHeight(true)+'px');//.css('margin-bottom','-'+fh+'px');
    }
$(document).ready(function(){/* jQuery toggle layout */
    if($('.owl-carousel-no-thumb').length){
        $('.owl-carousel-no-thumb').owlCarousel({
            loop:false,
            nav: true,
            margin: 20,
            navText:["",""],
            responsive: {
                0: {
                    items: 1
                },
                580: {
                    items: 2
                },
                768: {
                    items: 2
                },
                1200: {
                    items: 3
                }
            },
            thumbs: false,
            thumbImage: false,
         });
    }
    if($('.owl-carousel-struct').length){
        $('.owl-carousel-struct').owlCarousel({
            loop:false,
            nav: true,
            margin: 15,
            navText:["",""],
            responsive: {
                0: {
                    items: 1
                },
                580: {
                    items: 3
                },
                768: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            },
            thumbs: false,
            thumbImage: false,
         });
    }

     if($('.mail').length){
        $(".mail").keypress(function(e) {
            if(!/[^а-яА-Я\s]/.test(e.key)) {
                return false;
            }
            $(this).val($(this).val().replace(/[а-яА-Я]/g,'') );

        });
        $(".mail").change(function(e) {
            $(this).val($(this).val().replace(/[а-яА-Я]/g,'') );
        });
     }
     if($('.phone').length){
        $(".phone").keypress(function(e) {
            if(/[^0-9]/.test(e.key)) {
                return false;
            }
            $(this).val($(this).val().replace(/[^0-9]/g,'') );

        });
        $(".phone").change(function(e) {
            $(this).val($(this).val().replace(/[^0-9]/g,'') );
        });
        
     }
     $('body').on('click', '.media-body.video', function() {
        $('#popup_video').fadeIn();
        $('#popup_video').append('<a id="popup_video_close"></a>');
        $('#popup_video .item-title').text($(this).parent().parent().find('.item-title').text());
        $('body').append('<div id="fade"></div>');
        $('#fade').css({'opacity' : '0,4)'}).fadeIn();
        var w=$('#main .container').width();
        var h=w*9/16;
        $('#popup_video_block').append('<iframe width="'+w+'" height="'+h+'" src="https://www.youtube.com/embed/'+$(this).attr('data-video')+'" frameborder="0" allowfullscreen></iframe>');
        return false;
     });
     
     $('body').on('click', '#fade, #popup_video_close', function() {
        $('#fade , #popup').fadeOut(function() {
            $('#popup_video_block').empty();
            $('#popup_video').fadeOut();
            $('#popup_video_close').remove();
            $('#fade').remove();
        });
     });


    $('.nav:not(.mob-menu) li').hover(function(){
        $(this).find('.sub-menu:not(:visible)').slideDown(300);
        }, function(){
        $(this).find('.sub-menu:visible').slideUp(300);
    });

    $('.nav:not(.mob-menu) .sub-menu li').hover(function(){
        $(this).children('ul:not(:visible)').animate({ opacity: 1,width: "show"},300);
        }, function(){
        $(this).children('ul:visible').animate({ opacity: "hide",width: "hide"},300);
    }); 
    
    $('.mob-menu .subm>a .fa').click(function(e){
        e.preventDefault();
        if($(this).hasClass('fa-angle-down')){ 
            $(this).addClass('fa-angle-up').removeClass('fa-angle-down');
            $(this).parent().parent().children('ul:not(:visible)').slideDown(300);
        }else{
            $(this).parent().parent().find('.fa').addClass('fa-angle-down').removeClass('fa-angle-up');
            $(this).parent().parent().find('ul:visible').slideUp(300);
        }
    });
    $( ".mob-menu .subm>a" ).dblclick(function() {
        window.location.href=$(this).attr('href');
    });
    $('.navbar-toggle').click(function(){
        $($(this).attr('data-target')+' .mob-menu').find('.fa').addClass('fa-angle-down').removeClass('fa-angle-up');
        $($(this).attr('data-target')+' .mob-menu').find('ul:visible').slideUp(300);
    });
    
    $('.news-section .carousel').on('slid.bs.carousel', function () { ofcet(); });
    $('.carousel-bg').each(function(){
        var $parent=$(this).parent().parent();
        var src=$(this).find('.item').eq(0).find('.carousel-image img').attr('src');
//        if(src!=undefined) $parent.append('<div class="bg act" style="background-image:url('+src+')"></div><div class="bg"></div>');
//        else $parent.append('<div class="bg act"></div><div class="bg"></div>');
        var i=1;
        var clas='bg parallax act';
        $(this).find('.item').each(function(){
            var src=$(this).find('.carousel-image img').attr('src');
            if(src!=undefined&&src!='') $parent.append('<div class="'+clas+'" style="opacity:'+i+';background-image:url('+src+')"></div>');
            else $parent.append('<div class="'+clas+'" style="opacity:'+i+';"></div>');
            i=0;clas='bg parallax';
        });
    });
    
    
    $('.carousel-bg .carousel-indicators li').click(function(){
        var $parent=$(this).parents('.carousel-bg').parent().parent();
        var sl=$(this).attr('data-slide-to');
        var src=$parent.find('.carousel-bg .item').eq(sl).find('.carousel-image img').attr('src');
        if(src!=undefined){
            var $act=$parent.find('.bg.act');
            var $bg=$parent.find('.bg').eq(sl);
            //$act.removeClass('act').fadeOut();
            //$bg.css('background-image','url('+src+')').addClass('act').fadeIn();
            $act.removeClass('act').animate({'opacity':'0'},1000);
            $bg.addClass('act').animate({'opacity':'1'},1000);

//            $parent.find('.bg').animate({'opacity':'0.5'},150,function(){
//              $(this).css('background-image','url('+src+')');
//              $(this).animate({'opacity':'1'},150);
//            });
        }

        
    });

    if($('#slider1').length){
         $('#slider1').sliderRM({
            bar: true,
            nav: false,
            margin: 17,
            responsive:{
                0:{
                    items: 3,
                },
                480:{
                    items: 3,
                },
                768:{
                    items: 3,
                },
                980:{
                    items: 4,
                },
            },
        });
    }
        $('.slider-rm-ul li').click(function(){
            var sl=$(this).attr('data-slide-to')-1;
            $('#slider1').trigger('goto-slider', (sl));
            $('.fulscreen .item-num').text((sl+2));
            if($('.inner-slider').hasClass('fulscreen-slider')){
                $('.inner-slider .container:not(:last-child)').css('width',($('.item.active .carousel-image img').width()-10)+'px');
            }else{
                $('.inner-slider .container:not(:last-child)').css('width','');
            }
        });
        $('.fulscreen').click(function(){
            if($('.inner-slider').hasClass('fulscreen-slider')){ 
                $('.inner-slider').removeClass('fulscreen-slider');
                $('.item .carousel-image').css('max-height','').css('height','');
                $('.inner-slider .container:not(:last-child)').css('max-width','');
            } 
            else{ 
                $('.inner-slider').addClass('fulscreen-slider');
                $('.item .carousel-image').css('max-height','none').height($(window).height());
                $('.inner-slider .container:not(:last-child)').css('width',($('.item.active .carousel-image img').width()-10)+'px');
            }
        });
        slideInner();
        $(window).resize(function(){
            if($('.inner-slider').length){
                if($('.inner-slider').hasClass('fulscreen-slider')){ 
                    $('.inner-slider').addClass('fulscreen-slider');
                    $('.item .carousel-image').css('max-height','none').height($(window).height());
                    $('.inner-slider .container:not(:last-child)').css('width',($('.item.active .carousel-image img').width()-10)+'px');
                } 
                else{ 
                    $('.inner-slider').removeClass('fulscreen-slider');
                    $('.item .carousel-image').css('max-height','').css('height','');
                    $('.inner-slider .container:not(:last-child)').css('width','');
                }
            }
            slideInner();
        });
    
    $('.social-likes_ready .social-likes__counter_empty').text('0');

    $('#tab-search .btn-search').click(function(){
        if($(this).hasClass('active')){
            if($('#tab-search .srch-term').val()==''){
                $(this).removeClass('active');
                $('#tab-search .srch-term').animate({maxWidth: "60px"}, 800);
                $('#subnav .nav-menu').animate({width: "90%"}, 800);
                var fs=parseInt($('#subnav .nav-menu li>a').css('font-size'))+1;
                //if($(window).width()>=1200) $('#subnav .nav-menu li>a').animate({fontSize: "18px"}, 800);
                //if($(window).width()<1200&&$(window).width()>=992) 
                $('#subnav .nav-menu li>a').animate({fontSize: fs+"px"}, 800);
                
                return false;
            }
        }else{
            $(this).addClass('active');
            var w=$('#subnav .navbar-header').width()-230;
            console.log($('#subnav .navbar-header').width());
            $('#subnav .nav-menu').animate({width: w+"px"}, 800);
            var fs=parseInt($('#subnav .nav-menu li>a').css('font-size'))-1;
            //if($(window).width()>=1200) $('#subnav .nav-menu li>a').animate({fontSize: "17px"}, 800);
            //if($(window).width()<1200&&$(window).width()>=992) 
            $('#subnav .nav-menu li>a').animate({fontSize: fs+"px"}, 800);
            $('#tab-search .srch-term').animate({maxWidth: "220px"}, 800).focus();
            return false;
        }
    });
    
    $('.add_more a').click(function(e){
        e.preventDefault();
        var $item=$(this).parent().parent().find('.item:first-child').clone(true);
        $item.find('.anketa-form-item input').val('');
        $item.find('.anketa-form-item select').val('');
        $item.find('.anketa-form-item textarea').val('');
        $item.appendTo($(this).parent().parent().find('.parent_container'));
    });
    
    $('.lang-block .dropdown-menu a').click(function(e){
        e.preventDefault();
        $('.lang-block > a .lang').text($(this).text());
    });
    
    $('.carousel').carousel({
		interval: 0
	});
   $(".carousel").swiperight(function() {
      $(this).carousel('prev');
      $('.carousel-bg .carousel-indicators li.active').click();
    });
   $(".carousel").swipeleft(function() {
      $(this).carousel('next');
      $('.carousel-bg .carousel-indicators li.active').click();
   });
    
    ofcet();
    $(window).load(function(){ofcet();});
    if($(window).width()>767){
        recalc();
    }
    $(window).resize(function () {
        ofcet();
        if($(window).width()>767){
            recalc();
        }
    });
     $(window).scroll(function () {
        if($(window).width()>767){
            if ($(this).scrollTop() > 50) {
                //$('#drop-menu').fadeIn();
            } else {
                //$('#drop-menu').fadeOut();
            }
            
            $("#drop-menu a:not(.back-to-top)").each(function(){
                var id  = $(this).attr('href');
                if($(id).length){
                    if(($(id).offset().top-100)<=$(window).scrollTop()){
                        $('#drop-menu .rhs-circle.active').removeClass('active');
                        $(this).parents('li').find('.rhs-circle').addClass('active');
                    }else{
                        $(this).parents('li').find('.rhs-circle.active').removeClass('active');
                    }
                }
            });
            //console.log($(window).scrollTop()+' == '+($(document).height() - $(window).height()));
            if  ($(window).scrollTop() >= ($(document).height() - $(window).height())){
                $('#drop-menu .rhs-circle.active').removeClass('active');
                $('#drop-menu ul li:last-child .rhs-circle').addClass('active');
            }
        }    
     });
    $('body').on("click","#subnav .nav-menu li>a", function (event) {
        var urls=$(this).attr('href').split('#');
        var loc=window.location.href;
        if(urls[1]!=undefined&&urls[1]!=''){
            if(loc.indexOf(urls[0]) + 1){
                var res=loc.split(urls[1]);
                res=res[0].split(urls[0]);
                if(res[1]=='/'||res[1]=='/#'||(res[1].indexOf('#') + 1)||res[1]==undefined||res[1]==''){
                    event.preventDefault();
              		var id  = '#'+urls[1];
                    if($(id).length){
    			        var top = $(id).offset().top;
    		            $('body,html').animate({scrollTop: (top)}, 800);
                    }
                }            
            }
        }
	});
	$("#drop-menu").on("click","a", function (event) {
	   if(!$(this).hasClass('back-to-top')){
		event.preventDefault();
		var id  = $(this).attr('href'),
			top = $(id).offset().top;
		$('body,html').animate({scrollTop: (top)}, 800);
       } 
	});
//    $('.rhs-circle').hover(function(){
//        $(this).parent().find('.rhs-links').animate({width: "+=300"}, 800 ).css({position:''});
//    },function(){
//        $(this).parent().find('.rhs-links').animate({width: "-=300"}, 800 );
//    });

        // scroll body to 0px on click
        $('.back-to-top').click(function () {
            //$('#drop-menu').tooltip('hide');
            $('body,html').animate({
                scrollTop: 0
            }, 800);
            return false;
        });
 
        $('#drop-menu').tooltip('show');
    
    $('#btnToggle').click(function(){
      if ($(this).hasClass('on')) {
        $('#main .col-md-6').addClass('col-md-4').removeClass('col-md-6');
        $(this).removeClass('on');
      }
      else {
        $('#main .col-md-4').addClass('col-md-6').removeClass('col-md-4');
        $(this).addClass('on');
      }
    });
});