// Quick exercise
// Working on a login panel from my Bananaplate project
// http://dribbble.com/iamnbutler/projects/178899-BANANAPLATE
{% load static %}
$(document).ready(function(){
  // No links pls
  $('.ui-button.inactive').click(function(){
    e.preventDefault();
  });
  
  $('#close').click(function(){
    $('.ui-panel').removeClass('bounceInDown').addClass('bounceOutUp');
  });
});