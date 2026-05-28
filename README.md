# cockpit-machines-debian-13-translate

Russian localization patch for `cockpit-machines` on Debian 13.

## Problem

Debian 13 currently ships `cockpit-machines` without Russian locale bundles:

* `po.ru.js.gz`
* `po.manifest.ru.js.gz`

Because of this, the Cockpit Virtual Machines UI remains partially untranslated.

## Source

Translations are based on the official upstream Weblate repository:

* `cockpit-machines-weblate`
* `ru.po`

## Installation

Copy translation bundles into Cockpit machines directory:

```bash
cp po.ru.js.gz /usr/share/cockpit/machines/
cp po.manifest.ru.js.gz /usr/share/cockpit/machines/

systemctl restart cockpit.socket
```

## Build process

The files were generated from upstream `ru.po` using the Cockpit Machines build system.

Environment:

* Debian 13
* cockpit-machines
* gettext
* nodejs
* npm
* make

## Notes

This is a temporary workaround until Debian packages start shipping official Russian locale bundles again.
