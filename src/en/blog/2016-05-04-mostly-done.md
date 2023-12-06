---
title:  "Mostly done"
excerpt: "Site build updates."
date:   2016-05-04 13:00:00
postTags:
  - meta
lang: en
carousel:
  images:
    - url: /assets/uploads/jekyll-screenshot.png
      alt: homepage
    - url: /assets/uploads/jekyll-blog-screenshot.png
      alt: blog index
    - url: /assets/uploads/jekyll-post-screenshot.png
      alt: blog post
    - url: /assets/uploads/jekyll-projects-screenshot.png
      alt: projects index
    - url: /assets/uploads/jekyll-experience-screenshot.png
      alt: experience index
    - url: /assets/uploads/jekyll-skills-screenshot.png
      alt: skills index
    - url: /assets/uploads/jekyll-contact-screenshot.png
      alt: contact page
---
Styling this blog is coming along nicely.

So far I've enjoyed the flexibility that Jekyll provides.
For my relatively simple design, it's proved easy to work with.

Having worked with frameworks like Laravel, I can appreciate the level of control Laravel gives.
On the other hand, it's fun to get creative and to adapt to a new environment.
For a small-scale project like this portfolio page it's perfect.
It's a lot nicer to work with than Wordpress, at least for implementing the design.
The downside however, is that there is no app from which to post.

For this design I used some inspiration from [Bill Lovett's portfolio](http://ilovett.com/).
I liked his design's focus on text rather than color and images.
Still learning design, I took it upon me to emulate what I liked best from his design and incorporated it into mine.

I'm liking Jekyll, it's just flexible enough for a low-effort project.

I'll include a few screenshots in case I update it later and want to look back on this.

{% assign images=carousel.images %}
{% include "carousel.liquid" %}
