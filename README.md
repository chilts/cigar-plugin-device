# cigar-plugin-device #

Device utilisation plugin for Cigar which returns the used, free and total disk space of a device.

# Config #

In your `/etc/cigar/client.ini` file, a device section looks like this:

```
[device]
plugin=device
period=60
device=/dev/sda1
unit=G
```

The unit field has a default of `G` for Gigabytes. You can use `M`, `K` or `1` for MB, KB and B respectively.

The period field is the default cigar period. Probably 60 (seconds).

The `device` field has no default and must be provided.

# Example #

Let's say you have a root partition and a data partition and you want to check every 5 mins or 10 mins
respectively. You also want to measure in MB or GB depending on the partition.

```
[device-root]
plugin=device
period=600
device=/dev/sda1
unit=M

[device-data]
plugin=device
period=300
device=/dev/sdb1
unit=G
```

# Author #

Written by [Andrew Chilton](http://chilts.org/) - [Blog](http://chilts.org/blog/) -
[Twitter](https://twitter.com/andychilton).

# License #

* http://chilts.mit-license.org/2013/

(Ends)
