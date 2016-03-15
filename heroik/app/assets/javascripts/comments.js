
//ADD COMMENT
  var addComment = function (user) {
    $(".comment-btn").off().on('click', function(e) {
    e.preventDefault();

    var id = $(this).data("id");

    var newComment = {
      comment : $('textarea#commentform').val(),
      post_id : id,
      user_id : user.id
    };

    $.ajax({
      type: 'POST',
      url: 'api/posts/' + id + '/comments.json',
      data: {
        newComment: newComment
      },
      success: function(response){
        showAllComments();
        $('textarea#commentform').val('');
      },
      error: function(response){
        console.log(response);
      }
    });
    });
  };

// SHOW COMMENTS ON POST MODEL
  var showAllComments = function() {
    var id = $('.comment-btn').data("id");

    $.ajax({
      type: 'GET',
      url: 'api/posts/' + id + '/comments.json',
      success: function(response) {
        $('#allcomments').empty();
        $('#see-more').show();

        if (response.length <= 4) {
          $('#see-more').hide();
          for (var i = 0; i < response.length; i++) {
            appendComments(response[i].user.image, response[i].user.username, response[i].comment, response[i].id, response[i].user.id);
          }
        } else {
          for (var i = 0; i <= 4; i++) {
            appendComments(response[i].user.image, response[i].user.username, response[i].comment, response[i].id, response[i].user.id);
          }
          $('#view-all-comments').off().on('click', function(e) {
            e.preventDefault();
            console.log('clicked');
            $('#see-more').hide();
            for (i = 5; i < response.length; i++) {
              appendComments(response[i].user.image, response[i].user.username, response[i].comment, response[i].id, response[i].user.id);
            };
          });
        }
        deleteComment();
      },
      error: function(response) {
        console.log(response);
      }
    })
  }

// APPEND COMMENTS ON POST MODEL (limit to 5)
  var appendComments = function(image, username, comment, id, user_id) {
    var commentHTML =
    '<div class="comment">' +
      '<img src="' + image + '" class="comment-user-image" >' +
      '<div class="comment-user">' + username + '</div>' +
      '<div class="comment-text">' + comment + '</div>' +
    '</div>'

    var $comment = $(commentHTML)

    if (window.userID == user_id) {
      $comment.append('<button type="button" class="btn btn-default deleteCommentBtn" data-id="' + id + '"><i class="fa fa-trash-o"></i></button>')
    }

    $('#allcomments').append($comment);
  };

  var deleteComment = function() {
    $('.deleteCommentBtn').off().on('click', function (e){
      e.preventDefault();

      var id = $('.comment-btn').data("id");
      var cid = $(this).data("id");

      $.ajax({
        url: '/api/posts/' + id + '/comments/' + cid + '.json',
        method: 'DELETE',
        success: function (response, status) {
          showAllComments();
        },
        error: function (response, status) {
          console.log(response);
        }
      })
    })
  }