const questions = [
    {
        type: 'input',
        name: 'text',
        message: 'Enter text, up to three characters',
        validate: (text) => {
            return text.length <= 3 && text.length > 0;
        },

    },
    {
        type: 'input',
        name: 'textColor',
        message: 'Enter text color',
    },
    {
        type: 'list',
        name: 'shape',
        choices: ['Circle', 'Triangle', 'Square'],
        message: 'Choose a shape',
    },
    {
        type: 'input',
        name: 'shapeColor',
        message: 'Enter shape color',
    },
    
];

module.exports = questions;