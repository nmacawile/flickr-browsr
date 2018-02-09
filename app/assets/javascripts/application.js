// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file. JavaScript code in this file should be added after the last require_* statement.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require jquery
//= require bootstrap-sprockets

$(document).on("turbolinks:load", function() {
  $("#slider-thumbs").on("mouseenter", function() { 
    $(this).animate({
      opacity: 0.8
    });
  });
  
  $("#slider-thumbs").on("mouseleave", function() { 
    $(this).animate({
      opacity: 0.1
    });
  });
  
  $(".thumbnail-img").on("mouseenter", function() { 
    $(this).animate({
      width: '90px',
      height: '90px',
      'margin-top': '-15px'
    }, "fast");
  });
  
  $(".thumbnail-img").on("mouseleave", function() { 
    $(this).animate({
      width: '75px',
      height: '75px',
      'margin-top': '0'
    }, "fast");
  });
  
  $('#myCarousel').carousel({
    interval: 4000
  });
  
  // handles the carousel thumbnails
  $('[id^=carousel-selector-]').click( function(){
    var id_selector = $(this).attr("id");
    var id = id_selector.substr(id_selector.length -1);
    id = parseInt(id);
    $('#myCarousel').carousel(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $(this).addClass('selected');
  });
  
  // when the carousel slides, auto update
  $('#myCarousel').on('slid.bs.carousel', function (e) {
    var id = $('.item.active').data('slide-number');
    id = parseInt(id);
    $('[id^=carousel-selector-]').removeClass('selected');
    $('[id=carousel-selector-'+id+']').addClass('selected');
  });
});