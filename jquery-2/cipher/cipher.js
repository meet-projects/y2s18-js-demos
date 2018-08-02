$("#enc-btn").on("click", function (event) {
  event.preventDefault();

  var message = $("#enc-msg").val();
  var keyword = $("#enc-key").val();

  $.get("http://localhost:3030/cipher/encrypt", {
    message: message,
    keyword: keyword
  }, function (data, status) {
    console.log(data);

    if (status === "success") {
      $("#dec-msg").val(data.encrypted);
    }
  });

});

$("#dec-btn").on("click", function (event) {
  event.preventDefault();

  var message = $("#dec-msg").val();
  var keyword = $("#dec-key").val();

  $.get("http://localhost:3030/cipher/decrypt", {
    message: message,
    keyword: keyword
  }, function (data, status) {
    console.log(data);

    if (status === "success") {
      $("#enc-msg").val(data.decrypted);
    }
  });

});