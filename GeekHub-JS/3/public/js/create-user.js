;(function() {
  
  let createUserForm = $('#create-user');
  createUserForm.on('submit', function (e) {
    e.preventDefault();

    $.ajax({
      type: "POST",
      url: "/create-user",
      data: createUserForm.serialize(),
      success: (result) => {
        $(result).slideDown('fast');
        $('#create-user button').prop('disabled', true);
      },
      error: (error) => {
        let inputError = error.responseJSON;

        let textError = $('.massage-form');
        textError.html('');

        for (let i = 0; i < inputError.length; i++) {
          $(inputError[i].inputName).parent().next().html(inputError[i].massageError);
        }
      }
    });
  });

})();