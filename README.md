
## Demo  app Link, last updated date 07/04/2024

# Ngrx App using observable RXJS and NGRX using best practices

This [Url application demo](https://jefferfront.nubeactiva.com)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 17.3.8

Angular CLI: 17.3.8
Node: 20.11.0
Package Manager: npm 10.2.4
OS: win32 x64

## Development server

If you want to run the application, first you should go to backend-api folder and then run the following command-line npm install and npm start. 

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build --configuration=production --aot --output-hashing=all` to build the project. The build artifacts will be stored in the `dist/` directory. Use the `--configuration=production` flag for a production build.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via [Protractor](http://www.protractortest.org/).

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI README](https://github.com/angular/angular-cli/blob/master/README.md).

## How to kill process in windows

netstat -ano | findstr "PID :PortNumber"
taskkill /PID pidNumber /F

## How to kill process in Mac
kill -9 $(lsof -ti:4200)

## How to run cypress project e2e

1. Open new console command line, Go to the backend-api and run npm start
2. Open new console command line, Go to the front-end and run npm start
2. Open new console command line, Go to the automation and run npx cypress open

## How to compress folder
You should  move to a foldes dist
tar -czvf app.tar.gz ./

## How to decompress folder
execute this command in folder where you want to deploy
tar -xzvf app.tar.gz

## Notes commands
tar --exclude='./folder' --exclude='./upload/folder2' -zcvf /backup/filename.tgz .

## Utils commands
- Remove-Item -Force .\dist\
- ng update @tinymce/tinymce-angular
- ng update karma-jasmine
- ng update apexcharts ng-apexcharts
- ng update rxjs
- ng update angular-in-memory-web-api
- ng update @angular/material @angular/material-moment-adapter
- ng update @ngrx/store
- ng update @angular/cli @angular/core
- ng update @ngrx/store-devtools
- ng update @ngrx/router-store

## How to fix a bug
## This is error message 'an unhandled exception occurred: class extends value undefined is not a constructor or null'

Impossible to say for certain when there is clearly much more to the source. If anyone else sees this error, the first thing to look for is circular dependencies: a file depends on some other file that (likely indirectly) depends on the first. JS must start somewhere, will not be able to ensure that a file is defined at the time that another file needs it, and will not try to go back and fill in the blanks later.

If you have more than a couple import / require statements, I recommend periodically running a checker like Madge to find and optionally visualize any loops before they become hard to undo.

## Command solution
- npm i --saveDev madge
- node node_modules/madge/bin/cli.js --warning --circular --extensions js ./

# Windows When I want to switch to node version
Use nvm-windows, it's like nvm but for Windows. Download and run the installer, then:

- nvm install v0.10.33         # Install v0.10.33
- nvm use v0.10.33             # Use v0.10.33
Usage:
- nvm install [version]        # Download and install [version]
- nvm uninstall [version]      # Uninstall [version]
- nvm use [version]            # Switch to use [version]
- nvm list                     # List installed versions