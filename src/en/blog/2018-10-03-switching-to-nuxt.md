---
title: Switching to Nuxt
excerpt: ''
date: 2018-10-03T12:00:00.000
postTags:
  - vue.js
  - nuxt
  - javascript
  - meta
  - ssg
lang: en
---
## Why
I had been wanting to rewrite this site for a good while.
I liked Hexo but, as I became more and more familiar with Vue, I felt that working with Hexo felt restrictive.
I particularly disliked working with ejs for theming the site.
Luckily a tool existed for me to generate a static site using Vue as the driving framework, that tool is [Nuxt](https://nuxtjs.org/).

## How
Lucky for me, the site does not have a lot of content (yet!) so migrating to another platform was trivial.
The platform I chose was [Prismic](https://prismic.io/).
Prismic is a headless CMS which allows me to develop a frontend completely independent of the backend.
There was some getting used to and wrangling with Prismic's Javascript libraries however nothing that discouraged me from completing the migration.
I made custom types for blog posts, experience, and projects and the rest was an API call away.

## Adios Español
As part of the migration, I decided to remove the Spanish version of the site.
I barely have time to add English content at the moment let-alone Spanish.
Thankfully, Nuxt makes it trivial to add another language so, when the time is right, adding Spanish back should not be too bad.

## Takeaway
Having a headless CMS power the site allows me to use tools that have been refined by others who have a vested interest in having them be bug-free.
With one less worry, I could really focus on the frontend and, ultimately, on content for the site.
The downside now is that I am locked-in to Prismic's service and it will get worse as the amount of content grows.
Being a personal portfolio site, however, I am not too worried about that at the moment.
The experience in working with a headless CMS is worth it.
