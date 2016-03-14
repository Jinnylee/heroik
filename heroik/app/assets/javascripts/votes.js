var addHeroButton = function (){
  $(".heroBtn").on("click",function(e){
    e.preventDefault;
    console.log("clicked");

    var id = $(this).data("id");

    $.ajax({
      method: "PUT",
      url: "/api/posts/" + id + "/votes.json",
      success: function (response) {
        console.log(response);
        $(".heroBtn").addClass("hide");
        $("#singlevotes").text(response);
      },
      error: function (response) {
        console.log(response);
        console.log("not getting single post data!")
      }
    });
  });
};

// var checkHero = function (user){
//     var id = $(this).data("id");

//     $.ajax({
//       method: "GET",
//       url: "/api/posts/" + id + "/votes.json",
//       success: function (response) {
//         console.log(response);
//         $(".heroBtn").addClass("hide");
//       },
//       error: function (response) {
//         console.log(response);
//         console.log("not getting single post data!")
//       }
//     });
//   });
// };