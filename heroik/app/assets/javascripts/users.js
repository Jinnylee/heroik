// EDIT USER
var editPost = function () {
  $('#edit-user-btn').on("click", function (e) {
    e.preventDefault();

    var id = $(this).data("id");
    console.log(id);
    var editedUser = {
      first_name: $('#edit-firstname').val(),
      last_name: $('#edit-lastname').val(),
      quote: $('#edit-quote').val()
    };

    $.ajax({
      url: "/api/users/" + id + ".json",
      method: "PUT",
      data: {
        editedpost: editedUser
      },
      success: function (response, status) {
        console.log(response);
        $('#editusermodal').modal('hide');
      },
      error: function (response, status) {
        console.log(response);
      }
    });

  });
};