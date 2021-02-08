//License Badge 
function renderLicenseBadge(license) {}

//License Link
function renderLicenseLink(license) {}


//License Section
function renderLicenseSection(license) {}

//Generate Markdown

function generateMarkdown(data) {
  return `# ${data.title}

  # Description
  ${data.description}

  # Screenshot
  ![user image](${data.screenshot})

  # Table of Contents
  * [Installation](#installation)
  * [Usage](#usage)
  * [Badges](#badges)
  * [Tests](#tests)
  * [License](#license)
  * [Contributions](#contributions)
  * [Questions](#questions)
  

  
  # Installation
  ${data.installation}
  # Usage
  ${data.usage}
  # Badges
  ${data.badge}
  # Tests
  ${data.tests}
  # License
  ${data.license}
  # Contributions
  ${data.contributors}


  # Repository
  ${data.repository}
  

  # Questions
  Contact me for questions or comments below:
    [At my GitHub](https://github.com/${data.username})
    [Via Email](mailto:${data.email})

`;
}

module.exports = generateMarkdown;