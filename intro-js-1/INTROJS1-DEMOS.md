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
alert("I have $" + bankBalance.toFixed(2) + " in my pocket");
```

## `js-strings`

```js
var myName = "Matthew Feng"
var myAge = "19"

myName.substring(0, 7) // ask students how to get my first name
myName.substring(8, 12); // ask students how to get my last name
```

## `js-arrays`

```js
var colors = ["red", "yellow", "tree", "blue"];
colors[2] = "green";
colors[6] = "pink";
 
colors.push("purple"); // add to the end of the array
colors.splice(1, false, "orange"); // insert into array

// sort, reverse
var fruits = "pineapple, banana, orange";
fruits = fruits.split(", ");
fruits.sort(); // ask students for fruits
fruits.reverse();
```

## `js-conds`
```js
```

## `js-loops`
```js

```

## `js-funcs`
```js

```

## `js-errors`
```js
var num;
try {
    num.someFunction();
} catch (error) {
    console.log(error.message);
}
```