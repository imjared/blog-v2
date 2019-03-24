---
path: "/after-the-fact-gitignore"
title: "after the fact .gitignore"
date: "2012-08-29"
comments: true
categories: git web
---

Lately, I've been working on a project with a few other developers and, as you can imagine, github has been our go-to for version control and management of changes. We're each working locally but the time came where we needed to give the client access to the CMS (ExpressionEngine) and allow her to start entering content. Ok, easy right? Well, kind of.

For local dev, I'm still using MAMP just for the sake of simplicity so all my paths are relative to <code>/Applications/MAMP/htdocs</code>. This is all well and good but my MediaTemple shared GS doesn't have MAMP. I had to get at MySQL in a different location. 

During development, we've been running a few scripts to manage the transporation of EE's database and the paths were working based on the path to MAMP. It wasn't the cleanest way of accomplishing things but it worked for what we needed. As soon as we weren't using MAMP, we needed to change paths. Since the server and our local environments were pulling from the same repo, we had a few options; we could either use environment variables (probably a good idea) or each person and the server could maintain an independent database configuration (not quite as good). Since my knowledge of the command line is a bit limited and MediaTemple has some restrictions in place on their shared servers, we went with the second solution. We now needed to maintain independent copies of our configuration files with different settings based on the environment but git was already tracking the files and pushing/pulling them.

As usual, [stackoverflow came to the rescue](http://stackoverflow.com/a/3713766/628699). To untrack files that have already been initialized but *NOT* delete it from the system, use the following:
<code>git rm --cached *filename*</code>

Then, go ahead and commit your project changes. You should see the file drop out of the git repo but stay on your system. This proved to be a little problematic because when another developer pulled, he lost the file entirely and had to recreate it. This wasn't a huge deal because it was in the history but this should somehow be avoided, I'm just not sure how. Any tips?