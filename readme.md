# HTML CSS generator for VMG project

## Structure

- all source files stored in src directory
- dst/dev/bems directories are auto-generated
- gulp-helpers - additional tasks for project, can be moved to separete node modules later

## Markup
- bemjson files contains all markup for project
- there are partials for optimize development
- dont use 'mix' parameter - put blocks to each other
- styles written with Stylus; the folder contains only .styl files

## Data
- Format: @@my_param_name - matching a regular expresssion: @@\w+

## JS
- use attrs, like 'onclick' for bindind events
- for all functions use global namespace: 'app'
- send the 'this' param: onclick='app.someFunc(this)'. Other params must be included in markup (inner elems or attrs, like 'data-bind' attr)
- use camelCase notation for function name
- if this elements by click event opens some popup, need to point name of this popup in params

## Tasks
- to build files: ```gulp build``` - will be created a folder with generated markup
- to view in a browser: ```gulp connect```
- to build (or view) production: use ```--prod``` parameter in commands
