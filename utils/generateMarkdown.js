//License Badge 
function renderLicenseBadge(license) {
	console.log("renderLicenseBadge", license);
	if(license !== 'None') {
		return `![License](https://img.shields.io/badge/License-${license}-blue.svg)`;
	}
	
}

//License Link
function renderLicenseLink(license) {}


//License Section
function renderLicenseSection(license) {}

//Generate Markdown

function generateMarkdown(data) {
  return `# ${data.title}

  ${data.badge}



  # Description
  ${data.description}



  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Features] (#features)
  * [Tests](#tests)
  * [License](#license)
  * [Contributions](#contributions)
  * [Questions](#questions)
  

  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Screenshot
  ${data.screenshot}
  # Tests
  ${data.tests}
  # License
  ${data.license}
  # Contributions
  ${data.contributors}


  # Repository
  ${data.repository}
  # Deployed Link
  ${data.githublink}
  

  # Questions
  ${data.questions}
  Got questions or feedback? You can contact me on:
    - [Github](https://github.com/${data.username})
    - [Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;