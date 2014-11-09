# HTML CSS generator for VMG project

## Structure

- all source files stored in src directory
- dst/dev/bems directories are auto-generated
- gulp-helpers - additional tasks for project, can be moved to separete node modules later

## Markup
- bemjson.js - pages
- bj.js - partials of pages
- Every page contains blocks. One block - one file (bj.js)
- dont use 'mix' parameter - put blocks to each other
- styles written with Stylus; the folder contains only .styl files
- name convention for elements:
    - button (or link like button): fnc-some-name
    - input (or textarea): inp-some-name
    - label (or span like label): lbl-some-name

## Data
- Format: {{my_param_name}} - http://handlebarsjs.com/

## JS
- use attrs, like 'onclick' for bindind events
- use names of functions, like usuad data: {{my_function}}

## Build
- to build files: ```gulp build``` - will be created a folder with generated markup
- to view in a browser: ```gulp connect```
- to build (or view) production: use ```--prod``` parameter in commands

## Commit
- use Angular convention for commit messages: https://docs.google.com/document/d/1QrDFcIiPjSLDn3EL15IJygNPiHORgU1_OOAqWjiDU5Y/mobilebasic for example: 
```git commit -m "feat(templatePage): progress bar" -m "set colors for progress" -m "time: 0h:15"```
