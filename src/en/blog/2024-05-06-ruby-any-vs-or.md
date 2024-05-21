---
title: Ruby `#any` vs `or`
excerpt: Recently ran into a bug where using simple `or` statements would have
  avoided the whole issue.
date: 2024-05-06T09:27:00.000Z
lang: en
---
### The Problem

I recently ran into this bug during a code review. In an attempt to avoid long chains of `or` statements, code like the following was introduced:

```ruby
if [
  some_model.nil?,
  some_model.some_attr,
  # ...
].any?
  return false
end
```

It is simple to understand the intent, however, errors like the following started to appear:

```plaintext
NoMethodError: undefined method `some_attr' for nil:NilClass
```

## The Cause

At first glance, it appears that the `Array#any?` method does not exit early on the first truthy value it encounters. However, what is actually happening is that **the contents of the array are being evaluated *before* they are inserted into the array**.

### The Solution

The problem here is only a problem because we expected a previous `if` condition to protect us from errors in a subsequent condition. There are many ways to avoid this. 

One could use `or` statements:

```ruby
if some_model.nil? || some_model.some_attr # || ...
  return false
end
```

One could use `nil`-safe attribute accessors:

```ruby
if [
  some_model&.some_attr,
  # ...
].any?
  return false
end
```

In the end, I've come to prefer using `or` statements. Using the `#any?` statement makes it more likely that bugs may sneak in undetected if the writer of the code or the reviewer are familiar with this nuance or if tests aren't written to catch the condition. Keeping it simple by using `or` statements is more clear and not subject to language-specific nuance.
