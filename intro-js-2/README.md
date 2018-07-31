# Demos 

## `objects1`
```js
// Ask for a student volunteer to be interviewed
var person = {
    firstName: "Matthew",
    lastName: "Feng",
    age: 19,
    favoriteFoods: ["dumplings", "kiwi"],
    job: {
        position: "Research Intern",
        company: "NIST"
    },
    fullName: function () {
        this.firstName + " " + this.lastName;
    }
}

// Display some of the properties
document.write(person.firstName)
document.write(person.fullName) // show what happens without the parentheses
document.write(person.fullName())
```

## `json`
```js
// DEMO 1: Add the following code
JSON.stringify(person);

// DEMO 2: Add the following code
var youtubeData = JSON.parse(youtubeDataJSON);
console.log(youtubeData.items[0].id)
```

## `dom-select`
```js

// Selecting by ID
var btn = document.getElementById("myBtn");
btn.style.height = "100px";

// Selecting by Class
var messages = document.getElementsByClassName("message");
messages[0].style.color = "red";
messages[1].style.backgroundColor = "#FF00FF";

// Selecting by Tag
var paragraphs = document.getElementsByTagName("p");
paragraphs[1].innerHTML = "AWOO, AWOO, AWOO AWOO AWOO!";
```

## `events1`
```js
// Can change these functions if you want
function alertMe() {
  alert("Hi!");
}

function changeText(object) {
  object.innerHTML = "You clicked me!";
}
```

## `events2`
```js
function changeText(obj) {
  obj.innerHTML = "I've been clicked";
}

var buttons = document.getElementsByTagName("button")

for (var i = 0; i < buttons.length; i++) {
  buttons[i].addEventListener("click", function (event) {
    changeText(event.target); // describe what event.target is
  });
}
```