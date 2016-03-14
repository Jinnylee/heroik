// Place all the behaviors and hooks related to the matching controller here.
// All this logic will automatically be available in application.js.

$(document).ready(function () {

  var masonryGrid = function() {
    setTimeout(function(){
      $('#post-home').masonry({
        itemSelector: '.item',
        columnWidth: 350
      });
    }, 1000)
  };

  // GET USER INFORMATION FOR USER COLUMN (PROFILE PAGE)
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

  // GET POSTS THAT BELONG TO USER (PROFILE PAGE)
  var appendOwnPosts = function(id, image, title, post_votes, username, created_at, category) {
    var ownPosts =
    '<div class="col-xs-12 col-md-4 item">' +
      '<div class="col-xs-12 post" data-id="'+ id + '" data-toggle="modal" data-target="#showsinglepost">' +
        '<img src="' + image + '" class="col-xs-12 photo">' +
        '<div class="col-xs-12 title">' + title + '</div>' +
        '<div class="col-xs-12 votes">' + post_votes + '</div>' +
        '<div class="col-xs-12 username">' + username + '</div>' +
        '<div class="col-xs-12 date">' + created_at + '</div>' +
        '<div class="col-xs-12 category">' + category + '</div>' +
      '</div>' +
    '</div>';

    $('#userposts').append(ownPosts);
  };


  // GET ALL POSTS AND USER INFORMATION
  var showUserPage = function () {
    $.ajax({
      url: "/api/users/profile.json",
      method: "GET",
      success: function (response, status) {
        $('#userposts').empty();
        $('#usercolumn').empty();
        user = response.user;
        appendUserInformation(user.image, user.name, user.username, user.created_at, user.quote);

        response.posts.forEach(function(elem, index) {
          appendOwnPosts(elem.id, elem.image, elem.title, elem.post_votes, elem.username, elem.created_at, elem.category);
        });

        showOnePost();
      },
      error: function(response, status) {
        console.log(response);
        console.log("did not get post data")
      }
    });
  };

  // APPEND CONTENT TO MODAL
  var modalForSinglePost = function(post_votes, title, image, username, location, description, created_at, category, id) {
    var body =
    '<div id="singlebody">' +
      '<div id="singlevotes"><i class="fa fa-thumbs-up"></i> ' + post_votes + '</div>' +
      '<div id="singletitle">' + title + '</div>' +
      '<p><img src=' + image + ' class="col-xs-12 photo"></p>' +
      '<p><div id="singleusername">' + username + '</div></p>' +
      '<p><div id="singlelocation">' + location + '</div></p>' +
      '<p><div id="singledescription">' + description + '</div></p>' +
      '<p><div id="singledate">' + created_at + '</p>' +
      '<p><div id="singlecategory">' + category + '</div></p>' +
    '</div>';

    // var footer =
    // '<div id="commentsection">' +
    //   '<p id="commenttag"> Comments </p>' +
    //   '<p><i class="fa fa-user"></i>&nbsp;&nbsp;' +
    //   '<textarea class="form-control" id="commentform" name="comment" rows="1" placeholder="Add a comment..."></textarea>' +
    //   '</p>' +
    //   '<button type="button" class="btn btn-danger" id="comment-btn">Comment</button>' +
    //   '<p><div id="allcomments"></div></p>' +
    // '</div>';

    $('.deletePostBtn').data('id', id);
    $('.heroBtn').data('id', id);
    $('.comment-btn').data('id', id);
    $('#editpost').data('id', id);

    $('#edit-title').val(title);
    $('#edit-image').val(image);
    $('#edit-category').val(category);
    $('#edit-location').val(location);
    $('#edit-description').val(description);

    $('.single-body').empty();
    // $('.single-footer').empty();
    $('.single-body').append(body);
    // $('.single-footer').append(footer)
  };

  // SHOW ONE POST ON MODAL
  var showOnePost = function () {
    $('.post').off().on('click', function (e) {
      e.preventDefault();
      var id = $(this).data("id")
      // if (location.pathname == "/")
      $('.editPostBtn').addClass('hide');
      $('.deletePostBtn').addClass('hide');
      $('.heroBtn').removeClass("hide");

      $.ajax({
        method: "GET",
        url: "/api/posts/" + id + ".json",
        success: function (response) {
          console.log(response)
          if (response.belongs_to_current_user){
            $('.editPostBtn').removeClass('hide');
            $('.deletePostBtn').removeClass('hide');
          }
          if (response.current_user_voted > 0) {
            $('.heroBtn').addClass("hide");
          }

          modalForSinglePost(response.post_votes, response.title, response.image, response.username, response.location, response.description, response.created_at, response.category, response.id);

          openEditModal();
          editPost();
          deletePost();

          $.auth.validateToken().then(function(user){
            addComment(user);
            addHeroButton();
          }).fail(function(response){
            console.log(response);
          });
        },
        error: function (response) {
          console.log(response);
          console.log("not getting single post data!")
        }
      });

    });
  };

  // CREATE POST
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
        post_votes : 0,
        latitude: postLat.toString(),
        longitude: postLong.toString()
      };

      $.ajax({
        method: 'POST',
        url: '/api/posts',
        data: {
          post: post
        },
        success: function (response) {
          $('#addpostmodal').modal('hide');
          showUserPage();
        },
        error: function (response) {
          console.log("no post to add", response);
        }
      });

    })
  };

  // OPEN THE EDIT MODAL
  var openEditModal = function () {
    $('.editPostBtn').off().on('click', function (e) {
      console.log("clicked")
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
      console.log(id);
      var editedpost = {
        title: $('#edit-title').val(),
        image: $('#edit-image').val(),
        category: $('#edit-category').val(),
        location: $('#edit-location').val(),
        description: $('#edit-description').val()
      };

      // var updatepost = function(image, title, username, created_at) {
      //   var post =
      //   '<img src=' + image + ' class="col-xs-12 photo">' +
      //   '<div class="col-xs-12 title">' + title + '</div>' +
      //   '<div class="col-xs-12 username">' + username + '</div>' +
      //   '<div class="col-xs-12 date">' + created_at + '</div>';
      // };

      $.ajax({
        url: "/api/posts/" + id + ".json",
        method: "PUT",
        data: {
          editedpost: editedpost
        },
        success: function (response, status) {
          console.log(response);
          $('#editpostmodal').modal('hide');
          showUserPage();

          // var post = updatepost(response.image, response.title, response.username, response.created_at);
          // $('div.data-id='+ response.id).html(post);
        },
        error: function (response, status) {
          console.log(response);
        }
      });

    });
  };

  // DELETE POST
  var deletePost = function () {
    $('.deletePostBtn').off().on('click', function (e){
      e.preventDefault();
      $('#delete-form-message').text('');

      console.log("request sent!");

      var id = $(this).data("id");

      $.ajax({
        url: '/api/posts/' + id + '.json',
        method: 'DELETE',
        success: function (response, status) {
          $('#showsinglepost').modal('hide');
          showUserPage();
        },
        error: function (response, status) {
          console.log(response);
        }
      })
    })
  };

  // APPEND POSTS TO HOME
  var appendAllPosts = function(id, image, title, post_votes, username, created_at, category) {
    var ownPosts =
    '<div class="item">' +
      '<div class="col-xs-12 post" data-id="'+ id + '" data-toggle="modal" data-target="#showsinglepost">' +
        '<img src=' + image + ' class="col-xs-12 photo">' +
        '<div class="col-xs-12 title">' + title +
        '</div>' +'<div class="col-xs-12 votes">' + post_votes + '</div>' +
        '<div class="col-xs-12 username">' + username + '</div>' +
        '<div class="col-xs-12 date">' + created_at + '</div>' +
        '<div class="col-xs-12 category">' + category + '</div>' +
      '</div>' +
    '</div>';

    $('#post-home').append(ownPosts);
  };

  // GET ALL POSTS (HOME PAGE)
  var allPostsHomePage = function () {
    $.ajax({
      url: "/api/posts.json",
      method: "GET",
      success: function (response, status) {
        response.forEach(function(elem, index) {
          appendAllPosts(elem.id, elem.image, elem.title, elem.post_votes, elem.user.username, elem.created_at, elem.category);
        });
        masonryGrid();
        showOnePost();
      },
      error: function(response, status) {
        console.log(response);
        console.log("did not get post data")
      }
    });
  };

  // GET COMMUNITY POSTS
  var communityPosts = function() {
    $.ajax({
      url: "/api/posts/community.json",
      method: "GET",
      success: function (response, status) {
        console.log(response);
        response.forEach(function (elem, index) {
          appendAllPosts(elem.id, elem.image, elem.title, elem.post_votes, elem.username, elem.created_at, elem.category);
        });
        masonryGrid();
        showOnePost();
      },
      error: function (response, status) {
        console.log(response);
        console.log("did not get community posts");
      }
    });
  };

  // GET YOUTH POSTS
  var youthPosts = function() {
    $.ajax({
      url: "/api/posts/youth.json",
      method: "GET",
      success: function (response, status) {
        console.log(response);
        response.forEach(function (elem, index) {
          appendAllPosts(elem.id, elem.image, elem.title, elem.post_votes, elem.username, elem.created_at, elem.category);
        });
        masonryGrid();
        showOnePost();
      },
      error: function (response, status) {
        console.log(response);
        console.log("did not get community posts");
      }
    });
  };

  // GET ENVIRONMENT POSTS
  var environmentPosts = function() {
    $.ajax({
      url: "/api/posts/environment.json",
      method: "GET",
      success: function (response, status) {
        console.log(response);
        response.forEach(function (elem, index) {
          appendAllPosts(elem.id, elem.image, elem.title, elem.post_votes, elem.username, elem.created_at, elem.category);
        });
        masonryGrid();
        showOnePost();
      },
      error: function (response, status) {
        console.log(response);
        console.log("did not get community posts");
      }
    });
  };

  // GET ANIMALS POSTS
  var animalsPosts = function() {
    $.ajax({
      url: "/api/posts/animals.json",
      method: "GET",
      success: function (response, status) {
        console.log(response);
        response.forEach(function (elem, index) {
          appendAllPosts(elem.id, elem.image, elem.title, elem.post_votes, elem.username, elem.created_at, elem.category);
        });
        masonryGrid()
        showOnePost();
      },
      error: function (response, status) {
        console.log(response);
        console.log("did not get community posts");
      }
    });
  };

  // GET GOOD DEEDS POSTS
  var goodDeedsPosts = function() {
    $.ajax({
      url: "/api/posts/good_deeds.json",
      method: "GET",
      success: function (response, status) {
        console.log(response);
        response.forEach(function (elem, index) {
          appendAllPosts(elem.id, elem.image, elem.title, elem.post_votes, elem.username, elem.created_at, elem.category);
        });
        masonryGrid()
        showOnePost();
      },
      error: function (response, status) {
        console.log(response);
        console.log("did not get community posts");
      }
    });
  };

  // GET MOST POPULAR POSTS
  // GO TO HOME

  $.auth.validateToken().then(function(user){
    showUserPage();
    createPost(user);
  }).fail(function(response){
    console.log(response);
  });

  var init = function () {
    if (location.pathname == '/posts') {
      if (location.search.split('?')[1]) {
        var params = {target: ''};
        location.search.split('?')[1].split('&').forEach(function(elem){
          var temp = elem.split('=');
          params[temp[0]] = temp[1];
        });

        switch (params.target) {
          case "community":
            communityPosts();
            break;
          case "youth":
            youthPosts();
            break;
          case "environment":
            environmentPosts();
            break;
          case "animals":
            animalsPosts();
            break;
          case "gooddeeds":
            goodDeedsPosts();
            break;
          default:
            allPostsHomePage();
        }
      }
    } else {
      allPostsHomePage();
    }
  }

  init();

});