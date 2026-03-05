---
title: "Ruby Array#any? vs ||"
excerpt: Recently ran into a bug where simple `||` conditions would have avoided
  the issue.
date: 2024-05-06T09:27:00.000Z
---
## The Problem

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

At first glance, it appears that `Array#any?` is not short-circuiting. In reality, `any?` can short-circuit, but **the array elements are evaluated before `any?` runs**, so `some_model.some_attr` is still called even when `some_model.nil?` is true.

## The Solution

The problem here occurs because we expected an earlier condition in the same expression to protect us from errors in a later condition. There are many ways to avoid this.

One could use `||` statements:

```ruby
if some_model.nil? || some_model.some_attr # || ...
  return false
end
```

One could use `nil`-safe attribute accessors:

```ruby
if [
  some_model.nil?,
  some_model&.some_attr,
  # other chained conditions..
].any?
  return false
end
```

In the end, I've come to prefer using `||` statements. Using `#any?` here makes it more likely that bugs may sneak in if the writer or reviewer is unfamiliar with this nuance, or if tests do not cover the condition. Keeping it simple with `||` is clearer and avoids this language-specific gotcha.
