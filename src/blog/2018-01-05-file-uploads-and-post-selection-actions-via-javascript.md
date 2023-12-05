---
title: File uploads and post-selection actions via Javascript
excerpt: ''
date: 2018-01-05T12:00:00.000
tags:
  - vue.js
  - javascript
lang: en
---
## Context
I needed to select multiple files for upload but assign different attributes to each before posting. For example, the attribute I needed to set was the file's category (social, marketing, etc.). I wanted to be able to select multiple files, set their categories, then post the data and files.

## Problem
My initial idea was to inject new inputs and companion `select` boxes (for the category) on a button click. This worked fine, I was able to tie them together before posting via their index. However, I quickly found that if you need to process 10+ files, this could get _very_ tedious.

## Solution
I was not aware of this but I found that if you push the File objects from the file input's FileList to your own array. You keep the references to the file even after clearing the file input. In that way, I was able to generate companion `select`s for the files.

Example of file input (using Vue.js):
```html
<div id="app">
    <div>
        <input @change="addFiles" type="file" multiple />
    </div>
    <ul>
        <li v-for="(file, index) in files">
            {{ file.name }} <a href="#" @click.prevent="removeFile(index)">×</a>
        </li>
    </ul>
</div>
```

```javascript
var app = new Vue({
  el: '#app',
  data: {
    message: 'hello world',
    files: []
  },
  methods: {
    addFiles: function (elem) {
      this.files = this.files.concat(Array.from(elem.target.files));
      elem.target.value = '';
    },
    removeFile: function (index) {
      this.files.splice(index, 1);
    }
  }
});
```

With this ability, I was able to speed up the process by selecting multiple files at once and then configuring their categories. This way is much faster than selecting and configuring a file individually. It gets even faster with drag and drop.

Checkout the [JSBin](https://jsbin.com/lopiwig/2/edit?html,js,output).

