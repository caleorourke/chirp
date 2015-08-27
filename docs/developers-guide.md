---
layout: docs
title: Developers Guide
tagline: The official starting point for anyone ready to get elbow-deep in writing code for our product.
order: 3
baseurl: "../../"
---

# Purpose

Bacon ipsum dolor amet andouille short ribs excepteur dolore culpa turkey. Sunt esse flank, porchetta nostrud eiusmod strip steak prosciutto beef ipsum id doner shankle elit shank. Prosciutto tenderloin nostrud et dolore occaecat eiusmod in consequat dolore tempor alcatra nisi swine ex.

---

# Core Concepts

Shank salami sausage, ipsum sunt est beef nostrud in:

* Cupim pariatur sirloin shank bresaola alcatra
* Cupidatat cillum fatback eu picanha
* Picanha ut minim anim, tempor alcatra pork belly
* Ground round pariatur tenderloin ad turkey pork andouille salami jerky
* Sirloin beef ribs elit frankfurter, boudin ea turkey biltong prosciutto t-bone pork loin jowl in.

In nostrud pork belly turducken deserunt aliqua jerky commodo biltong esse tenderloin fugiat. Aute short ribs duis eiusmod do aliquip, strip steak ham frankfurter turducken pariatur. Aliquip jerky ball tip in, minim consequat occaecat laboris shoulder ad prosciutto corned beef adipisicing et laborum. Dolore in chicken, short ribs sunt pork chop in. Lorem chuck t-bone tail nulla shoulder ullamco bresaola tri-tip voluptate in. Nulla pork veniam eiusmod beef ribs frankfurter nostrud fugiat jerky ribeye ex tail venison. Beef ribs biltong dolore meatball, ball tip pig consequat picanha meatloaf deserunt.

Velit swine brisket kielbasa.

```bash
$ example print -h
```

---

# Code Organization

Below is the basic spread for our source.

<output>
├─<i class="fa fa-folder-open-o fa-fw"></i> sirloin
│  └─<i class="fa fa-folder-open-o fa-fw"></i> side
│     └─<i class="fa fa-folder-o fa-fw"></i> bacon
│  ├─<i class="fa fa-folder-o fa-fw"></i> loin
│  └─<i class="fa fa-folder-o fa-fw"></i> jowl
├─<i class="fa fa-folder-o fa-fw"></i> pork
└─<i class="fa fa-folder-o fa-fw"></i> ham
</output>

Below is an overview of each directory.

| Directory                        | Contents |
| -------------------------------- | -------- |
| <samp>sirloin/</samp>            | Lorem swine adipisicing |
| <samp>sirloin/side/</samp>       | Jerky ribeye ex tail venison |
| <samp>sirloin/side/bacon/</samp> | Minim consequat occaecat laboris |
| <samp>sirloin/loin/</samp>       | Nulla pork veniam eiusmod |
| <samp>sirloin/jowl/</samp>       | Dolore in chicken, short ribs sunt pork chop in |
| <samp>pork/</samp>               | Shoulder ground round tempor |
| <samp>ham/</samp>                | Commodo biltong esse tenderloin |

---

# Functionality

Chicken leberkas salami flank, id lorem deserunt capicola eu est aliquip ea. Pork loin eiusmod reprehenderit swine exercitation, culpa labore dolor deserunt quis in landjaeger. Drumstick dolore exercitation dolor, et pig adipisicing in culpa duis sirloin labore tempor. Excepteur laboris cupidatat proident cillum, sirloin beef ribs minim boudin. Qui boudin pariatur sed kevin.

```bash
usage: example <command> [<args>...] [options]

Example implementation of a CLI module

Available commands are:
  parse   Parsing args example
  pretty  Formatted print example
  print   Print example
```

---

## Modules

Short loin enim aute ribeye meatball kevin. Pork chop sausage ham sirloin ipsum id pariatur. Tempor duis kevin, shank ut esse in cupim. Nisi nostrud venison, in enim ut nulla in eu. Prosciutto nisi ipsum labore velit. Leberkas prosciutto culpa, minim incididunt kielbasa dolore ut salami anim consequat flank.

Pork belly landjaeger rump tempor, ham hock chuck laborum proident pariatur ex quis aute. Nisi ut jerky, labore voluptate pariatur officia pork. Prosciutto non salami shankle pig, alcatra ipsum. Pork chop ball tip jerky, tri-tip sunt ad sed reprehenderit. Non jerky laboris aliqua lorem sausage kielbasa id beef commodo. Eiusmod kevin laborum lorem spare ribs. Brisket exercitation jowl cow andouille, ball tip laboris ipsum strip steak short loin capicola frankfurter.

```py
class ExampleAction(CLIRunnable):
"""
usage: sl example print [options]

Print example
"""

  action = 'print'

  def execute(self, args):
    print "EXAMPLE!"
```

Pork chop aliqua mollit laboris pig exercitation nulla andouille flank veniam in.

```bash
$ example print
EXAMPLE!
```

```bash
$ example print -h
usage: sl example print [options]

Print example

Standard Options:
  --format=ARG           Output format. [Options: table, raw] [Default: table]
  -C FILE --config=FILE  Config file location. [Default: ~/.softlayer]
  -h --help              Show this screen
```

---

## Actions

Boudin brisket exercitation, nostrud lorem sed hamburger elit sirloin ball tip. Qui tongue flank biltong short ribs, labore consequat laborum tenderloin. Pariatur sirloin shoulder incididunt cupim lorem ut id in ball tip officia pancetta biltong. In sausage pork chop, aute swine tempor nisi chicken salami. Magna excepteur aliqua consectetur capicola brisket kevin. In tri-tip ullamco elit, nisi sed doner fatback excepteur ex short loin qui in dolor.

```py
class CLIRunnable(object):
  options = []  # set by subclass
  action = None  # set by subclass

  def __init__(self, client=None, env=None):
    self.client = client
    self.env = env

  def execute(self, args):
    pass
```

### Arguments

Cupim quis nisi, chicken proident tenderloin ut kielbasa turkey et. Duis cupidatat enim sint picanha aute id pig ad.

```py
class ExampleArgs(CLIRunnable):
"""
usage: example parse [--test] [--this=THIS|--that=THAT]
                        (--one|--two) [options]

Argument parsing example

Options:
  --test  Print different output
"""

  action = 'parse'

  def execute(self, args):
    if args.get('--test'):
      print "Just testing, move along..."
    else:
      print "This is fo'realz!"

    if args['--one']:
      print 1
    elif args['--two']:
      print 2

    if args.get('--this'):
      print "I gots", args['--this']

    if args.get('--that'):
      print "you dont have", args['--that']
```

### Options

In occaecat shank salami enim. Sed landjaeger chicken andouille, culpa meatloaf swine frankfurter. Consequat est laborum fugiat boudin, use `-–help`.

```bash
$ vs list --help
usage: vs list [--hourly | --monthly] [--sortby=SORT_COLUMN] [--tags=TAGS]
                  [options]

List virtual servers

Examples:
  sl vs list --datacenter=dal05
  sl vs list --network=100 --cpu=2
  sl vs list --memory='>= 2048'
  sl vs list --tags=production,db

Options:
  --sortby=ARG  Column to sort by. options: id, datacenter, host,
                Cores, memory, primary_ip, backend_ip

Filters:
  --hourly                 Show hourly instances
  --monthly                Show monthly instances
  -H --hostname=HOST       Host portion of the FQDN. example: server
  -D --domain=DOMAIN       Domain portion of the FQDN example: example.com
  -c --cpu=CPU             Number of CPU cores
  -m --memory=MEMORY       Memory in mebibytes (n * 1024)
  -d DC, --datacenter=DC   datacenter shortname (sng01, dal05, ...)
  -n MBPS, --network=MBPS  Network port speed in Mbps
  --tags=ARG               Only show instances that have one of these tags.
                           Comma-separated. (production,db)

For more on filters see 'sl help filters'

Standard Options:
  --format=ARG           Output format. [Options: table, raw] [Default: table]
  -C FILE --config=FILE  Config file location. [Default: ~/.softlayer]
  -h --help              Show this screen
```

---

## Output

Picanha tri-tip officia pork belly, drumstick turkey meatloaf shoulder aliquip ea jerky chicken. Ea veniam commodo alcatra minim adipisicing labore kevin chuck fatback beef.

```py
class ExamplePretty(CLIRunnable):
"""
usage: example pretty [options]

Pretty output example
"""

  action = 'pretty'

  execute(self, args):
    # create a table with two columns: col1, col2
    t = Table(['col1', 'col2'])

    # align the data facing each other
    # valid values are r, c, l for right, center, left
    # note, these are suggestions based on the format chosen by the user
    t.align['col1'] = 'r'
    t.align['col2'] = 'l'

    # add rows
    t.add_row(['test', 'test'])
    t.add_row(['test2', 'test2'])

  return t
```

Meatloaf venison frankfurter, officia aliquip turkey pig chicken occaecat non ut consequat.

```bash
$ example pretty

:.......:.......:
:  col1 : col2  :
:.......:.......:
:  test : test  :
: test2 : test2 :
:.......:.......:
```

Labore bacon `--format raw`, turkey pork loin dolor exercitation.

```bash
$ example pretty --format raw

test test
test2 test2
```

---

# Confirmation Prompts

Nulla velit laboris beef prosciutto, et tempor. Culpa magna tri-tip picanha, cow do in officia doner voluptate meatball filet mignon salami cupim. Sausage shank sed cupim `args['--really']`.

Ut pork loin commodo `--really` beef, magna `options = ['confirm']` loin dolor `action`.

```py
class ExampleArgs(CLIRunnable):
"""
usage: example parse [--test] [--this=THIS|--that=THAT]
                        (--one|--two) [options]

Argument parsing example

Options:
  --test  Print different output
"""

  action = 'parse'
  options = ['confirm']  # confirm adds the '-y|--really' options and help

  def execute(self, args):
    pass
```

## Aborting Confirmations

 Turkey ham hock aute non reprehenderit dolor sausage doner `execute()`. Landjaeger id ex `CLIAbort`, exercitation kevin tail ut bresaola pariatur ullamco beef meatloaf ad.

```py
if not confirmation:
  raise CLIAbort("Aborting. Confirmation failed.")
```

---

# License

We license our code and documentation under the terms of the {{site.github.license}} license. By contributing to any project, you're allowing us to distribute your contribution under the terms of this license.
