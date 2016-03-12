$(document).ready(function(){

  $("#commentform").on('submit', function(e){
    e.preventDefault();

    var newComment = {
      comment: $("#commentform input[name='commentfield']").val(),
      post_id: 1,
      user_id: 1
    }
    $.ajax({
      type: "POST",
      url: "/comments.json",
      data: {
        insertComment: newComment
      },
      success: function(response){
        console.log(response);
        var newPara = "<p>"+response.comment+"</p>"
        $("#show-comments").append(newPara);
      },
      error: function(response){
        console.log(response);
      }
    });
  });
});