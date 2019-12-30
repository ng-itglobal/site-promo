(function($) {
  var $form = $("#sent-request-form");

  function IsValidPhone(phone) {
    var r = /^((8|\+7)[\- ]?)?(\(?\d{3}\)?[\- ]?)?[\d\- ]{7,10}$/;
    return r.test(phone);
  }

  function isValidEmailAddress(emailAddress) {
    var pattern = /^([a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+(\.[a-z\d!#$%&'*+\-\/=?^_`{|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+)*|"((([ \t]*\r\n)?[ \t]+)?([\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*(([ \t]*\r\n)?[ \t]+)?")@(([a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\d\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.)+([a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF][a-z\d\-._~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]*[a-z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF])\.?$/i;
    return pattern.test(emailAddress);
  }

  var validateForm = function() {
    $form.find(".is-invalid").removeClass("is-invalid");
    $form.find(".invalid-feedback").addClass("hide");
    var result = true;

    var $phone = $("#sentRequestPhone");
    if (!IsValidPhone($phone.val())) {
      $phone.addClass("is-invalid");
      $phone.siblings(".invalid-feedback").removeClass("hide");
      result = false;
    }

    var $email = $("#sentRequestEmail");
    if (!isValidEmailAddress($email.val())) {
      $email.addClass("is-invalid");
      $email.siblings(".invalid-feedback").removeClass("hide");
      result = false;
    }

    var $msg = $("#sentRequestMsg");
    if (!($msg.val() && $msg.val().length > 0)) {
      $msg.addClass("is-invalid");
      $msg.siblings(".invalid-feedback").removeClass("hide");
      result = false;
    }

    var $name = $("#sentRequestName");
    if (!($name.val() && $name.val().length > 0)) {
      $name.addClass("is-invalid");
      $name.siblings(".invalid-feedback").removeClass("hide");
      result = false;
    }

    return result;
  };

  $("#submit-btn").on("click", function(e) {
    $(".result-msg").remove();

    if (validateForm()) {
      $form.submit();
    }

    e.preventDefault();
  });

  function objectifyForm(formArray) {
    var returnArray = {};
    for (var i = 0; i < formArray.length; i++) {
      returnArray[formArray[i]["name"]] = formArray[i]["value"];
    }
    return returnArray;
  }

  $form.on("submit", function(e) {
    $(".sent-request-in-progress").show();
    $(".result-msg").remove();
    var $button = $("#sent-request-form .submit-btn");

    var formData = objectifyForm($(this)[0]);

    $.ajax({
      url: $(this).attr("action"),
      type: "POST",
      data: JSON.stringify(formData),
      cache: false,
      contentType: "application/json",
      processData: false
    })
      .done(function(r, a, b) {
        if (b && b.status === 200) {
          $button.before(
            '<p class="result-msg alert alert-info" role="alert">Заявка успешно отправлена, скоро мы с вами свяжемся.</p>'
          );
          $form[0].reset();
        } else {
          if (r.error) {
            $button.before(
              '<p class="result-msg alert alert-danger" role="alert">Произошла ошибка: "' +
                r.error +
                '" — попробуйте связаться с нами через страницу "Контакты".</p>'
            );
          } else {
            $button.before(
              '<p class="result-msg alert alert-danger" role="alert">Произошла ошибка, попробуйте связаться с нами через страницу "Контакты".</p>'
            );
          }
          console.log(r, a, b);
        }
      })
      .fail(function(r, a, b) {
        $button.before(
          '<p class="result-msg alert alert-danger" role="alert">Произошла ошибка ' +
            r.status +
            " (" +
            r.statusText +
            '), попробуйте связаться с нами через страницу "Контакты".</p>'
        );
        console.log(r, a, b);
      })
      .always(function() {
        $(".sent-request-in-progress").hide();
      });

    e.preventDefault();
  });
})(jQuery);
