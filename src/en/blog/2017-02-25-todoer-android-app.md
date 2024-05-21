---
title: "Todoer: Android App"
excerpt: My first android application released!
date: 2017-02-25 20:30:00
postTags:
  - android
  - java
lang: en
pageImages:
  icon:
    url: /assets/uploads/20170225-todoer-icon-min.png
    alt: Todoer icon
---
Last month I released my first Android app: **Todoer**.

<img src="/assets/uploads/20170225-todoer-icon-min.png" alt="Todoer Icon" title="Todoer Icon" class="d-block mx-auto"/>

My new year's resolution for 2016: release an Android app.
I decided at the beginning of 2016 that I needed to continue learning and that I needed a goal to strive towards. I registered a domain for development company, <a href="http://www.smallscreen.co" target="_blank">smallscreen.co</a>, and gave myself the opportunity to make it a domain that reflected my success or one that reminded me of my failure at the end of the year.

As my first Android project I chose a simple, tried and true, todo-list app.
The app is a result of ideas taken from tutorials and questions answered on Stack Overflow. This project required me to take a step outside of my comfort zone, PHP web developing, and embrace a whole new environment with its own quirks and requirements.

#### Version 1.0 Goals:

1. Release *an* Android app (ha!)
2. Use database to drive the app
3. Use Android notifications for reminders
4. Make use of Android preferences

I wanted to release an app to begin familiarizing with the Android environment.
Currently, I am most comfortable developing for web but it is not necessarily what I'd like to be doing indefinitely. Android use of Java and XML felt strange to me now having worked with `PHP` and `HTML`/`CSS` for so long. There is a learning curve, on which I am still on, to get a handle on how Android's activities and layouts relate. Knowing that things will be different, however, is half the battle.

#### The Easy Stuff

The app code is simple and does simple things.

The app is driven by a `sqlite` database which stores all the todos. Fortunately, Android provides sqlite helpers that make interacting with the database a breeze. Being comfortable with database structure and design, this part of the app development was the least stressful.

#### The Not-So-Easy Stuff

The reminders in this app required knowledge of Android's Alarm Manager and Notifications. Conceptually I knew what I wanted my reminders to do, when, and how. However, knowing how to get Android to do those things was the problem. I borrowed from several tutorials which all did things slightly differently but the outcome was exactly what I wanted Todoer to do. Things like notification actions and editing was a version 1 must have for me and proved to be very challenging but also very rewarding.

#### The Hard Stuff

The app contains very few views. There is a list view of all the todos, a detailed (edit) view, and a preferences view. Keeping the app simple was the right idea. Developing the views for the app required a lot of knowledge regarding a view's lifecycle and how views communicate with each other. There is definitely room for improvement. I've started reading about implementing Model-View-Presenter style programming patterns but it may be a while before I reach a level of comfort to rewrite some of the code more efficiently.

#### In Conclusion

I learned a lot about Android development while working on this project.
I saw first hand that a new environment required a different approach from what I am used to. I enjoyed coding in Java once more and was happy to be using a strongly typed language once more.

The app was released last month and has had about 5 installs.
For me, that is a success. My goals were met, I learned and now know there is much more to learn. The domain I purchased will be renewed, it reflects my success so far and will continue to push me forward to continue developing more apps under its name.

Next on the horizon, I am in the planning stages of a new android app that will interact with devices' local storage and require network access. Aside from Android, I am also collaborating on a game development project using Unity with a friend.

Hopefully I have lots to write about going forward.

<img src="/assets/uploads/20170225-todoer-screenshot-1-min.png" alt="Todoer screenshot 1" title="Todoer screenshot 1" class="d-inline-block w-25"/>

<img src="/assets/uploads/20170225-todoer-screenshot-2-min.png" alt="Todoer screenshot 2" title="Todoer screenshot 2" class="d-inline-block w-25"/>
