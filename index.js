const userInput = require('./lib/userInput.js');
const createSVG = require('./lib/createSVG.js');
const writeToFile = require('./lib/writeToFile.js');

function main() {
    userInput()
        .then((answers) => {
            const svgData = createSVG(answers);
            writeToFile('logo.svg', svgData);
        })
        .catch((error) => console.error(error));
}

main();