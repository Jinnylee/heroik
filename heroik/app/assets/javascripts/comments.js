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
        console.log(response);
        $('textarea#commentform').val('');

        var newComment =
        "<div>" +
        "<b>" + response.user.username + "</b>" +
        "<br>" + response.comment +
        "</div>"
        console.log(user)

        $("#allcomments").append(newComment);
      },
      error: function(response){
        console.log(response);
      }
    });
    });
  };


$(document).ready(function(){


});