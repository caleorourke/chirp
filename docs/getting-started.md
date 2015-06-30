---
layout: docs
title: Getting Started
tagline: The ultimate how-to source for downloading and installing Urban.
order: 1
baseurl: "../../"
---

# Introduction to {{site.github.title}}

{{site.github.title}} is a discount Bootstrap for crafting technical docs on GitHub. It provides the facilities to write content exclusively in [Markdown](http://en.m.wikipedia.org/wiki/Markdown) and spin-up [Jekyll](http://jekyllrb.com)-powered static websites.

---

# Features

{{site.github.title}} is chock-full of nifty features and doodads.

* Fast load times
* Free web hosting using [GitHub Pages](http://pages.github.com)
* Responsive, mobile-ready views
* Markdown rendering via [Redcarpet](http://github.com/vmg/redcarpet)
* Centralized, database-less (flat-file) [configuration](http://github.com/caleorourke/urban/blob/gh-pages/_config.yml)
* Pretty URLs
* [Sitemap](https://help.github.com/articles/sitemaps-for-github-pages) and [Metadata](http://help.github.com/articles/repository-metadata-on-github-pages) for GitHub Pages
* [Table of Contents](http://github.com/caleorourke/urban/blob/gh-pages/js/contents.js) plugin
* [Smooth Scrolling](http://github.com/caleorourke/urban/blob/gh-pages/js/easing.js) plugin
* [GitHub API](http://github.com/caleorourke/urban/blob/gh-pages/_includes/handlers/github.html) script for fetching release pegs and repo stats
* Automated repetitive tasks
* Shopify's [Liquid](http://liquidmarkup.org) template language
* Ready-made, reusable doc templates to help get you started quickly

---

# Core Components

Aside from its benefits, {{site.github.title}} is simply a lightweight framework baked with:

* CSS3/HTML5
* JavaScript/jQuery
* Node.js
* Ruby
* [Bootstrap](http://twitter.github.io/bootstrap) grid and scripts
* [Font Awesome](http://fortawesome.github.io/Font-Awesome) iconic font
* [Grunt](http://gruntjs.com) task runner
* [Highlight](http://highlightjs.org/) for code highlighting
* [HTML5 Shiv](http://code.google.com/p/html5shiv) IE-enabling script
* [LESS](http://lesscss.org) dynamic stylesheets for variables, mixins, styling, and more
* [Normalize](http://necolas.github.io/normalize.css) for CSS normalization and resets (customized)

---

# Compatibility

Starting from greatest to worst, {{site.github.title}} works the best with the following browsers and platforms.

| Platform    | Chrome | Firefox | Internet Explorer | Opera | Safari |
| ----------- |:------:|:-------:|:-----------------:|:-----:|:------:|
| Android     | Yes    | No      | -                 | No    | -      |
| iOS         | Yes    | -       | -                 | No    | Yes    |
| Mac OS X    | Yes    | Yes     | -                 | Yes   | Yes    |
| Windows     | Yes    | Yes     | Yes               | Yes   | No     |

As for legacy browsers, **support is limited** to whatever the browser can handle.

> Apple no longer provides updates for Windows-native Safari browsers. Due to major lapses in critical updates, do not use Safari on Windows.

---

# Prerequisites

{{site.github.title}} requires the minimum versions of **Node.js** and **Ruby** below. Click the links to get download and install instructions.

* [Node.js 0.10.30 or greater](http://nodejs.org/download)
* [Ruby 2.0 or greater](http://www.ruby-lang.org/en/installation)

> If you have Ruby, but aren’t sure which version, run `ruby -v`. For Node.js, run `node --version`.

[Travis CI](http://travis-ci.org) runs routine tests against the following Ruby versions:

* Ruby 2.0.0 (p643)
* Ruby 2.1.5
* Ruby 2.2.1

### Setup Jekyll on Windows

If you're using Windows, read Yi Zeng's [Setup Jekyll on Windows](http://yizeng.me/2013/05/10/setup-jekyll-on-windows/) article before getting into the thick of things. It'll save you a ton of time and agony.

---

# Install {{site.github.title}}

Verify that Node.js and Ruby are installed.

    # each command returns a version number
    $ node --version
    $ ruby -v

Clone {{site.github.title}} from GitHub and go into its directory (5s).

    $ git clone -o master https://github.com/caleorourke/{{site.github.title | downcase}}.git
    $ cd {{site.github.title | downcase}}

Install Grunt and dev dependencies for Node.js (10s).

    $ [sudo] npm install

Install Jekyll and other runtime dependencies (40s).

    $ [sudo] grunt install
