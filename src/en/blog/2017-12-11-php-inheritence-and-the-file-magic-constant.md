---
title: PHP Inheritance and the __FILE__ Magic Constant
excerpt: "How to solve a problem in PHP relating to inheritance and magic constants."
date: 2017-12-11T18:09:30
postTags:
  - php
  - oop
pageLang: en
---

How to solve a problem in PHP relating to inheritance and magic constants.

### Context

Recently I ran into a problem where I had the following classes:

```php
# AbstractClass.php
abstract class AbstractClass {
    public $fileName;
    protected function __construct() {
        $this->fileName = __FILE__;
    }
}

# ChildClass.php
class ChildClass extends AbstractClass {
    //...
}
```

### Problem

In the derived class, `$filename` would return the file name of the parent class, not the derived class.

```php
echo (new ChildClass())->fileName;

# /home/user/AbstractClass.php
```

The program was dying silently and not displaying any errors.

### Solution

Use reflection and write a method in the parent class to return the file name for any derived class. Then use that method in the constructor in place of the magic constant.

```php
protected function __construct() {
    $this->fileName = pathinfo($this->getFileName(), PATHINFO_FILENAME);
}

protected function getFileName() {
    return (new ReflectionClass($this))->getFileName();
}
```

Now, the correct output:

```php
echo (new ChildClass())->fileName;

# /home/user/ChildClass.php
```

When in doubt, [Stack Overflow](https://stackoverflow.com/a/11117822).
