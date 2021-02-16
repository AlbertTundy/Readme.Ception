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
  return `# ${data.applicationTitle}
  ${renderLicenseBadge(data.license)}
  ## table of contents 
  [description](#description)<br/>
  [function](#function)<br/>
  [inspiration](#inspiration)<br/>
  [description](#description)<br/>
  [description](#description)<br/>
  [description](#description)<br/>


  ## description: 
  ${data.description}<br/>
  ## function:
  ${data.function}<br/>
  ## inspiration: 
  ${data.inspiration}<br/>
  ## instillation: 
  ${data.instillation}<br/>
  ## uses: 
  ${data.uses}<br/>
  ##license description<br/>
${renderLicenseSection(data.license)}
  ## github page: 
  [github.com/${data.gitHub}](http://github.com/${data.gitHub})<br/>
  ## website address: 
  ${data.webAddress}
  
`;
}

module.exports = generateMarkdown;
