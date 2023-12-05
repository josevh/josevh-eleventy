---
title: First Hexo Post!
excerpt: 'First post after switching to Hexo.'
date: 2017-12-27T12:00:00.000
tags:
  - hexo
  - node
  - javascript
  - meta
  - ssg
lang: en
---
First post after switching to **Hexo**.

## The big switch
I moved the site, and its blog, from being generated with [Jekyll](https://jekyllrb.com/) to now being generated with [Hexo](https://hexo.io/).

## Why?
There were 2 reasons why I decided to migrate: Node, i18n.

### Node
Hexo runs on Node. The reason node was a deciding factor is that it is more convenient for me to setup a dev environment. I already have node installed on the machines I code on and being able to make changes to the blog quickly will be easy. The site was originally generated with Jekyll which runs on Ruby. My go-to dev environment for the site is/was a Ruby workspace on Cloud9. However, due to [recent news](https://aws.amazon.com/blogs/aws/aws-cloud9-cloud-developer-environments/), its future as a useful dev environment was in limbo. I still have access to my code on Cloud9 but the plug could get pulled at any time. Having Node readily available ensures I won't have that problem again. Also, I don't have to install Ruby on my machines on rely on having VMs handy.

### i18n
En español por favor. I have been wanting, for a while, to create a multilingual site. This is where Hexo really comes out ahead because it has i18n features built in. Yes, Jekyll does have plugins for i18n but they only come close to a great implementation and each have their shortfalls. Because it is built into Hexo, it is a first-class feature with support from the creators. The config was easy and everything works well now. This site is now available in [Spanish](/es)!

## Outcome
The site is up and running and nothing was lost in the migration. Lesson learned: posts should be markdown only. I translated the site pages and added a hello-world Spanish post for now. I have the page being generated and hosted by [Netlify](https://www.netlify.com/) and am writing this post now on [NetlifyCMS](https://www.netlifycms.org/). I also created the theme for the site separate from the site. The theme is called [Clarity](https://github.com/josevh/hexo-theme-clarity). I learned a lot in this transition. New site, published theme, translated site, and a pull-request or two.

## What's next?
What this site needs now is better translation. I am a native Spanish speaker but I have not worked in a Spanish speaking dev work environment. The lingo is not current. So I'll be dedicating more time to better translating the pages on this site as well as writing posts in Spanish.
