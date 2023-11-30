
const generateMarkdown = ({ title,
  description, installation, usage,
  license, Contributing, Tests, GITHUB, Email }) =>
  // template literal to insert text in a text block 
  `
${renderLicenseBadge(license)}
## Title
${title}
  
## Description 

${description}
## Table of Contents

1. [Description](#description) 
2. [Installation](#installation) 
3. [Usage](#usage) 
4. ${renderLicenseLink(license)}
5. [Contributing](#contribution)
6. [Testing](#testing)
7. [Questions](#questions) 

## Installation
${installation}

## Usage 
${usage}

## License
${renderLicenseSection(license)}

## Contribution
${Contributing}

## Testing
${Tests}

## Questions

Git User link: https://github.com/${GITHUB}  \n
Email: ${Email} 
 
`
// array of questions for user input
const questions = [
  {
    type: 'input',
    name: 'title',
    message: 'Title of the project?',
  },
  {
    type: 'input',
    name: 'description',
    message: 'Project Descriptions:',

  },

  {
    type: 'input',
    name: 'installation',
    message: ' Installation instructions:',

  },
  {
    type: 'input',
    name: 'usage',
    message: 'Usage information:',
  },
  {
    type: 'list',
    name: 'license',
    message: 'Choose a license for your project:',
    choices: ['MIT', 'Apache', 'GPL', "none"],
  },
  {
    type: 'input',
    name: 'Contributing',
    message: 'Contributions:',
  },
  {
    type: 'input',
    name: 'Tests',
    message: 'Tests:',
  },
  {
    type: 'input',
    name: 'GITHUB',
    message: 'Enter your GitHUb Username',

  },
  {
    type: 'input',
    name: 'Email',
    message: 'Enter Your Email',

  },
];


// function that returns a license badge based on which license is passed in
// // If there is no license, return an empty string
function renderLicenseBadge(license) {
  if (license == 'none') {
    return ""

  }

  else if (license == 'MIT') {
    return `![license](https://img.shields.io/badge/License-${license}-yellow.svg)`
  }
  else if (license == 'Apache') {
    return `![License](https://img.shields.io/badge/License-${license}%202.0-blue.svg)`
  }
  else if (license == 'GPL') {
    return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`
  }
}

//  function that returns the license link
// // If there is no license, return an empty string
function renderLicenseLink(license) {

  if (license !== 'none') {
    return `[License](#license)`

  }
  return ''
}

// function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {
  if (license !== 'none') {
    return `License is under ${license} license `

  }
  return ''
}

//  function to generate markdown for README
// function generateMarkdown(data) {
//   return `# ${data.title}
// }

// exporting the generateMarkdown function and question object 
// This became now and object with 2 items 
module.exports = { generateMarkdown, questions };