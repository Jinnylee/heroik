$(document).ready(function () {

// FACEBOOK LOGIN:

window.fbAsyncInit = function() {
    FB.init({
      appId      : '1012996212127261',
      xfbml      : true,
      version    : 'v2.5'
    });
  };

  (function(d, s, id){
     var js, fjs = d.getElementsByTagName(s)[0];
     if (d.getElementById(id)) {return;}
     js = d.createElement(s); js.id = id;
     js.src = "//connect.facebook.net/en_US/sdk.js";
     fjs.parentNode.insertBefore(js, fjs);
   }(document, 'script', 'facebook-jssdk'));


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

  $.auth.validateToken().then(function(user){
    $('#signin-signup').hide();
    $('#user-name-dashboard').show();
    $('#logout').show();
    $('#nav-profile').text(user.name);

    }).fail(function(resp){
      console.log(resp)
    });
});