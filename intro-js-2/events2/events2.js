function changeText(obj) {
  obj.innerHTML = "I've been clicked";
}

var buttons = document.getElementsByTagName("button")

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    changeText(event.target);
  });
}