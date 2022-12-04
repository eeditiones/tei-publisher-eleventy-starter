# 11ty TEI Publisher Plugin: Starter Template

This is a basic template to help you get started with [11ty](https://www.11ty.dev/) and the [TEI Publisher 11ty plugin](https://github.com/eeditiones/tei-publisher-eleventy).

The [package.json](package.json) installs 

* 11ty
* TEI Publisher plugin
* TEI Publisher webcomponents

To build the project, you'll need nodejs and npm. The plugin configuration tries to pull the Shakespeare sample from a TEI Publisher instance running on port 8080 of the local host. If you have TEI Publisher running elsewhere, change the base URI in `.eleventy.js`.

To start the building process and launch a local server, run `npm install` once, followed by `npm start`.