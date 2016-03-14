$(document).ready(function () {

  var appendNameToNavBar = function(name) {
    var userName =
    '<div class="col-xs-12" id="userinfo">' +
      '<div class="col-xs-12">' + name + '</div>' +
    '</div>';

    $('#user-navbar-section').append(userName);
  };

// NOTE: SIGN UP AND SIGN IN IS DISPLAYED IN ONE MODAL WITH ONE BUTTON IN NAV BAR CURRENTLY

  // SIGN UP FORM IN MODAL POP UP - ONCE SIGN UP BUTTON IN NAV BAR IS CLICKED
  $('#signup-form').on('submit', function(e){
      e.preventDefault();
    console.log("clicked");
    first_name = $('#signup-form input[name="first-name"]').val();
    last_name = $('#signup-form input[name="last-name"]').val();

    $.auth.emailSignUp({
      email: $('#signup-form input[name="email"]').val(),
      password: $('#signup-form input[name="password"]').val(),
      password_confirmation: $('#signup-form input[name="password_confirmation"]').val(),
      first_name: first_name,
      last_name: last_name,
      username: $('#signup-form input[name="username"]').val(),
      name: first_name +' ' + last_name

    }).then(function(user){
      console.log(user)
      window.location.href = "/";

    }).fail(function(resp){
      console.log(resp)
    });
  });

  // SIGN IN FORM IN MODAL POP UP - ONCE SIGN IN BUTTON IN NAV BAR IS CLICKED
    $('#signin-form').on('submit', function(e){
      e.preventDefault();

    $.auth.emailSignIn({
      email: $('#signin-form input[name="email"]').val(),
      password: $('#signin-form input[name="password"]').val(),
    }).then(function(user){
      console.log(user)
      window.location.href = '/'
    }).fail(function(resp){
      console.log(resp)
    });
  });


  $('#logout-button').on('click', function(e){
    e.preventDefault();
    $.auth.signOut();
    window.location.href = "/";
  });

  $('#fb-button').on('click', function(e){
    e.preventDefault();
    console.log("test")
    $.auth.oAuthSignIn({provider: 'facebook'});
  })

  $.auth.validateToken().then(function(user){
    $('#signin-signup').hide();
    $('#user-name-dashboard').show();
    $('#logout').show();
    $('#nav-profile').text(user.name);

    }).fail(function(resp){
      console.log(resp)
    });
});