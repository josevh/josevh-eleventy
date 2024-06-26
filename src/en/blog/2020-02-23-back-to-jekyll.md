---
title: Back to Jekyll, For the Last Time
excerpt: This site went back to being powered by Jekyll, here's why.
date: 2020-02-23T04:09:51.400Z
postTags:
  - jekyll
  - ruby
  - ssg
  - meta
pageImages:
  site:
    url: /assets/uploads/new-jekyll-blog.png
    alt: site screenshot
lang: en
---
Almost half the blog posts here are meta posts about the site itself. I want that to change. To that end, here's the last blog post about the site for, hopefully, a long time.

## What's Changed

Goodbye Nuxt+Vue. I didn't want to leave Nuxt and Vue as the main drivers of the site. My initial intent was to leave [Prismic.io](https://prismic.io/). Prismic is a CMS backend service which I initially thought would be good for being able to swap out static-site-generators at-will. However, I've come to realize that:

1. My site, and its future iterations would be dependent on an external service which could change its terms and pricing at any time.
2. I was spending too much time working on the site and not enough time working on projects that the site could highlight.

To fix two birds with one stone I decided that I would move the site back to being powered by markdown files. Updating the Nuxt+Vue site to handle this change was possible but, never having built a site like that, it would take some learning that I didn't want to spend time doing. So I did the next best thing, I decided to move the site back to Jekyll. It's a mature static-site-generator with ample documentation and relatively simple implementation.

## What I Want

My intention is that this site change is the last one, going forward the focus would be on projects and blog posts about problems, and their solutions, I face in my day-to-day development. That's not to say that maintenance of the site won't be done, but no major efforts to rewrite it will be undertaken.

Here's to the future projects and blog posts, time to code.  😀

**P.S.** For the record, the look of the blog at this point:

<img src="/assets/uploads/new-jekyll-blog.png" alt="Website screenshot" title="New Jekyll Blog" class="d-block mx-auto"/>
