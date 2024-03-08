# EnumsJS

**EnumsJS** is a small, lightweight library that adds an `Enum` class with basic functionality to JavaScript.

<br/><br/>

## Importing EnumsJS

### HTML
```html
<script src="https://cdn.jsdelivr.net/gh/paulkanja/enumsjs@main/es6/Enum.js"></script>
```

### ES6 Module
```js
import Enum from "https://cdn.jsdelivr.net/gh/paulkanja/enumsjs@main/es6/Enum.mjs";
```

<br/><br/>

## Using EnumsJS

### Creating a new Enum
```js
const e = new Enum("A", "B", "C");
```

### Using Enums
EnumJS uses `Symbol`s to store unique values for each key. This ensures that an Enum's value can only equal itself.
```js
const a = e.A;
a == e.A; // true
a == "A"; // false
a == Symbol("A"); // false
```

### Enum Methods and Properties
```js
// get an array of keys
e.keys; // ["A", "B", "C"]

// get an array of values associated with the keys
e.values; // [Symbol("A"), Symbol("B"), Symbol("C")]

// get a Set of keys
e.keySet(); // Set("A", "B", "C")

// check if a key exists
e.has("A"); // true
e.has("D"); // false
```

### Static Methods
```js
// get an Enum from an iterable object
// equivalent to new Enum(...iterable)
Enum.from(["A", "B", "C"]); // Enum("A", "B", "C")

// get an Enum from an iterable object with additional keys
// equivalent to new Enum(...iterable, ...values)
Enum.extend(["A", "B", "C"], "D", "E", "F"); // Enum("A", "B", "C", "D", "E", "F")

// get an Enum from the values of multiple iterable objects
Enum.join(["A", "B"], ["C", "D"], ["E", "F"]); // Enum("A", "B", "C", "D", "E", "F")
```

### Iterating Over Enums
```js
for (const key of e)
{
    const value = e[key];
}
```
