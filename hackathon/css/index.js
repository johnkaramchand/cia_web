var clics = 0;

$(document).ready(function() {

  $('.respuesta').hide();
  $('#cerrartodas').hide();

  $('h3').click(function() {

    $(this).next('.respuesta').toggle(function() {

      $(this).next('.respuesta');

    }, function() {

      $(this).next('.respuesta').fadeIn('fast');

    });

    if ($(this).hasClass('cerrar')) {
      $(this).removeClass('cerrar');
    } else {
      $(this).addClass('cerrar');
    };

    if ($('.cerrar').length >= 3) {

      $('#cerrartodas').fadeIn('fast');

    } else {
      $('#cerrartodas').hide();
      var abiertas = $('.cerrar').length
      console.log(abiertas);
    }
  }); //Close Function Click	            

}); //Close Function Ready

$('#cerrartodas').click(function() {
  $('.respuesta').fadeOut(200);
  $('h3').removeClass('cerrar');
  $('#cerrartodas').fadeOut('fast');
});

var slideIndex = 1;
showSlides(slideIndex);

// Next/previous controls
function plusSlides(n) {
  showSlides(slideIndex += n);
}

// Thumbnail image controls
function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";
  dots[slideIndex-1].className += " active";
}