  // APPEND CONTENT TO MODAL
  var modalForSinglePost = function(post_votes, created_at, category, title, image, location, description, pp, username, id) {
    var body =
    '<div class="col-xs-12" id="singlebody">' +
      '<div class="row"><div class="body col-xs-2" id="singlevotes" data-id="' + id + '"><i class="fa fa-thumbs-up"></i> ' + post_votes + '</div>' +
      '<div class="body col-xs-8" id="singledate">' + created_at + '</div>' +
      '<div class="body col-xs-2" id="singlecategory">' + category + '</div>' +
      '<div  class="body col-xs-12" id="singletitle">' + title + '</div>' +
      '<p><img src=' + image + ' onerror="this.src=\'http://camaleon.tuzitio.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png\'" class="photo body col-xs-12"></p>' +
      '<div class="body col-xs-12" id="singlelocation">' + location + '</div>' +
      '<div class="body col-xs-12" id="singledescription">' + description + '</div></div>' +
      '<div class="row userrow"><img src="' + pp + '" onerror="this.src=\'http://camaleon.tuzitio.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png\'" class="photo body pro-pic col-xs-3">' +
      '<div class="body col-xs-7" id="singleusername">' + username + '</div></div>' +
    '</div>';

    $('.deletePostBtn').data('id', id);
    $('.heroBtn').data('id', id);
    $('.comment-btn').data('id', id);
    $('#editpost').data('id', id);

    $('#edit-title').val(title);
    $("#for-postimage").empty().append('<img src="' + image + '" onerror="this.src=\'http://camaleon.tuzitio.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png\'" class="col-xs-12 photo">')
    $('#edit-category').val(category);
    $('#edit-location').val(location);
    $('#edit-description').val(description);

    $('.single-body').empty();
    $('.single-body').append(body);
  };

$(document).ready(function () {

  var masonryGrid = function() {
    console.log("start masonry")
    setTimeout(function(){
      $('#post-home').masonry({
        itemSelector: '.item',
        columnWidth: 350
      });
      console.log("end masonry")
    }, 1000)
  };

  // GET USER INFORMATION FOR USER COLUMN (PROFILE PAGE)
  var appendUserInformation = function(id, image, name, username, created_at, quote) {
    var userInfo =
    '<div class="col-xs-12" id="userinfo">' +
      '<img src=' + image + ' onerror="this.src=\'http://camaleon.tuzitio.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png\'" class="col-xs-12 photo">' +
      '<div id="userNameDiv" class="col-xs-12">' + name + '</div>' +
      '<div class="col-xs-12" id="user-username">' + username + '</div>' +
      '<div class="col-xs-12" id="user-created">Joined: ' + created_at + '</div>' +
      '<div id="userQuoteDiv" class="col-xs-12">"' + quote + '"</div>' +
      '<div><buttontype="button" class="btn btn-info btn-md" data-toggle="modal" data-target="#editusermodal" data-id='+id+' id="edit-user-btn">Edit Profile</button></div>' +
    '</div>';

    $('#usercolumn').append(userInfo);
  };

  // GET POSTS THAT BELONG TO USER (PROFILE PAGE)
  var appendOwnPosts = function(id, image, title, post_votes, pp, username, category) {
    var ownPosts =
    '<div class="col-xs-12 col-md-4 item">' +
      '<div class="col-xs-12 post" data-id="'+ id + '" data-toggle="modal" data-target="#showsinglepost">' +
        '<img src=' + image + ' onerror="this.src=\'http://camaleon.tuzitio.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png\'" class="col-xs-12 photo">' +
        '<div class="col-xs-12 title">' + title + '</div>' +
        '<div class="col-xs-12 votes" data-id="' + id + '"><i class="fa fa-thumbs-up"></i> ' + post_votes +
        '<img style="float:right; height:30px;width:30px" src=' + category + '></div>' +
        '<div class="row"><img src="' + pp + '" onerror="this.src=\'http://camaleon.tuzitio.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png\'" class="col-xs-2 photo">' +
        '<div class="col-xs-10 username">' + username + '</div></div>' +
      '</div>' +
    '</div>';
    $('#userposts').append(ownPosts);
  };
// moment(response.event_time).format("hh:mm")

  // GET ALL POSTS AND USER INFORMATION
  var showUserPage = function () {
    $.ajax({
      url: "/api/users/profile.json",
      method: "GET",
      success: function (response, status) {
        $('#userposts').empty();
        $('#usercolumn').empty();
        user = response.user;
        appendUserInformation(user.id, user.image, user.name, user.username, moment(user.created_at.event_time).format('MM/DD/YYYY'), user.quote);
        showEditUser();

        response.posts.forEach(function(elem, index) {
          getCategoryImage(elem.category);
          appendOwnPosts(elem.id, elem.postpic, elem.title, elem.post_votes, elem.pp, elem.username, postIcon);
        });

        showOnePost();
      },
      error: function(response, status) {
        console.log(response);
        console.log("did not get post data")
      }
    });
  };

  // SHOW ONE POST ON MODAL
  var showOnePost = function () {
    $('.post').off().on('click', function (e) {
      e.preventDefault();
      var id = $(this).data("id")
      $('.editPostBtn').hide();
      $('.deletePostBtn').hide();
      $('.heroBtn').show();
      $('.thank-you-btn').hide();


      $.ajax({
        method: "GET",
        url: "/api/posts/" + id + ".json",
        success: function (response) {
          if (response.belongs_to_current_user){
            $('.editPostBtn').show();
            $('.deletePostBtn').show();
          }
          if (response.current_user_voted > 0) {
            $('.heroBtn').hide();
            $('.thank-you-btn').show();
          }
          modalForSinglePost(response.post_votes, moment(response.created_at.event_time).format('MM/DD/YYYY'), response.category, response.title, response.postpic, response.location, response.description, response.pp, response.username, response.id);

          openEditModal();
          editPost();
          deletePost();
          showAllComments();

          $.auth.validateToken().then(function(user){
            addComment(user);
            addHeroButton();
          }).fail(function(response){
            console.log(response);
            $('#comment-form-message').text("Please sign in to comment!");
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

      var formData = new FormData();
      var imageFile = $('#create-image')[0].files[0];
      formData.append('post[image]', imageFile);
      formData.append('post[title]', $('#createpost [name="title"]').val());
      formData.append('post[category]', $('#createpost [name="category"]').val());
      formData.append('post[location]', $('#createpost [name="location"]').val());
      formData.append('post[description]', $('#createpost [name="description"]').val());
      formData.append('post[user_id]', user.id);
      formData.append('post[post_votes]', 0);
      formData.append('post[latitude]', postLat.toString());
      formData.append('post[longitude]', postLong.toString());

      $.ajax({
        method: 'POST',
        url: '/api/posts',
        dataType: "JSON",
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
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

      var formData = new FormData();
      var imageFile = $('#edit-post-image')[0].files[0];
      formData.append('editedpost[image]', imageFile);
      formData.append('editedpost[title]', $('#edit-title').val());
      formData.append('editedpost[category]', $('#edit-category').val());
      formData.append('editedpost[location]', $('#edit-location').val());
      formData.append('editedpost[description]', $('#edit-description').val());
      formData.append('editedpost[latitude]', postLat.toString());
      formData.append('editedpost[longitude]', postLong.toString());

      $.ajax({
        url: "/api/posts/" + id + ".json",
        method: "PUT",
        dataType: "JSON",
        cache: false,
        contentType: false,
        processData: false,
        data: formData,
        success: function (response, status) {
          $('#editpostmodal').modal('hide');
          showUserPage();
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

      var id = $(this).data("id");

      $.ajax({
        url: '/api/posts/' + id + '.json',
        method: 'DELETE',
        success: function (response, status) {
          $('#showsinglepost').modal('hide');
          showUserPage();
          allPostsHomePage();
        },
        error: function (response, status) {
          console.log(response);
        }
      })
    })
  };

  // APPEND POSTS TO HOME
  var appendAllPosts = function(id, image, title, post_votes, pp, username, category) {
    var ownPosts =
    '<div class="item">' +
      '<div class="col-xs-12 post" data-id="'+ id + '" data-toggle="modal" data-target="#showsinglepost">' +
        '<img src=' + image + ' onerror="this.src=\'http://camaleon.tuzitio.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png\'" class="col-xs-12 photo">' +
        '<div class="col-xs-12 title">' + title +'</div>' +
        '<div class="col-xs-12 votes" data-id="'+ id +'"><i class="fa fa-thumbs-up"></i> ' + post_votes +
        '<img style="float:right; height:30px;width:30px" src=' + category + '></div>' +
        '<div class="row"><img src="' + pp + '" onerror="this.src=\'http://camaleon.tuzitio.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png\'" class="col-xs-2 photo">' +
        '<div class="col-xs-10 username">' + username + '</div></div>' +
      '</div>' +
    '</div>';

    $('#post-home').append(ownPosts);
  };
  var postIcon;
  var getCategoryImage = function (category){
    switch (category) {
      case "Community":
        postIcon = "http://i63.tinypic.com/2u3w8wg.png";
        break;
      case "Youth":
        postIcon = "http://i66.tinypic.com/16beu88.png";
        break;
      case "Environment":
        postIcon = "http://i64.tinypic.com/34yz3uc.png";
        break;
      case "Animals":
        postIcon = "http://i63.tinypic.com/2qis2ko.png";
        break;
      case "Good Deeds":
        postIcon = "http://i67.tinypic.com/2exnc79.png";
        break;
    }
  };
var allquotes;
  // GET ALL POSTS (HOME PAGE)
  var allPostsHomePage = function () {
    $.ajax({
      url: "/api/posts.json",
      method: "GET",
      success: function (response, status) {
        console.log(response)
        allquotes = response.quotes
        response.posts.forEach(function(elem, index) {
          getCategoryImage(elem.category);
          appendAllPosts(elem.id, elem.postpic, elem.title, elem.post_votes, elem.pp, elem.username, postIcon);
          getQuote(allquotes);
        });
        console.log("finished loop")
        masonryGrid();
        showOnePost();
      },
      error: function(response, status) {
        console.log(response);
        console.log("did not get post data")
      }
    });
  };

  // APPEND QUOTE TO HOME
  var colorPick="white";
  var appendQuote = function(quote) {
    colorGenerator();
    var sentence =
    '<div class="item">' +
      '<div class="col-xs-12 post quote-box" style="background-color:'+colorPick+'">' +
        '<div id="quoteText" class="col-xs-12">' + quote +'</div>' +
      '</div>' +
    '</div>';
    $('#post-home').append(sentence);
  };
  function colorGenerator(){
    var color=Math.floor((Math.random()*6+1));
    if (color==1){
      colorPick = "DarkTurquoise";//blue
    } else if (color==2){
      colorPick = "#9907ff"; //
    } else if (color==3){
      colorPick = "#ff4e8d"; //
    } else if (color==4){
      colorPick = "#FF0067"; //
    } else if (color==5){
      colorPick = "#1abc9c";
    } else if (color==6){
      colorPick = "#31b0d5";
    }
  }

  //GET RANDOM QUOTE
  var getQuote = function(response){
    var randomizer = Math.floor((Math.random() * 10) + 1);
    if (randomizer<5){
      var random = Math.floor(Math.random() * response.length);
      console.log(random)
      appendQuote(response[random].quotation);
      allquotes.splice(random,1);
    };
  };

  // GET COMMUNITY POSTS
  var communityPosts = function() {
    $.ajax({
      url: "/api/posts/community.json",
      method: "GET",
      success: function (response, status) {
        response.forEach(function (elem, index) {
          getCategoryImage(elem.category);
          appendAllPosts(elem.id, elem.postpic, elem.title, elem.post_votes, elem.pp, elem.username, postIcon);
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
        response.forEach(function (elem, index) {
          getCategoryImage(elem.category);
          appendAllPosts(elem.id, elem.postpic, elem.title, elem.post_votes, elem.pp, elem.username, postIcon);
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
        response.forEach(function (elem, index) {
          getCategoryImage(elem.category);
          appendAllPosts(elem.id, elem.postpic, elem.title, elem.post_votes, elem.pp, elem.username, postIcon);
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
        response.forEach(function (elem, index) {
          getCategoryImage(elem.category);
          appendAllPosts(elem.id, elem.postpic, elem.title, elem.post_votes, elem.pp, elem.username, postIcon);
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
        response.forEach(function (elem, index) {
          getCategoryImage(elem.category);
          appendAllPosts(elem.id, elem.postpic, elem.title, elem.post_votes, elem.pp, elem.username, postIcon);
        });
        masonryGrid()
        showOnePost();
      },
      error: function (response, status) {
        console.log(response);
      }
    });
  };

  // GET MOST POPULAR POSTS
  var popularPosts = function() {
    $.ajax({
      url: "/api/posts/most_popular.json",
      method: "GET",
      success: function (response, status) {
        response.forEach(function (elem, index) {
          getCategoryImage(elem.category);
          // var text = '<div class="col-xs-12 top-twenty">Top 20 Stories</div>';

          // $('#userposts').append(text);
          appendAllPosts(elem.id, elem.postpic, elem.title, elem.post_votes, elem.pp, elem.username, postIcon);
        });
        masonryGrid()
        showOnePost();
      },
      error: function (response, status) {
        console.log(response);
      }
    });
  };

  // GO TO HOME

  $.auth.validateToken().then(function(user){
    showUserPage();
    createPost(user);
    window.userID = user.id;
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
          case "mostpopular":
            popularPosts();
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