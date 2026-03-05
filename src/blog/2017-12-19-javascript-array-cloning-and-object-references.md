---
title: Javascript Array Cloning and Object References
excerpt: 'Copying, or cloning, an array of objects without the object references.'
date: 2017-12-19T22:23:02
postTags:
  - javascript
  - vue
  - ES5
  - vue.js
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

    <h3>Draft</h3>
    <p v-for="message in draftMessages">{{ message.content }}</p>
  </div>

  <button @click="startEditing">Start editing</button>
  <button @click="appendToFirstDraft">Append to first draft message</button>
  <button @click="cancelEditing">Cancel editing</button>
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
    ],
    draftMessages: []
  },
  methods: {
    startEditing: function() {
      // BUG: shallow array clone, same object references.
      this.draftMessages = this.messages.slice(0);
    },
    appendToFirstDraft: function() {
      if (this.draftMessages.length > 0) {
        this.draftMessages[0].content += ' appended';
      }
    },
    cancelEditing: function() {
      this.draftMessages = [];
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
second-choice
third-choice

Draft
first-choice appended
second-choice
third-choice
```

After clicking `Start editing`, then `Append to first draft message`, the original first value was modified too, not what was intended.
The reason is that [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) _did_ clone the array, but references to the same objects were **kept**.

## Solution

There are [various](https://stackoverflow.com/a/42524097) ways to clone an array (less if you must support at least IE9). However, there are not that many ways of cloning an array of objects without keeping objects' references.

For vanilla ES5 JavaScript, two common ways are:

1. Using [`JSON.parse()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse) and [`JSON.stringify()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/stringify) to serialize the array and recreate it.
2. Manually via for-loop.

The JSON approach works well for plain JSON-safe data, but it can drop/transform values like `Date`, `undefined`, functions, `Map`/`Set`, and it fails on circular references.

I opted for manually cloning each object.

```javascript
startEditing: function() {
  var temp = [];

  this.messages.forEach(function(message) {
    temp.push({ content: message.content });
  });

  this.draftMessages = temp;
}
```

Now we correctly clone the array dropping the objects' references and get the following output.

```plaintext
Messages

Original
first-choice
second-choice
third-choice

Draft
first-choice appended
second-choice
third-choice
```

So, to conclude, [`Array.slice()`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/slice) _will_ clone an array. If it has objects, however, it will keep the references to those objects. This method will work without issues on arrays of primitive value.
For arrays of objects, a different approach is required.
