$( document ).ready(function() {
  $('#home-link, #home-button').on('click', function() {
    $('#portfolio, #skills, #contact').css('display', 'none');
    $('#welcome').css('display', 'block');
  });
  $('#portfolio-link, #portfolio-button').on('click', function() {
    $('#welcome, #skills, #contact').css('display', 'none');
    $('#portfolio').css('display', 'block');
  });
  $('#skills-link, #skills-button').on('click', function() {
    $('#welcome, #portfolio, #contact').css('display', 'none');
    $('#skills').css('display', 'block');
  });
  $('#contact-link, #contact-button').on('click', function() {
    $('#welcome, #portfolio, #skills').css('display', 'none');
    $('#contact').css('display', 'block');
  });
});
