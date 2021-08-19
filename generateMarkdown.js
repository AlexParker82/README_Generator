

function renderLicenseBadge(license) {
    switch (license) {
        case "MIT":
            return "https://img.shields.io/badge/License-MIT-yellow.svg";

        case "Mozilla":
            return "https://img.shields.io/badge/License-MPL%202.0-brightgreen.svg";

        case "Apache 2.0":
            return "https://img.shields.io/badge/License-Apache%202.0-blue.svg";

        case "BSD 3":
            return "https://img.shields.io/badge/License-BSD%203--Clause-blue.svg";

        case "GPL 3.0":
            return "https://img.shields.io/badge/License-GPL%20v3-blue.svg";

        default:
            return "";
    };
};



function generateMarkdown(data) {


    return `
    <h1 align="center">${data.title} 👋</h1>
      
    ![badge](${license}))<br />
    ## Description
    🔍 ${data.description}
    ## Table of Contents
    - [Description](#description)
    - [Installation](#installation)
    - [Usage](#usage)
    - [License](#license)
    - [Contributing](#contributing)
    - [Tests](#tests)
    - [Questions](#questions)
    ## Installation
    💾 ${data.installation}
    ## Usage
    💻 ${data.usage}
    ## License
    ![badge](https://img.shields.io/badge/license-${data.license}-brightgreen)
    <br />
    This application is covered by the ${answers.license} license. 
    ## Contributing
    👪 ${answers.contributing}
    ## Tests
    ✏️ ${answers.tests}
    ## Questions
    ✋ ${answers.questions}<br />
    <br />
    :octocat: Find me on GitHub: [${answers.username}](https://github.com/${answers.username})<br />
    <br />
    ✉️ Email me with any questions: ${answers.email}<br /><br />;`
}

module.exports = {
    renderLicenseBadge,
    generateMarkdown,
};

