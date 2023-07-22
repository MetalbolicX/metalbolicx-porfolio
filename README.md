# metalbolicx-porfolio

By José Martínez Santana

## Technologies used

<p align="left"> <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/> </a> <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/> </a> <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/> </a> </p>

## Description

My personal portfolio using the arquitectue of the single page application created mainly with `CSS` and `TypeScript`.

## Features

- [x] Validation routing with **regular expressions**.
- [x] It can handle a not existing route with a page 404 error page.

# Usage

## Project structure

To implement the logic for the web page, add the code the next folders of the `src` folder. They purposes are the next:

|Folder 📁|Purpose|
|:---|:---|
|events|The TypeScript event listeners logic of the DOM.|
|pages|The TypeScript to create the `main` tag of each page.|
|routes|To hold the handler functions to add the DOM elements of the web page selected.|
|styles|The CSS file styles|
|templates|The TypeScript for the permanent elements of the web page. For example: The navigation bar.|
|utils|The TypeScript code for custom processing|
|views|The TypeScript functions to hold the HTML view of the web page.|

## Add a new page/route

In the `src/routes` folder in the `routes.ts` file add the `import` the *function* from `src/pages` folder and add to the `object` the <ins>route</ins> and <ins>handler function</ins>. The path can use **regular expressions** in case a validation pattern is needed.

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. I invite you to collaborate directly in this repository: [metalbolicx-porfolio](https://github.com/MetalbolicX/metalbolicx-porfolio)

# License

metalbolicx-porfolio is released under the [MIT License](https://opensource.org/licenses/MIT).