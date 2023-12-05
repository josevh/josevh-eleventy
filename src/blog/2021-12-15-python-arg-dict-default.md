---
title: Python Function Mutable Argument Default Value
excerpt: "Unexpected gotcha when assigning an arg a dict value of a mutable type."
date: 2021-12-15T08:00:00
tags:
  - python
lang: en
---

This issue was brought up to me in a conversation with my manager and I thought
it would be a good idea to create a post about it. It may not be new to you but
these posts are a sort of way for me to remember these sorts of things I may not
run into very often. That said, the example problem was yanked out of
[Stack Overflow](https://stackoverflow.com/a/26320938).


### Context
When we want to give a function argument a default value, we may sometimes want/need
to set the default to an empty dict. E.g.:

```python
def f(value, key, hash={}):
    hash[value] = key
    return hash

print(f('a', 1))
print(f('b', 2))
```


### Problem

We might expect the output of the code above to be:

```python
{'a': 1}
{'b': 2}
```

But what we'd actually see is:
```python
{'a': 1}
{'a': 1, 'b': 2}
```


### Solution

The cause of the issue is stated in the
[Python Docs](https://docs.python.org/3/tutorial/controlflow.html#default-argument-values)
for argument values. There is a warning:

> **Important warning:** The default value is evaluated only once. This makes a
difference when the default is a mutable object such as a list, dictionary, or
instances of most classes.

The issue will apply to **mutable** objects mentioned: list, dictionary, or
class instantiations.

The recommendation, and solution, is the following:

```python
def f(value, key, hash=None):
    if hash is None:
        hash = {}

    hash[value] = key
    return hash
```
