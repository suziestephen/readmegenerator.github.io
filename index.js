// Required inquirer, fs, generateMarkdown
const inquirer          = require('inquirer');
const fs                = require('fs');
const generateMarkdown  = require('./utils/generateMarkdown');


// User data question for inquirer to ask
inquirer
  .prompt([
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
        name: 'screenshot',
        message: 'If you have a screenshot link for your project, paste it here:',
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
        choices: ['Apache', 'GPLv3', 'MIT', 'Creative Commons', 'None'],
    },
    {
        type: 'input',
        name: 'contributors',
        message: 'How do other developers to contribute to your project?',
    },
])



        // Function to write readme file

        .then(function(data){

            fs.writeFile('README.md', generateMarkdown(data), (err) =>
                err ? console.error(err) : console.log('Success!')
                );
            }
          );
        
          function init(){
        
          }
          init();

