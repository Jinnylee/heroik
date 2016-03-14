$(document).ready(function () {

// alert("checking js works");

  $('#carousel-button-1').off().on('click', function(e){
      e.preventDefault();
      console.log("clicked env button");
      window.location.href = '/posts?target=environment'
  });
});