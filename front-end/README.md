
## Demo app Link

# Ngrx App using observable RXJS and NGRX using best practices

This [Url application demo](https://jefferson.informati-k.com)

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 16.2.8

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