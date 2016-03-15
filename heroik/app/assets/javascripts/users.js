// EDIT USER
var editUserInfo = function (id) {

  $('#edituser').on('submit', function(e){
    e.preventDefault();
    var fullName = $('#edit-firstname').val()+' '+$('#edit-lastname').val();
    var formData = new FormData();
    var imageFile = $('#edit-image')[0].files[0];
    formData.append('user[image]', imageFile);
    formData.append('user[first_name]', $('#edit-firstname').val());
    formData.append('user[last_name]', $('#edit-lastname').val());
    formData.append('user[name]', fullName);
    formData.append('user[quote]', $('#edit-quote').val());

    $.ajax({
      url: "/api/users/" + id + ".json",
      method: "PUT",
      dataType: "JSON",
      cache: false,
      contentType: false,
      processData: false,
      data: formData,
      success: function (response, status) {
        $('#editusermodal').modal('hide');
        window.location.href='/profile';
      },
      error: function (response, status) {
        console.log(response);
      }
    });

  });

}

  var showEditUser = function () {
    $('#edit-user-btn').on("click", function (e) {
      e.preventDefault();
      var id = $(this).data("id");
      showUserModal(id);
      $("#editusermodal").show();
      $("#for-image").empty();
    });
  };

  // GET USER INFORMATION FOR MODAL
  var showUserModal = function (id) {
    $.ajax({
      url: "/api/users/profile.json",
      method: "GET",
      success: function (response, status) {
        user = response.user;
        $('#edit-firstname').val(user.first_name);
        $('#edit-lastname').val(user.last_name);
        $('#edit-quote').val(user.quote);
        $("#for-image").append('<img src="' + user.image + '" onerror="this.src=\'http://camaleon.tuzitio.com/assets/camaleon_cms/image-not-found-4a963b95bf081c3ea02923dceaeb3f8085e1a654fc54840aac61a57a60903fef.png\'" class="col-xs-12 photo">')
        editUserInfo(id);
      },
      error: function(response, status) {
        console.log(response);
        console.log("did not get post data")
      }
    });
  };
