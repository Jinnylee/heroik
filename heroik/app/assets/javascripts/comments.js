
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

        $("#allcomments").preppend(newComment);
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
        console.log(response);
        $('#allcomments').empty();
        $('#see-more').show();

        if (response.length <= 5) {
          console.log("why");
          $('#see-more').hide();
        }

        var i;
        for (i = 0; i < 5; i++) {
          appendComments(response[i].user.image, response[i].user.username, response[i].comment);
        }

        $('#view-all-comments').off().on('click', function(e) {
          e.preventDefault();
          console.log('clicked');
          $('#see-more').hide();
          for (i = 5; i < response.length; i++) {
            appendComments(response[i].user.image, response[i].user.username, response[i].comment);
          };
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
      '<img src="' + image + '" class="comment-user-image" >' +
      '<div class="comment-user">' + username + '</div>' +
      '<div class="comment-text">' + comment + '</div>' +
    '</div>'

    $('#allcomments').append(comments);
  };
