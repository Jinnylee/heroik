
$(document).ready(function () {

  $('#signup-form').on('submit', function(e){
      e.preventDefault();
console.log("clicked");
    $.auth.emailSignUp({
      email: $('#signup-form input[name="email"]').val(),
      password: $('#signup-form input[name="password"]').val(),
      password_confirmation: $('#signup-form input[name="password_confirmation"]').val()
    }).then(function(user){
      console.log(user)
      window.location.href = "http://www.google.com";
    }).fail(function(resp){
      console.log(resp)
    });
  });

    $('#signin-form').on('submit', function(e){
      e.preventDefault();

    $.auth.emailSignIn({
      email: $('#signin-form input[name="email"]').val(),
      password: $('#signin-form input[name="password"]').val(),
    }).then(function(user){
      console.log(user)
      window.location.href = "http://www.google.com";
      console.log(user)
    }).fail(function(resp){
      console.log(resp)
    });
  });
});
