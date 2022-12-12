oclif-hello-world
=================

oclif example Hello World CLI

[![oclif](https://img.shields.io/badge/cli-oclif-brightgreen.svg)](https://oclif.io)
[![Version](https://img.shields.io/npm/v/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![CircleCI](https://circleci.com/gh/oclif/hello-world/tree/main.svg?style=shield)](https://circleci.com/gh/oclif/hello-world/tree/main)
[![Downloads/week](https://img.shields.io/npm/dw/oclif-hello-world.svg)](https://npmjs.org/package/oclif-hello-world)
[![License](https://img.shields.io/npm/l/oclif-hello-world.svg)](https://github.com/oclif/hello-world/blob/main/package.json)

<!-- toc -->
* [Usage](#usage)
* [Commands](#commands)
<!-- tocstop -->
# Usage
<!-- usage -->
```sh-session
$ npm install -g fixture-maker
$ fmaker COMMAND
running command...
$ fmaker (--version)
fixture-maker/0.0.0 darwin-x64 node-v16.17.1
$ fmaker --help [COMMAND]
USAGE
  $ fmaker COMMAND
...
```
<!-- usagestop -->
# Commands
<!-- commands -->
* [`fmaker contentful FILENAME`](#fmaker-contentful-filename)
* [`fmaker hello PERSON`](#fmaker-hello-person)
* [`fmaker hello world`](#fmaker-hello-world)
* [`fmaker help [COMMAND]`](#fmaker-help-command)
* [`fmaker plugins`](#fmaker-plugins)
* [`fmaker plugins:install PLUGIN...`](#fmaker-pluginsinstall-plugin)
* [`fmaker plugins:inspect PLUGIN...`](#fmaker-pluginsinspect-plugin)
* [`fmaker plugins:install PLUGIN...`](#fmaker-pluginsinstall-plugin-1)
* [`fmaker plugins:link PLUGIN`](#fmaker-pluginslink-plugin)
* [`fmaker plugins:uninstall PLUGIN...`](#fmaker-pluginsuninstall-plugin)
* [`fmaker plugins:uninstall PLUGIN...`](#fmaker-pluginsuninstall-plugin-1)
* [`fmaker plugins:uninstall PLUGIN...`](#fmaker-pluginsuninstall-plugin-2)
* [`fmaker plugins update`](#fmaker-plugins-update)

## `fmaker contentful FILENAME`

Get Contentful Entry

```
USAGE
  $ fmaker contentful [FILENAME] -s <value> -t <value> -e <value> [-e <value>]

ARGUMENTS
  FILENAME  Name of the file to save the fixture to

FLAGS
  -e, --entry=<value>  (required) Entry ID
  -e, --env=<value>    [default: master] Contentful environment
  -s, --space=<value>  (required) Contentful space ID
  -t, --token=<value>  (required) Contentful CDN access token

DESCRIPTION
  Get Contentful Entry

EXAMPLES
  $ fmaker contentful filename --space XXX --token XXX --entry XXX --space XXX
  Downloads Contentful entry and writes it recursively as json file.
```

_See code: [dist/commands/contentful/index.ts](https://github.com/kirylowicz/fixture-maker/blob/v0.0.0/dist/commands/contentful/index.ts)_

## `fmaker hello PERSON`

Say hello

```
USAGE
  $ fmaker hello [PERSON] -f <value>

ARGUMENTS
  PERSON  Person to say hello to

FLAGS
  -f, --from=<value>  (required) Who is saying hello

DESCRIPTION
  Say hello

EXAMPLES
  $ oex hello friend --from oclif
  hello friend from oclif! (./src/commands/hello/index.ts)
```

_See code: [dist/commands/hello/index.ts](https://github.com/kirylowicz/fixture-maker/blob/v0.0.0/dist/commands/hello/index.ts)_

## `fmaker hello world`

Say hello world

```
USAGE
  $ fmaker hello world

DESCRIPTION
  Say hello world

EXAMPLES
  $ fmaker hello world
  hello world! (./src/commands/hello/world.ts)
```

## `fmaker help [COMMAND]`

Display help for fmaker.

```
USAGE
  $ fmaker help [COMMAND] [-n]

ARGUMENTS
  COMMAND  Command to show help for.

FLAGS
  -n, --nested-commands  Include all nested commands in the output.

DESCRIPTION
  Display help for fmaker.
```

_See code: [@oclif/plugin-help](https://github.com/oclif/plugin-help/blob/v5.1.19/src/commands/help.ts)_

## `fmaker plugins`

List installed plugins.

```
USAGE
  $ fmaker plugins [--core]

FLAGS
  --core  Show core plugins.

DESCRIPTION
  List installed plugins.

EXAMPLES
  $ fmaker plugins
```

_See code: [@oclif/plugin-plugins](https://github.com/oclif/plugin-plugins/blob/v2.1.7/src/commands/plugins/index.ts)_

## `fmaker plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fmaker plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ fmaker plugins add

EXAMPLES
  $ fmaker plugins:install myplugin 

  $ fmaker plugins:install https://github.com/someuser/someplugin

  $ fmaker plugins:install someuser/someplugin
```

## `fmaker plugins:inspect PLUGIN...`

Displays installation properties of a plugin.

```
USAGE
  $ fmaker plugins:inspect PLUGIN...

ARGUMENTS
  PLUGIN  [default: .] Plugin to inspect.

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Displays installation properties of a plugin.

EXAMPLES
  $ fmaker plugins:inspect myplugin
```

## `fmaker plugins:install PLUGIN...`

Installs a plugin into the CLI.

```
USAGE
  $ fmaker plugins:install PLUGIN...

ARGUMENTS
  PLUGIN  Plugin to install.

FLAGS
  -f, --force    Run yarn install with force flag.
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Installs a plugin into the CLI.
  Can be installed from npm or a git url.

  Installation of a user-installed plugin will override a core plugin.

  e.g. If you have a core plugin that has a 'hello' command, installing a user-installed plugin with a 'hello' command
  will override the core plugin implementation. This is useful if a user needs to update core plugin functionality in
  the CLI without the need to patch and update the whole CLI.


ALIASES
  $ fmaker plugins add

EXAMPLES
  $ fmaker plugins:install myplugin 

  $ fmaker plugins:install https://github.com/someuser/someplugin

  $ fmaker plugins:install someuser/someplugin
```

## `fmaker plugins:link PLUGIN`

Links a plugin into the CLI for development.

```
USAGE
  $ fmaker plugins:link PLUGIN

ARGUMENTS
  PATH  [default: .] path to plugin

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Links a plugin into the CLI for development.
  Installation of a linked plugin will override a user-installed or core plugin.

  e.g. If you have a user-installed or core plugin that has a 'hello' command, installing a linked plugin with a 'hello'
  command will override the user-installed or core plugin implementation. This is useful for development work.


EXAMPLES
  $ fmaker plugins:link myplugin
```

## `fmaker plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fmaker plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fmaker plugins unlink
  $ fmaker plugins remove
```

## `fmaker plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fmaker plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fmaker plugins unlink
  $ fmaker plugins remove
```

## `fmaker plugins:uninstall PLUGIN...`

Removes a plugin from the CLI.

```
USAGE
  $ fmaker plugins:uninstall PLUGIN...

ARGUMENTS
  PLUGIN  plugin to uninstall

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Removes a plugin from the CLI.

ALIASES
  $ fmaker plugins unlink
  $ fmaker plugins remove
```

## `fmaker plugins update`

Update installed plugins.

```
USAGE
  $ fmaker plugins update [-h] [-v]

FLAGS
  -h, --help     Show CLI help.
  -v, --verbose

DESCRIPTION
  Update installed plugins.
```
<!-- commandsstop -->
