# Notes of Introduction to JavaScript, Part 1 (Syntax) Demos

## `js-hello`

```js
alert("Hello!");
prompt(""); // ask students for a question
document.write(""); // ask another student for a response
console.log("testing 123");
```

## `js-vars`
```js
var greeting = ""; // ask students for some kind of greeting
var name = prompt("What is your name?");

document.write(greeting + ", " + name);
```

## `js-numbers`

```js
var bankBalance = 10;
document.write("I have $" + bankBalance.toFixed(2) + " in my pocket");

// Showcase NaN and Infinity
document.write(Number(""));
document.write("1 / 0 = ", 1 / 0);
```

## `js-strings`

```js
var myName = "Matthew Feng";

myName.substring(0, 7); // ask students how to get my first name
myName.substring(8, 12); // ask students how to get my last name

```

## `js-arrays`

```js
var colors = ["red", "yellow", "tree", "blue"];
colors[2] = "green";
colors[6] = "pink";

document.write(colors);
 
colors.push("purple"); // add to the end of the array
colors.splice(1, 0, "orange"); // insert into array

document.write(colors);

// sort, reverse
var fruits = "pineapple, banana, orange";
fruits = fruits.split(", ");
fruits.sort(); // ask students for fruits
fruits.reverse();
```

## `js-conds`
```js
var age = prompt(“What is your age?”);
if (age <= 12) {
    document.write(“You are a grade schooler”);
} else if (age <= 18) {
    document.write(“You are a teenager”);
} else {
    document.write(“You are an adult”);
}
```

## `js-loops`
```js
var i = 10;

while (!(i % 3 == 2 && (i * i) % 7 == 1)) {
    i++;
}

console.log(“The answer is:”, i);

```

## `js-funcs`
```js
function sayHello() {
    document.write("Hello!");
}

function square(x) {
    return x * x;
}

function calculateDistance(x1, y1, x2, y2) {
    return Math.sqrt(square(x1 - x2) + square(y1 - y2));
}
```

## `js-errors`
```js
var a = prompt("Give a value for 'a': ");
var b = prompt("Give a value for 'b': ");

try {
    if (b == 0) {
        throw new Error("Can't divide by 0");
    }
    var ans = a / b;
    document.write(a, "/", b, "=", ans);
} catch (error) {
    document.write(error.message);
}
```