// Required inquirer, fs, generateMarkdown
const inquirer          = require('inquirer');
const fs                = require('fs');
const generateMarkdown  = require('./utils/generateMarkdown');



// User data question for inquirer to ask
const questions = [
    {
        type: 'input',
        name: 'name',
        message: 'What is your full name?'
    },{
        type: 'input',
        name: 'username',
        message: 'What is your GitHub username?'
    },
    {
        type: 'input',
        name: 'email',
        message: 'Your email:',
    },
    {
        type: 'input',
        name: 'repository',
        message: 'Link to your repository:',

    },
// Project questions for inquirer to ask

    {
        type: 'input',
        name: 'title',
        message: 'What is the name of your project?'
    },
    {
        type: 'input',
        name: 'badge',
        message:  'Please provide your badge links.'
    },
    {
        type: 'input',
        name: 'description',
        message:  'Please provide a description of your project.'
    },
    {
        type: 'input',
        name: 'installation',
        message:  'What do you need to install in order for your application to work?'
    },
    {
        type: 'input',
        name: 'usage',
        message:  'How do you use your this program?'
    },
    {
        type: 'input',
        name: 'features',
        message: 'Describe the features of your project:',
    },
    {
        type: 'input',
        name: 'tests',
        message:  'How would you run tests on this project?'
    },
    {
        type: 'list',
        name: 'license',
        message: 'Choose your license:',
        choices: ['MIT', 'Apache 2.0', 'Creative Commons', 'GPLv2', 'GPLv3', 'no license'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How do other developers to contribute to your project?',
    },
];



        // Function to write readme file

        function writeToFile(fileName, data) {
            fs.writeFile(fileName, data, (err) =>
                err ? console.error(err) : console.log('Success')
                )
        }

        // Create a function to initialize app
        function init() {
            inquirer
                .prompt (questions)
                    .then((data) =>{
                        const readMeFile = generateMarkdown(data);
                        writeToFile('README.md', readMeFile);
                    });
        }

        // Function call to initialize app
        init();


