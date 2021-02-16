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
//If there is no license, return an empty string
function renderLicenseSection(license) {
  if(license === "MIT"){
    return`this is license by MIT all rights reserved`
  } else if(license === "Apache") {
    return`This is licensed by Apache`
  } else if(license === "CIA") {
    return`this is licensed by the cia`
  }

}

// TODO: Create a function to generate markdown for README
function generateMarkdown(data) {
  return `
  # ${data.applicationTitle}
  ${renderLicenseBadge(data.license)}
  ## Table of Contents 
  [Description](#Description)<br/>
  [Function](#Function)<br/>
  [Inspiration](#Inspiration)<br/>
  [Instillation](#Instillation)<br/>
  [Usage](#Usage)<br/>
  [Contributing](#Contributing)<br/>
  [Tests](#Tests)<br/>
  [License Description](#License Description)<br/>
  [Questions](#Questions)<br/>


  ## Description: 
  ${data.description}<br/>
  ## Function:
  ${data.function}<br/>
  ## Inspiration: 
  ${data.inspiration}<br/>
  ## Instillation: 
  ${data.instillation}<br/>
  ## Usage: 
  ${data.uses}<br/>
  ## Contributing:
  ${data.contributing}
  ## Tests:
  ## License Description<br/>
${renderLicenseSection(data.license)}
  ## Questions: 
  [github.com/${data.gitHub}](http://github.com/${data.gitHub})<br/>
  ### email me at: 
  ${data.webAddress}
  
`;
}

module.exports = generateMarkdown;
