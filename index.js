   // Get the video
   var video = document.getElementById("myVideo");

   // Get the button
   var btn = document.getElementById("myBtn");

   $(document).ready(function () {
       var div = $('#menu-new div.contSize'),
           ul = $('ul.menu'),
           ulPadding = 15;

       var divWidth = div.width();
       var lastLi = ul.find('li:last-child');

       div.mousemove(function (e) {

           var ulWidth = lastLi[0].offsetLeft + lastLi.outerWidth() + ulPadding;
           var left = (e.pageX - div.offset().left) * (ulWidth - divWidth) / divWidth;
           div.scrollLeft(left);
       });
   });

   function playVideo(id) {
       function playVideo(link) {
           document.getElementById("main-video").src = link;
           document.getElementById("myVideo").load()
       }
       switch (id) {
           case "alpha_mega":
               playVideo("./films/alphal_mega_image_january_2019.mp4")
               break;
           case "dove_uk":
               playVideo("./films/dove_uk.mp4")
               break;
           case "lidl_teaser":
               playVideo("./films/lidl_teaser.mp4")
               break;
           case "dove_japan":
               playVideo("./films/dove_japan.mp4")
               break;
           case "christis_yoghurt":
               playVideo("./films/christis_yoghurt.mp4")
               break;
           case "debenhams":
               playVideo("./films/debenhams.mp4")
               break;
           case "bugs_and_heroes":
               playVideo("./films/bugs_and_heroes.mp4")
               break;
               case "prase":
               playVideo("./films/prase.mp4")
               break;
       }

   }
   $(document).ready(function () {
       // Transition effect for navbar 
       $(window).scroll(function () {
           // checks if window is scrolled more than 500px, adds/removes solid class
           if ($(this).scrollTop() > 500) {
               $('.navbar').addClass('solid');
           } else {
               $('.navbar').removeClass('solid');
           }
       });
   });