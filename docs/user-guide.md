---
layout: docs
title: User Guide
tagline: See how easy it is to work with our product.
order: 2
baseurl: "../../"
---

# Introduction

Bacon ipsum dolor amet short loin labore elit, alcatra tenderloin occaecat cupidatat doner qui hamburger consectetur enim pork loin.

* [List All Current Servers](#list-all-current-servers)
* [Show All Options](#show-all-options)
* [Create a Server](#create-a-server)
* [Check Provisioning Status](#check-provisioning-status)
* [Access a Server](#access-a-server)
* [Edit a Server](#edit-a-server)
* [Reload a Server](#reload-a-server)
* [Cancel a Server](#cancel-a-server)

---

## List All Current Servers

Run `vs list` anim flank pig elit nostrud consectetur reprehenderit ut ipsum culpa et.

```bash
$ vs list

:....:............:......:.......:........:............:............:....................:
: id : datacenter : host : cores : memory : primary_ip : backend_ip : active_transaction :
:....:............:......:.......:........:............:............:....................:
:....:............:......:.......:........:............:............:....................:
```

## Show All Options

Kevin cow veniam hamburger frankfurter:

* Data Centers
* Cores (CPUs)
* RAM (Memory)
* OS (Operating Systems)
* Storage types (local disk, SAN disk)
* Storage size

Run `vs create-options` tail ut bresaola.

```bash
$ vs create-options

:.................:..............................................................................................:
:            Name : Value                                                                                        :
:.................:..............................................................................................:
:      datacenter : ams01,dal01,dal05,sea01,sjc01,sng01,wdc01                                                    :
:  cpus (private) : 1,2,4,8                                                                                      :
: cpus (standard) : 1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16                                                       :
:          memory : 1024,2048,3072,4096,5120,6144,7168,8192,9216,10240,11264,12288,13312,14336,15360,16384,32768 :
:     os (CENTOS) : CENTOS_5_32                                                                                  :
:                 : CENTOS_5_64                                                                                  :
:                 : CENTOS_6_32                                                                                  :
:                 : CENTOS_6_64                                                                                  :
: os (CLOUDLINUX) : CLOUDLINUX_5_32                                                                              :
:                 : CLOUDLINUX_5_64                                                                              :
:                 : CLOUDLINUX_6_32                                                                              :
:                 : CLOUDLINUX_6_64                                                                              :
:     os (DEBIAN) : DEBIAN_5_32                                                                                  :
:                 : DEBIAN_5_64                                                                                  :
:                 : DEBIAN_6_32                                                                                  :
:                 : DEBIAN_6_64                                                                                  :
:                 : DEBIAN_7_32                                                                                  :
:                 : DEBIAN_7_64                                                                                  :
:     os (REDHAT) : REDHAT_5_64                                                                                  :
:                 : REDHAT_6_32                                                                                  :
:                 : REDHAT_6_64                                                                                  :
:     os (UBUNTU) : UBUNTU_10_32                                                                                 :
:                 : UBUNTU_10_64                                                                                 :
:                 : UBUNTU_12_32                                                                                 :
:                 : UBUNTU_12_64                                                                                 :
:                 : UBUNTU_8_32                                                                                  :
:                 : UBUNTU_8_64                                                                                  :
:   os (VYATTACE) : VYATTACE_6.5_64                                                                              :
:        os (WIN) : WIN_2003-DC-SP2-1_32                                                                         :
:                 : WIN_2003-DC-SP2-1_64                                                                         :
:                 : WIN_2003-ENT-SP2-5_32                                                                        :
:                 : WIN_2003-ENT-SP2-5_64                                                                        :
:                 : WIN_2003-STD-SP2-5_32                                                                        :
:                 : WIN_2003-STD-SP2-5_64                                                                        :
:                 : WIN_2008-DC-R2_64                                                                            :
:                 : WIN_2008-DC-SP2_32                                                                           :
:                 : WIN_2008-DC-SP2_64                                                                           :
:                 : WIN_2008-ENT-R2_64                                                                           :
:                 : WIN_2008-ENT-SP2_32                                                                          :
:                 : WIN_2008-ENT-SP2_64                                                                          :
:                 : WIN_2008-STD-R2-SP1_64                                                                       :
:                 : WIN_2008-STD-R2_64                                                                           :
:                 : WIN_2008-STD-SP2_32                                                                          :
:                 : WIN_2008-STD-SP2_64                                                                          :
:                 : WIN_2012-DC_64                                                                               :
:                 : WIN_2012-STD_64                                                                              :
:                 : WIN_7-ENT_32                                                                                 :
:                 : WIN_7-PRO_32                                                                                 :
:                 : WIN_8-ENT_64                                                                                 :
:   local disk(0) : 25,100                                                                                       :
:   local disk(2) : 25,100,150,200,300                                                                           :
:     san disk(0) : 25,100                                                                                       :
:     san disk(2) : 10,20,25,30,40,50,75,100,125,150,175,200,250,300,350,400,500,750,1000,1500,2000              :
:     san disk(3) : 10,20,25,30,40,50,75,100,125,150,175,200,250,300,350,400,500,750,1000,1500,2000              :
:     san disk(4) : 10,20,25,30,40,50,75,100,125,150,175,200,250,300,350,400,500,750,1000,1500,2000              :
:     san disk(5) : 10,20,25,30,40,50,75,100,125,150,175,200,250,300,350,400,500,750,1000,1500,2000              :
:             nic : 10,100,1000                                                                                  :
:.................:..............................................................................................:
```

## Create a Server

Deserunt boudin pig, shank proident laborum shoulder ut elit aliqua biltong frankfurter eu duis. Ex dolor nulla ad:

* 2 cores
* 1024MB of RAM
* Ubuntu 12.04 (64-bit)
* Hourly subscription
* San Jose datacenter

| Component        | Server Option         | CLI Option     | CLI Value      |
| ---------------- | --------------------- | -------------- | -------------- |
| Cores            | 2 cores               |  `-c`          | `2`            |
| RAM              | 1024MB (1GB)          | `-m`           | `1024`         |
| OS               | Ubuntu 12.04 (64-bit) | `-o`           | `UBUNTU_12_64` |
| Subscription     | Hourly                | `--[option]`   | `hourly`       |
| Data Center      | San Jose              | `--datacenter` | `scj01`        |

In this example:

* `-c 2` is 2 cores (CPUs)
* `-m 1024` is 1024MB (1GB) of memory (or RAM)
* `-o UBUNTU_12_64` is the Ubuntu 12.04 (64-bit) operating system
* `--hourly` is an hourly subscription
* `--datacenter sjc01` is the location of our San Jose data center (optional)

Spare ribs kevin labore ham hock do brisket fugiat ham irure in.

```bash
-c 2 -m 1024 -o UBUNTU_12_64 --hourly --datacenter sjc01
```

Run `vs create`, dolor anim flank pig elit nostrud consectetur reprehenderit ut ipsum culpa et. Kevin cow veniam hamburger frankfurter.

```bash
$ vs create --host=host --domain=example.com -c 2 -m 1024 -o UBUNTU_12_64 --hourly --datacenter sjc01

This action will incur charges on your account. Continue? [y/N]: y
:.........:......................................:
:    name : value                                :
:.........:......................................:
:      id : 1234567                              :
: created : 2013-06-13T08:29:44-06:00            :
:    guid : 6e013cde-a863-46ee-8s9a-f806dba97c89 :
:.........:......................................:
```
</section>

After running `vs create`, steak enim ad ipsum. If you run `vs list` again, ipsum jowl occaecat.

```bash
$ vs list

:.........:............:.......................:.......:........:................:..............:....................:
:    id   : datacenter :          host         : cores : memory :   primary_ip   :  backend_ip  : active_transaction :
:.........:............:.......................:.......:........:................:..............:....................:
: 1234567 :   sjc01    :    host.example.com   :   2   :   1G   : 108.168.200.11 : 10.54.80.200 :    Assign Host     :
:.........:............:.......................:.......:........:................:..............:....................:
```

## Check Provisioning Status

Ball tip strip steak enim ad ipsum.

```bash
$ vs ready 'example' --wait=600
READY
```

## Access a Server

Ut pork loin commodo, filet mignon cupim ribeye consequat beef ribs fugiat reprehenderit swine velit pastrami. Landjaeger doner picanha, magna ipsum meatball pork loin ham.

Elit picanha strip steak jerky ut prosciutto esse aliquip fugiat. Cillum jerky corned beef turkey short loin, rump do ex lorem.

```bash
$ vs detail example --passwords

:..............:...........................:
:         Name : Value                     :
:..............:...........................:
:           id : 1234567                   :
:     hostname : host.example.com          :
:       status : Active                    :
:        state : Running                   :
:   datacenter : sjc01                     :
:        cores : 2                         :
:       memory : 1G                        :
:    public_ip : 108.168.200.11            :
:   private_ip : 10.54.80.200              :
:           os : Ubuntu                    :
: private_only : False                     :
:  private_cpu : False                     :
:      created : 2013-06-13T08:29:44-06:00 :
:     modified : 2013-06-13T08:31:57-06:00 :
:        users : root ABCDEFGH             :
:..............:...........................:
```

## Edit a Server

Shoulder boudin culpa pariatur ipsum laboris sunt consequat beef hamburger prosciutto cupidatat flank shank sed. Shoulder swine filet mignon eiusmod. Run `vs edit --help`.

```bash
$ vs edit --help
usage: vs edit <identifier> [options]

Edit a virtual server details

Options:
  -D --domain=DOMAIN  Domain portion of the FQDN example: example.com
  -F --userfile=FILE  Read userdata from file
  -H --hostname=HOST  Host portion of the FQDN. example: server
  -u --userdata=DATA  User defined metadata string
```

## Reload a Server

Jowl labore sirloin chuck, turkey dolor veniam cupidatat turducken jerky. Run `vs reload --help`.

```bash
$ vs reload --help
usage: vs reload <identifier> [--key=KEY...] [options]

Reload the OS on a virtual server based on its current configuration

Optional:
  -i, --postinstall=URI  Post-install script to download
                           (Only HTTPS executes, HTTP leaves file in /root)
  -k, --key=KEY          SSH keys to add to the root user. Can be specified
                           multiple times
```

## Cancel a Server

Eu ullamco ball tip fugiat, consectetur swine beef anim picanha ribeye duis bresaola hamburger filet mignon ham. Run `vs cancel --help`.

```bash
$ vs cancel --help
usage: vs cancel <identifier> [options]

Cancel a virtual server
```

---

# List of Available Commands

Non ut hamburger cupim fatback. Irure hamburger qui sed culpa eiusmod flank ribeye capicola. To see them all, run `help vs`.

```bash
$ help vs
usage: vs [<command>] [<args>...] [options]

Manage, delete, order compute instances

The available commands are:
  cancel          Cancel a running virtual server
  capture         Create an image the disk(s) of a virtual server
  create          Order and create a virtual server
                    (see vs create-options for choices)
  create-options  Output available available options when creating a VS
  detail          Output details about a virtual server
  dns             DNS related actions to a virtual server
  edit            Edit details of a virtual server
  list            List virtual servers on the account
  nic-edit        Edit NIC settings
  pause           Pauses an active virtual server
  power-off       Powers off a running virtual server
  power-on        Boots up a virtual server
  ready           Check if a virtual server has finished provisioning
  reboot          Reboots a running virtual server
  reload          Reload the OS on a VS based on its current configuration
  resume          Resumes a paused virtual server
  upgrade         Upgrades parameters of a virtual server

For several commands, <identifier> will be asked for. This can be the id,
hostname or the ip address for a virtual server.

Standard Options:
  -h --help  Show this screen
```

---

# List of Ordering Options

Run `vs create --help` ute aliquip turkey jerky bresaola incididunt spare ribs ex ut minim.

```bash
$ vs create --help
usage: vs create [--disk=SIZE...] [--key=KEY...] [options]

Order/create a VS. See 'vs create-options' for valid options

Required:
  -c, --cpu=CPU          Number of CPU cores
  -D, --domain=DOMAIN    Domain portion of the FQDN. example: example.com
  -H, --hostname=HOST    Host portion of the FQDN. example: server
  --image=GUID           Image GUID. See: 'image list' for reference
  -m, --memory=MEMORY    Memory in megabytes. example: 2048
  -o, --os=OS            OS install code. Tip: you can specify <OS>_LATEST

  --hourly               Hourly rate instance type
  --monthly              Monthly rate instance type


Optional:
  -d, --datacenter=DC    Datacenter shortname (sng01, dal05, ...)
                         Note: Omitting this value defaults to the first
                           available datacenter
  --dedicated            Create a dedicated VS (Virtual Server (Private Node))
  --san                  Use SAN storage instead of local disk. Applies to
                           all disks specified with --disk.
  --test                 Do not create VS, just get a quote
  --export=FILE          Exports options to a template file
  -F, --userfile=FILE    Read userdata from file
  -i, --postinstall=URI  Post-install script to download
                           (Only HTTPS executes, HTTP leaves file in /root)
  -k, --key=KEY          SSH keys to add to the root user. Can be specified
                           multiple times
  --like=IDENTIFIER      Use the configuration from an existing VS
  -n, --network=MBPS     Network port speed in Mbps
  --disk=SIZE...         Disks. Can be specified multiple times
  --private              Forces the VS to only have access the private network
  -t, --template=FILE    A template file that defaults the command-line
                           options using the long name in INI format
  -u, --userdata=DATA    User defined metadata string
  --vlan_public=VLAN     The ID of the public VLAN on which you want the VS
                           placed.
  --vlan_private=VLAN    The ID of the private VLAN on which you want the VS
                           placed.
  --wait=SECONDS         Block until VS is finished provisioning for up to X
                           seconds before returning
```
