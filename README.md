# metalbolicx-porfolio

By José Martínez Santana

## Technologies used

<p align="left">
    <a href="https://www.w3.org/html/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/html5/html5-original-wordmark.svg" alt="html5" width="40" height="40"/>
    </a>
    <a href="https://www.w3schools.com/css/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/css3/css3-original-wordmark.svg" alt="css3" width="40" height="40"/>
    </a>
    <a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/>
    </a>
    <a href="https://www.typescriptlang.org/" target="_blank" rel="noreferrer">
        <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/typescript/typescript-original.svg" alt="typescript" width="40" height="40"/>
    </a>
</p>

## Description

Welcome to my personal portfolio, built using the architecture of a single-page application mainly with `CSS` and `TypeScript`.

## Features

- [x] Validation of the route with **regular expressions**.
- [x] It can handle a not existing route with a **404 error page**.

# Usage

## Project structure

To implement the logic for the web page, add the code to the respective folders inside the `src/internal` directory. Here is the purpose of each folder:

|Folder 📁|Purpose|
|:---|:---|
|events|Contains the JavaScript event listener logic of the DOM.|
|pages|THolds the JavaScript code to create the `main` tag of each page.|
|routes|Contains the handler functions to add the DOM elements of the selected web page.|
|templates|Holds JavaScript code for the permanent elements of the web page that will not change, for example: The navigation bar.|
|utils|Contains JavaScript code for custom processing.|
|views|Holds the JavaScript functions that define the HTML view of the web page.|

## Adding a New Page/Route
To add a new page/route to the application, follow these steps:

1. In the `src/internal/routes`` folder, open the routes.ts file and add an import statement for the new page. For example:

```TypeScript
import createUser from "../pages/user";
```

2. In the JavaScript object, add the name of the <ins>route</ins> and <ins>handler function</ins> for the new page. You can use a regular expression in the path if a validation pattern is needed. For example:

 ```TypeScript
const routes: Routes = {
    // Create the user web page depending on data of a given user
    "/user/\\d+": createUser;
};
 ```

# Contributing

Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change. I invite you to collaborate directly in this repository: [metalbolicx-porfolio](https://github.com/MetalbolicX/metalbolicx-porfolio)

# License

metalbolicx-porfolio is released under the [MIT License](https://opensource.org/licenses/MIT).