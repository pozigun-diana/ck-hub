 // for link more info
 $(function() {
     $(".modal-btn").fancybox({});
 });

 // for slider Examples

 $('.slider').owlCarousel({
     loop: true,
     center: true,
     nav: true,
     autoHeight: true,
     items: 1
 });
 // for slider users      
 $('.slider-2').owlCarousel({
     loop: true,
     center: true,
     nav: true,
     autoHeight: true,
     items: 2

 });

 //scroll link

 $(function() {
     $("a[href*='#']:not(.modal-btn)").click(function() {
         var _href = $(this).attr("href");
         $("html, body").animate({
             scrollTop: $(_href).offset().top - 90
         });
         return false;
     });
 });

 //fixedcap
 $(window).scroll(function() {
     var scroll = $(window).scrollTop();

     if (scroll >= 250) {
         $(".header,.up").addClass("fixed");
     } else {
         $(".header,.up").removeClass("fixed");
     }
 });


 // btn-up
 const btnUp = {
     el: document.querySelector('.btn-up'),
     show() {
         this.el.classList.remove('btn-up_hide');
     },
     hide() {
         this.el.classList.add('btn-up_hide');
     },
     addEventListener() {
         window.addEventListener('scroll', () => {
             const scrollY = window.scrollY || document.documentElement.scrollTop;
             scrollY > 400 ? this.show() : this.hide();
         });
         document.querySelector('.btn-up').onclick = () => {
             window.scrollTo({
                 top: 0,
                 left: 0,
                 behavior: 'smooth'
             });
         }
     }
 }

 btnUp.addEventListener();


 // mobile menu

 if ($(window).width() < 769) {

     jQuery(document).ready(function(b) {
         b("#nav-wrap").prepend("");
         b("#menu-icon").on("click", function() {
             b("#nav").slideToggle();
             b(this).toggleClass("active_icon")
         })
     });
     $(document).ready(function() {
         $("#menu-icon").click(function() {
             $(".cap").toggleClass("cap_active");
             return false
         })
     });


     $(document).ready(function() {
         $(".menu a").click(function() {
             $("#menu-icon").removeClass("active_icon");
             $("#nav").hide("2000")
         })


     })
 };

 //Cookies

 function setCookie(name, value, days) {
     let expires = "";
     if (days) {
         let date = new Date();
         date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
         expires = "; expires=" + date.toUTCString();
     }
     document.cookie = name + "=" + (value || "") + expires + "; path=/";
 }

 function getCookie(name) {
     let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
     return matches ? decodeURIComponent(matches[1]) : undefined;
 }


 function checkCookies() {
     let cookieNote = document.getElementById('cookie_note');
     let cookieBtnAccept = cookieNote.querySelector('.cookie_accept');

     if (!getCookie('cookies_policy')) {
         cookieNote.classList.add('show');
     }

     cookieBtnAccept.addEventListener('click', function() {
         setCookie('cookies_policy', 'true', 365);
         cookieNote.classList.remove('show');
     });
 }

 checkCookies();



 // redirect to thaks page
 $(document).on('af_complete', function(event, response) {
     var form = response.form;
     if (form.attr('id') == 'form') {
         window.location.href = "thanks.html"
     }
 });