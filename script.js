$(document).ready(function () {
  $(".toggle-password").click(function () {
    $(this).toggleClass("active");
    var input = $($(this).closest(".form-group").find("input"));
    if (input.attr("type") == "password") {
      input.attr("type", "text");
    } else {
      input.attr("type", "password");
    }
  });

  $("#registerButton").click(function (event) {
    var isValid = true;
    $("#registrationForm :input[required]").each(function () {
      if (!$(this).val()) {
        isValid = false;
        $(this).addClass("is-invalid");
      }
    });
    if (isValid) {
      window.location.href = "pagina.html";
    }
  });
});
