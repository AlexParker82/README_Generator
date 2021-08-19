const inquirer = require('inquirer');
const fs = require('fs');
const generateMarkdown = require('./utils/generateMarkdown.js')
const util = require('util');

const writeFileAsync = util.promisify(fs.writeFile);

const promptUser = () => {
    return inquirer.prompt([
        {
            type: 'input',
            name: 'title',
            message: 'What is the title of your project?',
        },
        {
            type: 'input',
            name: 'description',
            message: 'Write a brief description of your project:',
        },
        {
            type: 'input',
            name: 'install',
            message: 'Describe the installation process for your project, if any:',
        },
        {
            type: 'input',
            name: 'usage',
            message: 'Provide intructions for use of your application:',
        },
        {
            type: 'list',
            name: 'license',
            message: 'Choose the license you are using for your project:',
            choices: [
                "MIT",
                "Mozilla",
                "Apache 2.0",
                "BSD 3",
                "GPL 3.0",
            ]
        },
        {
            type: 'input',
            name: 'github',
            message: 'Enter your GitHub username:',
        },
        {
            type: 'input',
            name: 'email',
            message: 'Enter your email:',
        }

    ])
};


// TODO: Create a function to initialize app
const init = () => {
    promptUser()
        .then((data) => writeFileAsync('./README.md', generateMarkdown.generateMarkdown(data)))
        .then(() => console.log('Successfully wrote to README.md'))
        .catch((err) => console.error(err));;
};

// Function call to initialize app
init();