# Cucumber_BDD

Execute:

You must have git and nodejs installed

Clone the repo
```
    https://github.com/WilsonMedina/Cucumber_BDD.git
 ````
 Install all dependencies
 
 ```
    npm i -f or npm ci
 ````
 Optional run app cypress
 ```
    npm run test
 ````
Open the folder reports then cucumber-htmlreport.html and lastly the file index.html

➡ But if you want to do it more personal you can modify the files of the folder features, step_defenitions, pages and the file commands, also you must delete 
the files in the folder jsonlogs, the folder reports and the file cucumber-report.html in the root of the project then you must:

Optional Run app cypress
 ```
    npm run test
 ````
Run tests on console
 ```
    npm run file
 ````

Run cucumber HTML report
 ```
    node cucumber-html-report.js
 ````

➡ But if you want to create a project from scratch you must follow these steps:

1-Init a project
 ```
    npm init
 ````

2-Install cypress
 ```
    npm install cypress --save-dev
 ````
3- Create the folders and files necessary, you can have a guide with this repository

4-Install badeball (or as i say open the door to cucumber)
 ```
    npm install @badeball/cypress-cucumber-preprocessor --save-dev
 ````

5- Install dependency cucumber (or as i say who will enter in this case the preprocessor Browserify)
 ```
    npm install @cypress/browserify-preprocessor
 ````

6- Donwload asset formatter in the following url https://github.com/cucumber/json-formatter/releases/tag/v19.0.0 and choose the one corresponding 
to your operating system for exaample:
 ```
    cucumber-json-formatter-windows-amd64
 ````
after donwload it you must change the name to:
 ```
    cucumber-json-formatter.exe
 ````
and lastly move it to the root of your project

7- Install multiple-cucumber
 ```
    npm install multiple-cucumber-html-reporter --save-dev
 ````

8- Copy and paste the following line of code in the file package.json below of the line of code - "test": "cypress open", -
 ```
    "file": "cypress run --browser chrome --spec cypress/e2e/features/*"
 ````

Now you just have to execute

Run app cypress
 ```
    npm run test
 ````
Run tests on console
 ```
    npm run file
 ````

Run cucumber HTML report
 ```
    node cucumber-html-report.js
 ````

