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

## Tasks
- to build files: ```gulp build``` - will be created a folder with generated markup
- to view in a browser: ```gulp connect```
- to build (or view) production: use ```--prod``` parameter in commands
