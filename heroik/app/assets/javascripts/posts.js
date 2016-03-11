// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () {

//append user information on user column
  var appendUserInformation = function(name, username, created_at, quote) {
    var userInfo =
    '<div class="col-xs-12" id="userinfo">' +
      '<div class="col-xs-12">' + name + '</div>' +
      '<div class="col-xs-12">' + username + '</div>' +
      '<div class="col-xs-12">' + created_at + '</div>' +
      '<div class="col-xs-12">' + quote + '</div>' +
    '</div>';

    $('#usercolumn').append(userInfo);
  };

//append all the posts that belong to that user
  var appendOwnPosts = function(title, username, created_at) {
    var ownPosts =
    '<div class="col-xs-12 col-md-4 post">' +
      '<div class="col-xs-12 photo">Photo</div>' +
      '<div class="col-xs-12 title">' + title + '</div>' +
      '<div class="col-xs-12 username">' + username + '</div>' +
      '<div class="col-xs-12 date">' + created_at + '</div>' +
    '</div>';

    $('#showuserposts').append(ownPosts);
  };

    // get all posts
  var showOwnPosts = function () {
    $.ajax({
      url: "/getprofileposts.json",
      method: "GET",
      success: function (response, status) {
        console.log(response)

        response.posts.forEach(function(elem, index) {
          appendOwnPosts(elem.title, response.username[0].username, elem.created_at);
          console.log(elem);
        })
      },
      error: function(response, status) {
        console.log(response);
        console.log("did not get post data")
      }
    })
  };

  // show user information on user column


  var init = function() {
    showOwnPosts();
  }

  init();

});