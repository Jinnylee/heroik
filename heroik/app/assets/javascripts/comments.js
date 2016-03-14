$(document).ready(function(){

  var addComment = function (user) {
    console.log("AddComment")
    $("#comment-btn").off().on('click', function(e) {
    e.preventDefault();
    console.log("comment clicked and sending request!");

    var id = $(this).data("id");
    console.log(id);

    var newComment = {
      comment : $('#commentform [name="comment"]').val(),
      post_id : post.id,
      user_id : user.id
    };
    console.log(newComment);

    // $.ajax({
    //   type: 'POST',
    //   url: '/posts/' + id + '/comments.json',
    //   data: {
    //     newComment: newComment
    //   },
    //   success: function(response){
    //     console.log(response);

    //     var newComment =
    //     "<p><b>" response.user.username + "</b></p>" +
    //     "<p>" + response.comment + "</p>"
    //     console.log(user)

    //     $("#allcomments").append(newComment);
    //   },
    //   error: function(response){
    //     console.log(response);
    //   }
    // });
    });
  };


  $.auth.validateToken().then(function(user){
    addComment(user);
  }).fail(function(response){
    console.log(response);
  });

});