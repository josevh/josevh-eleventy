---
title: Switching (again)
excerpt: "I lied when I said the generator wouldn't be changed again."
date: 2023-12-05T18:00:00
postTags:
  - node
  - eleventy
  - ssg
  - meta
lang: en
---
I don't write these blog posts often and I lament that a good portion of them
are about switching the static site generator used to generate this site. Work
is busy and life is (increasingly) busy as well. That leaves very little time
for side projects and experiments unfortunately. So, what I've coded in my spare
time is updates to this site in an effort to keep the backend of it updated and
simple to update.

The main motivator for the change in static site generator this time was to rid
myself of the need for Ruby to generate this site. Jekyll is a great static site
generator and, as I've said before, mature and stable. However, I don't have any
other Ruby projects in-progress nor planned. This is a bit ironic considering
that, at Square, I code in Ruby all day. So, moving this site to being generated
using [Eleventy](https://www.11ty.dev/), I can use Node which is already on my
system and used for other side projects I already have in flux.

To be completely honest, I recently got a Samsung Galaxy Tab S9 FE tablet. I
installed Termux (a terminal emulator for Android) on it. I wanted a minimal
list of packages to install on it and thought it best to cut out Ruby which
I didn't use for anything else. Simple as that, here we are.
