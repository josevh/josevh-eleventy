---
title: A Neat Python
excerpt: ''
date: 2019-06-20T12:00:00.000
postTags:
  - python
  - env
pageLang: en
---

## Context
Before my latest job my main programming language was PHP and Javascript/Node. Something that both of those languages have in common is the ability to manage project dependencies via a file. In Javascript/Node I could rely on package.json to ensure that the project was portable and that dependencies were kept track of. In PHP, that same functionality came in Composer and my compose.json. For Python it wasn't so simple.

Know, this is written for me to remember the process. If it helps you however, more power to you. 😀

## The Solution
Out of the many solutions that exist in Python (virtualenv, venv, pyenv, etc.) I ended going with this route. For context, I used the following on Ubuntu 18.04.

### Install prerequisites
```shell
$ sudo apt install python3 python3-pip python3-venv
```

### Initialize in project
```shell
$ cd project-dir/
$ python3 -m venv ./venv
$ source ./venv/bin/activate

# check, should list pip for project-dir
$ pip -V
```

### Save/Update Dependencies
```shell
$ pip freeze > requirements.txt
```

### Install dependencies
```shell
$ pip install -r requirements.txt
```

That's it! This gets me similar functionality to what I had come to expect because of my earlier projects with PHP and Javascript.
Yes this is a an oversimplification but it's close enough.
