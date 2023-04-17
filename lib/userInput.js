const inquirer = require('inquirer');
const questions = require('./question');

function userInput() {
    return inquirer.prompt(questions);

}

module.exports = userInput;