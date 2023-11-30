// Packages needed for this application
const inquirer = require('inquirer');
const fs = require('fs');
// Oject destructurin to pull  out the  generateMarkdown and questions proprieties
// and use nodejs require syntax to  import the module exported by generateMarkdown.js
const { generateMarkdown, questions } = require('./generateMarkdown')


// function to write  writeToFile
const createReadmefile = (content) => fs.writeFile('README.md', content, err => {
    if (err) throw err;

    console.log('README.md Created!');
})

// function to initialize app
function init() {
    inquirer.prompt(questions).then(answers => {
        const readmeContent = generateMarkdown(answers);
        createReadmefile(readmeContent)
    })
}

//Function call to initialize app
init();



