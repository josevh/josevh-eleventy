---
title: Javascript Array Cloning and Object References
excerpt: 'Copying, or cloning, an array of objects without the object references.'
date: 2017-12-19T22:23:02
postTags:
  - javascript
  - vue
  - ES5
  - vue.js
lang: en
---
I recently ran into a problem with Javascript, arrays of objects, and those objects' references.

The following example uses [Vue.js](https://vuejs.org/).

## Context

```html
<div id="app">
  <h2>Messages</h2>
  <div class="messages">
    <h3>Original</h3>
    <p v-for="message in messages">{{ message.content }}</p>

    <h3>Modified</h3>
    <p v-for="message in modifiedMessages">{{ message.content }}</p>
  </div>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    messages: [
      {content: 'first-choice'},
      {content: 'second-choice'},
      {content: 'third-choice'},
    ]
  },
  computed: {
    modifiedMessages: function() {
      var temp = this.messages.slice(0);
      temp.forEach(function(message) {
        message.content += ' appended';
      });
      return temp;
    }
  },
});
```

## Problem

Running the code above generates the following:

```plaintext
Messages

Original
first-choice appended
second-choice appended
third-choice appended

Modified
first-choice appended
second-choice appended
third-choice appended
```

The original values were modified, not what was intended.
The reason is that, although, [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) _did_ clone the array, the references to objects were **kept**.

## Solution

There are [various](https://stackoverflow.com/a/42524097) ways to clone an array (less if you must support at leat IE9).  However, there are not that many ways of cloning an array of objects without keeping objects' references.

The two ways are:

1. Using [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) and [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to serialize the array and recreate it.
2. Manually via for-loop.

I opted for the JSON method.

```javascript
modifiedMessages: function() {
  var temp = JSON.parse(JSON.stringify(this.messages));
  temp.forEach(function(message) {
    message.content += ' appended';
  });
  return temp;
}
```

Now we correctly clone the array dropping the objects' references and get the following output.

```plaintext
Messages

Original
first-choice
second-choice
third-choice

Modified
first-choice appended
second-choice appended
third-choice appended
```

So, to conclude, [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) _will_ clone an array. If it has objects, however, it will keep the references to those objects. This method will work without issues on arrays of primitive value.
For arrays of objects, a different approach is required. By far the easies is to use the JSON methods.

[JSFiddle](https://jsfiddle.net/w9cw9kme/11/)

[StackOverflow](https://stackoverflow.com/a/9886013)
