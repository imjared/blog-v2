---
path: "/begin"
title: "begin"
date: "2012-05-21"
comments: true
categories: 
---

## off we go

I've wanted to start a blog for a while. I'm not sure how far I'll go with it or what will become of it. I've gone through iteration after iteration in several content management systems and blogging platforms ([Expression Engine](http://expressionengine.com), [Wordpress](http://www.wordpress.org), [Jekyll](https://github.com/mojombo/jekyll)) and even tried to write my own with PHP/MySQL. 

I've had some successes along the way and learned a good bit but I found myself stuck either on design or I'd be frustrated with something technical. Whether it was my date sorting mechanism failing in my homegrown PHP-based CMS or I was unsatisfied with <em>the visual design of what I came up with<sup>1</sup></em>, I could never seem to get something off the ground.

It has literally been years in the making and finally after [doing a bit of reading](http://whiletruecode.com/post/taking-hanselmans-productivity-advice) I realized I need to just do this thing. I realized that my end-goal was blogging, not really having a home-grown solution. I wanted to learn in the process and I certainly had. It's that I don't want to build a content management system. I managed to dive in with a bit of PHP, Node, and server configuration along the way. I'd say it's a successful lesson learned. So with that in mind, I started on Jekyll then quickly moved to [Octopress](http://www.octopress.org) at the recommendation of Andrew Theroux ([@theroux](https://twitter.com/#!/theroux)).

I've used Ruby Gems in the past but only to the extent of using `$ gem install foo`. Not exactly groundbreaking stuff. Octopress was similar but it had a few extra steps that I needed to dive into. I had to upgrade Ruby since my MacBook had 1.8.3 and Octopress required 1.9.2. Luckily Octopress is very clearly documented and before long, I was headed in the direction of [RVM](https://rvm.io). This made upgrading a breeze and made me thankful that there are a lot of people in the web community who know a lot more than I do.

I'm hosting this badboy on [Heroku](http://www.heroku.com) and using github as a backup. In the future, I hope to write about what I'm learning in my new-ish job at [nclud](http://www.nclud.com). I also want to customize the look and feel of this thing since right now it's just the default skin, and I can hopefully dive into the source of this thing a bit to customize it to my needs.

{% img /images/site/defaultskin.png [looks good but I want to play with the look of it [the default skin for Octopress] %}

We'll see where this goes!

<small><sup>1.</sup> I like designing in code but I have high standards and my ability for visual design is lacking. I'm actively working on it and always trying to push myself to not settle.</small>