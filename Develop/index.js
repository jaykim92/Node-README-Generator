const fs = require("fs");
const inquirer = require("inquirer");
const generate = require("./utils/generateMarkdown")

const questions = [
    {
        type: "input",
        message: "Enter your GitHub username",
        name: "username",
    },
    {
        type: "input",
        message: "Enter your GitHub email",
        name: "email"
    },
    {
        type: "input",
        message: "Enter the title of the repository",
        name: "title"
    },
    {
        type: "input",
        message: "Enter a description of the application",
        name: "description"
    },
    {
        type: "input",
        message: "Provide steps for installation",
        name: "installation",
    },
    {
        type: "input",
        message: "Provide instructions and examples for use",
        name: "usage"
    },
    {
        type: "input",
        message: "Guidelines for contributors to follow",
        name: "contributing"
    },
    {
        type: "input",
        message: "Provide steps to test the application",
        name: "test",
        default: "npm run test"
    },
    {
        type: "list",
        message: "Select a license",
        name: "license",
        choices: ["Apache 2.0", "BSD 3", "GNU", "MIT", "Mozilla Public 2.0", "Common Development and Distribution"]
    }
];

function init() {
inquirer
    .prompt(questions)
    .then((response) => {
        fs.writeFile('README.md', generate(response), (error) => {
            if (error) {
                console.log('An error has occurred. README.md could not be created')
            } else {
                console.log('README.md was successfully created')
            }
        })
    })
}

init();
