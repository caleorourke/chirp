---
layout: docs
title: Getting Started
tagline: The ultimate how-to source for downloading and installing our product.
order: 1
baseurl: "../../"
---

# Introduction

Bacon ipsum dolor amet shoulder officia mollit, proident ullamco fatback est tempor do sirloin.

* Sausage hamburger
* Exercitation ham
* Boudin sint shoulder
* Meatball nostrud
* Drumstick
* Filet mignon

Laborum non t-bone in flank landjaeger bresaola. Ribeye sed jowl exercitation fugiat, dolore shank beef ribs cupidatat pancetta hamburger pastrami. Ut shoulder sirloin nisi bacon.

---

# Prerequisites

Nulla velit laboris beef prosciutto, et tempor. Culpa magna tri-tip picanha, cow do in officia doner voluptate meatball filet mignon salami cupim.

* Sausage shank sed cupim
* Picanha ut jerky kevin, andouille et voluptate eiusmod in ipsum jowl occaecat cow proident dolore
* Ut pork loin commodo, filet mignon cupim ribeye consequat beef ribs fugiat reprehenderit swine velit pastrami

---

# Installation

Proident velit tenderloin, laboris sint ex landjaeger doner incididunt flank mollit occaecat sunt chuck shank. Ball tip strip steak enim ad ipsum.

* [Quick Install](#quick-install)
* [Not-So Quick Install](#not-so-quick-install)

## Quick Install

These options will download and install packages automatically.

* [Pip](#pip)
* [Pip from GitHub](#pip-from-github)
* [Debian and Ubuntu](#debian-and-ubuntu)

### Pip

Run the command below to use <a href="https://pypi.python.org/pypi/pip" target="_blank">pip</a>.

```bash
$ pip install example
```

### Pip from GitHub

Run the command below to pull our product down from GitHub and install it using pip.

```bash
$ pip install git+git://github.com/users/example.git
```

### Debian and Ubuntu

For Debian <a href="https://www.debian.org/releases/jessie" target="_blank">“jessie”</a> (in testing) and Ubuntu 14.04, run the command below to install our official packages.

```bash
$ sudo apt-get install example
```

---

## Not-So Quick Install

Without `pip` or Debian/Ubuntu, you'll need to do things manually. This includes:

1. Installing [Git](#prerequisites)
2. Downloading or cloning our product from GitHub
3. [Installing our product](#install-into-site-packages) into site-packages

Scroll through the following download and clone options and pick one that works best for you.

* [Tarball download](#tarball-download)
* [Zip download](#zip-download)
* [HTTPS clone](#https-clone)
* [SSH clone](#ssh-clone)

### Tarball download

<a href="https://github.com/users/example/tarball/master">Download it here</a> or run the command below.

```bash
$ curl -OL https://github.com/users/examples/tarball/master
```

### Zip download

<a href="https://github.com/users/example/zipball/master">Download it here</a> or run the command below.

```bash
$ curl -OL https://github.com/users/example/zipball/master
```

### HTTPS clone

Run the command below to clone over HTTPS.

```bash
$ git clone https://github.com/users/example.git
```

### SSH clone

Run the command below to clone over SSH.

```bash
$ git clone git@github.com:users/example.git
```

### Install into site-packages

Once you have a copy of our product, run the command below to install it into your site-packages.

```bash
$ python setup.py install
```

---

# Configuration

Turkey ham hock aute non reprehenderit dolor sausage doner.

You will need:

* Your username
* Your API key
* An endpoint URL

Landjaeger id ex, exercitation kevin tail ut bresaola pariatur ullamco beef meatloaf ad.

```bash
$ config setup

Username []: foo
API Key or Password []: bar
Endpoint (public|private|custom): public

:..............:........................................................:
:         Name : Value                                                  :
:..............:........................................................:
:     Username : foo                                                    :
:      API Key : bar                                                    :
: Endpoint URL : https://api.example.com/xmlrpc/v3/                     :
:      Timeout : not set                                                :
:..............:........................................................:

Are you sure you want to write settings to "/Users/foo/.example"? [Y/n]: y
Configuration Updated Successfully
```

Elit picanha strip steak jerky ut prosciutto esse aliquip fugiat `config show`.

```bash
$ config show

:..............:........................................................:
:         Name : Value                                                  :
:..............:........................................................:
:     Username : foo                                                    :
:      API Key : bar                                                    :
: Endpoint URL : https://api.example.com/xmlrpc/v3/                     :
:..............:........................................................:
```
