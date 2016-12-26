$( document ).ready(function() {
  $('#home-link').on('click', function() {
    $('#portfolio, #skills, #contact').css('display', 'none');
    $('#welcome').css('display', 'block');
  });
  $('#portfolio-link').on('click', function() {
    $('#welcome, #skills, #contact').css('display', 'none');
    $('#portfolio').css('display', 'block');
  });
  $('#skills-link').on('click', function() {
    $('#welcome, #portfolio, #contact').css('display', 'none');
    $('#skills').css('display', 'block');
  });
  $('#contact-link').on('click', function() {
    $('#welcome, #portfolio, #skills').css('display', 'none');
    $('#contact').css('display', 'block');
  });
});
