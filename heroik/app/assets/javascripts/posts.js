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

  // GET ALL POSTS AND USER INFORMATION
  var showUserPage = function () {
    $.ajax({
      url: "/api/users/profile.json",
      method: "GET",
      success: function (response, status) {
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

  // APPEND CONTENT TO MODAL
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

  //SHOW ONE POST ON MODAL
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

  //CREATE POST
  var createPost = function (user) {
    $('#createpost').on('submit', function (e) {
      e.preventDefault();
      $('#create-form-message').text('');

      var post = {
        title   : $('#createpost [name="title"]').val(),
        image : $('#createpost [name="image"]').val(),
        category    : $('#createpost [name="category"]').val(),
        location : $('#createpost [name="location"]').val(),
        description : $('#createpost [name="description"]').val(),
        user_id : user.id,
        post_votes : 0
      };

      $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: {
          post: post
        },
        success: function (response) {
          $('#addpostmodal').modal('hide');
          appendOwnPosts();
        },
        error: function (response) {
          console.log("no post to add", response);
        }
      });

    })
  };

  // OPEN THE EDIT MODAL
  var openEditModal = function () {
    $('.editPost').off().on('click', function (e) {
      e.preventDefault();
      $('#editpostmodal').modal('show');
      $('#showsinglepost').modal('hide');
      $("#edit-form-message").text('');
    })
  };

  // EDIT POST
  var editPost = function () {
    $('#editpost').on("submit", function (e) {
      e.preventDefault();

      var id = $(this).data("id");
      var editedPost = {
        title: $('#edit-title').val(),
        image: $('#edit-image').val(),
        category: $('#edit-category').val(),
        address: $('#edit-address').val(),
        description: $('#edit-description').val()
      };

      $.ajax({
        url: "/api/posts/" + id + ".json",
        method: "PUT",
        data: {
          post: post
        },
        success: function (response, status) {
          console.log(response);
          $('#editpostmodal').modal('hide');
        },
        error: function (response, status) {
          console.log(response);
        }
      });

    });
  };

  // DELETE JOURNAL
  var deletePost = function () {
    $('.deletePost').off().on('click', function (e){
      e.preventDefault();
      $('#delete-form-message').text('');

      console.log("request sent!");

      var id = $(this).data("id");

      $.ajax({
        url: '/api/posts/' + id,
        method: 'DELETE',
        success: function (response, status) {
          console.log(response);
          $('#showsinglepost').modal('hide');
        },
        error: function (response, status) {
          console.log(response);
        }
      })
    })
  }

  var init = function() {
  }

  $.auth.validateToken().then(function(user){
    showUserPage();
    createPost(user);
    openEditModal();
    editPost();
  }).fail(function(response){
    console.log(response);
  });

  init();

});