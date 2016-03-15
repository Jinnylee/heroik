var addHeroButton = function (){
  $(".heroBtn").off().on("click",function(e){
    e.preventDefault;
    console.log("clicked");

    var id = $(this).data("id");

    $.ajax({
      method: "PUT",
      url: "/api/posts/" + id + "/votes.json",
      success: function (response) {
        console.log(response);
        $('.heroBtn').hide();
        $('.thank-you-btn').show();

        $('.votes[data-id=' + id + ']').empty();
        $('.votes[data-id=' + id + ']').append('<i class="fa fa-thumbs-up"></i> ' + response);

        $('#singlevotes[data-id=' + id + ']').empty();
        $('#singlevotes[data-id=' + id + ']').append('<i class="fa fa-thumbs-up"></i> ' + response);

      },
      error: function (response) {
        console.log(response);
        console.log("not getting single post data!")
      }
    });
  });
};