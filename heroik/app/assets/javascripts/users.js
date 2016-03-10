
// This is just testing to make sure the code works. The below code should be added to the NAV BAR in layouts

$('#signup-form').on('submit', function(e){
    e.preventDefault();

  $.auth.emailSignUp({
    email: $('#signup-form input[name="email"]').val(),
    password: $('#signup-form input[name="password"]').val(),
    password_confirmation: $('#signup-form input[name="password_confirmation"]').val()
  }).then(function(user){
    console.log(user)
    window.location.href = "www.google.com";
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
    window.location.href = "www.google.com";
    console.log(user)
  }).fail(function(resp){
    console.log(resp)
  });
});
