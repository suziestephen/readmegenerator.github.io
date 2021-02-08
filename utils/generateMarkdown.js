
function generateMarkdown(data) {
  return `# ${data.title}

  ${data.badge}



  # Description
  ${data.description}

  [See deployed application.](${data.deployedLink})


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
  # Features
  ${data.features}
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