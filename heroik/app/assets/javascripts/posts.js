// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () {

//append user information on user column
  var appendUserInformation = function(image, name, username, created_at, quote) {
    var userInfo =
    '<div class="col-xs-12" id="userinfo">' +
      '<img src=' + image + ' class="col-xs-12 photo">' +
      '<div class="col-xs-12">' + name + '</div>' +
      '<div class="col-xs-12">' + username + '</div>' +
      '<div class="col-xs-12">' + created_at + '</div>' +
      '<div class="col-xs-12">' + quote + '</div>' +
    '</div>';

    $('#usercolumn').append(userInfo);
  };

//append all the posts that belong to that user
  var appendOwnPosts = function(id, image, title, username, created_at) {
    var ownPosts =
    '<div class="col-xs-12 col-md-4 post" data-id="'+ id + '" data-toggle="modal" data-target="#showsinglepost">' +
      '<img src=' + image + ' class="col-xs-12 photo">' +
      '<div class="col-xs-12 title">' + title + '</div>' +
      '<div class="col-xs-12 username">' + username + '</div>' +
      '<div class="col-xs-12 date">' + created_at + '</div>' +
    '</div>';

    $('#showuserposts').append(ownPosts);
  };

    // get all posts, show user information on user column
  var showUserPage = function () {
    $.ajax({
      url: "/api/getprofileinfo.json",
      method: "GET",
      success: function (response, status) {
        console.log(response)

        user = response.user;
        appendUserInformation(user.image, user.name, user.username, user.created_at, user.quote);

        response.posts.forEach(function(elem, index) {
          appendOwnPosts(elem.id, elem.image, elem.title, elem.username, elem.created_at);
        });

        showOnePost();
      },
      error: function(response, status) {
        console.log(response);
        console.log("did not get post data")
      }
    })
  };

  // append content to modal
  var modalForSinglePost = function(title, username, date, description) {
    var header =
    '<div id="singletitle">' +
      title +
    '</div>'

    var body =
    '<div id="singlebody">' +
      '<p><div id="singleusername">' + username + '</div></p>' +
      '<p><div id="singledate">' + date + '</p>' +
      '<p><div id="singledescription">' + description + '</p>' +
    '</div>'

    $('.single-body').empty();
    $('.single-header').empty();
    $('.single-body').append(body);
    $('.single-header').append(header);
  };

  var showOnePost = function () {
    $('.post').off().on('click', function (e) {
      e.preventDefault();
      console.log("Click working!");
      var id = $(this).data("id")

      $.ajax({
        method: "GET",
        url: "/api/posts/" + id + ".json",
        success: function (response) {
          console.log(response);
          modalForSinglePost(response.title, response.username, response.created_at, response.description);
        },
        error: function (response) {
          console.log(response);
          console.log("not getting single post data!")
        }
      });

    });
  }

  var init = function() {
    showUserPage();
  }

  init();

});