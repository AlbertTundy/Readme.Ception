// TODO: Create a function that returns a license badge based on which license is passed in
// If there is no license, return an empty string
function renderLicenseBadge(license) {
  if(license === "MIT"){
    return`[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)`
  } else if(license === "Apache") {
    return`[![License](https://img.shields.io/badge/License-Apache%202.0-blue.svg)](https://opensource.org/licenses/Apache-2.0)`
  } 
} 

// TODO: Create a function that returns the license link
// If there is no license, return an empty string
function renderLicenseLink(license) {}

// TODO: Create a function that returns the license section of README
// If there is no license, return an empty string
function renderLicenseSection(license) {}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `# ${data.applicationTitle}
  ## application title: 
  ${data.applicationTitle}
  ## description: 
  ${data.description}
  ## function:
  ${data.function}
  ## inspiration: 
  ${data.inspiration}
  ## instillation: 
  ${data.instillation}
  <br/>
  ## uses: 
  ${data.uses}
  ## github page: 
  ${data.gitHub}
  ## website address: 
  ${data.webAddress}
  ${renderLicenseBadge(data.license)}
`;
}

module.exports = generateMarkdown;
