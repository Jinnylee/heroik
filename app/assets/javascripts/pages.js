$(document).ready(function () {

  $('#carousel-button-1').off().on('click', function(e){
      e.preventDefault();
      console.log("clicked env button");
      window.location.href = '/posts?target=environment'
  });

  $('#carousel-button-2').off().on('click', function(e){
      e.preventDefault();
      console.log("clicked env button");
      window.location.href = '/posts?target=community'
  });

  $('#carousel-button-3').off().on('click', function(e){
      e.preventDefault();
      console.log("clicked env button");
      window.location.href = '/posts?target=youth'
  });

  $('#carousel-button-4').off().on('click', function(e){
    e.preventDefault();
    console.log("clicked env button");
    window.location.href = '/posts?target=neighbourhood'
  });

  $('#carousel-button-5').off().on('click', function(e){
    e.preventDefault();
    console.log("clicked env button");
    window.location.href = '/posts?target=mostpopular'
  });

});