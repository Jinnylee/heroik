
//ADD COMMENT
  var addComment = function (user) {
    $(".comment-btn").off().on('click', function(e) {
    e.preventDefault();
    console.log("clicked comment")

    var id = $(this).data("id");

    var newComment = {
      comment : $('textarea#commentform').val(),
      post_id : id,
      user_id : user.id
    };
    console.log(newComment);

    $.ajax({
      type: 'POST',
      url: 'api/posts/' + id + '/comments.json',
      data: {
        newComment: newComment
      },
      success: function(response){
        $('textarea#commentform').val('');

        var newComment =
        "<div>" +
        "<b>" + response.user.username + "</b>" +
        "<br>" + response.comment +
        "</div>"

        $("#allcomments").append(newComment);
      },
      error: function(response){
        console.log(response);
      }
    });
    });
  };

// SHOW COMMENTS ON POST MODEL
  var showAllComments = function() {
    $.ajax({
      type: 'GET',
      url: 'api/posts/' + id + '/comments.json',
      success: function(response) {
        console.log(response);
        response.forEach(function(elem, index) {
          appendComments(elem.image, elem.username, elem.comment);
        });

      },
      error: function(response) {
        console.log(response);
      }
    })
  }

// APPEND COMMENTS ON POST MODEL (limit to 5)
  var appendComments = function(image, username, comment) {
    var comments =
    '<div class="comment">' +
      '<div class="comment-user-image">' + image + '</div>' +
      '<div class="comment-user">' + username + '</div>' +
      '<br><div class="comment-text">' + comment + '</div>' +
    '</div>'

    $('#allcomments').empty();
    $('#allcomments').append(comments);
  };
