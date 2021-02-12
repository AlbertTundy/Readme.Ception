// TODO: Include packages needed for this application
const inquirer = require("inquirer")//external 
const fs = require("fs")// internal
const path = require("path")// internal
const generateMarkdown = require("./utils/generateMarkdown")
// TODO: Create an array of questions for user input
const questions = [
    {type: "input", 
    name: "applicationTitle",
    message: "What is the name of your application?"
    },
    {type: "input", 
    name: "description",
    message: "Describe your project?"
    },
    {type: "input", 
    name: "function",
    message: "What does your project do?"
    },
    {type: "input", 
    name: "inspiration",
    message: "Why did you build this project?"
    },
    {type: "input", 
    name: "instillation",
    message: "How do you install your project?"
    },
    {type: "input", 
    name: "uses",
    message: "What is your project good for?"
    },
    {type: "input", 
    name: "gitHub",
    message: "What is the github address?"
    },
    {type: "input", 
    name: "webAddress",
    message: "What is the web address?"
    },
    {type: "list", 
    name: "license",
    message: "What license does your application use?", 
    choices: [
        "MIT", "Apache", "Mi6", "Mozilla", "CIA"
    ]
    },

];
// TODO: Create a function to write README file
function writeToFile(fileName, data) {}

// TODO: Create a function to initialize app
function init() {
    inquirer.prompt(questions).then(function(input){
        fs.writeFileSync("README.md", generateMarkdown(input))
    })


}

// Function call to initialize app
init();
